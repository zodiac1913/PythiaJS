//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//     *          |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|       †          _____          ↑
//   _____        |  o o o o o o  |      /|\        (     )         ↑
//  /  ^  \       | o o o o o o o |     / | \      (       )       / \
// /_/___\_\      |_______________|    /  |  \      (]¯¯¯[)       /   \
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* eslint-disable no-undef */
/* eslint-disable no-console */
/*!
 * main-new.js --- Main entry point for PythiaJS desktop application (new version)
 * MIT Licensed Copyright (c) 2026 Dominic Roche
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche 3/12/2026
 * @class mainNew
 * @extends {HTMLElement}
 */
// תהילתו. לא שלי

import { spawn, execSync, execFileSync } from "node:child_process";
import net from "node:net";
import { Webview, SizeHint } from "webview-bun";

const DEFAULT_PORT = 3737;
const MAX_PORT_ATTEMPTS = 25;

function canBindPort(port) {
  return new Promise((resolve) => {
    const tester = net.createServer();

    tester.once('error', () => {
      resolve(false);
    });

    tester.once('listening', () => {
      tester.close(() => resolve(true));
    });

    tester.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(startPort) {
  for (let offset = 0; offset < MAX_PORT_ATTEMPTS; offset++) {
    const candidate = startPort + offset;
    if (await canBindPort(candidate)) {
      return candidate;
    }
  }

  throw new Error(`No free port found in range ${startPort}-${startPort + MAX_PORT_ATTEMPTS - 1}`);
}

const selectedPort = await findAvailablePort(DEFAULT_PORT);
const appUrl = `http://localhost:${selectedPort}`;
const browserFallbackUrl = `${appUrl}/?mode=fallback`;
console.log(`Starting PythiaJS at ${appUrl}`);

// Start the API server
// When running as a compiled binary, process.execPath points to the binary itself,
// which would cause it to re-launch the whole app instead of just the server.
const isCompiledBinary = !process.execPath.includes("bun");
const bunPath = isCompiledBinary ? "bun" : process.execPath;
const serverProcess = spawn(bunPath, ["src/server.js"], {
  stdio: "inherit",
  cwd: process.cwd(),
  env: {
    ...process.env,
    PYTHIA_PORT: String(selectedPort)
  }
});

// Exit main process if server dies (e.g. shutdown endpoint called)
serverProcess.on('exit', () => {
  process.exit(0);
});

// Wait for server to actually be ready
async function waitForServer(port, timeoutMs = 15000, intervalMs = 200) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const ready = await new Promise((resolve) => {
      const sock = net.createConnection({ host: '127.0.0.1', port }, () => {
        sock.destroy();
        resolve(true);
      });
      sock.on('error', () => resolve(false));
    });
    if (ready) return;
    await Bun.sleep(intervalMs);
  }
  throw new Error(`Server did not start within ${timeoutMs}ms`);
}

await waitForServer(selectedPort);

function stopServerProcess() {
  try {
    if (process.platform === 'win32') {
      execSync(`taskkill /pid ${serverProcess.pid} /T /F`, { stdio: 'ignore' });
      return;
    }

    serverProcess.kill('SIGTERM');
  } catch {
    // Server may already be stopped.
  }
}

function openBrowser(url) {
  try {
    if (process.platform === 'win32') {
      const browser = spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' });
      browser.unref();
      return true;
    }

    if (process.platform === 'darwin') {
      const browser = spawn('open', [url], { detached: true, stdio: 'ignore' });
      browser.unref();
      return true;
    }

    const browser = spawn('xdg-open', [url], { detached: true, stdio: 'ignore' });
    browser.unref();
    return true;
  } catch {
    return false;
  }
}

async function runBrowserFallback(err) {
  console.error('WebView startup failed. Falling back to browser mode.');
  if (err?.message) {
    console.error('WebView error:', err.message);
  }
  console.error(`Open this URL in your browser: ${browserFallbackUrl}`);

  if (openBrowser(browserFallbackUrl)) {
    console.log('Attempted to open your default browser automatically.');
  }

  const shutdown = () => {
    stopServerProcess();
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  await new Promise(() => {});
}

function getScreenResolution() {
  const fallback = { width: 1920, height: 1080 };

  try {
    const script = "Add-Type -AssemblyName System.Windows.Forms; $screen = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds; Write-Output ([string]::Concat($screen.Width, ',', $screen.Height))";
    const output = execFileSync("powershell", ["-NoProfile", "-Command", script], {
      encoding: "utf-8",
      windowsHide: true
    }).trim();

    const [widthRaw, heightRaw] = output.split(",");
    const width = Number.parseInt(widthRaw, 10);
    const height = Number.parseInt(heightRaw, 10);

    if (Number.isFinite(width) && Number.isFinite(height) && width > 0 && height > 0) {
      return { width, height };
    }
  } catch {
    // Use fallback below when display detection is unavailable.
  }

  return fallback;
}

const { width, height } = getScreenResolution();

try {
  const view = new Webview(false, undefined);

  view.size = {
    width: Math.floor(width * 0.8),
    height: Math.floor(height * 0.8),
    hint: SizeHint.NONE
  };

  view.navigate(appUrl);
  view.run();

  // Cleanup - if we get here (webview closed), kill server if still running
  stopServerProcess();
  process.exit(0);
} catch (err) {
  await runBrowserFallback(err);
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^