//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class modals.js
 * @description Manages modal dialogs for PythiaJS, including connection details, adding connections, and saving files.
 */

// Modal & UI Functions
import { allConnections, currentConnection } from './state.js';
import { call, loadConnections, selectConnection } from './api.js';
import { saveAs } from './display.js';

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    return !el.disabled && el.getAttribute('aria-hidden') !== 'true' && el.offsetParent !== null;
  });
}

function attachModalKeyboard(modal, closeModal) {
  const keydownHandler = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }

    if (e.key !== 'Tab') {
      return;
    }

    const focusables = getFocusableElements(modal);
    if (!focusables.length) {
      e.preventDefault();
      return;
    }

    const first = focusables[0];
    const last = focusables.at(-1);
    const isShift = e.shiftKey;

    if (isShift && document.activeElement === first) {
      e.preventDefault();
      last.focus();
      return;
    }

    if (!isShift && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const focusinHandler = (event) => {
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
      modal.setAttribute('tabindex', '-1');
      modal.focus();
    }
  };

  const observer = new MutationObserver(() => {
    if (modal.isConnected) {
      return;
    }

    modal.removeEventListener('keydown', keydownHandler);
    document.removeEventListener('focusin', focusinHandler);
    observer.disconnect();
  });

  modal.addEventListener('keydown', keydownHandler);
  document.addEventListener('focusin', focusinHandler);
  observer.observe(document.body, { childList: true, subtree: true });

  const [firstFocusable] = getFocusableElements(modal);
  if (firstFocusable) {
    firstFocusable.focus();
  } else {
    modal.setAttribute('tabindex', '-1');
    modal.focus();
  }
}

export function showConnectionDetailsModal() {
  const conn = allConnections[currentConnection];
  
  if (conn.id === 'default') {
    const modal = document.createElement('div');
    const closeModal = () => modal.remove();
    modal.innerHTML = `
      <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5)" role="dialog" aria-modal="true" aria-label="Connection details modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title">Connection Details</h5></div>
            <div class="modal-body">
              <p><strong>Name:</strong> Internal</p>
              <p><strong>Type:</strong> SQLite</p>
              <p><strong>File:</strong> pythia.db</p>
            </div>
            <div class="modal-footer"><button class="btn btn-secondary" id="modalClose" title="Close" aria-label="Close">Close</button></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('#modalClose').onclick = closeModal;
    attachModalKeyboard(modal, closeModal);
  } else {
    const connData = allConnections[currentConnection];
    const originalName = connData.name;
    const originalType = connData.type;
    let originalConfig = connData.config || {};
    if (typeof originalConfig === 'string') {
      originalConfig = JSON.parse(originalConfig);
    }
    
    const modal = document.createElement('div');
    const closeModal = () => modal.remove();
    modal.innerHTML = `
      <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5)" role="dialog" aria-modal="true" aria-label="Connection details modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title">Connection Details</h5></div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Connection Name</label>
                <input type="text" id="detailName" class="form-control" value="${connData.name || ''}" readonly>
              </div>
              <div class="mb-3">
                <label class="form-label">Database Type</label>
                <input type="text" id="detailType" class="form-control" value="${connData.type || ''}" readonly>
              </div>
              <div id="detailFields"></div>
              <div id="detailStatus" style="display:none;padding:10px;border-radius:4px;margin-top:10px;"></div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-danger me-auto" id="detailDelete" title="Delete connection" aria-label="Delete connection">Delete</button>
              <button class="btn btn-secondary" id="detailClose" title="Close" aria-label="Close">Close</button>
              <button class="btn btn-outline-secondary" id="detailCancel" style="display:none;" title="Cancel changes" aria-label="Cancel changes">Cancel</button>
              <button class="btn btn-primary" id="detailEdit" title="Edit connection" aria-label="Edit connection">Edit</button>
              <button class="btn btn-success" id="detailSave" style="display:none;" title="Save changes" aria-label="Save changes">Save</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    attachModalKeyboard(modal, closeModal);

    const detailFields = modal.querySelector('#detailFields');
    const detailStatus = modal.querySelector('#detailStatus');
    const nameInput = modal.querySelector('#detailName');
    const closeBtn = modal.querySelector('#detailClose');
    const cancelBtn = modal.querySelector('#detailCancel');
    const editBtn = modal.querySelector('#detailEdit');
    const saveBtn = modal.querySelector('#detailSave');
    const deleteBtn = modal.querySelector('#detailDelete');

    function getMssqlDetailSecurityFields(config) {
      const encryptChecked = config.encrypt ? 'checked' : '';
      const trustCertChecked = config.trustServerCertificate ? 'checked' : '';
      const mssqlAuthMode = config.authMode === 'ntlm' ? 'ntlm' : 'sql';
      const mssqlSqlSelected = mssqlAuthMode === 'sql' ? 'selected' : '';
      const mssqlNtlmSelected = mssqlAuthMode === 'ntlm' ? 'selected' : '';
      const mssqlDomainValue = config.domain || '';
      const mssqlDomainDisabled = mssqlAuthMode === 'ntlm' ? '' : 'disabled';
      return `<div class="mb-3"><label class="form-label">Authentication</label><select id="detailAuthMode" class="form-select" disabled><option value="sql" ${mssqlSqlSelected}>SQL Login</option><option value="ntlm" ${mssqlNtlmSelected}>Windows (NTLM)</option></select></div><div class="mb-3"><label class="form-label">Domain (NTLM)</label><input type="text" id="detailDomain" class="form-control" value="${mssqlDomainValue}" ${mssqlDomainDisabled} readonly></div><div class="form-check mb-2"><input type="checkbox" id="detailEncrypt" class="form-check-input" ${encryptChecked} disabled><label class="form-check-label">Use Encryption</label></div><div class="form-check mb-2"><input type="checkbox" id="detailTrustCert" class="form-check-input" ${trustCertChecked} disabled><label class="form-check-label">Trust Server Certificate</label></div>`;
    }

    function syncDetailDomainState(isEdit) {
      if (originalType !== 'mssql') {
        return;
      }
      const authMode = modal.querySelector('#detailAuthMode')?.value || 'sql';
      const domainInput = modal.querySelector('#detailDomain');
      if (!domainInput) {
        return;
      }
      const useNtlm = authMode === 'ntlm';
      domainInput.disabled = !isEdit || !useNtlm;
      domainInput.readOnly = !isEdit;
    }

    function renderFields(type, config) {
      if (type === 'sqlite') {
        detailFields.innerHTML = `
          <div class="mb-3">
            <label class="form-label">File Path</label>
            <input type="text" id="detailFile" class="form-control" value="${config.file || ''}" readonly>
          </div>
        `;
      } else {
        const mssqlSecurityFields = type === 'mssql' ? getMssqlDetailSecurityFields(config) : '';
        detailFields.innerHTML = `
          <div class="mb-3"><label class="form-label">Host</label><input type="text" id="detailHost" class="form-control" value="${config.host || ''}" readonly></div>
          <div class="mb-3"><label class="form-label">Port</label><input type="number" id="detailPort" class="form-control" value="${config.port || ''}" readonly></div>
          <div class="mb-3"><label class="form-label">Database</label><input type="text" id="detailDatabase" class="form-control" value="${config.database || ''}" readonly></div>
          <div class="mb-3"><label class="form-label">Username</label><input type="text" id="detailUsername" class="form-control" value="${config.username || ''}" readonly></div>
          <div class="mb-3"><label class="form-label">Password</label><input type="password" id="detailPassword" class="form-control" value="${config.password || ''}" readonly></div>
          ${mssqlSecurityFields}
        `;
      }
    }

    function setStatus(message, isError) {
      detailStatus.style.display = 'block';
      detailStatus.style.background = isError ? '#f8d7da' : '#d4edda';
      detailStatus.style.color = isError ? '#721c24' : '#155724';
      detailStatus.style.border = '1px solid ' + (isError ? '#f5c6cb' : '#c3e6cb');
      detailStatus.textContent = message;
    }

    function setEditMode(isEdit) {
      nameInput.readOnly = !isEdit;
      detailFields.querySelectorAll('input').forEach((el) => {
        if (el.type === 'checkbox') {
          el.disabled = !isEdit;
        } else {
          el.readOnly = !isEdit;
        }
      });
      detailFields.querySelectorAll('select').forEach((el) => {
        el.disabled = !isEdit;
      });
      syncDetailDomainState(isEdit);

      closeBtn.style.display = isEdit ? 'none' : '';
      editBtn.style.display = isEdit ? 'none' : '';
      deleteBtn.style.display = isEdit ? 'none' : '';
      cancelBtn.style.display = isEdit ? '' : 'none';
      saveBtn.style.display = isEdit ? '' : 'none';
    }

    function getConfigFromDetails() {
      if (originalType === 'sqlite') {
        return { file: modal.querySelector('#detailFile').value.trim() };
      }

      const config = {
        host: modal.querySelector('#detailHost').value.trim(),
        port: Number.parseInt(modal.querySelector('#detailPort').value, 10),
        database: modal.querySelector('#detailDatabase').value.trim(),
        username: modal.querySelector('#detailUsername').value.trim(),
        password: modal.querySelector('#detailPassword').value
      };

      if (originalType === 'mssql') {
        config.authMode = modal.querySelector('#detailAuthMode')?.value || 'sql';
        config.domain = modal.querySelector('#detailDomain')?.value?.trim() || '';
        config.encrypt = !!modal.querySelector('#detailEncrypt')?.checked;
        config.trustServerCertificate = !!modal.querySelector('#detailTrustCert')?.checked;
      }

      return config;
    }

    function applyOriginal() {
      nameInput.value = originalName || '';
      renderFields(originalType, originalConfig);
      detailStatus.style.display = 'none';
      setEditMode(false);
    }

    renderFields(originalType, originalConfig);
    setEditMode(false);

    modal.addEventListener('change', (event) => {
      if (event.target?.id !== 'detailAuthMode') {
        return;
      }
      setEditMode(true);
    });

    closeBtn.onclick = closeModal;
    editBtn.onclick = () => {
      detailStatus.style.display = 'none';
      setEditMode(true);
    };

    cancelBtn.onclick = () => {
      applyOriginal();
    };

    saveBtn.onclick = async () => {
      try {
        const name = nameInput.value.trim();
        if (!name) {
          setStatus('Connection name is required.', true);
          return;
        }

        const updatedConfig = getConfigFromDetails();
        if (originalType === 'sqlite') {
          if (!updatedConfig.file) {
            setStatus('File path is required.', true);
            return;
          }
        } else {
          if (!updatedConfig.host || !updatedConfig.database || !updatedConfig.username) {
            setStatus('Host, Database, and Username are required.', true);
            return;
          }
          if (!Number.isFinite(updatedConfig.port)) {
            setStatus('Port must be a valid number.', true);
            return;
          }
          if (originalType === 'mssql' && updatedConfig.authMode === 'ntlm' && !updatedConfig.domain && !updatedConfig.username.includes('\\')) {
            setStatus(String.raw`NTLM requires Domain or DOMAIN\username format.`, true);
            return;
          }
        }

        setStatus('Saving connection...', false);
        await call('/api/updateConnection', 'POST', {
          id: connData.id,
          name,
          type: originalType,
          config: updatedConfig
        });

        await loadConnections();
        selectConnection(connData.id);
        closeModal();
      } catch (err) {
        setStatus('Save error: ' + err.message, true);
      }
    };

    deleteBtn.onclick = async () => {
      const ok = confirm(`Delete connection "${connData.name}"?`);
      if (!ok) return;

      try {
        setStatus('Deleting connection...', false);
        await call('/api/deleteConnection', 'POST', { id: connData.id });
        await loadConnections();
        selectConnection('default');
        closeModal();
      } catch (err) {
        setStatus('Delete error: ' + err.message, true);
      }
    };
  }
}

export function showAddConnectionModal() {
  const modal = document.createElement('div');
  const closeModal = () => modal.remove();
  modal.innerHTML = `
    <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5)" role="dialog" aria-modal="true" aria-label="Add connection modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Connection</h5>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Database Type</label>
              <select id="dbType" class="form-select">
                <option value="sqlite">SQLite</option>
                <option value="postgres">PostgreSQL</option>
                <option value="mssql">MS SQL Server</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Connection Name</label>
              <input type="text" id="connName" class="form-control">
            </div>
            <div id="configFields"></div>
            <div id="connStatus" style="display:none;padding:10px;border-radius:4px;margin-top:10px;"></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" id="modalCancel" title="Cancel" aria-label="Cancel">Cancel</button>
            <button class="btn btn-info" id="modalTest" title="Test connection" aria-label="Test connection">Test Connection</button>
            <button class="btn btn-primary" id="modalSave" title="Save connection" aria-label="Save connection">Save</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  attachModalKeyboard(modal, closeModal);
  
  function getConfigFromForm() {
    const type = document.getElementById('dbType').value;
    let config = {};
    if (type === 'sqlite') {
      config.file = document.getElementById('file').value.trim();
    } else {
      config.host = document.getElementById('host').value.trim();
      config.port = Number.parseInt(document.getElementById('port').value, 10);
      config.database = document.getElementById('database').value.trim();
      config.username = document.getElementById('username').value.trim();
      config.password = document.getElementById('password').value;
      if (type === 'mssql') {
        config.authMode = document.getElementById('authMode')?.value || 'sql';
        config.domain = document.getElementById('domain')?.value?.trim() || '';
        config.encrypt = document.getElementById('encrypt')?.checked || false;
        config.trustServerCertificate = document.getElementById('trustCert')?.checked || false;
      }
    }
    return config;
  }
  
  function showStatus(msg, isError) {
    const el = document.getElementById('connStatus');
    el.style.display = 'block';
    el.style.background = isError ? '#f8d7da' : '#d4edda';
    el.style.color = isError ? '#721c24' : '#155724';
    el.style.border = '1px solid ' + (isError ? '#f5c6cb' : '#c3e6cb');
    el.textContent = msg;
  }
  
  const updateFields = () => {
    const type = document.getElementById('dbType').value;
    const fields = document.getElementById('configFields');
    document.getElementById('connStatus').style.display = 'none';
    if (type === 'sqlite') {
      fields.innerHTML = '<div class="mb-3"><label class="form-label">File Path</label><input type="text" id="file" class="form-control"></div>';
    } else {
      fields.innerHTML = `
        <div class="mb-3"><label class="form-label">Host</label><input type="text" id="host" class="form-control" placeholder="server or server\\instance"></div>
        <div class="mb-3"><label class="form-label">Port</label><input type="number" id="port" class="form-control" value="${type === 'postgres' ? 5432 : 1433}"></div>
        <div class="mb-3"><label class="form-label">Database</label><input type="text" id="database" class="form-control"></div>
        <div class="mb-3"><label class="form-label">Username</label><input type="text" id="username" class="form-control"></div>
        <div class="mb-3"><label class="form-label">Password</label><div class="input-group"><input type="password" id="password" class="form-control" aria-label="Database password" title="Database password"><button class="btn btn-outline-secondary" type="button" id="togglePw" aria-label="Show password" title="Show password"><i class="bi bi-eye" aria-hidden="true"></i></button></div></div>
        ${type === 'mssql' ? '<div class="mb-3"><label class="form-label">Authentication</label><select id="authMode" class="form-select"><option value="sql" selected>SQL Login</option><option value="ntlm">Windows (NTLM)</option></select></div><div class="mb-3"><label class="form-label">Domain (NTLM)</label><input type="text" id="domain" class="form-control" disabled></div><div class="form-check mb-3"><input type="checkbox" id="encrypt" class="form-check-input"><label class="form-check-label">Use Encryption</label></div><div class="form-check mb-3"><input type="checkbox" id="trustCert" class="form-check-input" checked><label class="form-check-label">Trust Server Certificate</label></div>' : ''}
      `;

      if (type === 'mssql') {
        const authModeEl = document.getElementById('authMode');
        const domainEl = document.getElementById('domain');
        if (authModeEl && domainEl) {
          const syncDomainState = () => {
            domainEl.disabled = authModeEl.value !== 'ntlm';
            if (domainEl.disabled) {
              domainEl.value = '';
            }
          };
          authModeEl.addEventListener('change', syncDomainState);
          syncDomainState();
        }
      }
    }
  };
  
  document.getElementById('dbType').onchange = updateFields;
  updateFields();
  
  // Scope password toggle handling to this modal instance.
  modal.addEventListener('click', function pwToggle(e) {
    const btn = e.target.closest('#togglePw');
    if (!btn) return;
    const pw = document.getElementById('password');
    if (!pw) return;
    if (pw.type === 'password') {
      pw.type = 'text';
      btn.innerHTML = '<i class="bi bi-eye-slash" aria-hidden="true"></i>';
      btn.setAttribute('aria-label', 'Hide password');
      btn.setAttribute('title', 'Hide password');
    } else {
      pw.type = 'password';
      btn.innerHTML = '<i class="bi bi-eye" aria-hidden="true"></i>';
      btn.setAttribute('aria-label', 'Show password');
      btn.setAttribute('title', 'Show password');
    }
  });
  
  modal.querySelector('#modalCancel').onclick = closeModal;
  
  document.getElementById('modalTest').onclick = async () => {
    const type = document.getElementById('dbType').value;
    const config = getConfigFromForm();
    showStatus('Testing connection...', false);
    try {
      const result = await call('/api/testConnection', 'POST', { type, config });
      if (result.success) {
        showStatus('Connection successful!', false);
      } else {
        showStatus('Connection failed: ' + result.error, true);
      }
    } catch (err) {
      showStatus('Test error: ' + err.message, true);
    }
  };
  
  document.getElementById('modalSave').onclick = async () => {
    try {
      const type = document.getElementById('dbType').value;
      const name = document.getElementById('connName').value;
      if (!name) return alert('Name required');
      
      const config = getConfigFromForm();
      if (type === 'sqlite' && !config.file) return alert('File path required');
      if (type !== 'sqlite' && (!config.host || !config.database || !config.username)) return alert('Host, Database, and Username are required');
      if (type === 'mssql' && config.authMode === 'ntlm' && !config.domain && !config.username.includes('\\')) return alert(String.raw`NTLM requires Domain or DOMAIN\username format`);
      
      showStatus('Saving connection...', false);
      await call('/api/addConnection', 'POST', { name, type, config });
      
      closeModal();
      await loadConnections();
      document.getElementById('answer').innerText = 'Connection added successfully!';
    } catch (err) {
      showStatus('Save error: ' + err.message, true);
    }
  };
}

export function showSaveFileModal() {
  const modal = document.createElement('div');
  const closeModal = () => modal.remove();
  modal.innerHTML = `
    <div class="modal fade show" style="display:block;background:rgba(0,0,0,0.5)" role="dialog" aria-modal="true" aria-label="Save file format modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"><h5 class="modal-title">Save Table As</h5></div>
          <div class="modal-body">
            <button class="btn btn-primary w-100 mb-2" id="saveHTML" title="Save as HTML" aria-label="Save as HTML">HTML</button>
            <button class="btn btn-primary w-100 mb-2" id="saveXlsx" title="Save as Excel" aria-label="Save as Excel">Excel (XLSX)</button>
            <button class="btn btn-primary w-100 mb-2" id="saveCsv" title="Save as CSV" aria-label="Save as CSV">CSV</button>
            <button class="btn btn-primary w-100" id="savePdf" title="Save as PDF" aria-label="Save as PDF">PDF</button>
          </div>
          <div class="modal-footer"><button class="btn btn-secondary" id="modalClose" title="Cancel" aria-label="Cancel">Cancel</button></div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  attachModalKeyboard(modal, closeModal);
  modal.querySelector('#modalClose').onclick = closeModal;
  modal.querySelector('#saveHTML').onclick = () => { saveAs('html'); closeModal(); };
  modal.querySelector('#saveXlsx').onclick = async () => { await saveAs('xlsx'); closeModal(); };
  modal.querySelector('#saveCsv').onclick = () => { saveAs('csv'); closeModal(); };
  modal.querySelector('#savePdf').onclick = async () => { await saveAs('pdf'); closeModal(); };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^