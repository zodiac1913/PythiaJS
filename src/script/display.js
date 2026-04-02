//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class display.js
 * @description Handles query result rendering, UI display updates, 
 * and client-side export presentation helpers.
 */

// Display & Formatting Functions
import { currentConnection, currentFormat, lastResult, allConnections } from './state.js';

const TABLE_PAGE_SIZES = [100, 500, 1000, 2000];
let tableViewState = {
  page: 1,
  pageSize: 100,
  resultRef: null
};

function resetTableViewState(result) {
  tableViewState = {
    page: 1,
    pageSize: tableViewState.pageSize,
    resultRef: result
  };
}

function ensureTableViewState(result) {
  if (tableViewState.resultRef !== result) {
    resetTableViewState(result);
  }
}

function formatTimestamp(isoString) {
  if (!isoString) return 'N/A';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return 'N/A';
  return date.toLocaleString();
}

function formatDuration(ms) {
  if (!Number.isFinite(ms) || ms < 0) return 'N/A';
  return `${ms.toLocaleString()} ms`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderPaginatedTable(answer, result) {
  const rows = Array.isArray(result.rows) ? result.rows : [];
  if (rows.length === 0) {
    answer.innerHTML = '<p class="text-muted">No results</p>';
    return;
  }

  ensureTableViewState(result);

  const totalRows = Number.isFinite(result?.meta?.totalRows) ? result.meta.totalRows : rows.length;
  const totalPages = Math.max(1, Math.ceil(rows.length / tableViewState.pageSize));
  tableViewState.page = Math.min(Math.max(1, tableViewState.page), totalPages);

  const startIndex = (tableViewState.page - 1) * tableViewState.pageSize;
  const endIndex = Math.min(startIndex + tableViewState.pageSize, rows.length);
  const visibleRows = rows.slice(startIndex, endIndex);
  const cols = Object.keys(rows[0]);

  const headerHtml = `
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
      <div class="small text-muted">
        <strong>${totalRows.toLocaleString()}</strong> total records | Load time: <strong>${formatDuration(result?.meta?.loadMs)}</strong> | Query finished: <strong>${formatTimestamp(result?.meta?.finishedAt)}</strong>
      </div>
      <div class="d-flex align-items-center gap-2">
        <label class="form-label mb-0 small" for="tablePageSize">Rows/page</label>
        <select id="tablePageSize" class="form-select form-select-sm" style="width:auto">
          ${TABLE_PAGE_SIZES.map(size => `<option value="${size}" ${size === tableViewState.pageSize ? 'selected' : ''}>${size}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
      <div class="small text-muted">
        Showing ${startIndex + 1}-${endIndex} of ${rows.length.toLocaleString()} loaded rows
      </div>
      <div class="btn-group btn-group-sm" role="group" aria-label="Table pagination">
        <button id="tableFirstPage" class="btn btn-outline-secondary" ${tableViewState.page === 1 ? 'disabled' : ''}>First</button>
        <button id="tablePrevPage" class="btn btn-outline-secondary" ${tableViewState.page === 1 ? 'disabled' : ''}>Prev</button>
        <button class="btn btn-outline-secondary disabled">Page ${tableViewState.page} / ${totalPages}</button>
        <button id="tableNextPage" class="btn btn-outline-secondary" ${tableViewState.page === totalPages ? 'disabled' : ''}>Next</button>
        <button id="tableLastPage" class="btn btn-outline-secondary" ${tableViewState.page === totalPages ? 'disabled' : ''}>Last</button>
      </div>
    </div>
  `;

  let html = `${headerHtml}<table class="table table-sm table-striped"><thead><tr>`;
  cols.forEach(col => {
    html += `<th>${escapeHtml(col)}</th>`;
  });
  html += '</tr></thead><tbody>';
  visibleRows.forEach(row => {
    html += '<tr>';
    cols.forEach(col => {
      html += `<td>${escapeHtml(row[col] ?? '')}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  answer.innerHTML = html;

  const pageSizeEl = document.getElementById('tablePageSize');
  const firstBtn = document.getElementById('tableFirstPage');
  const prevBtn = document.getElementById('tablePrevPage');
  const nextBtn = document.getElementById('tableNextPage');
  const lastBtn = document.getElementById('tableLastPage');

  if (pageSizeEl) {
    pageSizeEl.onchange = () => {
      const nextSize = Number.parseInt(pageSizeEl.value, 10);
      if (!TABLE_PAGE_SIZES.includes(nextSize)) return;
      const previousStart = (tableViewState.page - 1) * tableViewState.pageSize;
      tableViewState.pageSize = nextSize;
      tableViewState.page = Math.floor(previousStart / tableViewState.pageSize) + 1;
      displayResult(result);
    };
  }

  if (firstBtn) {
    firstBtn.onclick = () => {
      tableViewState.page = 1;
      displayResult(result);
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      tableViewState.page = Math.max(1, tableViewState.page - 1);
      displayResult(result);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      tableViewState.page = Math.min(totalPages, tableViewState.page + 1);
      displayResult(result);
    };
  }

  if (lastBtn) {
    lastBtn.onclick = () => {
      tableViewState.page = totalPages;
      displayResult(result);
    };
  }
}

export function displayResult(result) {
  const answer = document.getElementById('answer');
  
  if (currentFormat === 'table') {
    renderPaginatedTable(answer, result);
  } else if (currentFormat === 'json') {
    if (!result.rows || result.rows.length === 0) {
      answer.innerHTML = '<pre>No results</pre>';
      return;
    }
    let json = '';
    result.rows.forEach(row => {
      json += JSON.stringify(row) + '\n';
    });
    answer.innerHTML = `<pre>${json}</pre>`;
  } else if (currentFormat === 'fixed') {
    if (!result.rows || result.rows.length === 0) {
      answer.innerHTML = '<pre>No results</pre>';
      return;
    }
    const cols = Object.keys(result.rows[0]);
    const widths = cols.map(col => Math.max(col.length, ...result.rows.map(r => String(r[col] ?? '').length)));
    let text = cols.map((col, i) => col.padEnd(widths[i])).join(' | ') + '\n';
    text += widths.map(w => '-'.repeat(w)).join('-+-') + '\n';
    result.rows.forEach(row => {
      text += cols.map((col, i) => String(row[col] ?? '').padEnd(widths[i])).join(' | ') + '\n';
    });
    answer.innerHTML = `<pre>${text}</pre>`;
  } else if (currentFormat === 'csv') {
    if (!result.rows || result.rows.length === 0) {
      answer.innerHTML = '<pre>No results</pre>';
      return;
    }
    const cols = Object.keys(result.rows[0]);
    let csv = cols.join(',') + '\n';
    result.rows.forEach(row => {
      csv += cols.map(col => {
        const val = row[col] ?? '';
        return typeof val === 'string' && val.includes(',') ? `"${val}"` : val;
      }).join(',') + '\n';
    });
    answer.innerHTML = `<pre>${csv}</pre>`;
  }
}

export function updateQueryBoxStyling() {
  const queryBox = document.getElementById('q');
  if (currentConnection === 'default') {
    queryBox.style.border = '2px solid #dc3545';
    queryBox.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
  } else {
    queryBox.style.border = '';
    queryBox.style.backgroundColor = '';
  }
}

export function updateCurrentConnectionBadge() {
  const conn = allConnections[currentConnection] || allConnections.default;
  const badge = document.getElementById('currentConnBadge');
  if (!badge || !conn) return;
  badge.textContent = `${conn.name} (${conn.type})`;
}

export async function saveAs(format) {
  const cols = Object.keys(lastResult.rows[0]);
  let content, filename, type;
  
  if (format === 'xlsx') {
    const res = await fetch('/api/exportXlsx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: lastResult.rows })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'results.xlsx';
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  
  if (format === 'pdf') {
    const res = await fetch('/api/exportPdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: lastResult.rows })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'results.pdf';
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  
  if (format === 'html') {
    content = '<table border="1"><thead><tr>';
    cols.forEach(col => content += `<th>${col}</th>`);
    content += '</tr></thead><tbody>';
    lastResult.rows.forEach(row => {
      content += '<tr>';
      cols.forEach(col => content += `<td>${row[col] ?? ''}</td>`);
      content += '</tr>';
    });
    content += '</tbody></table>';
    filename = 'results.html';
    type = 'text/html';
  } else if (format === 'csv') {
    content = cols.join(',') + '\n';
    lastResult.rows.forEach(row => {
      content += cols.map(col => {
        const val = row[col] ?? '';
        return typeof val === 'string' && val.includes(',') ? `"${val}"` : val;
      }).join(',') + '\n';
    });
    filename = 'results.csv';
    type = 'text/csv';
  } else if (format === 'json') {
    content = JSON.stringify(lastResult, null, 2);
    filename = 'results.json';
    type = 'application/json';
  } else if (format === 'fixed') {
    const widths = cols.map(col => Math.max(col.length, ...lastResult.rows.map(r => String(r[col] ?? '').length)));
    content = cols.map((col, i) => col.padEnd(widths[i])).join(' | ') + '\n';
    content += widths.map(w => '-'.repeat(w)).join('-+-') + '\n';
    lastResult.rows.forEach(row => {
      content += cols.map((col, i) => String(row[col] ?? '').padEnd(widths[i])).join(' | ') + '\n';
    });
    filename = 'results.txt';
    type = 'text/plain';
  }
  
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^