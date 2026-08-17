import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// key -> { url, width } for the demo brand. Swap per client before running.
export const imageSources = {
  hero: {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
    width: 1920,
  },
  legacy: {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    width: 1200,
  },
  featuredTower: {
    url: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a',
    width: 1200,
  },
  glassOffice: {
    url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8',
    width: 1600,
  },
  steelFramework: {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    width: 1600,
  },
  engineersSite: {
    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    width: 1400,
  },
  reviewTablet: {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    width: 1200,
  },
  teamOnSite: {
    url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c',
    width: 1400,
  },
  cranesSunset: {
    url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da',
    width: 1400,
  },
  siteSunset: {
    url: 'https://images.unsplash.com/photo-1503594384566-461fe158e797',
    width: 1600,
  },
  industrial: {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    width: 1200,
  },
  infrastructure: {
    url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da',
    width: 1400,
  },
  healthcare: {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    width: 1200,
  },
  education: {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    width: 1200,
  },
  hospitality: {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    width: 1200,
  },
  portraitCeo: {
    url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    width: 900,
  },
  portraitTech: {
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    width: 900,
  },
  portraitProject: {
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    width: 900,
  },
};

const OUT_DIR = path.resolve('public/images');
const QUALITY = 72;
const FORCE = process.argv.includes('--force');

async function download(key, { url, width }) {
  const src = `${url}?auto=format&fit=crop&w=${width}&q=75`;
  const res = await fetch(src, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${key}: download failed (${res.status})`);
  return Buffer.from(await res.arrayBuffer());
}

export async function optimizeAll() {
  await mkdir(OUT_DIR, { recursive: true });

  const results = [];
  for (const [key, spec] of Object.entries(imageSources)) {
    const out = path.join(OUT_DIR, `${key}.jpg`);
    if (!FORCE && existsSync(out)) {
      results.push({ key, skipped: true, size: (await readFile(out)).length });
      continue;
    }

    const raw = await download(key, spec);
    const buffer = await sharp(raw)
      .rotate()
      .resize({ width: spec.width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();
    await writeFile(out, buffer);
    results.push({ key, skipped: false, size: buffer.length });
  }

  return results;
}

const results = await optimizeAll();
for (const r of results) {
  const kb = (r.size / 1024).toFixed(1);
  console.log(`${r.skipped ? '[skip]' : '[new] '} ${r.key.padEnd(16)} ${kb} kB`);
}
console.log(`\nDone. ${results.filter((r) => !r.skipped).length} downloaded, ${results.filter((r) => r.skipped).length} skipped.`);