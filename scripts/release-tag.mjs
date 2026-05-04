#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const RELEASE_VERSION_PATTERN = /^\d{4}\.\d{2}\.\d{2}(?:\.\d+)?$/;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const versionFilePath = path.join(repoRoot, 'version.txt');

function printHelp() {
  console.log(`Usage:
  node scripts/release-tag.mjs <YYYY.MM.DD[.N]> [--push] [--remote <name>]

Examples:
  node scripts/release-tag.mjs 2026.05.04
  node scripts/release-tag.mjs 2026.05.04.1 --push

What it does:
  - validates the release version
  - updates version.txt
  - commits version.txt when it changed
  - creates an annotated git tag
  - optionally pushes the commit and tag

The existing GitHub release workflow publishes tagged releases automatically.`);
}

function parseArgs(argv) {
  const args = [...argv];
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    process.exit(0);
  }

  const version = args.shift();
  let push = false;
  let remote = 'origin';

  while (args.length > 0) {
    const arg = args.shift();
    if (arg === '--push') {
      push = true;
      continue;
    }
    if (arg === '--remote') {
      remote = args.shift();
      if (!remote) {
        throw new Error('Missing value for --remote');
      }
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { version, push, remote };
}

function runGit(args, options = {}) {
  return execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    ...options,
  }).trim();
}

function ensureInsideRepo() {
  const topLevel = runGit(['rev-parse', '--show-toplevel']);
  if (path.resolve(topLevel) !== repoRoot) {
    throw new Error(`Expected git root ${repoRoot} but found ${topLevel}`);
  }
}

function ensureCleanWorktree() {
  const status = runGit(['status', '--short']);
  if (status) {
    throw new Error(
      `Working tree is not clean. Commit or stash changes before creating a release tag.\n\n${status}`
    );
  }
}

function ensureTagDoesNotExist(version) {
  const existing = runGit(['tag', '--list', version]);
  if (existing === version) {
    throw new Error(`Git tag ${version} already exists.`);
  }
}

function updateVersionFile(version) {
  if (!existsSync(versionFilePath)) {
    throw new Error(`Missing version file: ${versionFilePath}`);
  }

  const previous = readFileSync(versionFilePath, 'utf8').trim();
  if (previous !== version) {
    writeFileSync(versionFilePath, `${version}\n`, 'utf8');
    runGit(['add', 'version.txt']);
    runGit(['commit', '-m', `release: ${version}`]);
    return { previous, changed: true };
  }

  return { previous, changed: false };
}

function createTag(version) {
  runGit(['tag', '-a', version, '-m', `PythiaJS ${version}`]);
}

function pushRelease(remote) {
  runGit(['push', remote, 'HEAD']);
  runGit(['push', remote, '--tags']);
}

function main() {
  const { version, push, remote } = parseArgs(process.argv.slice(2));

  if (!RELEASE_VERSION_PATTERN.test(version)) {
    throw new Error('Release version must match YYYY.MM.DD or YYYY.MM.DD.N');
  }

  ensureInsideRepo();
  ensureCleanWorktree();
  ensureTagDoesNotExist(version);

  const result = updateVersionFile(version);
  createTag(version);

  if (push) {
    pushRelease(remote);
  }

  console.log(`Release tag created: ${version}`);
  if (result.changed) {
    console.log(`Updated version.txt from ${result.previous || 'dev'} to ${version} and created a release commit.`);
  } else {
    console.log('version.txt already matched the requested version; no release commit was needed.');
  }

  if (push) {
    console.log(`Pushed HEAD and tag ${version} to ${remote}. GitHub Actions should now build and publish the release.`);
  } else {
    console.log(`Next step: git push ${remote} HEAD && git push ${remote} ${version}`);
  }
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`release-tag failed: ${message}`);
  process.exit(1);
}