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

export async function executeQuery(connId, query) {
  console.log('executeQuery called with connId:', connId);
  const conn = getConnection(connId);
  console.log('Found connection:', conn ? 'yes' : 'no', conn ? conn.type : 'N/A');

  await ensureSingleExternalConnection(connId);
  
  // Lazy connect
  if (!conn.client) {
    console.log('Creating new connection client for type:', conn.type);
    if (conn.type === 'sqlite') {
      conn.client = new Database(conn.config.file);
    } else if (conn.type === 'postgres') {
      conn.client = postgres({
        host: conn.config.host,
        port: conn.config.port || 5432,
        database: conn.config.database,
        username: conn.config.username,
        password: conn.config.password
      });
    } else if (conn.type === 'mssql') {
      console.log('Creating MSSQL connection pool with config:', {
        server: conn.config.host,
        port: conn.config.port || 1433,
        database: conn.config.database,
        user: conn.config.username,
        hasPassword: !!conn.config.password
      });
      try {
        const pool = new sql.ConnectionPool({
          server: conn.config.host,
          port: conn.config.port || 1433,
          database: conn.config.database,
          user: conn.config.username,
          password: conn.config.password,
          options: { 
            encrypt: conn.config.encrypt || false, 
            trustServerCertificate: conn.config.trustServerCertificate !== false
          }
        });
        console.log('Connecting to MSSQL pool...');
        await pool.connect();
        console.log('MSSQL connection successful');
        logEntry('info', 'connection', 'MSSQL connected', null, connId);
        conn.client = pool;
      } catch (error) {
        console.error('MSSQL connection failed:', error);
        logEntry('error', 'connection', 'MSSQL connection failed: ' + error.message, error.stack, connId);
        throw error;
      }
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
  return Promise.race([
    (async () => {
      try {
        console.log("Starting connection test...");
        if (type === 'sqlite') {
          const db = new Database(config.file);
          db.query("SELECT 1").all();
          db.close();
        } else if (type === 'postgres') {
          const pg = postgres({ ...config, port: config.port || 5432 });
          await pg`SELECT 1`;
          await pg.end();
        } else if (type === 'mssql') {
          console.log("Creating MSSQL pool...");
          const pool = new sql.ConnectionPool({
            server: config.host,
            port: config.port || 1433,
            database: config.database,
            user: config.username,
            password: config.password,
            options: { 
              encrypt: config.encrypt || false, 
              trustServerCertificate: config.trustServerCertificate !== false
            }
          });
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
