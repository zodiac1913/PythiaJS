// Core API & Connection Functions
import { currentConnection, allConnections, setCurrentConnection } from './state.js';
import { updateCurrentConnectionBadge, updateQueryBoxStyling } from './display.js';
import { loadSchema } from './autocomplete.js';

const DEFAULT_CONNECTION_STORAGE_KEY = 'pythia.defaultConnectionId';
let hasAppliedStartupDefault = false;

function getStoredDefaultConnectionId() {
  return globalThis.localStorage.getItem(DEFAULT_CONNECTION_STORAGE_KEY);
}

function setStoredDefaultConnectionId(connId) {
  globalThis.localStorage.setItem(DEFAULT_CONNECTION_STORAGE_KEY, connId);
}

function clearStoredDefaultConnectionId() {
  globalThis.localStorage.removeItem(DEFAULT_CONNECTION_STORAGE_KEY);
}

function getStartupConnectionId(availableIds) {
  const favoriteId = getStoredDefaultConnectionId();
  if (favoriteId && availableIds.has(favoriteId)) {
    return favoriteId;
  }
  if (favoriteId && !availableIds.has(favoriteId)) {
    clearStoredDefaultConnectionId();
  }
  return 'default';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function setDefaultConnection(connId) {
  setStoredDefaultConnectionId(connId);
}

export function getDefaultConnectionId() {
  return getStoredDefaultConnectionId() || 'default';
}

export async function call(endpoint, method = 'GET', body = null, fetchOptions = {}) {
  try {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...fetchOptions
    };
    if (body) options.body = JSON.stringify(body);
    
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      throw new Error('HTTP error! status: ' + res.status);
    }
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (error) {
    console.error('API call failed:', endpoint, error);
    throw error;
  }
}

export async function loadConnections() {
  try {
    const conns = await call('/api/getConnections');
    const list = document.getElementById("connectionsList");

    const freshIds = new Set(['default', ...conns.map(conn => conn.id)]);
    Object.keys(allConnections).forEach(id => {
      if (!freshIds.has(id)) {
        delete allConnections[id];
      }
    });

    conns.forEach(conn => {
      allConnections[conn.id] = conn;
    });
    
    if (!hasAppliedStartupDefault) {
      const startupConnectionId = getStartupConnectionId(freshIds);
      if (startupConnectionId !== currentConnection) {
        selectConnection(startupConnectionId);
      }
      hasAppliedStartupDefault = true;
    }

    const defaultConnectionId = getDefaultConnectionId();
    list.innerHTML = '';

    const addLi = document.createElement('li');
    addLi.innerHTML = '<a class="dropdown-item" href="#" id="addConnection" title="Add New Connection">Add +</a>';
    list.appendChild(addLi);

    const dividerLi = document.createElement('li');
    dividerLi.innerHTML = '<hr class="dropdown-divider">';
    list.appendChild(dividerLi);

    const defaultStarClass = defaultConnectionId === 'default' ? 'bi-star-fill' : 'bi-star';
    const internalActiveClass = currentConnection === 'default' ? 'active' : '';
    const internalLi = document.createElement('li');
    internalLi.innerHTML = `
      <div class="dropdown-item d-flex align-items-center gap-2 connection-item ${internalActiveClass}" data-conn-row="default">
        <button class="btn btn-link text-warning p-0 border-0" data-default-toggle="default" title="Set as default" aria-label="Set as default connection">
          <i class="bi ${defaultStarClass}"></i>
        </button>
        <a class="text-reset text-decoration-none flex-grow-1" href="#" data-conn="default" title="Internal Database">Internal (SQLite)</a>
      </div>
    `;
    list.appendChild(internalLi);

    conns.forEach(conn => {
      const starClass = defaultConnectionId === conn.id ? 'bi-star-fill' : 'bi-star';
      const activeClass = conn.id === currentConnection ? 'active' : '';
      const safeId = escapeHtml(conn.id);
      const safeName = escapeHtml(conn.name);
      const safeType = escapeHtml(conn.type);
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="dropdown-item d-flex align-items-center gap-2 connection-item ${activeClass}" data-conn-row="${safeId}">
          <button class="btn btn-link text-warning p-0 border-0" data-default-toggle="${safeId}" title="Set as default" aria-label="Set as default connection">
            <i class="bi ${starClass}"></i>
          </button>
          <a class="text-reset text-decoration-none flex-grow-1" href="#" data-conn-select="${safeId}" title="Connect to ${safeName} database">${safeName} (${safeType})</a>
        </div>
      `;
      list.appendChild(li);
    });

    document.querySelectorAll('[data-conn]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        selectConnection(btn.dataset.conn);
      };
    });

    document.querySelectorAll('[data-conn-select]').forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        selectConnection(btn.dataset.connSelect);
      };
    });

    document.querySelectorAll('[data-default-toggle]').forEach(btn => {
      btn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const connId = btn.dataset.defaultToggle;
        setDefaultConnection(connId);
        await loadConnections();
      };
    });
    
    updateCurrentConnectionBadge();
  } catch (error) {
    console.error('Error in loadConnections:', error);
  }
}

export function selectConnection(connId) {
  setCurrentConnection(connId);
  document.querySelectorAll('[data-conn-row]').forEach(el => {
    if (el.dataset.connRow === connId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  updateCurrentConnectionBadge();
  updateQueryBoxStyling();
  loadSchema();
  
  // Reset query window and results
  document.getElementById('q').value = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('answer').style.display = 'none';

  const historySearch = document.getElementById('historySearch');
  if (historySearch) {
    historySearch.value = '';
  }

  document.dispatchEvent(new CustomEvent('connection-changed', { detail: { connectionId: connId } }));
}
