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
import { appendFileSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { migrate } from "./migrate.js";
import { initConnectionManager, loadConnections } from "./connections.js";

let db;
let logMaintenanceTask = null;
const LOG_TIMELINE_PRESETS = {
  sleepy: {
    key: "sleepy",
    label: "Sleepy",
    retentionDays: 30,
    archiveMinAgeDays: 60,
    deleteEnabled: true,
    description: "Long in-app visibility with infrequent archives."
  },
  balanced: {
    key: "balanced",
    label: "Balanced",
    retentionDays: 14,
    archiveMinAgeDays: 30,
    deleteEnabled: true,
    description: "Default profile for regular mixed usage."
  },
  "high-octane": {
    key: "high-octane",
    label: "High Octane",
    retentionDays: 3,
    archiveMinAgeDays: 7,
    deleteEnabled: true,
    description: "Aggressive trimming for very high log throughput."
  }
};
let activeLogTimelinePreset = "balanced";
const logMaintenanceState = {
  running: false,
  lastStartedAt: null,
  lastFinishedAt: null,
  lastError: null,
  lastSummary: null
};

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

function sanitizeFilePart(value) {
  const cleaned = String(value || "default")
    .trim()
    .replaceAll(/[^a-zA-Z0-9._-]/g, "_")
    .replaceAll(/_+/g, "_")
    .replaceAll(/^_+|_+$/g, "");
  return cleaned || "default";
}

function formatDatePart(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

function parseSqliteDate(value) {
  if (!value) return null;
  const parsed = new Date(String(value).replace(" ", "T"));
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}

function getArchiveRootDir() {
  return path.resolve(os.homedir(), "Documents", "Pythia", "Logs");
}

function getLogDatabaseName(row) {
  const raw = row?.connection || "default";
  return sanitizeFilePart(raw);
}

function formatLogLine(row) {
  const createdAt = row?.created_at || "unknown-time";
  const level = row?.level || "info";
  const source = row?.source || "server";
  const connection = row?.connection || "default";
  const message = row?.message || "";
  const detail = row?.detail || "";
  return `[${createdAt}] [${level}] [${source}] [connection=${connection}] message=${message} detail=${detail}`;
}

function updateLogMaintenanceState(next) {
  Object.assign(logMaintenanceState, next);
}

function getActiveLogTimelinePolicy() {
  return LOG_TIMELINE_PRESETS[activeLogTimelinePreset] || LOG_TIMELINE_PRESETS.balanced;
}

function buildLogMaintenanceSummary(overrides = {}) {
  const policy = getActiveLogTimelinePolicy();
  return {
    exportedGroups: 0,
    exportedRows: 0,
    archiveRoot: getArchiveRootDir(),
    deleteEnabled: policy.deleteEnabled,
    retainedRowsAfterExport: 0,
    ...overrides
  };
}

function getCutoffLogRows() {
  const policy = getActiveLogTimelinePolicy();
  const oldestUnarchivedRow = db.query(
    "SELECT created_at FROM logs WHERE archived_at IS NULL ORDER BY datetime(created_at) ASC LIMIT 1"
  ).get();

  if (!oldestUnarchivedRow?.created_at) {
    return buildLogMaintenanceSummary({ skippedReason: "no-unarchived-logs" });
  }

  const oldestUnarchivedDate = parseSqliteDate(oldestUnarchivedRow.created_at);
  const archiveThresholdDate = new Date(Date.now() - policy.archiveMinAgeDays * 24 * 60 * 60 * 1000);
  if (!oldestUnarchivedDate || oldestUnarchivedDate > archiveThresholdDate) {
    return buildLogMaintenanceSummary({ skippedReason: "history-younger-than-archive-threshold" });
  }

  const rows = db.query(
    "SELECT id, level, source, connection, message, detail, created_at FROM logs WHERE archived_at IS NULL AND datetime(created_at) <= datetime('now','localtime', ?) ORDER BY connection ASC, datetime(created_at) ASC, id ASC"
  ).all(`-${policy.retentionDays} days`);

  return rows.length
    ? rows
    : buildLogMaintenanceSummary({ skippedReason: "nothing-older-than-14-days" });
}

function runLogMaintenance() {
  if (!db) {
    return buildLogMaintenanceSummary();
  }

  const policy = getActiveLogTimelinePolicy();

  const cutoffRows = getCutoffLogRows();
  if (!Array.isArray(cutoffRows)) {
    return cutoffRows;
  }

  const grouped = new Map();
  for (const row of cutoffRows) {
    const key = getLogDatabaseName(row);
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(row);
  }

  const archiveRoot = getArchiveRootDir();
  mkdirSync(archiveRoot, { recursive: true });

  let exportedGroups = 0;
  for (const [dbName, rows] of grouped.entries()) {
    if (!rows.length) continue;

    const startDate = parseSqliteDate(rows[0]?.created_at) || new Date();
    const endDate = parseSqliteDate(rows[rows.length - 1]?.created_at) || startDate;
    const fileName = `${dbName}.${formatDatePart(startDate)}.to.${formatDatePart(endDate)}.logs.txt`;
    const archiveFile = path.resolve(archiveRoot, fileName);

    const lines = [
      "# PythiaJS SQL Logs",
      `# Database: ${dbName}`,
      `# Range: ${formatDatePart(startDate)} to ${formatDatePart(endDate)}`,
      `# Exported At: ${new Date().toISOString()}`,
      ""
    ];

    for (const row of rows) {
      lines.push(formatLogLine(row));
    }
    lines.push("");

    appendFileSync(archiveFile, `${lines.join("\n")}\n`, "utf8");
    exportedGroups += 1;
  }

  if (cutoffRows.length) {
    const ids = cutoffRows.map((row) => row.id);
    const placeholders = ids.map(() => "?").join(",");
    if (policy.deleteEnabled) {
      db.run(`DELETE FROM logs WHERE id IN (${placeholders})`, ids);
    } else {
      db.run(
        `UPDATE logs SET archived_at = datetime('now','localtime') WHERE id IN (${placeholders})`,
        ids
      );
    }
  }

  return {
    exportedGroups,
    exportedRows: cutoffRows.length,
    archiveRoot,
    deleteEnabled: policy.deleteEnabled,
    retainedRowsAfterExport: policy.deleteEnabled ? 0 : cutoffRows.length
  };
}

function ensureLogArchiveColumn() {
  const columns = db.query("PRAGMA table_info(logs)").all();
  const hasArchivedAt = columns.some((column) => column.name === "archived_at");
  if (!hasArchivedAt) {
    db.run("ALTER TABLE logs ADD COLUMN archived_at DATETIME");
  }
}

export function startLogMaintenanceTask() {
  if (logMaintenanceTask) {
    return logMaintenanceTask;
  }

  updateLogMaintenanceState({
    running: true,
    lastStartedAt: new Date().toISOString(),
    lastFinishedAt: null,
    lastError: null,
    lastSummary: null
  });

  logMaintenanceTask = Promise.resolve()
    .then(() => runLogMaintenance())
    .then((summary) => {
      updateLogMaintenanceState({
        running: false,
        lastFinishedAt: new Date().toISOString(),
        lastSummary: summary
      });
      return summary;
    })
    .catch((err) => {
      updateLogMaintenanceState({
        running: false,
        lastFinishedAt: new Date().toISOString(),
        lastError: err?.message || String(err)
      });
      throw err;
    })
    .finally(() => {
      logMaintenanceTask = null;
    });

  return logMaintenanceTask;
}

export function getLogMaintenanceStatus() {
  const policy = getActiveLogTimelinePolicy();
  return {
    ...logMaintenanceState,
    retentionDays: policy.retentionDays,
    archiveMinAgeDays: policy.archiveMinAgeDays,
    deleteEnabled: policy.deleteEnabled,
    activeTimelinePreset: activeLogTimelinePreset,
    activeTimelinePresetLabel: policy.label,
    archiveRoot: getArchiveRootDir()
  };
}

export function getLogTimelinePresets() {
  return {
    active: activeLogTimelinePreset,
    presets: Object.values(LOG_TIMELINE_PRESETS)
  };
}

export function setLogTimelinePreset(presetKey) {
  if (!LOG_TIMELINE_PRESETS[presetKey]) {
    throw new Error(`Unknown log timeline preset: ${presetKey}`);
  }

  activeLogTimelinePreset = presetKey;
  return getLogMaintenanceStatus();
}

export async function connectSqlite(file) {
  const runtimeDbPath = ensureSqliteDatabaseFile(file);
  console.log(`Using SQLite database at: ${runtimeDbPath}`);
  db = new Database(runtimeDbPath);
  await migrate("sqlite", (sql) => db.run(sql));
  ensureLogArchiveColumn();

  // Run startup log archival in the background to keep app launch responsive.
  startLogMaintenanceTask().catch((err) => {
    console.error("Log maintenance failed:", err?.message || err);
  });
  
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
  return db.query("SELECT * FROM logs WHERE archived_at IS NULL ORDER BY created_at DESC LIMIT ?").all(limit);
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