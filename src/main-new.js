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
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dlopen } from "bun:ffi";

const DEFAULT_PORT = 3737;
const MAX_PORT_ATTEMPTS = 25;
const isCompiledBinary = !process.execPath.endsWith("bun") && !process.execPath.endsWith("bun.exe");
const envPort = Number.parseInt(process.env.PYTHIA_PORT || '', 10);
const preferredPort = (Number.isFinite(envPort) && envPort > 0) ? envPort : DEFAULT_PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ICON_PATH = path.join(__dirname, "ui", "pic", "PythiaJS.ico");

// ── If launched with --server flag, just run the server and exit ──
if (process.argv.includes("--server")) {
  await import("./server.js");
  // Keep alive — server handles its own lifecycle
  await new Promise(() => {});
}

// ── Otherwise, this is the main UI process ──

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

function toWideStringBuffer(value) {
  const buffer = new Uint16Array(value.length + 1);
  for (let i = 0; i < value.length; i++) {
    buffer[i] = Number(value.codePointAt(i) ?? 0);
  }
  buffer[value.length] = 0;
  return buffer;
}

function setWindowsWebviewIcon(view, iconPath) {
  if (process.platform !== "win32") return;

  try {
    const hwnd = view.unsafeWindowHandle;
    if (!hwnd) return;

    const user32 = dlopen("user32.dll", {
      LoadImageW: {
        args: ["ptr", "ptr", "u32", "i32", "i32", "u32"],
        returns: "ptr"
      },
      SendMessageW: {
        args: ["ptr", "u32", "usize", "isize"],
        returns: "isize"
      }
    });

    const IMAGE_ICON = 1;
    const LR_LOADFROMFILE = 0x0010;
    const LR_DEFAULTSIZE = 0x0040;
    const WM_SETICON = 0x0080;
    const ICON_SMALL = 0;
    const ICON_BIG = 1;

    const iconPathWide = toWideStringBuffer(iconPath);
    const iconHandle = user32.symbols.LoadImageW(
      null,
      iconPathWide,
      IMAGE_ICON,
      0,
      0,
      LR_LOADFROMFILE | LR_DEFAULTSIZE
    );

    if (!iconHandle) {
      user32.close();
      return;
    }

    user32.symbols.SendMessageW(hwnd, WM_SETICON, ICON_BIG, iconHandle);
    user32.symbols.SendMessageW(hwnd, WM_SETICON, ICON_SMALL, iconHandle);
    user32.close();
  } catch {
    // If native icon calls fail, continue with default icon.
  }
}

// ── Start the server as a separate process ──
const selectedPort = await findAvailablePort(preferredPort);
const appUrl = `http://localhost:${selectedPort}`;
const appUrlDirect = `http://127.0.0.1:${selectedPort}`;
const appUrlWebview = `${appUrlDirect}?host=webview`;
console.log(`Starting PythiaJS at ${appUrl}`);

const serverArgs = isCompiledBinary
  ? ["--server"]                    // compiled binary: re-launch self with --server flag
  : ["src/server.js"];              // dev mode: run server.js with bun

const serverProcess = spawn(process.execPath, serverArgs, {
  stdio: "pipe",
  cwd: process.cwd(),
  env: { ...process.env, PYTHIA_PORT: String(selectedPort) }
});

// Forward server output to console
serverProcess.stdout.on('data', (data) => process.stdout.write(data));
serverProcess.stderr.on('data', (data) => process.stderr.write(data));

serverProcess.on('exit', () => process.exit(0));
await waitForServer(selectedPort);
console.log(`Manual URL (localhost): ${appUrl}`);
console.log(`Manual URL (127.0.0.1): ${appUrlDirect}`);

// ── Try webview first, fall back to browser ──
let usedWebview = false;
try {
  const { Webview, SizeHint } = await import("webview-bun");
  const { width, height } = getScreenResolution();
  const view = new Webview(false, undefined);
  setWindowsWebviewIcon(view, APP_ICON_PATH);
  view.size = {
    width: Math.floor(width * 0.8),
    height: Math.floor(height * 0.8),
    hint: SizeHint.NONE
  };
  view.navigate(appUrlWebview);
  view.run();
  usedWebview = true;
} catch (err) {
  console.error('WebView not available, falling back to browser mode.');
  if (err?.message) console.error('WebView error:', err.message);
}

// ── Browser fallback ──
if (!usedWebview) {
  console.log(`Open this URL in your browser: ${appUrl}`);
  if (openBrowser(appUrl)) {
    console.log('Attempted to open your default browser automatically.');
  }
}

const shutdown = () => {
  stopServerProcess(serverProcess);
  process.exit(0);
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Keep process alive
await new Promise(() => {});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^