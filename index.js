const forceBrowserMode = process.env.PYTHIA_BROWSER_MODE === '1';

if (process.platform === 'win32' && !forceBrowserMode) {
	await import('./src/main.js');
} else {
	await import('./src/main-new.js');
}