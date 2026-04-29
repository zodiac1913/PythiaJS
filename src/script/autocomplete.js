//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class autocomplete.js
 * @description Provides autocomplete functionality for SQL queries in PythiaJS, including schema loading and query context detection.
 */

// Query Parsing & Autocomplete Functions
import { currentConnection, allConnections, schemaCache, sqlKeywords } from './state.js';
import { call } from './api.js';
import { escapeFieldIdentifier, resolveSchemaTableKey } from './db-identifiers.js';

const schemaLoadPromises = {};
const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    return !el.disabled && el.getAttribute('aria-hidden') !== 'true' && el.offsetParent !== null;
  });
}

function trapTabNavigation(e, modal) {
  if (e.key !== 'Tab') {
    return false;
  }

  const focusables = getFocusableElements(modal);
  if (!focusables.length) {
    e.preventDefault();
    return true;
  }

  const first = focusables[0];
  const last = focusables.at(-1);
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
    return true;
  }

  if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
    return true;
  }

  return false;
}

function keepModalFocusContained(modal) {
  const onFocusIn = (event) => {
    if (!modal.isConnected) {
      return;
    }

    if (modal.contains(event.target)) {
      return;
    }

    const [firstFocusable] = getFocusableElements(modal);
    if (firstFocusable) {
      firstFocusable.focus();
    } else {
      modal.focus();
    }
  };

  document.addEventListener('focusin', onFocusIn);
  return () => {
    document.removeEventListener('focusin', onFocusIn);
  };
}

function escapeSelectedFields(selectedFields) {
  const conn = allConnections[currentConnection];
  const dbType = conn ? conn.type : 'sqlite';
  return selectedFields.map(function(f) {
    return escapeFieldIdentifier(f, dbType);
  });
}

function escapeHtmlText(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function loadAllSchemas() {
  if (schemaCache[currentConnection]) {
    return schemaCache[currentConnection];
  }

  if (schemaLoadPromises[currentConnection]) {
    return schemaLoadPromises[currentConnection];
  }

  schemaLoadPromises[currentConnection] = (async () => {
    try {
      const schema = await call(`/api/getSchema?id=${currentConnection}`);
      schemaCache[currentConnection] = schema;
      return schema;
    } catch (err) {
      console.warn('Failed to load schema for connection:', currentConnection, err?.message || err);
      schemaCache[currentConnection] = {};
      return schemaCache[currentConnection];
    } finally {
      delete schemaLoadPromises[currentConnection];
    }
  })();

  return schemaLoadPromises[currentConnection];
}

export async function loadSchema() {
  if (!schemaCache[currentConnection]) {
    await loadAllSchemas();
  }
}

export function detectQueryMode(text) {
  const postgresMatch = text.match(/^(\w+)\s+(select|insert|update|delete)/i);
  if (postgresMatch) return 'postgres';
  
  if (text.trim().toUpperCase().startsWith('SELECT')) return 'normal';
  
  return 'normal';
}

function extractCurrentWord(text) {
  if (!text) return '';
  const match = text.match(/(\w+)$/);
  return match ? match[1] : '';
}

function parsePostgresContext(textBeforeCursor) {
  const match = textBeforeCursor.match(/^(\w+)\s+(select|insert|update|delete)\s+(.*)/i);
  if (!match) {
    return { mode: 'table', current: extractCurrentWord(textBeforeCursor) };
  }

  const [, table, operation, rest] = match;
  if (operation.toLowerCase() !== 'select') {
    return { mode: 'table', current: extractCurrentWord(textBeforeCursor) };
  }

  if (/\bWHERE\b/i.test(rest)) {
    const afterWhereMatch = rest.match(/\bWHERE\s+(.*)$/i);
    const afterWhere = afterWhereMatch ? afterWhereMatch[1] : '';
    return { mode: 'where', table, current: extractCurrentWord(afterWhere) };
  }

  if (/\bORDER\s+BY\b|\bORDER\b/i.test(rest)) {
    const afterOrderMatch = rest.match(/\bORDER\s+(?:BY\s+)?(.*)$/i);
    const afterOrder = afterOrderMatch ? afterOrderMatch[1] : '';
    return { mode: 'order', table, current: extractCurrentWord(afterOrder) };
  }

  const fields = rest.split(',').map(f => f.trim());
  const lastField = fields[fields.length - 1] || '';
  return { mode: 'fields', table, current: extractCurrentWord(lastField) };
}

function parseNormalSqlContext(textBeforeCursor) {
  const upperText = textBeforeCursor.toUpperCase();
  const currentWord = extractCurrentWord(textBeforeCursor);

  const fromMatch = textBeforeCursor.match(/FROM\s+([^\s,;]+)/i);
  const table = fromMatch ? fromMatch[1] : null;

  if (upperText.includes('FROM') && !upperText.includes('WHERE') && !upperText.includes('ORDER BY') && !upperText.includes('JOIN')) {
    return { mode: 'table', table, current: currentWord };
  }

  if (upperText.includes('SELECT') && !upperText.includes('FROM')) {
    return { mode: 'table', table: null, current: currentWord };
  }

  if (upperText.includes('WHERE')) {
    return { mode: 'where', table, current: currentWord };
  }

  if (upperText.includes('ORDER BY')) {
    return { mode: 'order', table, current: currentWord };
  }

  return { mode: 'table', table: null, current: currentWord };
}

export function parseQueryContext(text, cursorPos) {
  const textBeforeCursor = text.substring(0, cursorPos);
  const mode = detectQueryMode(text);

  return mode === 'postgres'
    ? parsePostgresContext(textBeforeCursor)
    : parseNormalSqlContext(textBeforeCursor);
}

export function getSuggestions(context, schema) {
  const { mode, table, current } = context;
  const conn = allConnections[currentConnection];
  const dbType = conn ? conn.type : 'sqlite';
  
  if (mode === 'table') {
    const tables = Object.keys(schema).filter(t => t.toLowerCase().startsWith(current.toLowerCase()));
    const keywords = sqlKeywords.filter(k => k.toLowerCase().startsWith(current.toLowerCase()));
    return [...tables, ...keywords];
  } else if (mode === 'fields') {
    const schemaTableKey = resolveSchemaTableKey(schema, table, dbType);
    if (schemaTableKey && schema[schemaTableKey]) {
      const fields = ['*', ...schema[schemaTableKey]];
      return fields.filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    } else {
      const allFields = new Set();
      Object.values(schema).forEach(tableFields => {
        tableFields.forEach(field => allFields.add(field));
      });
      return ['*', ...Array.from(allFields)].filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    }
  } else if (mode === 'where' || mode === 'order') {
    const schemaTableKey = resolveSchemaTableKey(schema, table, dbType);
    if (schemaTableKey && schema[schemaTableKey]) {
      return schema[schemaTableKey].filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    } else {
      const allFields = new Set();
      Object.values(schema).forEach(tableFields => {
        tableFields.forEach(field => allFields.add(field));
      });
      return Array.from(allFields).filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    }
  } else if (mode === 'keyword') {
    return sqlKeywords.filter(k => k.toLowerCase().startsWith(current.toLowerCase()));
  }
  
  return [];
}

export function showFieldSelector(table, fields, onSelect) {
  const schema = schemaCache[currentConnection] || {};
  
  if (!schema[table]) {
    alert(`Table '${table}' not found in current database. Please select the correct database connection.`);
    return;
  }
  
  const tableFields = schema[table];
  const useFieldSearch = tableFields.length > 30;
  
  const modal = document.createElement('div');
  const releaseFocusContainment = keepModalFocusContained(modal);
  const closeModal = () => {
    releaseFocusContainment();
    modal.remove();
  };
  modal.className = 'field-selector-modal';
  modal.setAttribute('tabindex', '0');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', `Select fields for ${table}`);
  modal.innerHTML = `
    <div class="field-selector-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:2000;display:flex;align-items:center;justify-content:center;">
      <div class="field-selector" style="background:white;padding:20px;border-radius:8px;max-width:760px;width:92%;max-height:92%;overflow-y:auto;">
        <h5 style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
          <span>Select Fields for ${table}</span>
          <span id="fieldCountBadge" style="font-size:.8rem;font-weight:600;background:#ecfeff;color:#155e75;border:1px solid #a5f3fc;border-radius:999px;padding:2px 9px;">0 fields</span>
        </h5>
        ${useFieldSearch ? '<label for="fieldSearchInput" id="fieldSearchHelp" style="display:block;margin-top:10px;font-size:.9rem;color:#444;">Search box for fields. Type to find your field.</label><input id="fieldSearchInput" type="text" class="form-control form-control-sm" placeholder="Search fields..." aria-label="Search box for fields. Type to find your field." aria-describedby="fieldSearchHelp fieldResultsStatus" title="Search fields" style="margin:6px 0 8px;">' : ''}
        <div id="fieldResultsStatus" aria-live="polite" aria-atomic="true" style="font-size:.84rem;color:#555;margin:4px 0 8px;"></div>
        <div id="fieldList" class="field-list" role="listbox" aria-label="Available fields" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:10px 0 15px;max-height:360px;overflow-y:auto;">
          <div class="field-item ${fields.includes('*') ? 'selected' : ''}" role="option" tabindex="-1" data-field="*" aria-label="All fields" title="All fields" style="padding:10px 12px;border:1px solid #ddd;border-radius:4px;cursor:pointer;background:#f8f9fa;min-height:42px;line-height:1.35;display:flex;align-items:center;word-break:break-word;">*</div>
          ${tableFields.map(field => 
            `<div class="field-item ${fields.includes(field) ? 'selected' : ''}" role="option" tabindex="-1" data-field="${escapeHtmlText(field)}" title="${escapeHtmlText(field)}" aria-label="Field ${escapeHtmlText(field)}" style="padding:10px 12px;border:1px solid #ddd;border-radius:4px;cursor:pointer;background:#f8f9fa;min-height:42px;line-height:1.35;display:flex;align-items:center;word-break:break-word;">${escapeHtmlText(field)}</div>`
          ).join('')}
        </div>
        <div class="field-controls" style="margin-top:15px;text-align:center;">
          <small style="color:#666;">Use arrow keys to navigate, Space to select/deselect, Enter to confirm</small><br>
          <button class="btn btn-primary btn-sm" id="confirmFields" title="Confirm selected fields" aria-label="Confirm selected fields" style="margin-top:10px;">Confirm Selection</button>
          <button class="btn btn-secondary btn-sm" id="cancelFields" title="Cancel field selection" aria-label="Cancel field selection" style="margin-top:10px;margin-left:10px;">Cancel</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const searchInput = modal.querySelector('#fieldSearchInput');
  const fieldResultsStatus = modal.querySelector('#fieldResultsStatus');
  const fieldCountBadge = modal.querySelector('#fieldCountBadge');
  const fieldList = modal.querySelector('#fieldList');
  const fieldItems = Array.from(modal.querySelectorAll('.field-item'));
  let visibleFieldItems = fieldItems;
  let selectedIndex = 0;

  function announceFieldCount() {
    if (!fieldResultsStatus || !fieldList) {
      return;
    }

    const total = fieldItems.length;
    const visible = visibleFieldItems.length;
    const term = searchInput ? searchInput.value.trim() : '';
    const message = term
      ? `Showing ${visible} of ${total} fields for ${term}.`
      : `Showing ${visible} fields.`;

    fieldResultsStatus.textContent = message;
    fieldList.setAttribute('aria-label', `Available fields. ${visible} result${visible === 1 ? '' : 's'}.`);
    if (fieldCountBadge) {
      fieldCountBadge.textContent = term
        ? `${visible} of ${total} fields`
        : `${visible} fields`;
    }
  }

  function getSelectedFields() {
    return fieldItems
      .filter(item => item.classList.contains('selected'))
      .map(item => item.dataset.field);
  }
  
  function updateSelection() {
    fieldItems.forEach((item) => {
      item.style.display = 'none';
      item.style.background = '#f8f9fa';
      item.style.color = 'black';
    });

    visibleFieldItems.forEach((item, index) => {
      item.style.display = '';
      item.style.background = index === selectedIndex ? '#007bff' : '#f8f9fa';
      item.style.color = index === selectedIndex ? 'white' : 'black';
      item.style.borderColor = item.classList.contains('selected') ? '#007bff' : '#ddd';
    });

    const activeItem = visibleFieldItems[selectedIndex];
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  }
  
  updateSelection();
  announceFieldCount();

  fieldItems.forEach((item) => {
    item.onclick = () => {
      item.classList.toggle('selected');
      updateSelection();
    };
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const term = searchInput.value.trim().toLowerCase();
      visibleFieldItems = fieldItems.filter((item) => {
        return item.dataset.field.toLowerCase().includes(term);
      });
      selectedIndex = 0;
      updateSelection();
      announceFieldCount();
    });
  }
  
  modal.addEventListener('keydown', (e) => {
    if (trapTabNavigation(e, modal)) {
      return;
    }

    // Keep typing behavior intact when focus is in the field search input.
    if (searchInput && document.activeElement === searchInput && (e.key === ' ' || e.key === 'Enter')) {
      return;
    }

    if (visibleFieldItems.length === 0 && e.key !== 'Escape') {
      return;
    }

    const columns = 2;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(0, selectedIndex - columns);
      updateSelection();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(visibleFieldItems.length - 1, selectedIndex + columns);
      updateSelection();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      selectedIndex = Math.max(0, selectedIndex - 1);
      updateSelection();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      selectedIndex = Math.min(visibleFieldItems.length - 1, selectedIndex + 1);
      updateSelection();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (e.key === 'Enter') {
        closeModal();
        onSelect(escapeSelectedFields(getSelectedFields()));
      } else {
        const current = visibleFieldItems[selectedIndex];
        current.classList.toggle('selected');
        updateSelection();
      }
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  modal.querySelector('#confirmFields').onclick = () => {
    closeModal();
    onSelect(escapeSelectedFields(getSelectedFields()));
  };
  
  modal.querySelector('#cancelFields').onclick = closeModal;
  
  if (searchInput) {
    searchInput.focus();
  } else {
    modal.focus();
  }
}

export function showTableSelector(onSelect) {
  const schema = schemaCache[currentConnection] || {};
  const tableNames = Object.keys(schema);
  const useSearch = tableNames.length > 30;
  
  if (tableNames.length === 0) {
    alert('No tables found. Make sure you are connected to a database.');
    return;
  }
  
  const modal = document.createElement('div');
  const releaseFocusContainment = keepModalFocusContained(modal);
  const closeModal = () => {
    releaseFocusContainment();
    modal.remove();
  };
  modal.setAttribute('tabindex', '0');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Select table');
  modal.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:2000;display:flex;align-items:center;justify-content:center;">
      <div style="background:white;padding:20px;border-radius:8px;max-width:560px;width:90%;max-height:460px;overflow-y:auto;">
        <h5 style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">
          <span>Select Table</span>
          <span id="tableCountBadge" style="font-size:.8rem;font-weight:600;background:#eef2ff;color:#1f3a8a;border:1px solid #c7d2fe;border-radius:999px;padding:2px 9px;">0 tables</span>
        </h5>
        ${useSearch ? '<label for="tableSearchInput" id="tableSearchHelp" style="display:block;margin-top:10px;font-size:.9rem;color:#444;">Search box for tables. Type to find your table.</label><input id="tableSearchInput" type="text" class="form-control form-control-sm" placeholder="Search tables..." aria-label="Search box for tables. Type to find your table." aria-describedby="tableSearchHelp tableResultsStatus" title="Search tables" style="margin:6px 0 8px;">' : ''}
        <div id="tableResultsStatus" aria-live="polite" aria-atomic="true" style="font-size:.84rem;color:#555;margin:4px 0 8px;"></div>
        <div id="tableList" role="listbox" aria-label="Available tables" style="display:flex;flex-direction:column;gap:6px;margin:10px 0 15px;max-height:300px;overflow-y:auto;">
          ${tableNames.map(t => 
            `<div class="table-item" role="option" tabindex="-1" data-table="${escapeHtmlText(t)}" title="${escapeHtmlText(t)}" aria-label="Table ${escapeHtmlText(t)}" style="padding:10px 12px;border:1px solid #ddd;border-radius:4px;cursor:pointer;background:#f8f9fa;min-height:42px;line-height:1.35;display:flex;align-items:center;word-break:break-word;">${escapeHtmlText(t)}</div>`
          ).join('')}
        </div>
        <div style="margin-top:15px;text-align:center;">
          <small style="color:#666;">Click a table or use arrow keys + Enter</small><br>
          <button class="btn btn-secondary btn-sm" id="cancelTableSelect" title="Cancel table selection" aria-label="Cancel table selection" style="margin-top:10px;">Cancel</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);

  const searchInput = modal.querySelector('#tableSearchInput');
  const tableResultsStatus = modal.querySelector('#tableResultsStatus');
  const tableCountBadge = modal.querySelector('#tableCountBadge');
  const tableList = modal.querySelector('#tableList');
  let items = Array.from(modal.querySelectorAll('.table-item'));
  let visibleItems = items;
  let selectedIndex = 0;

  function announceTableCount() {
    if (!tableResultsStatus || !tableList) {
      return;
    }

    const total = items.length;
    const visible = visibleItems.length;
    const term = searchInput ? searchInput.value.trim() : '';
    const message = term
      ? `Showing ${visible} of ${total} tables for ${term}.`
      : `Showing ${visible} tables.`;

    tableResultsStatus.textContent = message;
    if (tableCountBadge) {
      tableCountBadge.textContent = term
        ? `${visible} of ${total} tables`
        : `${visible} tables`;
    }
    tableList.setAttribute('aria-label', `Available tables. ${visible} result${visible === 1 ? '' : 's'}.`);
  }
  
  function selectTableByIndex(index) {
    const selected = visibleItems[index];
    if (!selected) return;
    closeModal();
    onSelect(selected.dataset.table);
  }

  function updateHighlight() {
    items.forEach((item) => {
      item.style.display = 'none';
      item.style.background = '#f8f9fa';
      item.style.color = 'black';
    });

    visibleItems.forEach((item, i) => {
      item.style.display = '';
      item.style.background = i === selectedIndex ? '#007bff' : '#f8f9fa';
      item.style.color = i === selectedIndex ? 'white' : 'black';
    });

    const activeItem = visibleItems[selectedIndex];
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  }

  updateHighlight();
  announceTableCount();
  
  items.forEach(item => {
    item.onclick = () => {
      closeModal();
      onSelect(item.dataset.table);
    };
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const term = searchInput.value;
      visibleItems = items.filter((item) =>
        item.dataset.table.toLowerCase().includes(term.trim().toLowerCase())
      );
      selectedIndex = 0;
      updateHighlight();
      announceTableCount();
    });
  }
  
  modal.addEventListener('keydown', (e) => {
    if (trapTabNavigation(e, modal)) {
      return;
    }

    // Keep table search input typing/caret behavior intact.
    if (searchInput && document.activeElement === searchInput) {
      if (e.key !== 'Escape') {
        return;
      }
    }

    if (visibleItems.length === 0 && e.key !== 'Escape') {
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = Math.max(0, selectedIndex - 1);
      updateHighlight();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = Math.min(visibleItems.length - 1, selectedIndex + 1);
      updateHighlight();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      selectTableByIndex(selectedIndex);
    } else if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  modal.querySelector('#cancelTableSelect').onclick = closeModal;

  if (searchInput) {
    searchInput.focus();
  } else {
    modal.focus();
  }
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^