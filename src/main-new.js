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

const DEFAULT_PORT = 3737;
const MAX_PORT_ATTEMPTS = 25;
const isCompiledBinary = !process.execPath.endsWith("bun") && !process.execPath.endsWith("bun.exe");

function canBindPort(port) {
  return new Promise((resolve) => {
    const tester = net.createServer();
    tester.once('error', () => resolve(false));
    tester.once('listening', () => tester.close(() => resolve(true)));
    tester.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(startPort) {
  for (let offset = 0; offset < MAX_PORT_ATTEMPTS; offset++) {
    const candidate = startPort + offset;
    if (await canBindPort(candidate)) return candidate;
  }
  throw new Error(`No free port found in range ${startPort}-${startPort + MAX_PORT_ATTEMPTS - 1}`);
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

function stopServerProcess(serverProcess) {
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

if (isCompiledBinary) {
  // ── Compiled binary mode: run server in-process, open browser ──
  const { server } = await import("./server.js");
  const selectedPort = server.port;
  const appUrl = `http://localhost:${selectedPort}`;
  console.log(`Starting PythiaJS at ${appUrl}`);
  console.log(`Open this URL in your browser: ${appUrl}`);

  if (openBrowser(appUrl)) {
    console.log('Attempted to open your default browser automatically.');
  }

  const shutdown = () => process.exit(0);
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  // Keep process alive
  await new Promise(() => {});
} else {
  // ── Dev mode: spawn server as separate process, use webview ──
  const { Webview, SizeHint } = await import("webview-bun");

  const selectedPort = await findAvailablePort(DEFAULT_PORT);
  const appUrl = `http://localhost:${selectedPort}`;
  const browserFallbackUrl = `${appUrl}/?mode=fallback`;
  console.log(`Starting PythiaJS at ${appUrl}`);

  const bunPath = process.execPath;
  const serverProcess = spawn(bunPath, ["src/server.js"], {
    stdio: "inherit",
    cwd: process.cwd(),
    env: { ...process.env, PYTHIA_PORT: String(selectedPort) }
  });

  serverProcess.on('exit', () => process.exit(0));
  await waitForServer(selectedPort);

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
    stopServerProcess(serverProcess);
    process.exit(0);
  } catch (err) {
    console.error('WebView startup failed. Falling back to browser mode.');
    if (err?.message) console.error('WebView error:', err.message);
    console.error(`Open this URL in your browser: ${browserFallbackUrl}`);
    if (openBrowser(browserFallbackUrl)) {
      console.log('Attempted to open your default browser automatically.');
    }
    const shutdown = () => { stopServerProcess(serverProcess); process.exit(0); };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    await new Promise(() => {});
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^