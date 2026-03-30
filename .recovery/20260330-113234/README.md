# PythiaJS

PythiaJS is a desktop SQL workbench built with Bun + WebView, focused on being lightweight, fast to start, and keyboard-accessible.

It supports an internal SQLite workflow out of the box and can connect to external databases (PostgreSQL and MS SQL Server) from the same UI.

## Highlights

- Desktop app shell powered by `webview-bun`
- SQL editor with autocomplete and query context parsing
- Query history search per connection
- Result rendering in multiple formats
- Export options: HTML, XLSX, CSV, PDF
- Connection manager for SQLite, PostgreSQL, and MS SQL Server
- Accessibility improvements in active development (labels, keyboard behavior, modal focus handling)

## Platform Support

| Platform | Status | Notes |
|---|---|---|
| Windows | Supported | Primary development target and most tested path. |
| Linux | Supported (runtime-dependent) | Requires Bun + WebView runtime dependencies on your distro. |
| macOS | Supported (runtime-dependent) | Requires Bun + WebView runtime dependencies on your macOS setup. |

Notes:

- PythiaJS is JavaScript-based and does not require compiling native app code for normal development runs.
- Some platform behavior may differ depending on local WebView/runtime availability.

### WebView Runtime Explained

PythiaJS uses your operating system WebView engine to render the UI inside a desktop window.

- Windows: Microsoft Edge WebView2 Runtime
- Linux: WebKitGTK (or distro-provided WebKit WebView stack)
- macOS: WKWebView (provided by the OS)


## Tech Stack

- Runtime: Bun
- Desktop host: webview-bun
- Database drivers: SQLite (internal), PostgreSQL (`postgres`), MS SQL Server (`mssql`). For NOW..Later more databases will be added.
- Export libraries: `xlsx`, `pdfkit`

## Getting Started

### Prerequisites

- Bun `1.3+`
- Node-compatible environment for dependency installation
- OS WebView runtime (typically already present on modern systems)

### Install

```bash
bun install
```

### Run

```bash
bun index.js
```

The app launches a local API server and opens the desktop UI in a WebView window.

## Configuration

Default configuration is in `config.json`:

```json
{
	"backend": "sqlite",
	"sqlite_file": "pythia.db"
}
```

You can add and manage additional connections in the app UI.

## Accessibility

Current accessibility work includes:

- Improved semantic controls and labeling (`title` and `aria-label` where relevant)
- Keyboard support for custom dialogs and selector overlays
- Focus trapping in modal-like UI surfaces
- Live region updates for status/progress text

Accessibility is an ongoing priority as the UI is refined.

## Releases And Downloads

When this repository is public, users can download PythiaJS from the GitHub Releases page.

## Binary Distribution (No Bun Install For Users)

Short answer: yes, you can distribute binaries.

Bun supports compiling JavaScript entry points into executables. For PythiaJS, this means users do not need to install Bun to run your app binary.

Important caveats:

- You still need to provide platform-specific builds (Windows/Linux/macOS).
- The OS WebView runtime must exist on the target machine.
- For release quality, test each binary on its target OS before publishing.

Recommended release asset naming:

- `PythiaJS-windows-x64.zip`
- `PythiaJS-linux-x64.tar.gz`
- `PythiaJS-macos-arm64.zip`
- `PythiaJS-macos-x64.zip`

Each asset should include:

- App executable
- `config.json`
- Any required runtime data files (for example starter SQLite DB if you want first-run data)
- A short `RUN.txt` with launch instructions

If binaries are not attached yet, users can still run from source using Bun.

### For users

1. Open the repository `Releases` page.
2. Download the latest release asset for your platform (if provided).
3. If no binary assets are attached yet, download `Source code (zip)` and run with Bun:

```bash
bun install
bun index.js
```

### For maintainers (publishing a release)

1. Push code to `main`.
2. Create a new date-version tag in `YYYY.MM.DD` format (for example `2026.03.30`).
3. Draft a GitHub Release from that tag.
4. Add release notes and attach platform build artifacts if available.
5. Publish the release.

### Suggested Release Notes Template

Use this as a starting point for each GitHub Release:

```md
## PythiaJS YYYY.MM.DD

### Summary
Short description of what changed in this release.

### Added
- ...

### Improved
- ...

### Fixed
- ...

### Accessibility
- ...

### Downloads
- Windows: PythiaJS-windows-x64.zip
- Linux: PythiaJS-linux-x64.tar.gz
- macOS (Apple Silicon): PythiaJS-macos-arm64.zip
- macOS (Intel): PythiaJS-macos-x64.zip

### Notes
- Requires OS WebView runtime.
- If WebView is unavailable, run in browser mode using the startup URL shown in the app logs (for example `http://localhost:3737/?mode=fallback`).
- If no binary fits your system, run from source with Bun.
```

## Project Status

PythiaJS is workable and actively evolving. The current release line is suitable for early public feedback and iterative hardening.

## License

MIT
