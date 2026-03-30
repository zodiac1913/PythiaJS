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

import { spawn, execFileSync } from "node:child_process";
import { Webview, SizeHint } from "webview-bun";
import { server } from "./server.js";

// Server is now running in-process
const selectedPort = server.port;
const appUrl = `http://localhost:${selectedPort}`;
const browserFallbackUrl = `${appUrl}/?mode=fallback`;
console.log(`Starting PythiaJS at ${appUrl}`);

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

  // Cleanup - if we get here (webview closed), exit
  process.exit(0);
} catch (err) {
  await runBrowserFallback(err);
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^