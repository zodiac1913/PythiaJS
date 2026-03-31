import { Database } from "bun:sqlite";
import postgres from "postgres";
import sql from "mssql";
import { logEntry } from "./sqlite.js";

const connections = new Map();
let metaDb;
let activeExternalConnId = null;

export function initConnectionManager(db) {
  metaDb = db;
  connections.set('default', { type: 'sqlite', client: db });
}

export async function addConnection(id, name, type, config) {
  // Don't create connection yet, just store config
  connections.set(id, { type, client: null, config });
  metaDb.run("INSERT OR REPLACE INTO connections (id, name, type, config) VALUES (?, ?, ?, ?)",
    [id, name, type, JSON.stringify(config)]);
}

export async function loadConnections() {
  const rows = metaDb.query("SELECT * FROM connections").all();
  for (const row of rows) {
    const config = JSON.parse(row.config);
    connections.set(row.id, { type: row.type, client: null, config });
  }
}

export function getConnections() {
  return metaDb.query("SELECT id, name, type, config FROM connections").all();
}

async function closeClient(conn) {
  if (!conn?.client) return;

  try {
    if (conn.type === 'sqlite') {
      conn.client.close();
    } else if (conn.type === 'postgres') {
      await conn.client.end();
    } else if (conn.type === 'mssql') {
      await conn.client.close();
    }
  } catch (err) {
    console.warn('Failed to close existing connection client:', err.message);
  }
}

async function ensureSingleExternalConnection(connId) {
  if (connId === 'default') {
    return;
  }

  if (activeExternalConnId && activeExternalConnId !== connId) {
    const activeConn = connections.get(activeExternalConnId);
    await closeClient(activeConn);
    if (activeConn) {
      activeConn.client = null;
    }
  }

  for (const [id, conn] of connections.entries()) {
    if (id === 'default' || id === connId) continue;
    if (conn.client) {
      await closeClient(conn);
      conn.client = null;
    }
  }

  activeExternalConnId = connId;
}

export async function updateConnection(id, name, type, config) {
  const existing = connections.get(id);
  await closeClient(existing);
  if (id === activeExternalConnId) {
    activeExternalConnId = null;
  }

  connections.set(id, { type, client: null, config });
  metaDb.run(
    "UPDATE connections SET name = ?, type = ?, config = ? WHERE id = ?",
    [name, type, JSON.stringify(config), id]
  );
}

export async function deleteConnection(id) {
  const existing = connections.get(id);
  await closeClient(existing);
  if (id === activeExternalConnId) {
    activeExternalConnId = null;
  }
  connections.delete(id);
  metaDb.run("DELETE FROM connections WHERE id = ?", [id]);
}

export function getConnection(id) {
  return connections.get(id) || connections.get('default');
}

function normalizeExternalConfig(type, config = {}) {
  if (type === 'sqlite') {
    return {
      ...config,
      file: typeof config.file === 'string' ? config.file.trim() : config.file
    };
  }

  const normalized = {
    ...config,
    host: typeof config.host === 'string' ? config.host.trim() : config.host,
    database: typeof config.database === 'string' ? config.database.trim() : config.database,
    username: typeof config.username === 'string' ? config.username.trim() : config.username,
    port: Number.isFinite(config.port) ? config.port : Number.parseInt(config.port, 10)
  };

  if (!Number.isFinite(normalized.port)) {
    normalized.port = type === 'postgres' ? 5432 : 1433;
  }

  return normalized;
}

function buildMssqlPoolConfig(config) {
  const base = {
    server: config.host,
    port: config.port,
    database: config.database,
    options: {
      encrypt: config.encrypt || false,
      trustServerCertificate: config.trustServerCertificate !== false,
      enableArithAbort: true
    }
  };

  const username = typeof config.username === 'string' ? config.username.trim() : '';
  const hasDomainStyleUser = username.includes('\\');

  if (hasDomainStyleUser) {
    const [domain, ...userParts] = username.split('\\');
    const userName = userParts.join('\\').trim();
    if (domain && userName) {
      return {
        ...base,
        authentication: {
          type: 'ntlm',
          options: {
            domain,
            userName,
            password: config.password || ''
          }
        }
      };
    }
  }

  return {
    ...base,
    user: username,
    password: config.password || ''
  };
}

async function createClientForConnection(conn, normalizedConfig, connId) {
  if (conn.type === 'sqlite') {
    return new Database(normalizedConfig.file);
  }

  if (conn.type === 'postgres') {
    return postgres({
      host: normalizedConfig.host,
      port: normalizedConfig.port,
      database: normalizedConfig.database,
      username: normalizedConfig.username,
      password: normalizedConfig.password
    });
  }

  if (conn.type === 'mssql') {
    console.log('Creating MSSQL connection pool with config:', {
      server: normalizedConfig.host,
      port: normalizedConfig.port,
      database: normalizedConfig.database,
      user: normalizedConfig.username,
      hasPassword: !!normalizedConfig.password,
      authMode: normalizedConfig.username?.includes('\\') ? 'ntlm' : 'sql'
    });
    const pool = new sql.ConnectionPool(buildMssqlPoolConfig(normalizedConfig));
    console.log('Connecting to MSSQL pool...');
    await pool.connect();
    console.log('MSSQL connection successful');
    logEntry('info', 'connection', 'MSSQL connected', null, connId);
    return pool;
  }

  return null;
}

export async function executeQuery(connId, query) {
  console.log('executeQuery called with connId:', connId);
  const conn = getConnection(connId);
  const normalizedConfig = normalizeExternalConfig(conn.type, conn.config);
  console.log('Found connection:', conn ? 'yes' : 'no', conn ? conn.type : 'N/A');

  await ensureSingleExternalConnection(connId);
  
  // Lazy connect
  if (!conn.client) {
    console.log('Creating new connection client for type:', conn.type);
    try {
      conn.client = await createClientForConnection(conn, normalizedConfig, connId);
    } catch (error) {
      console.error('Connection failed:', error);
      logEntry('error', 'connection', `${conn.type.toUpperCase()} connection failed: ${error.message}`, error.stack, connId);
      throw error;
    }
  }
  
  if (conn.type === 'sqlite') {
    const stmt = conn.client.query(query);
    return stmt.all();
  } else if (conn.type === 'postgres') {
    const result = await conn.client.unsafe(query);
    return result;
  } else if (conn.type === 'mssql') {
    const result = await conn.client.request().query(query);
    return result.recordset;
  }
}

export async function testConnection(type, config) {
  console.log("testConnection function called", type);
  const normalizedConfig = normalizeExternalConfig(type, config);
  return Promise.race([
    (async () => {
      try {
        console.log("Starting connection test...");
        if (type === 'sqlite') {
          const db = new Database(normalizedConfig.file);
          db.query("SELECT 1").all();
          db.close();
        } else if (type === 'postgres') {
          const pg = postgres({ ...normalizedConfig, port: normalizedConfig.port });
          await pg`SELECT 1`;
          await pg.end();
        } else if (type === 'mssql') {
          console.log("Creating MSSQL pool...");
          const pool = new sql.ConnectionPool(buildMssqlPoolConfig(normalizedConfig));
          console.log("Connecting to MSSQL...");
          await pool.connect();
          console.log("Connected! Running query...");
          await pool.request().query("SELECT 1");
          console.log("Query done, closing...");
          await pool.close();
          console.log("Closed!");
        }
        console.log("Test successful");
        return { success: true };
      } catch (err) {
        console.error("Test error:", err.message);
        return { success: false, error: err.message };
      }
    })(),
    new Promise((resolve) => {
      console.log("Setting 5s timeout...");
      setTimeout(() => {
        console.log("Timeout reached!");
        resolve({ success: false, error: 'Connection timeout' });
      }, 5000);
    })
  ]);
}
