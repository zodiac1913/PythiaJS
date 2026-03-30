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

import { readFileSync } from "fs";
import { execFileSync } from "child_process";
import { Webview, SizeHint } from "webview-bun";
import { connectDB } from "./db/index.js";
import { handleMessage, register } from "./ipc.js";
import { logQuery, getHistory } from "./db/sqlite.js";
import { addConnection, getConnections, executeQuery, testConnection } from "./db/connections.js";

await connectDB();

register("runQuery", async ({ text, connection }) => {
  try {
    logQuery(text, connection);
    const rows = await executeQuery(connection, text);
    return { rows };
  } catch (err) {
    return { error: err.message };
  }
});

register("getHistory", () => getHistory());

register("addConnection", async ({ name, type, config }) => {
  return new Promise((resolve) => {
    setImmediate(async () => {
      try {
        const id = `${type}_${Date.now()}`;
        await addConnection(id, name, type, config);
        resolve({ success: true });
      } catch (err) {
        resolve({ success: false, error: err.message });
      }
    });
  });
});

register("testConnection", async ({ type, config }) => {
  return new Promise((resolve) => {
    setImmediate(async () => {
      try {
        console.log("testConnection handler started");
        const result = await testConnection(type, config);
        console.log("testConnection result:", result);
        resolve(result);
      } catch (err) {
        console.error("testConnection error:", err);
        resolve({ success: false, error: err.message });
      }
    });
  });
});

register("getConnections", () => getConnections());

const html = readFileSync("src/ui/index.html", "utf-8");

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

const view = new Webview(false, undefined);

// Set size to 80% of screen
view.size = {
  width: Math.floor(width * 0.8),
  height: Math.floor(height * 0.8),
  hint: SizeHint.NONE
};

// IPC binding
view.bind("ipc", async (raw) => {
  console.log("IPC received:", raw);
  const result = await handleMessage(raw);
  console.log("IPC response:", result);
  return result;
});

view.navigate(`data:text/html,${encodeURIComponent(html)}`);
view.run();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^