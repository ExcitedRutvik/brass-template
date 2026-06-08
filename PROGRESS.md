# Deepak Products — Build Progress

> **Live dashboard.** Open this file anytime to see what's done, in progress, and left.
> **Last updated:** 2026-06-08 — All 5 parts complete ✅
> **Currently working on:** Done — ready for review (`npm run dev`)

---

## Part 1 — Correct Real Company Data ✅
- [x] Download real company facts from live Deepak site
- [x] Rewrite `client-config.js` — real products (sheet metal + brass)
- [x] Real industries (7), contact, address, founder, certs
- [x] Add `image` field to each product + industry

## Part 2 — Wire Real Images ✅
- [x] Download 6 product images → `public/assets/img/home_products/`
- [x] Download 7 industry images → `public/assets/img/industries/`
- [x] Download factory photo → `public/assets/img/about/`
- [x] Download 2 logos → `public/assets/img/logo/`
- [x] Product cards render real photos (with hover zoom)
- [x] Industry tiles: image + gradient overlay + hover reveal
- [x] About section: real factory photo + years badge
- [x] Header/Footer: SVG logo
- [x] Hero: factory image with parallax + glow

## Part 3 — Bold & Dynamic Motion ✅
- [x] `useParallax` hook (pointer-driven)
- [x] Image zoom-on-scroll (`zoom-on-scroll`, reveal `zoom` variant)
- [x] Logo/cert marquee strip (`LogoMarquee`)
- [x] Sticky scroll panel (Capabilities "Factory at a Glance")
- [x] Animated gradient mesh keyframes (`gradient-mesh`)
- [x] Micro-interactions (button shine, hover lift, card tilt, animated divider)
- [x] Count-up stats fire on scroll
- [x] `prefers-reduced-motion` respected for all new motion

## Part 4 — Blog / SEO Engine (12 posts) ✅
- [x] `src/data/blog/` structure + post schema
- [x] `Blog.jsx` index page (category filter)
- [x] `BlogPost.jsx` template (breadcrumb, FAQ accordion, related, aside)
- [x] `ProductDetail.jsx` (Product schema + related guides)
- [x] Routes `/blog`, `/blog/:slug`, `/products/:id` + nav links
- [x] Post 1 — Sheet Metal Stamping Components Guide
- [x] Post 2 — MCB Parts Manufacturing in India
- [x] Post 3 — Brass Electrical Components
- [x] Post 4 — Modular Socket & Switch Parts
- [x] Post 5 — Crimping Lugs Explained
- [x] Post 6 — Brass Turned Components & CNC
- [x] Post 7 — Brass Moulding Inserts
- [x] Post 8 — Deep Draw Sheet Metal Products
- [x] Post 9 — Choosing a Manufacturer in Jamnagar
- [x] Post 10 — Brass Components for Automobile Industry
- [x] Post 11 — Brass Terminals & Earthing Accessories
- [x] Post 12 — Brass vs MS Washers
- [x] FAQ + BlogPosting + Product + Breadcrumb JSON-LD
- [x] Interlinking (blog↔products, post↔post)
- [x] Sitemap generator (`scripts/generate-sitemap.mjs`, 26 URLs, runs on prebuild)

## Part 5 — Fail-Switch + Tracker ✅
- [x] `PROGRESS.md` created + maintained
- [x] Fail-switch resume detection (below)
- [x] `TODO.md` synced

---

## Fail-Switch — Resume Instructions

If the session is lost, resume precisely with these checks:

1. `cd /home/ubuntu/projects/brass-template/.claude/worktrees/eloquent-mayer-393e29`
2. `npm install && npm run build` — must pass clean
3. Detection (which part is done):
   - `public/assets/img/home_products/` populated → **Part 2 images done**
   - `client-config.js` contains `"sheet metal"` / `Rasikbhai` → **Part 1 done**
   - `src/hooks/useParallax.js` exists → **Part 3 done**
   - `src/data/blog/` has 12 `.js` files (excl index) → **Part 4 posts done**
   - `public/sitemap.xml` has 26 `<loc>` entries → **sitemap done**
4. The checkbox state above = authoritative ledger.
5. `TODO.md` phase line is kept in sync.

### State at last update
- All 5 parts complete. Build clean. Preview verified: images 200, all SPA routes serve, schema present, sitemap 26 URLs.

---

## Manual Follow-Ups (off-code, for the user)
- Off-site **backlinks** — outreach to suppliers/directories/trade portals (can't be coded; earns ranking authority)
- Submit `sitemap.xml` to Google Search Console
- Add real Google Business Profile URL to LocalBusiness schema (`index.html`)
- Replace placeholder testimonials in `client-config.js` with real client quotes
- Optional: convert JPGs to WebP for faster loads
