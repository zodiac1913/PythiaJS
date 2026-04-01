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
 * main --- Main entry point for PythiaJS desktop application
 * MIT Licensed Copyright (c) 2026 Dominic Roche
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche 3/12/2026
 * @class main
*/
// תהילתו. לא שלי

import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dlopen } from "bun:ffi";
import { Webview, SizeHint } from "webview-bun";
import { server } from "./server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ICON_PATH = path.join(__dirname, "ui", "pic", "PythiaJS.ico");

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
const appUrl = `http://127.0.0.1:${server.port}`;
const appUrlWebview = `${appUrl}?host=webview`;

const view = new Webview(false, undefined);
setWindowsWebviewIcon(view, APP_ICON_PATH);

// Set size to 80% of screen
view.size = {
  width: Math.floor(width * 0.8),
  height: Math.floor(height * 0.8),
  hint: SizeHint.NONE
};

console.log(`Opening WebView at ${appUrl}`);
view.navigate(appUrlWebview);
view.run();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^