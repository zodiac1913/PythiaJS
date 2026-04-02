//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class sqlite.js
 * @description Manages SQLite database connections for PythiaJS, 
 * including secure credential storage and query execution.
 */

import { Database } from "bun:sqlite";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { migrate } from "./migrate.js";
import { initConnectionManager, loadConnections } from "./connections.js";

let db;

const moduleDir = path.dirname(fileURLToPath(import.meta.url));
const runningFromCompiledBinary = moduleDir.startsWith("/$bunfs") || moduleDir.includes("~BUN");
const baseDbPath = runningFromCompiledBinary
  ? path.resolve(path.dirname(process.execPath), "src", "db", "base", "pythia.base.db")
  : path.resolve(moduleDir, "base", "pythia.base.db");

function getUserDataDir() {
  if (process.platform === "win32") {
    const localAppData = process.env.LOCALAPPDATA || process.env.APPDATA;
    if (localAppData) {
      return path.resolve(localAppData, "PythiaJS");
    }
    return path.resolve(os.homedir(), "AppData", "Local", "PythiaJS");
  }

  if (process.platform === "darwin") {
    return path.resolve(os.homedir(), "Library", "Application Support", "PythiaJS");
  }

  const xdgDataHome = process.env.XDG_DATA_HOME;
  if (xdgDataHome) {
    return path.resolve(xdgDataHome, "PythiaJS");
  }
  return path.resolve(os.homedir(), ".local", "share", "PythiaJS");
}

function resolveRuntimeDbPath(file) {
  if (path.isAbsolute(file)) {
    return file;
  }

  if (runningFromCompiledBinary) {
    return path.resolve(getUserDataDir(), file);
  }

  return path.resolve(process.cwd(), file);
}

function ensureSqliteDatabaseFile(file) {
  const runtimeDbPath = resolveRuntimeDbPath(file);

  if (!existsSync(runtimeDbPath)) {
    if (!existsSync(baseDbPath)) {
      throw new Error(`Missing base SQLite database at ${baseDbPath}`);
    }

    mkdirSync(path.dirname(runtimeDbPath), { recursive: true });
    copyFileSync(baseDbPath, runtimeDbPath);
  }

  return runtimeDbPath;
}

export async function connectSqlite(file) {
  const runtimeDbPath = ensureSqliteDatabaseFile(file);
  console.log(`Using SQLite database at: ${runtimeDbPath}`);
  db = new Database(runtimeDbPath);
  await migrate("sqlite", (sql) => db.run(sql));
  
  // Recreate logs table with localtime default (migration for existing dbs)
  try {
    db.run("DROP TABLE IF EXISTS logs");
  } catch {
    // ignore
  }
  // Re-run migrate to create logs with new schema
  await migrate("sqlite", (sql) => db.run(sql));
  
  initConnectionManager(db);
  await loadConnections();
  return db;
}

export function logQuery(text, dbAlias = "default") {
  db.run(
    "INSERT INTO queries (query, db_type, db_alias, created_at) VALUES (?, ?, ?, datetime('now','localtime')) ON CONFLICT(query, db_alias) DO UPDATE SET created_at = datetime('now','localtime')",
    [text, "sqlite", dbAlias]
  );
}

export function logEntry(level, source, message, detail, connection) {
  try {
    db.run(
      "INSERT INTO logs (level, source, connection, message, detail) VALUES (?, ?, ?, ?, ?)",
      [level, source, connection || null, message, detail || null]
    );
  } catch (err) {
    console.error('Failed to write log:', err.message);
  }
}

export function getLogs(limit = 100) {
  return db.query("SELECT * FROM logs ORDER BY created_at DESC LIMIT ?").all(limit);
}

export function clearLogs() {
  db.run("DELETE FROM logs");
}

export function deleteHistoryForConnection(dbAlias) {
  db.run("DELETE FROM queries WHERE db_alias = ?", [dbAlias]);
}

export function getHistory(dbAlias = null) {
  if (dbAlias) {
    return db.query("SELECT * FROM queries WHERE db_alias = ? ORDER BY created_at DESC").all(dbAlias);
  }

  return db.query("SELECT * FROM queries ORDER BY created_at DESC").all();
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^