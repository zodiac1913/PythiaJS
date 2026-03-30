// Event Handlers - wires up all UI interactions
// This file imports from modules and sets up event listeners

import { call, loadConnections } from './api.js';
import { loadAllSchemas, parseQueryContext, showFieldSelector, showTableSelector, detectQueryMode } from './autocomplete.js';
import { displayResult, saveAs } from './display.js';
import { showConnectionDetailsModal, showAddConnectionModal, showSaveFileModal } from './modals.js';
import { escapeFieldIdentifier, formatTableIdentifier, resolveSchemaTableKey } from './db-identifiers.js';
import { 
  APP_VERSION,
  currentConnection, 
  currentFormat, 
  lastResult, 
  allConnections, 
  schemaCache, 
  sqlKeywords,
  setCurrentFormat,
  setLastResult
} from './state.js';

const historyQueryCache = {};
let historyRequestController = null;

function renderAppVersion() {
  const versionBadge = document.getElementById('appVersion');
  if (versionBadge) {
    versionBadge.textContent = `Version ${APP_VERSION}`;
  }
}

function renderFallbackModeBanner() {
  const banner = document.getElementById('fallbackBanner');
  const fallbackUrlLink = document.getElementById('fallbackUrl');
  const copyButton = document.getElementById('copyFallbackUrl');
  if (!banner) {
    return;
  }

  const params = new URLSearchParams(globalThis.location.search);
  if (params.get('mode') !== 'fallback') {
    return;
  }

  const fallbackUrl = globalThis.location.href;
  if (fallbackUrlLink) {
    fallbackUrlLink.textContent = fallbackUrl;
    fallbackUrlLink.href = fallbackUrl;
    fallbackUrlLink.title = fallbackUrl;
    fallbackUrlLink.setAttribute('aria-label', `Fallback URL ${fallbackUrl}`);
  }

  if (copyButton) {
    copyButton.onclick = async () => {
      try {
        if (!globalThis.navigator?.clipboard?.writeText) {
          copyButton.textContent = 'Copy unavailable';
          setTimeout(() => {
            copyButton.textContent = 'Copy';
          }, 1400);
          return;
        }

        await globalThis.navigator.clipboard.writeText(fallbackUrl);

        copyButton.textContent = 'Copied';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 1200);
      } catch (err) {
        console.warn('Could not copy fallback URL:', err?.message || err);
      }
    };
  }

  banner.style.display = 'block';
}

async function loadHistoryQueriesForConnection(connectionId, force = false, signal = null) {
  if (!force && historyQueryCache[connectionId]) {
    return historyQueryCache[connectionId];
  }

  const rows = await call(`/api/getHistory?connection=${encodeURIComponent(connectionId)}`, 'GET', null, { signal });
  const queries = rows
    .filter(row => row.db_alias === connectionId)
    .map(row => row.query)
    .filter(Boolean);
  historyQueryCache[connectionId] = Array.from(new Set(queries));
  return historyQueryCache[connectionId];
}

function attachHistoryAutocomplete() {
  const searchInput = document.getElementById('historySearch');
  const resultsBox = document.getElementById('historySearchResults');
  const queryBox = document.getElementById('q');

  if (!searchInput || !resultsBox || !queryBox) {
    return;
  }

  let shownQueries = [];
  let activeIndex = -1;

  function shouldShowResults() {
    const hasSearchText = searchInput.value.trim().length > 0;
    return document.activeElement === searchInput || hasSearchText;
  }

  function hideResults() {
    resultsBox.style.display = 'none';
    resultsBox.innerHTML = '';
    shownQueries = [];
    activeIndex = -1;
  }

  function selectQuery(queryText) {
    queryBox.value = queryText;
    queryBox.focus();
    queryBox.selectionStart = queryBox.selectionEnd = queryText.length;
    hideResults();
  }

  function renderResults(items) {
    if (!items.length) {
      hideResults();
      return;
    }

    shownQueries = items;
    activeIndex = -1;
    resultsBox.innerHTML = items.map((query, idx) => {
      const safeQuery = query
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
      return `<div class="query-search-item" role="option" tabindex="-1" data-idx="${idx}" title="${safeQuery}" aria-label="Saved query suggestion ${idx + 1}: ${safeQuery}">${safeQuery}</div>`;
    }).join('');

    resultsBox.style.display = 'block';
    resultsBox.querySelectorAll('.query-search-item').forEach((item) => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const idx = Number.parseInt(item.dataset.idx, 10);
        if (Number.isFinite(idx) && shownQueries[idx]) {
          selectQuery(shownQueries[idx]);
        }
      });
    });
  }

  function setActiveItem(nextIndex) {
    const items = resultsBox.querySelectorAll('.query-search-item');
    items.forEach(item => item.classList.remove('active'));
    if (nextIndex < 0 || nextIndex >= items.length) {
      activeIndex = -1;
      return;
    }
    activeIndex = nextIndex;
    items[activeIndex].classList.add('active');
    items[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  async function refreshResults(force = false) {
    try {
      const selectedConnection = currentConnection;
      if (historyRequestController) {
        historyRequestController.abort();
      }
      historyRequestController = new AbortController();

      const allQueries = await loadHistoryQueriesForConnection(selectedConnection, force, historyRequestController.signal);
      if (selectedConnection !== currentConnection) {
        return;
      }

      if (!shouldShowResults()) {
        hideResults();
        return;
      }

      const term = searchInput.value.trim().toLowerCase();
      const filtered = term
        ? allQueries.filter(q => q.toLowerCase().includes(term))
        : allQueries;
      renderResults(filtered.slice(0, 20));
    } catch (err) {
      if (err.name === 'AbortError') {
        return;
      }
      console.error('Failed to load query history for autocomplete:', err.message);
      hideResults();
    } finally {
      historyRequestController = null;
    }
  }

  searchInput.addEventListener('focus', async () => {
    await refreshResults(false);
  });

  searchInput.addEventListener('input', async () => {
    await refreshResults(false);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (resultsBox.style.display !== 'block') {
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveItem(Math.min(activeIndex + 1, shownQueries.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveItem(Math.max(activeIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && shownQueries[activeIndex]) {
        e.preventDefault();
        selectQuery(shownQueries[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      hideResults();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => hideResults(), 150);
  });

  document.addEventListener('click', (e) => {
    if (!resultsBox.contains(e.target) && e.target !== searchInput) {
      hideResults();
    }
  });

  document.addEventListener('query-history-refresh', async () => {
    if (!shouldShowResults()) {
      return;
    }
    await refreshResults(true);
  });

  document.addEventListener('connection-changed', () => {
    if (historyRequestController) {
      historyRequestController.abort();
      historyRequestController = null;
    }
    hideResults();
  });
}

// Guided SQL flow: SELECT → pick table → pick fields
async function triggerSelectFlow(textarea) {
  if (!schemaCache[currentConnection]) {
    await loadAllSchemas();
  }
  
  showTableSelector(function(tableName) {
    const conn = allConnections[currentConnection];
    const dbType = conn ? conn.type : 'sqlite';
    const formattedTableName = formatTableIdentifier(tableName, dbType);

    // Write "SELECT ... FROM tableName"
    textarea.value = 'SELECT  FROM ' + formattedTableName;
    // Put cursor between SELECT and FROM (at position 7)
    textarea.selectionStart = textarea.selectionEnd = 7;
    textarea.focus();
    
    // Immediately show field selector for the chosen table
    showFieldSelector(tableName, [], function(selectedFields) {
      const fields = selectedFields.length > 0 ? selectedFields.join(', ') : '*';
      textarea.value = 'SELECT ' + fields + ' FROM ' + formattedTableName;
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
      textarea.focus();
    });
  });
}

function handleAutocompleteTabSelection(e, ac) {
  if (e.key !== 'Tab' || ac.style.display !== 'block') {
    return false;
  }

  e.preventDefault();
  const firstSuggestion = ac.querySelector('div');
  if (firstSuggestion) firstSuggestion.click();
  return true;
}

function applySelectedFieldsToQuery(textarea, text, cursorPos, selectedFields, dbType) {
  const beforeCursor = text.substring(0, cursorPos);
  const afterCursor = text.substring(cursorPos);
  const currentWord = beforeCursor.match(/(\w*)$/)?.[1] || '';
  const beforeWord = beforeCursor.substring(0, beforeCursor.length - currentWord.length);
  const escapedFields = selectedFields.map((f) => escapeFieldIdentifier(f, dbType));
  const joinedFields = escapedFields.join(', ');

  textarea.value = beforeWord + joinedFields + afterCursor;
  textarea.selectionStart = textarea.selectionEnd = beforeWord.length + joinedFields.length;
  textarea.focus();
}

async function handleCtrlSpaceFieldSelection(e) {
  if (!(e.key === ' ' && e.ctrlKey)) {
    return;
  }

  e.preventDefault();
  const textarea = e.target;
  const cursorPos = textarea.selectionStart;
  const text = textarea.value;
  const context = parseQueryContext(text, cursorPos);

  if (context.mode !== 'fields') {
    return;
  }

  if (!schemaCache[currentConnection]) {
    await loadAllSchemas();
  }

  const schema = schemaCache[currentConnection] || {};
  const conn = allConnections[currentConnection];
  const dbType = conn ? conn.type : 'sqlite';
  const table = resolveSchemaTableKey(schema, context.table, dbType) || context.table;

  if (!table || !schema[table]) {
    return;
  }

  showFieldSelector(table, [], (selectedFields) => {
    applySelectedFieldsToQuery(textarea, text, cursorPos, selectedFields, dbType);
  });
}

function escapeSelectFieldList(fields, dbType) {
  if (fields === '*') {
    return '*';
  }

  return fields.split(',').map((field) => {
    const trimmed = field.trim();
    if (trimmed === '*') return trimmed;
    return escapeFieldIdentifier(trimmed, dbType);
  }).join(', ');
}

function normalizePostgresStyleQuery(text) {
  const match = text.match(/^(\S+)\s+(select|insert|update|delete)\s+(.*)$/i);
  if (!match) {
    return text;
  }

  const [, table, operation, rest] = match;
  const conn = allConnections[currentConnection];
  const dbType = conn ? conn.type : 'sqlite';
  const formattedTable = formatTableIdentifier(table, dbType);
  const op = operation.toLowerCase();

  if (op === 'select') {
    const parts = rest.split(/\s+(where|order\s+by|limit|offset)/i);
    const rawFields = parts[0] || '*';
    const conditions = parts.length > 1 ? ` ${parts.slice(1).join(' ')}` : '';
    const fields = escapeSelectFieldList(rawFields, dbType);
    return `SELECT ${fields} FROM ${formattedTable}${conditions}`;
  }

  if (op === 'insert') {
    return `INSERT INTO ${formattedTable} ${rest}`;
  }

  if (op === 'update') {
    return `UPDATE ${formattedTable} SET ${rest}`;
  }

  if (op === 'delete') {
    return `DELETE FROM ${formattedTable} ${rest}`;
  }

  return text;
}

function normalizeQueryText(text) {
  if (detectQueryMode(text) !== 'postgres') {
    return text;
  }

  return normalizePostgresStyleQuery(text);
}

function applyResultMeta(result, requestStartedAt) {
  const loadMs = Date.now() - requestStartedAt;
  const meta = result.meta || {};
  const computedTotalRows = Array.isArray(result.rows) ? result.rows.length : 0;
  const totalRows = Number.isFinite(meta.totalRows) ? meta.totalRows : computedTotalRows;

  result.meta = {
    ...meta,
    totalRows,
    loadMs,
    finishedAt: meta.finishedAt || new Date().toISOString()
  };
}

function setRunQueryUiState(isRunning, runBtn, progress, answer, progressText) {
  runBtn.disabled = isRunning;
  progress.style.display = isRunning ? 'block' : 'none';

  if (isRunning) {
    answer.style.display = 'none';
    answer.innerHTML = '';
    progressText.textContent = 'Executing query...';
  }
}

export function initializeEventHandlers() {
  attachHistoryAutocomplete();

  // Query textarea - keydown handler
  document.getElementById('q').addEventListener('keydown', async function(e) {
    const ac = document.getElementById('autocomplete');

    if (handleAutocompleteTabSelection(e, ac)) {
      return;
    }

    await handleCtrlSpaceFieldSelection(e);
  });
  
  // Query textarea - input handler (autocomplete)
  document.getElementById('q').addEventListener('input', async function(e) {
    const text = e.target.value;
    const cursorPos = e.target.selectionStart;
    
    if (!schemaCache[currentConnection]) {
      await loadAllSchemas();
    }
    
    const textBeforeCursor = text.substring(0, cursorPos);
    const match = textBeforeCursor.match(/(\w+)$/);
    const currentWord = match ? match[1] : '';
    
    const schema = schemaCache[currentConnection] || {};
    const allSuggestions = [
      ...sqlKeywords,
      ...Object.keys(schema),
      ...Object.values(schema).flat()
    ];
    
    const suggestions = allSuggestions.filter(s => 
      s.toLowerCase().startsWith(currentWord.toLowerCase())
    );
    
    if (suggestions.length === 0 || currentWord.length < 3) {
      document.getElementById('autocomplete').style.display = 'none';
      return;
    }
    
    const ac = document.getElementById('autocomplete');
    ac.innerHTML = suggestions.slice(0, 10).map((s, idx) => `<div role="option" tabindex="-1" title="${s}" aria-label="SQL suggestion ${idx + 1}: ${s}">${s}</div>`).join('');
    ac.style.display = 'block';
    
    ac.querySelectorAll('div').forEach(div => {
      div.onclick = () => {
        const beforeCursor = text.substring(0, cursorPos);
        const afterCursor = text.substring(cursorPos);
        const beforeWord = beforeCursor.substring(0, beforeCursor.length - currentWord.length);
        
        const selectedText = div.textContent;
        e.target.value = beforeWord + selectedText + afterCursor;
        e.target.selectionStart = e.target.selectionEnd = beforeWord.length + selectedText.length;
        ac.style.display = 'none';
        e.target.focus();
        
        // If user just selected "SELECT" as the first word, trigger guided SQL flow
        if (selectedText === 'SELECT' && e.target.value.match(/^\s*SELECT\s*$/i)) {
          triggerSelectFlow(e.target);
        }
      };
    });
  });
  
  // Detect when user manually types "SELECT " as the FIRST word (not postgres-style)
  document.getElementById('q').addEventListener('keyup', function(e) {
    if (e.key !== ' ') return;
    const text = e.target.value;
    // Only trigger if SELECT is the very first word (standard SQL, not postgres-style)
    if (text.match(/^\s*SELECT\s+$/i) && !text.match(/^\s*\w+\s+SELECT/i)) {
      triggerSelectFlow(e.target);
    }
  });
  
  // Query textarea - blur handler
  document.getElementById('q').addEventListener('blur', () => {
    setTimeout(() => document.getElementById('autocomplete').style.display = 'none', 200);
  });
  
  // Format selector
  document.querySelectorAll('[data-format]').forEach(item => {
    item.onclick = (e) => {
      e.preventDefault();
      setCurrentFormat(item.dataset.format);
      document.getElementById('formatLabel').textContent = item.textContent;
      if (lastResult) displayResult(lastResult);
    };
  });
  
  // Current connection info badge
  document.getElementById('currentConnInfo').onclick = showConnectionDetailsModal;
  
  // Run query button
  document.getElementById("run").onclick = async () => {
    const runBtn = document.getElementById('run');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progressText');
    const answer = document.getElementById('answer');
    setRunQueryUiState(true, runBtn, progress, answer, progressText);
    
    try {
      let text = document.getElementById("q").value.trim();
      const requestStartedAt = Date.now();

      text = normalizeQueryText(text);
      
      // Rewrite the query box to show standard SQL
      document.getElementById("q").value = text;
      
      console.log('Sending query:', text, 'on connection:', currentConnection);
      const result = await call('/api/runQuery', 'POST', { 
        text,
        connection: currentConnection,
        connectionConfig: allConnections[currentConnection]?.config
      });

      applyResultMeta(result, requestStartedAt);

      delete historyQueryCache[currentConnection];
      document.dispatchEvent(new CustomEvent('query-history-refresh'));
      
      progressText.textContent = `Rendering ${result.rows?.length || 0} rows...`;
      setLastResult(result);
      displayResult(result);
      answer.style.display = 'block';
    } catch (err) {
      answer.innerHTML = `<p class="text-danger">Error: ${err.message}</p>`;
      answer.style.display = 'block';
    } finally {
      setRunQueryUiState(false, runBtn, progress, answer, progressText);
    }
  };
  
  // History button
  document.getElementById("history").onclick = async () => {
    const rows = await call(`/api/getHistory?connection=${encodeURIComponent(currentConnection)}`);
    setLastResult({ rows });
    displayResult(lastResult);
    document.getElementById('answer').style.display = 'block';
  };
  
  // Save file button
  document.getElementById("saveFile").onclick = () => {
    if (!lastResult?.rows?.length) {
      return alert('No results to save');
    }
    
    if (currentFormat === 'table') {
      showSaveFileModal();
    } else {
      saveAs(currentFormat);
    }
  };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  renderAppVersion();
  renderFallbackModeBanner();
  loadConnections();
  initializeEventHandlers();
  
  // Add connection button needs special handling since it's dynamically created
  document.addEventListener('click', function(e) {
    if (e.target.id === 'addConnection' || e.target.closest('#addConnection')) {
      e.preventDefault();
      showAddConnectionModal();
    }
  });
});

// Shutdown server when webview window closes
window.addEventListener('beforeunload', function() {
  navigator.sendBeacon('/api/shutdown', '{}');
});
