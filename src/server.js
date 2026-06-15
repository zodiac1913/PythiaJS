//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//     *          |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|       †          _____          ↑
//   _____        |  o o o o o o  |      /|\        (     )         ↑
//  /  ^  \       | o o o o o o o |     / | \      (       )       / \
// /_/___\_\      |_______________|    /  |  \      (]¯¯¯[)       /   \
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class server.js
 * @description Hosts HTTP API endpoints, static UI assets, and query/connection 
 * operations for PythiaJS.
 */


import { connectDB } from "./db/index.js";
import { logQuery, getHistory, deleteHistoryForConnection, logEntry, getLogs, getLogMaintenanceStatus, startLogMaintenanceTask, getLogTimelinePresets, setLogTimelinePreset } from "./db/sqlite.js";
import { addConnection, getConnection, getConnections, executeQuery, testConnection, updateConnection, deleteConnection } from "./db/connections.js";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434';
const OLLAMA_STATUS_TIMEOUT_MS = 2500;
const OLLAMA_CHAT_TIMEOUT_MS = 45000;
//Forbidden Table Scemas for the AI
const FORBIDDEN_AI_SCHEMAS = new Set(['BUS']);
const PREFERRED_AI_SCHEMAS = ['HR', 'CORE'];

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

function normalizeRunQueryText(text) {
  if (typeof text !== 'string') {
    return text;
  }

  return text
    .replaceAll(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replaceAll(/[\u201C\u201D\u201E\u201F]/g, '"');
}

function buildOllamaUrl(relativePath) {
  return new URL(relativePath, OLLAMA_BASE_URL).toString();
}

async function fetchOllamaJson(relativePath, { method = 'GET', body = null, timeoutMs = OLLAMA_STATUS_TIMEOUT_MS } = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(buildOllamaUrl(relativePath), {
      method,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

async function getOllamaStatus() {
  try {
    const payload = await fetchOllamaJson('/api/tags');
    const models = Array.isArray(payload?.models)
      ? payload.models.map((model) => ({
          name: model?.name || '',
          size: Number.isFinite(model?.size) ? model.size : null,
          modifiedAt: model?.modified_at || null
        })).filter((model) => model.name)
      : [];

    return {
      online: true,
      models,
      defaultModel: models[0]?.name || null,
      baseUrl: OLLAMA_BASE_URL
    };
  } catch (error) {
    return {
      online: false,
      models: [],
      defaultModel: null,
      baseUrl: OLLAMA_BASE_URL,
      detail: error?.message || String(error)
    };
  }
}

function normalizeAiConversation(conversation) {
  if (!Array.isArray(conversation)) {
    return [];
  }

  return conversation
    .map((entry) => ({
      role: entry?.role === 'assistant' ? 'assistant' : 'user',
      content: String(entry?.content || '').trim()
    }))
    .filter((entry) => entry.content);
}

function getLatestUserMessage(conversation) {
  const normalized = normalizeAiConversation(conversation);
  for (let index = normalized.length - 1; index >= 0; index--) {
    if (normalized[index].role === 'user') {
      return normalized[index].content;
    }
  }
  return '';
}

function getConversationText(conversation) {
  return normalizeAiConversation(conversation)
    .map((entry) => entry.content)
    .join(' ')
    .trim();
}

function normalizeSearchToken(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function extractSearchTokens(text) {
  const matches = String(text || '').toLowerCase().match(/[a-z0-9_]{3,}/g) || [];
  const stopWords = new Set([
    'what', 'which', 'tell', 'show', 'give', 'from', 'with', 'that', 'this', 'there', 'have',
    'into', 'about', 'would', 'could', 'should', 'where', 'when', 'then', 'they', 'them',
    'database', 'table', 'tables', 'field', 'fields', 'query'
  ]);

  return Array.from(new Set(matches.filter((token) => !stopWords.has(token))));
}

function isForbiddenAiTable(tableName) {
  const [schemaName] = String(tableName || '').split('.');
  return FORBIDDEN_AI_SCHEMAS.has(schemaName.toUpperCase());
}

function getAiSchemaPriority(tableName) {
  const [schemaName] = String(tableName || '').split('.');
  const normalizedSchema = schemaName.toUpperCase();
  const index = PREFERRED_AI_SCHEMAS.indexOf(normalizedSchema);
  if (index === -1) {
    return 0;
  }

  return (PREFERRED_AI_SCHEMAS.length - index) * 40;
}

function extractMentionedTables(schema, conversation) {
  const conversationText = getConversationText(conversation).toLowerCase();
  if (!conversationText) {
    return new Set();
  }

  return new Set(
    Object.keys(schema || {}).filter((tableName) => {
      return !isForbiddenAiTable(tableName) && conversationText.includes(tableName.toLowerCase());
    })
  );
}

function scoreSchemaEntry(tableName, columns, tokens) {
  const haystack = `${tableName} ${Array.isArray(columns) ? columns.join(' ') : ''}`.toLowerCase();
  const normalizedColumns = Array.isArray(columns) ? columns.map((column) => String(column).toLowerCase()) : [];
  const hasEmployeeSignal = normalizedColumns.some((column) => column.includes('employee')) || tableName.toLowerCase().includes('employee');
  const hasComponentSignal = normalizedColumns.some((column) => column.includes('component')) || tableName.toLowerCase().includes('component');
  let score = 0;

  for (const token of tokens) {
    if (tableName.toLowerCase().includes(token)) {
      score += 8;
    }

    for (const column of columns) {
      if (String(column).toLowerCase().includes(token)) {
        score += 3;
      }
    }
  }

  if (haystack.includes('employee')) score += 4;
  if (haystack.includes('component')) score += 4;
  if (haystack.includes('department')) score += 2;
  if (haystack.includes('name')) score += 1;
  if (tokens.includes('employee') || tokens.includes('employees')) {
    if (hasEmployeeSignal) score += 18;
    if (normalizedColumns.some((column) => column.includes('name') || column.includes('email') || column.includes('title'))) score += 6;
  }
  if (tokens.includes('component')) {
    if (hasComponentSignal) score += 18;
    if (normalizedColumns.some((column) => column.includes('acronym') || column.includes('fullcomponent'))) score += 6;
  }
  if ((tokens.includes('employee') || tokens.includes('employees')) && tokens.includes('component') && hasEmployeeSignal && hasComponentSignal) {
    score += 24;
  }

  return score;
}

function selectRelevantColumns(tableName, columns, tokens, requestedColumns, isExplicitTable) {
  const normalizedRequested = new Set(requestedColumns.map((column) => normalizeSearchToken(column)));
  const selected = [];

  for (const column of columns) {
    const normalizedColumn = normalizeSearchToken(column);
    const matchesRequested = normalizedRequested.has(normalizedColumn);
    const matchesSearch = tokens.some((token) => normalizedColumn.includes(normalizeSearchToken(token)));
    const isUsefulIdentity = /identifier|name|moniker|title|email|component|office|group|division/i.test(column);

    if (matchesRequested || matchesSearch || (isExplicitTable && isUsefulIdentity)) {
      selected.push(column);
    }
  }

  const deduped = Array.from(new Set(selected));
  if (deduped.length > 0) {
    return deduped.slice(0, 18);
  }

  return columns.slice(0, Math.min(columns.length, 12));
}

function buildRelevantSchemaSubset(schema, conversation) {
  const entries = Object.entries(schema || {}).filter(([tableName]) => !isForbiddenAiTable(tableName));
  const latestUserMessage = getLatestUserMessage(conversation);
  const conversationText = getConversationText(conversation);
  const tokens = extractSearchTokens(`${conversationText} ${latestUserMessage}`);
  const mentionedTables = extractMentionedTables(schema, conversation);

  const ranked = entries
    .map(([tableName, columns]) => ({
      tableName,
      columns,
      score: scoreSchemaEntry(tableName, columns, tokens)
        + getAiSchemaPriority(tableName)
        + (mentionedTables.has(tableName) ? 1000 : 0)
    }))
    .sort((left, right) => right.score - left.score || left.tableName.localeCompare(right.tableName));

  const requestedColumns = inferRequestedColumns({ relevantTables: ranked }, conversation);
  const selected = ranked.filter((entry) => entry.score > 0).slice(0, mentionedTables.size > 0 ? 4 : 8);
  const fallback = selected.length ? selected : ranked.slice(0, mentionedTables.size > 0 ? 4 : 8);

  return {
    latestUserMessage,
    tokens,
    totalTables: entries.length,
    requestedColumns,
    mentionedTables: Array.from(mentionedTables),
    relevantTables: fallback.map((entry) => ({
      tableName: entry.tableName,
      columns: selectRelevantColumns(entry.tableName, entry.columns, tokens, requestedColumns, mentionedTables.has(entry.tableName)),
      totalColumns: entry.columns.length,
      score: entry.score
    }))
  };
}

function inferRequestedColumns(relevantSchema, conversation) {
  const latestUserMessage = getLatestUserMessage(conversation);
  const messageTokens = new Set(
    extractSearchTokens(latestUserMessage)
      .flatMap((token) => {
        const normalized = normalizeSearchToken(token);
        if (!normalized) return [];
        const singular = normalized.endsWith('s') ? normalized.slice(0, -1) : normalized;
        return Array.from(new Set([normalized, singular].filter(Boolean)));
      })
  );

  const requested = new Map();
  for (const entry of relevantSchema.relevantTables) {
    for (const column of entry.columns) {
      const normalizedColumn = normalizeSearchToken(column);
      if (!normalizedColumn) {
        continue;
      }

      if (messageTokens.has(normalizedColumn)) {
        requested.set(normalizedColumn, column);
      }
    }
  }

  return Array.from(requested.values());
}

function getSqlDialectRules(connectionType) {
  if (connectionType === 'mssql') {
    return [
      'Dialect rules: this is Microsoft SQL Server.',
      'Use SELECT TOP (n) for row limits. Never use LIMIT.',
      'Use schema-qualified table names when available.',
      'Do not use PostgreSQL or SQLite-only syntax.'
    ];
  }

  if (connectionType === 'postgres') {
    return [
      'Dialect rules: this is PostgreSQL.',
      'LIMIT is allowed.',
      'Use double quotes only when needed for identifiers.'
    ];
  }

  return [
    'Dialect rules: use syntax valid for the current database type only.'
  ];
}

function normalizeSchemaIdentifier(value) {
  return String(value || '')
    .replaceAll(/[\[\]"`]/g, '')
    .trim()
    .toLowerCase();
}

function extractReferencedTables(sql) {
  const matches = String(sql || '').matchAll(/\b(?:FROM|JOIN|UPDATE|INTO)\s+([\[\]"`A-Za-z0-9_.]+)/gi);
  return Array.from(matches, (match) => match[1]).filter(Boolean);
}

function validateGeneratedSql(sql, schema, { connectionType = 'sqlite', requestedColumns = [] } = {}) {
  const referencedTables = extractReferencedTables(sql);
  const issues = [];
  if (!referencedTables.length) {
    return { valid: true, unknownTables: [], referencedTables, issues };
  }

  const forbiddenTables = referencedTables.filter((tableName) => isForbiddenAiTable(normalizeSchemaIdentifier(tableName)));
  const available = new Set(
    Object.keys(schema || {})
      .filter((tableName) => !isForbiddenAiTable(tableName))
      .map((tableName) => normalizeSchemaIdentifier(tableName))
  );
  const unknownTables = referencedTables.filter((tableName) => !available.has(normalizeSchemaIdentifier(tableName)));

  if (connectionType === 'mssql' && /\bLIMIT\b/i.test(sql)) {
    issues.push('SQL Server does not support LIMIT; use TOP instead.');
  }

  if (requestedColumns.length > 0 && /\bSELECT\s+DISTINCT\s+\*/i.test(sql) || requestedColumns.length > 0 && /\bSELECT\s+\*/i.test(sql)) {
    issues.push(`The user asked for specific columns (${requestedColumns.join(', ')}), so SELECT * is too broad.`);
  }

  if (requestedColumns.length > 0) {
    const normalizedSql = normalizeSearchToken(sql);
    const missingRequestedColumns = requestedColumns.filter((column) => !normalizedSql.includes(normalizeSearchToken(column)));
    if (missingRequestedColumns.length === requestedColumns.length) {
      issues.push(`The SQL does not include the requested column(s): ${requestedColumns.join(', ')}.`);
    }
  }

  return {
    valid: unknownTables.length === 0 && forbiddenTables.length === 0 && issues.length === 0,
    unknownTables: [...unknownTables, ...forbiddenTables],
    referencedTables,
    issues
  };
}

function extractJsonObject(text) {
  const trimmed = String(text || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  const withoutFence = trimmed.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const start = withoutFence.indexOf('{');
  const end = withoutFence.lastIndexOf('}');

  if (start >= 0 && end > start) {
    return withoutFence.slice(start, end + 1);
  }

  return withoutFence;
}

function parseAiDecision(rawContent) {
  const candidate = extractJsonObject(rawContent);

  try {
    const parsed = JSON.parse(candidate);
    const status = parsed?.status === 'clarify' ? 'clarify' : 'ready';
    return {
      status,
      question: String(parsed?.question || '').trim(),
      sql: status === 'clarify' ? '' : String(parsed?.sql || '').trim(),
      assumptions: Array.isArray(parsed?.assumptions) ? parsed.assumptions.map((item) => String(item).trim()).filter(Boolean) : [],
      explanation: String(parsed?.explanation || '').trim()
    };
  } catch {
    const normalized = String(rawContent || '').replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    const sqlMatch = normalized.match(/(?:^|\n)\s*((SELECT|WITH)[\s\S]*?)\s*;?\s*$/i);
    if (sqlMatch) {
      return {
        status: 'ready',
        question: '',
        sql: sqlMatch[1].trim(),
        assumptions: [],
        explanation: 'Using the most likely employee-related table based on the current schema.'
      };
    }

    if (normalized) {
      return {
        status: 'clarify',
        question: normalized,
        sql: '',
        assumptions: [],
        explanation: ''
      };
    }

    return {
      status: 'clarify',
      question: 'I need a bit more detail before I can build a reliable query. Which table or result columns should I use?',
      sql: '',
      assumptions: [],
      explanation: ''
    };
  }
}

function buildAiSystemPrompt({ connectionId, connectionType, relevantSchema, currentQuery, requestedColumns }) {
  const schemaJson = JSON.stringify(relevantSchema.relevantTables, null, 2);
  const currentQueryText = currentQuery ? `Current query box contents:\n${currentQuery}` : 'Current query box contents: empty';
  const requestedColumnText = requestedColumns.length
    ? `User-requested columns or fields: ${requestedColumns.join(', ')}`
    : 'User-requested columns or fields: none explicitly named';

  return [
    'You are the SQL planning assistant for PythiaJS.',
    `Current connection id: ${connectionId}`,
    `Current connection type: ${connectionType}`,
    currentQueryText,
    `Database contains ${relevantSchema.totalTables} tables. The schema excerpt below has already been ranked for relevance to the latest user request.`,
    'Use only the provided schema. Never invent table names or columns.',
    'If one table is clearly the best match, choose it and write the query. Do not ask the user which table to use when the schema excerpt already shows an obvious employee-related table.',
    'If the request is ambiguous, missing needed columns, or multiple tables are plausible, ask one short clarifying question.',
    'If you have enough information, return a runnable SQL query for the current database type.',
    'Prefer the narrowest useful select list. Do not use SELECT * when the user asks for a specific field like Moniker, Title, Name, Email, or Identifier.',
    'Return JSON only with this exact shape:',
    '{"status":"ready"|"clarify","question":"","sql":"","assumptions":[""],"explanation":""}',
    'When status is "clarify", fill question and leave sql empty.',
    'When status is "ready", fill sql and keep question empty.',
    'Prefer SELECT queries unless the user explicitly asks to modify data.',
    ...getSqlDialectRules(connectionType),
    `Latest user message: ${relevantSchema.latestUserMessage || 'n/a'}`,
    `Search tokens: ${relevantSchema.tokens.join(', ') || 'none'}`,
    requestedColumnText,
    'Relevant schema excerpt:',
    schemaJson
  ].join('\n\n');
}

async function requestAiDecision(model, messages) {
  const response = await fetchOllamaJson('/api/chat', {
    method: 'POST',
    timeoutMs: OLLAMA_CHAT_TIMEOUT_MS,
    body: {
      model,
      stream: false,
      format: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          question: { type: 'string' },
          sql: { type: 'string' },
          assumptions: { type: 'array', items: { type: 'string' } },
          explanation: { type: 'string' }
        },
        required: ['status', 'question', 'sql', 'assumptions', 'explanation']
      },
      messages,
      options: {
        temperature: 0.1
      }
    }
  });

  return parseAiDecision(response?.message?.content || '');
}

async function askOllamaForSql({ model, connectionId, connectionType, schema, conversation, currentQuery }) {
  const relevantSchema = buildRelevantSchemaSubset(schema, conversation);
  const requestedColumns = relevantSchema.requestedColumns || inferRequestedColumns(relevantSchema, conversation);
  const messages = [
    {
      role: 'system',
      content: buildAiSystemPrompt({ connectionId, connectionType, relevantSchema, currentQuery, requestedColumns })
    },
    ...normalizeAiConversation(conversation)
  ];

  let decision = await requestAiDecision(model, messages);
  if (decision.status === 'ready' && decision.sql) {
    const validation = validateGeneratedSql(decision.sql, schema, { connectionType, requestedColumns });
    if (!validation.valid) {
      const repairPrompt = [
        'Your previous SQL does not satisfy the real schema or dialect requirements.',
        validation.unknownTables.length ? `Unknown or forbidden table references: ${validation.unknownTables.join(', ')}` : 'Unknown or forbidden table references: none',
        validation.issues.length ? `Additional SQL issues: ${validation.issues.join(' ')}` : 'Additional SQL issues: none',
        'Rewrite the SQL using only these exact available tables and their exact columns:',
        JSON.stringify(relevantSchema.relevantTables, null, 2),
        requestedColumns.length ? `The user explicitly asked for these fields, so include them if they exist: ${requestedColumns.join(', ')}` : 'The user did not explicitly ask for a named field.',
        'If you still cannot produce reliable SQL from this real schema subset, return status "clarify" and ask one precise question.',
        'Do not invent schemas, table names, columns, or joins.',
        ...getSqlDialectRules(connectionType)
      ].join('\n\n');

      decision = await requestAiDecision(model, [
        ...messages,
        { role: 'assistant', content: JSON.stringify(decision) },
        { role: 'user', content: repairPrompt }
      ]);

      const repairedValidation = decision.status === 'ready' && decision.sql
        ? validateGeneratedSql(decision.sql, schema, { connectionType, requestedColumns })
        : { valid: true, unknownTables: [], issues: [] };

      if (decision.status === 'ready' && !repairedValidation.valid) {
        const candidateTables = relevantSchema.relevantTables.map((entry) => entry.tableName).slice(0, 5);
        return {
          status: 'clarify',
          question: `I found likely tables in this area: ${candidateTables.join(', ')}. Which one should I use for the employee lookup?`,
          sql: '',
          assumptions: [],
          explanation: ''
        };
      }
    }
  }

  return decision;
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
    
    // Fall back to the live connection manager for non-persisted or already-open connections.
    if (!conn) {
      const dynamicConn = getConnection(id);
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
const bsPlus = readFileSync(assetPath("src/ui/BSPlus.css"), "utf-8");
const bootstrapBundleJs = readFileSync(assetPath("src/ui/bootstrap.bundle.min.js"), "utf-8");
const qBs = readFileSync(assetPath("src/ui/q-bs.css"), "utf-8");
const smlCss = readFileSync(assetPath("src/script/sml/sml.css"), "utf-8");
const smlSidebarCss = readFileSync(assetPath("src/script/sml/smlSidebar.css"), "utf-8");
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

    if (url.pathname === "/api/health" && req.method === "GET") {
      return Response.json({ ok: true, ts: Date.now() }, { headers: corsHeaders });
    }
    
    if (url.pathname === "/bootstrap-icons.css") {
      return new Response(bootstrapIcons, {
        headers: { 
          "Content-Type": "text/css",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/BSPlus.css") {
      return new Response(bsPlus, {
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

    if (url.pathname === "/bootstrap.bundle.min.js") {
      return new Response(bootstrapBundleJs, {
        headers: {
          "Content-Type": "application/javascript",
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

    if (url.pathname === "/sml/sml.css") {
      return new Response(smlCss, {
        headers: {
          "Content-Type": "text/css",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/sml/smlSidebar.css") {
      return new Response(smlSidebarCss, {
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

    if (url.pathname === "/script/ai.js") {
      const aiJs = readFileSync(assetPath("src/script/ai.js"), "utf-8");
      return new Response(aiJs, {
        headers: {
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/script/logs.js") {
      const logsJs = readFileSync(assetPath("src/script/logs.js"), "utf-8");
      return new Response(logsJs, {
        headers: {
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }

    if (url.pathname === "/script/smlUtils.js") {
      const smlUtilsJs = readFileSync(assetPath("src/script/smlUtils.js"), "utf-8");
      return new Response(smlUtilsJs, {
        headers: {
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }

    if (url.pathname.startsWith("/script/sml/") && url.pathname.endsWith(".js")) {
      const relativeScriptPath = url.pathname.slice(1);
      if (relativeScriptPath.includes("..")) {
        return new Response("Not found", { status: 404, headers: corsHeaders });
      }

      const smlScript = readFileSync(assetPath(`src/${relativeScriptPath}`), "utf-8");
      return new Response(smlScript, {
        headers: {
          "Content-Type": "application/javascript",
          ...corsHeaders
        }
      });
    }
    
    try {
      if (url.pathname === "/api/runQuery" && req.method === "POST") {
        const { text, connection, connectionConfig } = await req.json();
        const normalizedText = normalizeRunQueryText(text);
        console.log('runQuery called with:', { text: normalizedText, connection, connectionConfig: connectionConfig ? 'present' : 'missing' });
        logQuery(normalizedText, connection);
        logEntry('info', 'query', 'Query executed', normalizedText, connection);
        
        try {
          const queryStartedAt = Date.now();
          const rows = await executeQuery(connection, normalizedText);
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
          const errorDetail = {
            query: normalizedText,
            connection,
            message: queryErr?.message || String(queryErr),
            code: queryErr?.code || null,
            stack: queryErr?.stack || null,
            details: queryErr?.details || null
          };
          logEntry('error', 'query', 'SQL execution failed', JSON.stringify(errorDetail), connection);
          return Response.json({ error: queryErr.message }, { status: 200, headers: corsHeaders });
        }
      }

      if (url.pathname === "/api/logMaintenanceStatus" && req.method === "GET") {
        const status = getLogMaintenanceStatus();
        return Response.json(status, { headers: corsHeaders });
      }

      if (url.pathname === "/api/ollama/status" && req.method === "GET") {
        const status = await getOllamaStatus();
        return Response.json(status, { headers: corsHeaders });
      }

      if (url.pathname === "/api/ai/assist" && req.method === "POST") {
        const { conversation, connection, model, currentQuery } = await req.json();
        const ollamaStatus = await getOllamaStatus();

        if (!ollamaStatus.online) {
          return Response.json({ error: 'Ollama is offline.' }, { headers: corsHeaders });
        }

        const selectedModel = typeof model === 'string' && model.trim()
          ? model.trim()
          : ollamaStatus.defaultModel;

        if (!selectedModel) {
          return Response.json({ error: 'No Ollama models are available.' }, { headers: corsHeaders });
        }

        const availableModels = new Set(ollamaStatus.models.map((entry) => entry.name));
        if (!availableModels.has(selectedModel)) {
          return Response.json({ error: `Selected Ollama model is unavailable: ${selectedModel}` }, { headers: corsHeaders });
        }

        const connectionId = connection || 'default';
        const schema = await getConnectionSchema(connectionId);
        const connections = getConnections();
        const connectionRecord = connectionId === 'default'
          ? { id: 'default', type: 'sqlite' }
          : connections.find((entry) => entry.id === connectionId);
        const connectionType = connectionRecord?.type || 'sqlite';

        const decision = await askOllamaForSql({
          model: selectedModel,
          connectionId,
          connectionType,
          schema,
          conversation,
          currentQuery: normalizeRunQueryText(currentQuery || '')
        });

        logEntry(
          'info',
          'ai',
          decision.status === 'ready' ? 'AI generated SQL' : 'AI asked for clarification',
          JSON.stringify({ connection: connectionId, model: selectedModel, status: decision.status })
        );

        return Response.json({
          ...decision,
          model: selectedModel,
          online: true
        }, { headers: corsHeaders });
      }

      if (url.pathname === "/api/runLogMaintenance" && req.method === "POST") {
        const summary = await startLogMaintenanceTask();
        return Response.json(summary, { headers: corsHeaders });
      }

      if (url.pathname === "/api/logTimelinePresets" && req.method === "GET") {
        const payload = getLogTimelinePresets();
        return Response.json(payload, { headers: corsHeaders });
      }

      if (url.pathname === "/api/setLogTimelinePreset" && req.method === "POST") {
        const { presetKey } = await req.json();
        const status = setLogTimelinePreset(presetKey);
        return Response.json(status, { headers: corsHeaders });
      }

      if (url.pathname === "/api/listArchivedLogs" && req.method === "GET") {
        const { archiveRoot } = getLogMaintenanceStatus();
        if (!existsSync(archiveRoot)) {
          return Response.json([], { headers: corsHeaders });
        }

        const files = readdirSync(archiveRoot)
          .filter((name) => name.endsWith('.logs.txt'))
          .map((name) => {
            const fullPath = path.resolve(archiveRoot, name);
            const stats = statSync(fullPath);
            return {
              name,
              path: fullPath,
              size: stats.size,
              modifiedAt: stats.mtime.toISOString()
            };
          })
          .sort((left, right) => right.modifiedAt.localeCompare(left.modifiedAt));

        return Response.json(files, { headers: corsHeaders });
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