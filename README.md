# Rusty Pythia

Rusty Pythia is the next-generation desktop rebuild of Pythia, targeting a Tauri + Rust shell with a reliable browser fallback path.

## Repository Layout

- `../PythiaJS/` contains the prior PythiaJS codebase archived intact.
- Root workspace is reserved for the new Rusty Pythia implementation.

## Notes

- Do not modify files under `../PythiaJS/` during the rebuild unless explicitly requested.

## Current Runtime Wiring

- Tauri launches first as the desktop shell.
- Rust startup spawns `bun ../PythiaJS/src/server.js`.
- Health check contract uses `/api/health` with `PYTHIA_SERVER_TOKEN`.
- Tauri opens `http://127.0.0.1:<port>?host=webview`.
- If desktop window creation fails, Rusty Pythia opens the local URL in your default browser.

## Run

1. Install dependencies: `npm install`
2. Start desktop app: `npm run tauri dev`

Optional environment override:

- `RUSTY_PYTHIA_LEGACY_ROOT` to point at a non-default legacy folder.
