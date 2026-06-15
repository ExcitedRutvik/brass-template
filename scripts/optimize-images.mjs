// Generates .webp (and resizes oversized) versions of every JPG/PNG under
// public/assets/img. Components reference .webp with a .jpg <img> fallback.
import { readdirSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG_ROOT = join(root, 'public', 'assets', 'img');
const MAX_W = 1200; // cap width; product/industry shots don't need more

function walk(dir) {
  let files = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  }
  return files;
}

const imgs = walk(IMG_ROOT).filter((f) => ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase()));
let done = 0, saved = 0;
await Promise.all(imgs.map(async (src) => {
  const out = src.replace(/\.(jpe?g|png)$/i, '.webp');
  try {
    const meta = await sharp(src).metadata();
    const pipeline = sharp(src);
    if (meta.width > MAX_W) pipeline.resize({ width: MAX_W });
    await pipeline.webp({ quality: 78 }).toFile(out);
    const a = statSync(src).size, b = statSync(out).size;
    saved += (a - b);
    done++;
  } catch (e) {
    console.error('skip', src, e.message);
  }
}));
console.log(`webp: ${done} images, saved ${(saved/1024/1024).toFixed(2)} MB`);
