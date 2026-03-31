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

import { spawn, execSync } from "node:child_process";
import net from "node:net";

const DEFAULT_PORT = 3737;
const MAX_PORT_ATTEMPTS = 25;
const isCompiledBinary = !process.execPath.endsWith("bun") && !process.execPath.endsWith("bun.exe");
const noBrowserOpen = process.env.PYTHIA_NO_BROWSER === '1';

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

function setupShutdown(handler) {
  process.on('SIGINT', handler);
  process.on('SIGTERM', handler);
}

function maybeOpenBrowser(url) {
  if (noBrowserOpen) {
    console.log(`Browser auto-open disabled. Open this URL manually: ${url}`);
    return;
  }

  if (openBrowser(url)) {
    console.log('Attempted to open your default browser automatically.');
  } else {
    console.log(`Could not auto-open browser. Open this URL manually: ${url}`);
  }
}

if (isCompiledBinary) {
  // ── Compiled binary mode: run server in-process, open browser ──
  const { server } = await import("./server.js");
  const selectedPort = server.port;
  const appUrl = `http://localhost:${selectedPort}`;
  console.log(`Starting PythiaJS at ${appUrl}`);
  maybeOpenBrowser(appUrl);

  const shutdown = () => process.exit(0);
  setupShutdown(shutdown);

  // Keep process alive
  await new Promise(() => {});
} else {
  // ── Dev mode: spawn server as separate process, open browser ──

  const selectedPort = await findAvailablePort(DEFAULT_PORT);
  const appUrl = `http://localhost:${selectedPort}`;
  console.log(`Starting PythiaJS at ${appUrl}`);

  const bunPath = process.execPath;
  const serverProcess = spawn(bunPath, ["src/server.js"], {
    stdio: "inherit",
    cwd: process.cwd(),
    env: { ...process.env, PYTHIA_PORT: String(selectedPort) }
  });

  serverProcess.on('exit', () => process.exit(0));
  await waitForServer(selectedPort);

  maybeOpenBrowser(appUrl);

  const shutdown = () => {
    stopServerProcess(serverProcess);
    process.exit(0);
  };
  setupShutdown(shutdown);

  // Keep process alive
  await new Promise(() => {});
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^