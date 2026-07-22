import { call } from './api.js';
import { loadAllSchemas } from './autocomplete.js';
import { currentConnection, OLLAMA_MODEL_STORAGE_KEY, schemaCache } from './state.js';

let aiConversation = [];
let ollamaOnline = false;

function getAiElements() {
  return {
    navbarButton: document.getElementById('navbarAiButton'),
    settingsButton: document.getElementById('navbarSettingsButton'),
    workspaceTab: document.getElementById('workspaceTabAI'),
    statusBadge: document.getElementById('aiStatusBadge'),
    conversation: document.getElementById('aiConversation'),
    prompt: document.getElementById('aiPrompt'),
    sendButton: document.getElementById('aiSend'),
    clearButton: document.getElementById('aiClearConversation'),
    progress: document.getElementById('aiProgress'),
    progressLabel: document.getElementById('aiProgressLabel'),
    modelLabel: document.getElementById('aiModelLabel'),
    liveStatus: document.getElementById('aiLiveStatus'),
    queryBox: document.getElementById('q'),
    queryRunButton: document.getElementById('run')
  };
}

function setAiWorkingState(isWorking, label = 'AI is working...') {
  const { progress, progressLabel, sendButton, clearButton, prompt } = getAiElements();
  if (progress) {
    progress.classList.toggle('active', isWorking);
  }
  if (progressLabel) {
    progressLabel.textContent = label;
  }
  if (sendButton) {
    sendButton.disabled = isWorking || !ollamaOnline;
  }
  if (clearButton) {
    clearButton.disabled = isWorking;
  }
  if (prompt) {
    prompt.disabled = isWorking || !ollamaOnline;
  }
}

function getSelectedOllamaModel() {
  return globalThis.localStorage?.getItem(OLLAMA_MODEL_STORAGE_KEY)?.trim() || '';
}

function setSelectedOllamaModel(model) {
  if (!model) {
    globalThis.localStorage?.removeItem(OLLAMA_MODEL_STORAGE_KEY);
    return;
  }

  globalThis.localStorage?.setItem(OLLAMA_MODEL_STORAGE_KEY, model);
}

function setAiLiveStatus(message) {
  const { liveStatus } = getAiElements();
  if (liveStatus) {
    liveStatus.textContent = message;
  }
}

function activateWorkspaceTab(tabName) {
  const button = document.querySelector(`[data-workspace-tab="${tabName}"]`);
  if (button instanceof HTMLElement && !button.disabled) {
    button.click();
    button.focus();
  }
}

function appendAiMessage(role, message) {
  const { conversation } = getAiElements();
  if (!conversation) {
    return;
  }

  const bubble = document.createElement('div');
  bubble.className = `ai-message ai-message-${role}`;
  bubble.textContent = message;
  conversation.appendChild(bubble);
  conversation.scrollTop = conversation.scrollHeight;
}

function resetAiConversation(note = 'Ask for a result in plain English. AI will use the current connection schema and ask for clarification when needed.') {
  const { conversation, prompt } = getAiElements();
  aiConversation = [];
  if (conversation) {
    conversation.innerHTML = '';
  }
  appendAiMessage('system', note);
  if (prompt) {
    prompt.value = '';
  }
}

function updateAiAvailability(status) {
  const { navbarButton, workspaceTab, statusBadge, modelLabel } = getAiElements();
  ollamaOnline = !!status?.online;
  const activeModel = getSelectedOllamaModel() || status?.defaultModel || 'Not selected';

  if (ollamaOnline && !getSelectedOllamaModel() && status?.defaultModel) {
    setSelectedOllamaModel(status.defaultModel);
  }

  if (modelLabel) {
    modelLabel.textContent = getSelectedOllamaModel() || status?.defaultModel || 'Not selected';
  }

  const disabledTitle = ollamaOnline ? 'Open AI workspace' : 'AI is offline';
  if (navbarButton) {
    navbarButton.disabled = !ollamaOnline;
    navbarButton.title = disabledTitle;
    navbarButton.setAttribute('aria-label', disabledTitle);
  }

  if (workspaceTab) {
    workspaceTab.disabled = !ollamaOnline;
    workspaceTab.title = ollamaOnline ? 'AI workspace' : 'AI is offline';
    workspaceTab.setAttribute('aria-disabled', ollamaOnline ? 'false' : 'true');
  }

  const { prompt } = getAiElements();
  if (prompt) {
    prompt.placeholder = ollamaOnline
      ? 'Example: Show the 10 newest customer orders with customer names and totals.'
      : 'AI is offline. Start Ollama to enable this workspace.';
  }

  setAiWorkingState(false);

  if (statusBadge) {
    statusBadge.className = `ai-status alert ${ollamaOnline ? 'alert-success' : 'alert-warning'}`;
    statusBadge.textContent = ollamaOnline
      ? `Ollama online. Model: ${activeModel}`
      : 'Ollama is offline. Open settings after it starts to choose a model.';
  }
}

export async function refreshOllamaStatus({ announce = false } = {}) {
  try {
    const status = await call('/api/ollama/status');
    updateAiAvailability(status);
    if (announce) {
      setAiLiveStatus(status.online ? 'AI is available.' : 'AI is offline.');
    }
    return status;
  } catch (error) {
    updateAiAvailability({ online: false, defaultModel: '' });
    if (announce) {
      setAiLiveStatus('AI status check failed.');
    }
    return { online: false, models: [], error: error?.message || String(error) };
  }
}

function formatAssistantMessage(result) {
  const parts = [];
  if (result.explanation) {
    parts.push(result.explanation);
  }
  if (Array.isArray(result.assumptions) && result.assumptions.length) {
    parts.push(`Assumptions: ${result.assumptions.join('; ')}`);
  }
  if (result.sql) {
    parts.push(`Running SQL:\n${result.sql}`);
  }
  return parts.filter(Boolean).join('\n\n') || 'Running the generated SQL.';
}

async function submitAiPrompt() {
  const { prompt, queryBox, queryRunButton } = getAiElements();
  const message = prompt?.value.trim();
  if (!prompt || !message) {
    return;
  }

  if (!ollamaOnline) {
    setAiLiveStatus('AI is offline.');
    return;
  }

  if (!schemaCache[currentConnection]) {
    await loadAllSchemas();
  }

  aiConversation.push({ role: 'user', content: message });
  appendAiMessage('user', message);
  prompt.value = '';
  setAiWorkingState(true, 'AI is reviewing the schema and preparing a response...');
  setAiLiveStatus('Sending request to AI.');

  try {
    const result = await call('/api/ai/assist', 'POST', {
      conversation: aiConversation,
      connection: currentConnection,
      model: getSelectedOllamaModel(),
      currentQuery: queryBox?.value || ''
    });

    if (result.model) {
      setSelectedOllamaModel(result.model);
    }
    updateAiAvailability({ online: true, defaultModel: result.model || getSelectedOllamaModel() });

    if (result.status === 'clarify') {
      const question = result.question || 'Which table or fields should I use?';
      aiConversation.push({ role: 'assistant', content: question });
      appendAiMessage('assistant', question);
      setAiWorkingState(false, 'AI is working...');
      setAiLiveStatus('AI needs clarification.');
      return;
    }

    const assistantMessage = formatAssistantMessage(result);
    aiConversation.push({ role: 'assistant', content: assistantMessage });
    appendAiMessage('assistant', assistantMessage);
    setAiWorkingState(false, 'AI is working...');
    setAiLiveStatus('AI generated SQL and is running it.');

    if (queryBox && result.sql) {
      queryBox.value = result.sql;
      activateWorkspaceTab('query');
      queryRunButton?.click();
    }
  } catch (error) {
    appendAiMessage('assistant', `AI request failed: ${error?.message || error}`);
    setAiWorkingState(false, 'AI is working...');
    setAiLiveStatus('AI request failed.');
  } finally {
    setAiWorkingState(false, 'AI is working...');
    prompt.focus();
  }
}

export function initializeAiAssistant() {
  const { navbarButton, settingsButton, sendButton, clearButton, prompt } = getAiElements();

  resetAiConversation();
  refreshOllamaStatus();

  navbarButton?.addEventListener('click', () => {
    activateWorkspaceTab('ai');
  });

  settingsButton?.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('open-settings-modal'));
  });

  sendButton?.addEventListener('click', async () => {
    await submitAiPrompt();
  });

  clearButton?.addEventListener('click', () => {
    resetAiConversation('Conversation cleared. Ask for a result in plain English.');
    setAiLiveStatus('AI conversation cleared.');
  });

  prompt?.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await submitAiPrompt();
    }
  });

  document.addEventListener('ollama-settings-changed', async () => {
    await refreshOllamaStatus({ announce: true });
  });

  document.addEventListener('connection-changed', () => {
    resetAiConversation(`Connection changed to ${currentConnection}. Ask what you want from this schema.`);
  });
}