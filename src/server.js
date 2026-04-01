//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//     *          |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|       †          _____          ↑
//   _____        |  o o o o o o  |      /|\        (     )         ↑
//  /  ^  \       | o o o o o o o |     / | \      (       )       / \
// /_/___\_\      |_______________|    /  |  \      (]¯¯¯[)       /   \
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* eslint-disable no-undef */
/* eslint-disable no-console */
/*!
 * server --- web server for handling API requests from the frontend and interacting with the database
 * MIT Licensed Copyright (c) 2026 Dominic Roche
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche 3/12/2026
 * @class server
 */
// תהילתו. לא שלי

import { connectDB } from "./db/index.js";
import { logQuery, getHistory, deleteHistoryForConnection, logEntry, getLogs, clearLogs } from "./db/sqlite.js";
import { addConnection, getConnections, executeQuery, testConnection, updateConnection, deleteConnection } from "./db/connections.js";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";
import PDFDocument from "pdfkit";

// When running as a compiled binary, resolve asset paths relative to the executable
const __moduleDir = path.dirname(fileURLToPath(import.meta.url));
const isCompiledBinary = __moduleDir.startsWith("/$bunfs");
const assetBase = isCompiledBinary ? path.dirname(process.execPath) : process.cwd();
function assetPath(relativePath) {
  return path.resolve(assetBase, relativePath);
}

const RELEASE_VERSION_PATTERN = /^\d{4}\.\d{2}\.\d{2}(?:\.\d+)?$/;

function sanitizeVersion(value) {
  const candidate = String(value || '').trim();
  return RELEASE_VERSION_PATTERN.test(candidate) ? candidate : null;
}

function resolveAppVersion() {
  const versionFilePath = assetPath('version.txt');
  const fromEnv = sanitizeVersion(process.env.PYTHIA_VERSION || process.env.GITHUB_REF_NAME);
  if (fromEnv) {
    return fromEnv;
  }

  if (existsSync(versionFilePath)) {
    const fromFile = sanitizeVersion(readFileSync(versionFilePath, 'utf-8'));
    if (fromFile) {
      return fromFile;
    }
  }

  return 'dev';
}

const APP_VERSION = resolveAppVersion();

const DEFAULT_PORT = 3737;
const MAX_PORT_ATTEMPTS = 25;

function resolvePreferredPort() {
  const fromEnv = Number.parseInt(process.env.PYTHIA_PORT || process.env.PORT || '', 10);
  if (Number.isFinite(fromEnv) && fromEnv > 0) {
    return fromEnv;
  }
  return DEFAULT_PORT;
}

function isAddressInUseError(err) {
  const message = String(err?.message || err || '');
  return err?.code === 'EADDRINUSE' || message.includes('EADDRINUSE') || message.toLowerCase().includes('port') && message.toLowerCase().includes('in use');
}

async function getConnectionSchema(id) {
  try {
    if (id === 'default') {
      const tables = await executeQuery('default', "SELECT name FROM sqlite_master WHERE type='table'");
      const schema = {};
      for (const table of tables) {
        const columns = await executeQuery('default', `PRAGMA table_info(${table.name})`);
        schema[table.name] = columns.map(col => col.name);
      }
      return schema;
    }
    
    // Check if connection exists in database
    const conns = getConnections();
    let conn = conns.find(c => c.id === id);
    
    // If not in database, check if it exists in the dynamic connections map
    if (!conn) {
      const dynamicConn = connections.get(id);
      if (dynamicConn) {
        conn = { id, type: dynamicConn.type, config: JSON.stringify(dynamicConn.config) };
      } else {
        return {};
      }
    }
    
    if (conn.type === 'sqlite') {
      const tables = await executeQuery(id, "SELECT name FROM sqlite_master WHERE type='table'");
      const schema = {};
      for (const table of tables) {
        const columns = await executeQuery(id, `PRAGMA table_info(${table.name})`);
        schema[table.name] = columns.map(col => col.name);
      }
      return schema;
    } else if (conn.type === 'postgres') {
      const tables = await executeQuery(id, "SELECT table_name FROM information_schema.tables WHERE table_schema='public'");
      const schema = {};
      for (const table of tables) {
        const columns = await executeQuery(id, `SELECT column_name FROM information_schema.columns WHERE table_name='${table.table_name}' AND table_schema='public'`);
        schema[table.table_name] = columns.map(col => col.column_name);
      }
      return schema;
    } else if (conn.type === 'mssql') {
      const schema = {};
      const columns = await executeQuery(
        id,
        "SELECT c.TABLE_SCHEMA, c.TABLE_NAME, c.COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS c INNER JOIN INFORMATION_SCHEMA.TABLES t ON c.TABLE_SCHEMA = t.TABLE_SCHEMA AND c.TABLE_NAME = t.TABLE_NAME WHERE t.TABLE_TYPE = 'BASE TABLE' ORDER BY c.TABLE_SCHEMA, c.TABLE_NAME, c.ORDINAL_POSITION"
      );

      for (const col of columns) {
        const qualifiedTableName = col.TABLE_SCHEMA
          ? `${col.TABLE_SCHEMA}.${col.TABLE_NAME}`
          : col.TABLE_NAME;

        if (!schema[qualifiedTableName]) {
          schema[qualifiedTableName] = [];
        }
        schema[qualifiedTableName].push(col.COLUMN_NAME);
      }
      return schema;
    }
    return {};
  } catch (err) {
    return {};
  }
}

await connectDB();

const bootstrapIcons = readFileSync(assetPath("src/ui/bootstrap-icons.css"), "utf-8");
const bootstrapIconsFont = readFileSync(assetPath("src/ui/fonts/bootstrap-icons.woff2"));
const qBs = readFileSync(assetPath("src/ui/q-bs.css"), "utf-8");
const bgImage = readFileSync(assetPath("src/ui/pic/PythiaJS-bg.png"));

function createServer(port) {
  return Bun.serve({
    port,
    async fetch(req) {
    const url = new URL(req.url);
    
    // CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    
    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    
    // Serve the HTML
    if (url.pathname === "/") {
      const html = readFileSync(assetPath("src/ui/index.html"), "utf-8");
      const injectedHtml = html.replace(
        '</head>',
        `  <script>globalThis.PYTHIA_VERSION = ${JSON.stringify(APP_VERSION)};</script>\n</head>`
      );
      return new Response(injectedHtml, {
        headers: { 
          "Content-Type": "text/html",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/api/version" && req.method === "GET") {
      return Response.json({ version: APP_VERSION }, { headers: corsHeaders });
    }
    
    if (url.pathname === "/bootstrap-icons.css") {
      return new Response(bootstrapIcons, {
        headers: { 
          "Content-Type": "text/css",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/fonts/bootstrap-icons.woff2") {
      return new Response(bootstrapIconsFont, {
        headers: { 
          "Content-Type": "font/woff2",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/q-bs.css") {
      return new Response(qBs, {
        headers: { 
          "Content-Type": "text/css",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/pic/PythiaJS-bg.png") {
      return new Response(bgImage, {
        headers: { 
          "Content-Type": "image/png",
          ...corsHeaders
        }
      });
    }
    
    // Serve JavaScript modules
    if (url.pathname === "/script/state.js") {
      const stateJs = readFileSync(assetPath("src/script/state.js"), "utf-8");
      return new Response(stateJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/script/api.js") {
      const apiJs = readFileSync(assetPath("src/script/api.js"), "utf-8");
      return new Response(apiJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/script/autocomplete.js") {
      const autocompleteJs = readFileSync(assetPath("src/script/autocomplete.js"), "utf-8");
      return new Response(autocompleteJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/script/db-identifiers.js") {
      const dbIdentifiersJs = readFileSync(assetPath("src/script/db-identifiers.js"), "utf-8");
      return new Response(dbIdentifiersJs, {
        headers: {
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/script/display.js") {
      const displayJs = readFileSync(assetPath("src/script/display.js"), "utf-8");
      return new Response(displayJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/script/modals.js") {
      const modalsJs = readFileSync(assetPath("src/script/modals.js"), "utf-8");
      return new Response(modalsJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    if (url.pathname === "/script/event-handlers.js") {
      const eventHandlersJs = readFileSync(assetPath("src/script/event-handlers.js"), "utf-8");
      return new Response(eventHandlersJs, {
        headers: { 
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    try {
      if (url.pathname === "/api/runQuery" && req.method === "POST") {
        const { text, connection, connectionConfig } = await req.json();
        console.log('runQuery called with:', { text, connection, connectionConfig: connectionConfig ? 'present' : 'missing' });
        logQuery(text, connection);
        logEntry('info', 'query', 'Query executed', text, connection);
        
        try {
          const queryStartedAt = Date.now();
          const rows = await executeQuery(connection, text);
          const queryFinishedAt = Date.now();
          return Response.json({
            rows,
            meta: {
              totalRows: Array.isArray(rows) ? rows.length : 0,
              queryMs: queryFinishedAt - queryStartedAt,
              finishedAt: new Date(queryFinishedAt).toISOString()
            }
          }, { headers: corsHeaders });
        } catch (queryErr) {
          console.error('Query execution error:', queryErr.message);
          logEntry('error', 'query', queryErr.message, 'Query: ' + text, connection);
          return Response.json({ error: queryErr.message }, { status: 200, headers: corsHeaders });
        }
      }
      
      if (url.pathname === "/api/getHistory" && req.method === "GET") {
        const connection = url.searchParams.get('connection');
        const rows = getHistory(connection);
        return Response.json(rows, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/addConnection" && req.method === "POST") {
        const { name, type, config } = await req.json();
        const id = `${type}_${Date.now()}`;
        logEntry('info', 'connection', 'Connection added: ' + name, 'Type: ' + type, id);
        await addConnection(id, name, type, config);
        return Response.json({ success: true }, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/testConnection" && req.method === "POST") {
        const { type, config } = await req.json();
        const result = await testConnection(type, config);
        if (result.success) {
          logEntry('info', 'connection', 'Connection test passed', 'Type: ' + type);
        } else {
          logEntry('error', 'connection', 'Connection test failed: ' + (result.error || 'unknown'), 'Type: ' + type);
        }
        return Response.json(result, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/getConnections" && req.method === "GET") {
        const conns = getConnections();
        return Response.json(conns, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/getConnectionDetails" && req.method === "GET") {
        const id = url.searchParams.get('id');
        const conns = getConnections();
        const conn = conns.find(c => c.id === id);
        if (conn) {
          return Response.json(JSON.parse(conn.config), { headers: corsHeaders });
        }
        return Response.json({ error: "Connection not found" }, { status: 404, headers: corsHeaders });
      }

      if (url.pathname === "/api/updateConnection" && req.method === "POST") {
        const { id, name, type, config } = await req.json();
        if (!id || !name || !type || !config) {
          return Response.json({ error: "Missing required fields" }, { status: 400, headers: corsHeaders });
        }

        await updateConnection(id, name, type, config);
        logEntry('info', 'connection', 'Connection updated: ' + name, 'Type: ' + type, id);
        return Response.json({ success: true }, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/deleteConnection" && req.method === "POST") {
        const { id } = await req.json();
        await deleteConnection(id);
        deleteHistoryForConnection(id);
        return Response.json({ success: true }, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/getSchema" && req.method === "GET") {
        const id = url.searchParams.get('id');
        const schema = await getConnectionSchema(id);
        return Response.json(schema, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/exportXlsx" && req.method === "POST") {
        const { rows } = await req.json();
        const ws = XLSX.utils.json_to_sheet(rows);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Results");
        const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
        return new Response(buf, { headers: { 
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ...corsHeaders
        } });
      }
      
      if (url.pathname === "/api/exportPdf" && req.method === "POST") {
        const { rows } = await req.json();
        const doc = new PDFDocument({ margin: 30 });
        const chunks = [];
        doc.on('data', chunk => chunks.push(chunk));
        doc.on('end', () => {});
        
        doc.fontSize(16).text('Query Results', { align: 'center' });
        doc.moveDown();
        
        if (rows.length > 0) {
          const cols = Object.keys(rows[0]);
          doc.fontSize(10);
          
          rows.forEach((row, i) => {
            if (i > 0) {
              doc.moveTo(30, doc.y).lineTo(doc.page.width - 30, doc.y).stroke();
              doc.moveDown();
            }
            
            cols.forEach(col => {
              if (doc.y > doc.page.height - 50) {
                doc.addPage();
              }
              doc.text(`${col}: ${row[col] ?? ''}`);
            });
            doc.moveDown();
          });
        }
        
        doc.end();
        
        await new Promise(resolve => doc.on('end', resolve));
        const buf = Buffer.concat(chunks);
        return new Response(buf, { headers: { 
          "Content-Type": "application/pdf",
          ...corsHeaders
        } });
      }
      
      if (url.pathname === "/api/shutdown" && req.method === "POST") {
        console.log('Shutdown requested');
        logEntry('info', 'server', 'Shutdown requested');
        setTimeout(() => process.exit(0), 100);
        return Response.json({ success: true }, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/getLogs" && req.method === "GET") {
        const limit = Number.parseInt(url.searchParams.get('limit') || '100', 10);
        const rows = getLogs(limit);
        return Response.json(rows, { headers: corsHeaders });
      }
      
      if (url.pathname === "/api/clearLogs" && req.method === "POST") {
        clearLogs();
        return Response.json({ success: true }, { headers: corsHeaders });
      }
      
      return Response.json({ error: "Not found" }, { status: 404, headers: corsHeaders });
    } catch (err) {
      console.error('Server error:', err);
      console.error('Error stack:', err.stack);
      logEntry('error', 'server', err.message, err.stack);
      return Response.json({ error: err.message }, { status: 500, headers: corsHeaders });
    }
    }
  });
}

function startServerWithFallback(preferredPort) {
  let lastPortError = null;

  for (let offset = 0; offset < MAX_PORT_ATTEMPTS; offset++) {
    const portToTry = preferredPort + offset;
    try {
      return createServer(portToTry);
    } catch (err) {
      if (isAddressInUseError(err)) {
        lastPortError = err;
        continue;
      }
      throw err;
    }
  }

  throw new Error(`Failed to start server after trying ${MAX_PORT_ATTEMPTS} ports from ${preferredPort}: ${lastPortError?.message || 'unknown error'}`);
}

const preferredPort = resolvePreferredPort();
const server = startServerWithFallback(preferredPort);
export { server };

console.log(`API server running on http://localhost:${server.port}`);
console.log(`API server running on http://127.0.0.1:${server.port}`);
logEntry('info', 'server', 'Server started on port ' + server.port);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^