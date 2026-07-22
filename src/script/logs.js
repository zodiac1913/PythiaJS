import { call } from './api.js';

const DEFAULT_LOG_LIMIT = 200;
let activeWorkspaceTab = 'query';
let cachedTimelinePresets = [];
let activeTimelinePreset = 'balanced';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatDateTime(value) {
  if (!value) return 'N/A';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return escapeHtml(value);
  }
  return parsed.toLocaleString();
}

function formatBytes(size) {
  if (!Number.isFinite(size) || size < 0) return '0 B';
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getLogsElements() {
  return {
    tabs: Array.from(document.querySelectorAll('[data-workspace-tab]')),
    panes: Array.from(document.querySelectorAll('[data-workspace-pane]')),
    status: document.getElementById('logsStatusCards'),
    archiveFiles: document.getElementById('logsArchiveFiles'),
    table: document.getElementById('logsTableWrap'),
    refreshButton: document.getElementById('refreshLogsTab'),
    archiveButton: document.getElementById('runLogArchiveNow'),
    presetSelect: document.getElementById('logsTimelinePreset'),
    presetApplyButton: document.getElementById('applyLogsTimelinePreset'),
    banner: document.getElementById('logsTabBanner')
  };
}

function setLogsBanner(message, tone = 'muted') {
  const { banner } = getLogsElements();
  if (!banner) {
    return;
  }

  banner.className = `logs-tab-banner alert alert-${tone}`;
  banner.textContent = message;
}

function setActiveWorkspaceTab(nextTab) {
  activeWorkspaceTab = nextTab;
  const { tabs, panes } = getLogsElements();

  tabs.forEach((tabButton) => {
    const isActive = tabButton.dataset.workspaceTab === nextTab;
    tabButton.classList.toggle('active', isActive);
    tabButton.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tabButton.tabIndex = isActive ? 0 : -1;
  });

  panes.forEach((pane) => {
    const isActive = pane.dataset.workspacePane === nextTab;
    pane.hidden = !isActive;
    pane.classList.toggle('active', isActive);
    pane.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });
}

function renderStatusCards(status, liveLogs) {
  const { status: statusEl } = getLogsElements();
  if (!statusEl) return;

  const summary = status?.lastSummary || {};
  const skippedReason = summary.skippedReason
    ? `<div class="small text-muted">Last skip reason: ${escapeHtml(summary.skippedReason)}</div>`
    : '';

  statusEl.innerHTML = `
    <div class="logs-status-grid">
      <article class="logs-status-card">
        <div class="logs-status-label">Timeline Profile</div>
        <div class="logs-status-value">${escapeHtml(status?.activeTimelinePresetLabel || 'Balanced')}</div>
        <div class="small text-muted">Key: ${escapeHtml(status?.activeTimelinePreset || 'balanced')}</div>
      </article>
      <article class="logs-status-card">
        <div class="logs-status-label">In-App Retention</div>
        <div class="logs-status-value">${escapeHtml(status?.retentionDays || '14')} days</div>
        <div class="small text-muted">Recent logs stay queryable in SQLite.</div>
      </article>
      <article class="logs-status-card">
        <div class="logs-status-label">Archive Trigger</div>
        <div class="logs-status-value">${escapeHtml(status?.archiveMinAgeDays || '30')} days</div>
        <div class="small text-muted">Archive starts once history is at least this old.</div>
      </article>
      <article class="logs-status-card">
        <div class="logs-status-label">Live Log Rows</div>
        <div class="logs-status-value">${Array.isArray(liveLogs) ? liveLogs.length : 0}</div>
        <div class="small text-muted">Showing newest ${DEFAULT_LOG_LIMIT} app log rows.</div>
      </article>
      <article class="logs-status-card">
        <div class="logs-status-label">Last Archive Run</div>
        <div class="logs-status-value">${formatDateTime(status?.lastFinishedAt)}</div>
        <div class="small text-muted">Moved ${summary.exportedRows || 0} rows in ${summary.exportedGroups || 0} file groups.</div>
        ${skippedReason}
      </article>
    </div>
  `;
}

function renderTimelinePresetSelector() {
  const { presetSelect } = getLogsElements();
  if (!presetSelect) {
    return;
  }

  presetSelect.innerHTML = cachedTimelinePresets
    .map((preset) => {
      const selected = preset.key === activeTimelinePreset ? 'selected' : '';
      return `<option value="${escapeHtml(preset.key)}" ${selected}>${escapeHtml(preset.label)}</option>`;
    })
    .join('');
}

function renderArchiveFiles(files) {
  const { archiveFiles } = getLogsElements();
  if (!archiveFiles) return;

  if (!Array.isArray(files) || files.length === 0) {
    archiveFiles.innerHTML = '<div class="text-muted small">No archived text log files found yet.</div>';
    return;
  }

  archiveFiles.innerHTML = files.map((file) => `
    <div class="logs-file-row">
      <div>
        <div class="logs-file-name">${escapeHtml(file.name)}</div>
        <div class="small text-muted">${escapeHtml(file.path)}</div>
      </div>
      <div class="text-end small text-muted">
        <div>${formatBytes(file.size)}</div>
        <div>${formatDateTime(file.modifiedAt)}</div>
      </div>
    </div>
  `).join('');
}

function renderLiveLogs(rows) {
  const { table } = getLogsElements();
  if (!table) return;

  if (!Array.isArray(rows) || rows.length === 0) {
    table.innerHTML = '<div class="text-muted">No in-app logs available.</div>';
    return;
  }

  table.innerHTML = `
    <div class="table-responsive">
      <table class="table table-sm table-striped align-middle logs-table">
        <thead>
          <tr>
            <th>Created</th>
            <th>Level</th>
            <th>Source</th>
            <th>Connection</th>
            <th>Message</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHtml(row.created_at || '')}</td>
              <td>${escapeHtml(row.level || '')}</td>
              <td>${escapeHtml(row.source || '')}</td>
              <td>${escapeHtml(row.connection || 'default')}</td>
              <td>${escapeHtml(row.message || '')}</td>
              <td><pre class="logs-detail-pre">${escapeHtml(row.detail || '')}</pre></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

export async function refreshLogsTab() {
  const { refreshButton, archiveButton, presetApplyButton } = getLogsElements();
  if (refreshButton) refreshButton.disabled = true;
  if (archiveButton) archiveButton.disabled = true;
  if (presetApplyButton) presetApplyButton.disabled = true;
  setLogsBanner('Refreshing logs view...', 'secondary');

  try {
    const [liveLogs, status, archiveFiles, timeline] = await Promise.all([
      call(`/api/getLogs?limit=${DEFAULT_LOG_LIMIT}`),
      call('/api/logMaintenanceStatus'),
      call('/api/listArchivedLogs'),
      call('/api/logTimelinePresets')
    ]);

    cachedTimelinePresets = Array.isArray(timeline?.presets) ? timeline.presets : [];
    activeTimelinePreset = status?.activeTimelinePreset || timeline?.active || activeTimelinePreset;

    renderTimelinePresetSelector();
    renderStatusCards(status, liveLogs);
    renderArchiveFiles(archiveFiles);
    renderLiveLogs(liveLogs);
    setLogsBanner('Logs view is current.', 'light');
  } catch (error) {
    setLogsBanner(`Could not refresh logs: ${error?.message || error}`, 'danger');
  } finally {
    if (refreshButton) refreshButton.disabled = false;
    if (archiveButton) archiveButton.disabled = false;
    if (presetApplyButton) presetApplyButton.disabled = false;
  }
}

async function applyTimelinePreset() {
  const { presetSelect, presetApplyButton } = getLogsElements();
  const presetKey = presetSelect?.value;
  if (!presetKey) {
    return;
  }

  if (presetApplyButton) {
    presetApplyButton.disabled = true;
  }
  setLogsBanner(`Applying ${presetKey} timeline profile...`, 'warning');

  try {
    await call('/api/setLogTimelinePreset', 'POST', { presetKey });
    await refreshLogsTab();
    setLogsBanner(`Timeline profile set to ${presetKey}.`, 'success');
  } catch (error) {
    setLogsBanner(`Could not apply timeline profile: ${error?.message || error}`, 'danger');
  } finally {
    if (presetApplyButton) {
      presetApplyButton.disabled = false;
    }
  }
}

async function runArchiveNow() {
  const { archiveButton } = getLogsElements();
  if (archiveButton) archiveButton.disabled = true;
  setLogsBanner('Running archive check...', 'warning');

  try {
    const summary = await call('/api/runLogMaintenance', 'POST', {});
    await refreshLogsTab();
    setLogsBanner(`Archive check complete. Exported ${summary.exportedRows || 0} rows.`, 'success');
  } catch (error) {
    setLogsBanner(`Archive check failed: ${error?.message || error}`, 'danger');
  } finally {
    if (archiveButton) archiveButton.disabled = false;
  }
}

export function initializeLogsTab() {
  const { tabs, refreshButton, archiveButton, presetApplyButton } = getLogsElements();

  function activateTabByIndex(index, { focus = false } = {}) {
    if (!tabs.length) {
      return;
    }

    const bounded = Math.max(0, Math.min(index, tabs.length - 1));
    const tabButton = tabs[bounded];
    const nextTab = tabButton.dataset.workspaceTab || 'query';
    setActiveWorkspaceTab(nextTab);
    if (focus) {
      tabButton.focus();
    }

    if (nextTab === 'logs') {
      refreshLogsTab();
    }
  }

  tabs.forEach((tabButton, index) => {
    tabButton.addEventListener('click', () => {
      activateTabByIndex(index);
    });

    tabButton.addEventListener('keydown', (event) => {
      if (!tabs.length) {
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        activateTabByIndex((index + 1) % tabs.length, { focus: true });
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        activateTabByIndex((index - 1 + tabs.length) % tabs.length, { focus: true });
        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        activateTabByIndex(0, { focus: true });
        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        activateTabByIndex(tabs.length - 1, { focus: true });
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateTabByIndex(index, { focus: true });
      }
    });
  });

  refreshButton?.addEventListener('click', async () => {
    await refreshLogsTab();
  });

  archiveButton?.addEventListener('click', async () => {
    await runArchiveNow();
  });

  presetApplyButton?.addEventListener('click', async () => {
    await applyTimelinePreset();
  });

  document.addEventListener('logs-refresh', async () => {
    if (activeWorkspaceTab === 'logs') {
      await refreshLogsTab();
    }
  });

  setActiveWorkspaceTab('query');
}
