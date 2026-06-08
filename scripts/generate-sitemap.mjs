// Generates public/sitemap.xml from static routes + product ids + blog slugs.
// Run via `npm run sitemap` (also wired into prebuild).
import { writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const SITE = 'https://deepakproducts.com';

// Product ids (kept in sync with client-config.js showcase products)
const productIds = [
  'mcb-parts', 'brass-electrical-components', 'modular-socket-parts',
  'crimping-lugs', 'brass-turned-components', 'customized-components',
];

// Blog slugs = filenames in src/data/blog (minus index.js)
const blogDir = join(root, 'src', 'data', 'blog');
const blogSlugs = readdirSync(blogDir)
  .filter((f) => f.endsWith('.js') && f !== 'index.js')
  .map((f) => f.replace(/\.js$/, ''));

const staticRoutes = [
  { loc: '/', freq: 'weekly', pri: '1.0' },
  { loc: '/about', freq: 'monthly', pri: '0.8' },
  { loc: '/products', freq: 'weekly', pri: '0.9' },
  { loc: '/industries', freq: 'monthly', pri: '0.8' },
  { loc: '/quality', freq: 'monthly', pri: '0.7' },
  { loc: '/export', freq: 'monthly', pri: '0.7' },
  { loc: '/blog', freq: 'weekly', pri: '0.9' },
  { loc: '/contact', freq: 'monthly', pri: '0.8' },
];

const urls = [
  ...staticRoutes,
  ...productIds.map((id) => ({ loc: `/products/${id}`, freq: 'monthly', pri: '0.8' })),
  ...blogSlugs.map((s) => ({ loc: `/blog/${s}`, freq: 'monthly', pri: '0.7' })),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} URLs (${blogSlugs.length} blog, ${productIds.length} products)`);
