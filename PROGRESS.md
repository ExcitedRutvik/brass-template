# Deepak Products — Build Progress

> **Live dashboard.** Open this file anytime to see what's done, in progress, and left.
> **Last updated:** 2026-06-08 — Fine-tuning pass complete ✅
> **Currently working on:** Done — ready for review (`npm run dev`)

---

## Fine-Tuning Pass (latest) ✅

### Step 1-2 — Fonts + Header
- [x] Libre Caslon Display (headings) + Hanken Grotesk (body); render-blocking `@import` dropped for `<link>` preload
- [x] `font-synthesis: none` so Caslon (400-only) never faux-bolds
- [x] Header route-aware: solid on every page except home hero → **nav no longer disappears on Get-a-Quote / light pages**

### Step 3-4 — Richer images + Products
- [x] Downloaded 8 product + 3 slider images (now 11 distinct product photos)
- [x] `client-config.js`: 11 real products with per-product `specs` / `applications` / `materials`
- [x] Hero uses slider banner (factory.jpg no longer reused 3×); all 12 blog heroes distinct
- [x] ProductDetail: per-product specs/applications (no repeated content) + "Back to all products"
- [x] Full Catalog items are clickable links to detail pages

### Step 5 — Component polish
- [x] Global Reach: faded Globe → animated **world map** with pulsing brass dots + arcs on export markets
- [x] Hero scroll cue → premium animated mouse-wheel indicator
- [x] Capabilities + About: alignment fixed (stretch); removed sticky offset

### Step 6 — Performance
- [x] `sharp` WebP generation (`scripts/optimize-images.mjs`, runs on prebuild) — saved 1.16 MB
- [x] `<Picture>` helper: WebP with JPG fallback across all image components
- [x] Hero image `loading="eager"` + `fetchpriority="high"` + preload; others lazy + width/height

### Step 7 — SEO / AEO / GEO
- [x] Sitemap regenerated → 31 URLs (11 products + 12 blog + 8 static)
- [x] AEO: FAQ schema + visible FAQ on every product page; FAQ already on blog
- [x] GEO: `public/llms.txt` (entity facts + all key URLs); enriched Organization (`knowsAbout`, `hasCredential`, offer URLs)
- [x] `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.
- [x] Product `Product` schema + `material`; OG/Twitter images use real banner

### Step 8-9 — Review + security + tracker
- [x] Build clean, **lint 0 errors** (split `clientStore.js` to fix fast-refresh rule)
- [x] Security headers via `public/_headers` + `netlify.toml` (CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy)
- [x] `npm audit` = 0 vulnerabilities; all external links `rel="noopener noreferrer"`
- [x] PROGRESS.md + fail-switch updated; TODO.md synced

---

## Fail-Switch — Resume Instructions

If the session is lost, resume precisely:

1. `cd /home/ubuntu/projects/brass-template/.claude/worktrees/eloquent-mayer-393e29`
2. `npm install && npm run build` — must pass clean; `npx eslint src --quiet` — 0 errors
3. Detection (what's already done this pass):
   - `index.html` references `Libre+Caslon+Display` → **fonts done**
   - `Header.jsx` contains `useLocation` + `!isHome` → **header fix done**
   - `public/assets/img/products/` has 8 files → **richer images downloaded**
   - `client-config.js` product has `specs:` → **products expanded**
   - `src/components/ui/WorldMap.jsx` exists → **Global Reach done**
   - `src/components/ui/Picture.jsx` + `.webp` files in `public/assets/img/**` → **WebP done**
   - `public/llms.txt` exists & `robots.txt` has `GPTBot` → **AEO/GEO done**
   - `src/context/clientStore.js` exists → **lint fix done**
4. Checkbox state above = authoritative ledger.

### State at last update
- All steps complete. Build clean, lint 0, 31 sitemap URLs, WebP serving, preview smoke test: all routes + assets 200.

---

## Prior passes (still in place)
- Real Deepak data, 16→27 images, bold motion, 12-post blog/SEO engine, brass-gold + navy theme — all from earlier passes, retained.

---

## Manual Follow-Ups (off-code, for the user)
- Off-site **backlinks** — outreach to suppliers/directories/trade portals (earns ranking authority; can't be coded)
- Submit `sitemap.xml` to Google Search Console; add Google Business Profile URL to `sameAs` in `index.html` schema
- Replace placeholder testimonials in `client-config.js` with real client quotes
- Add real social profile URLs to a `sameAs` array (Organization schema) once available
