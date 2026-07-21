use serde::Deserialize;
use std::net::TcpListener;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, Stdio};
use std::sync::Mutex;
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use tauri::{Manager, RunEvent, WebviewUrl, WebviewWindowBuilder};

const DEFAULT_PORT: u16 = 3737;
const MAX_PORT_ATTEMPTS: u16 = 25;
const HEALTH_TIMEOUT: Duration = Duration::from_secs(15);
const HEALTH_POLL: Duration = Duration::from_millis(200);

struct ServerState {
    child: Mutex<Option<Child>>,
}

#[derive(Deserialize)]
struct HealthResponse {
    ok: bool,
    token: String,
}

fn can_bind_port(port: u16) -> bool {
    TcpListener::bind(("127.0.0.1", port)).is_ok()
}

fn find_available_port(start_port: u16) -> Option<u16> {
    for offset in 0..MAX_PORT_ATTEMPTS {
        let candidate = start_port.saturating_add(offset);
        if can_bind_port(candidate) {
            return Some(candidate);
        }
    }
    None
}

fn make_startup_token() -> String {
    let ts = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis())
        .unwrap_or(0);
    format!("{}-{}", ts, std::process::id())
}

fn open_in_browser(url: &str) {
    if cfg!(target_os = "macos") {
        let _ = Command::new("open").arg(url).spawn();
        return;
    }

    if cfg!(target_os = "windows") {
        let _ = Command::new("cmd").args(["/C", "start", "", url]).spawn();
        return;
    }

    let _ = Command::new("xdg-open").arg(url).spawn();
}

fn pick_preferred_port() -> u16 {
    std::env::var("PYTHIA_PORT")
        .ok()
        .and_then(|raw| raw.parse::<u16>().ok())
        .filter(|port| *port > 0)
        .unwrap_or(DEFAULT_PORT)
}

fn resolve_legacy_root() -> PathBuf {
    if let Ok(from_env) = std::env::var("RUSTY_PYTHIA_LEGACY_ROOT") {
        return PathBuf::from(from_env);
    }

    let cwd = std::env::current_dir().unwrap_or_else(|_| PathBuf::from("."));
    let candidates = [
        cwd.join("..").join("PythiaJS"),
        cwd.join("..").join("..").join("PythiaJS"),
    ];

    for candidate in candidates {
        if candidate.exists() {
            return candidate;
        }
    }

    cwd.join("..").join("PythiaJS")
}

fn resolve_server_script(legacy_root: &Path) -> PathBuf {
    legacy_root.join("src").join("server.js")
}

fn wait_for_health(port: u16, expected_token: &str) -> Result<(), String> {
    let url = format!("http://127.0.0.1:{}/api/health", port);
    let agent = ureq::AgentBuilder::new()
        .timeout(Duration::from_millis(1200))
        .build();

    let deadline = Instant::now() + HEALTH_TIMEOUT;
    while Instant::now() < deadline {
        let poll = agent.get(&url).call();
        if let Ok(response) = poll {
            if let Ok(body) = response.into_string() {
                if let Ok(payload) = serde_json::from_str::<HealthResponse>(&body) {
                    if payload.ok && payload.token == expected_token {
                        return Ok(());
                    }
                }
            }
        }

        std::thread::sleep(HEALTH_POLL);
    }

    Err(format!("Server did not become ready at {}", url))
}

fn stop_server(server_state: &ServerState) {
    if let Ok(mut guard) = server_state.child.lock() {
        if let Some(child) = guard.as_mut() {
            let _ = child.kill();
            let _ = child.wait();
        }
        *guard = None;
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let legacy_root = resolve_legacy_root();
    let server_script = resolve_server_script(&legacy_root);
    let preferred_port = pick_preferred_port();
    let selected_port = find_available_port(preferred_port)
        .unwrap_or(preferred_port);
    let startup_token = make_startup_token();
    let app_url = format!("http://127.0.0.1:{}", selected_port);
    let app_url_webview = format!("{}?host=webview", app_url);

    if !server_script.exists() {
        eprintln!(
            "OldPythia server script not found at {}",
            server_script.display()
        );
        open_in_browser(&app_url);
        return;
    }

    let mut server_process = match Command::new("bun")
        .arg(server_script.as_os_str())
        .env("PYTHIA_PORT", selected_port.to_string())
        .env("PYTHIA_SERVER_TOKEN", startup_token.clone())
        .current_dir(&legacy_root)
        .stdin(Stdio::null())
        .stdout(Stdio::inherit())
        .stderr(Stdio::inherit())
        .spawn()
    {
        Ok(child) => child,
        Err(error) => {
            eprintln!("Unable to start OldPythia server with bun: {}", error);
            open_in_browser(&app_url);
            return;
        }
    };

    if let Err(error) = wait_for_health(selected_port, &startup_token) {
        eprintln!("OldPythia health check failed: {}", error);
        let _ = server_process.kill();
        let _ = server_process.wait();
        open_in_browser(&app_url);
        return;
    }

    let state = ServerState {
        child: Mutex::new(Some(server_process)),
    };

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(move |app| {
            app.manage(state);

            let url = app_url_webview
                .parse()
                .map_err(|err| format!("Invalid app URL: {}", err))?;

            if let Err(err) = WebviewWindowBuilder::new(app, "main", WebviewUrl::External(url))
                .title("Rusty Pythia")
                .inner_size(1360.0, 900.0)
                .min_inner_size(1024.0, 700.0)
                .build()
            {
                eprintln!("Failed to create Tauri window: {}", err);
                open_in_browser(&app_url);
                if let Some(server_state) = app.try_state::<ServerState>() {
                    stop_server(server_state.inner());
                }
            }

            Ok(())
        })
        .build(tauri::generate_context!())
        .expect("error while building Rusty Pythia")
        .run(|app, event| {
            if let RunEvent::ExitRequested { .. } = event {
                if let Some(server_state) = app.try_state::<ServerState>() {
                    stop_server(server_state.inner());
                }
            }
        });
}
