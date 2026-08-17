import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DEFAULT_DOMAIN = 'https://stonebridge.com';
const DEMO_DOMAIN = DEFAULT_DOMAIN;
const TARGETS = ['index.html', 'sitemap.xml', 'robots.txt', 'llms.txt'];

async function parseEnvFile(file) {
  if (!existsSync(file)) return {};
  const env = {};
  for (const raw of (await readFile(file, 'utf8')).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    let key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    } else {
      const hash = value.indexOf(' #');
      if (hash !== -1) value = value.slice(0, hash).trim();
    }
    if (!key.startsWith('VITE_')) continue;
    env[key] = value;
  }
  return env;
}

const env = await parseEnvFile(path.resolve('.env.local'));
const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? DEFAULT_DOMAIN).replace(/\/+$/, '');

const dist = path.resolve('dist');
const changed = [];

for (const target of TARGETS) {
  const file = path.join(dist, target);
  if (!existsSync(file)) continue;
  const content = await readFile(file, 'utf8');
  const next = content.split(DEMO_DOMAIN).join(siteUrl);
  if (next !== content) {
    await writeFile(file, next);
    changed.push(target);
  }
}

if (siteUrl === DEFAULT_DOMAIN && process.env.VITE_SITE_URL !== undefined) {
  console.warn(`[sync-domain] VITE_SITE_URL is set to the demo domain (${DEFAULT_DOMAIN}) — confirm this is intended for a client build.`);
}
console.log(
  `[sync-domain] domain=${siteUrl} ${changed.length ? `rewrote ${changed.join(', ')}` : 'no statics contained the demo domain'}`
);