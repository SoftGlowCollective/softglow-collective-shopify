# 496 SoftGlow Collective 	6 Shopify Theme

Welcome to the SoftGlow Collective Shopify theme starter 	6 a minimalist, mobile-first theme scaffold built for a luxury, high-converting storefront.

---

## Project Overview

This repo contains a Shopify theme scaffold focused on clean, elegant design and fast performance. It includes:
- Modular Liquid sections (hero, featured-products, etc.)
- Reusable snippets (product-card, trust badges)
- A small build pipeline for SCSS and JS
- Brand guidelines and deploy helpers

Project structure (starter)
- README.md
- assets/                 	6 images, fonts, compiled CSS/JS
- config/                 	6 settings_schema.json, settings_data.json
- layout/                 	6 theme.liquid
- templates/              	6 index.json, product.json, collection.json
- sections/               	6 hero.liquid, featured-products.liquid, ...
- snippets/               	6 product-card.liquid, trust-badges.liquid
- locales/                	6 en.default.json
- src/
  - styles/               	6 base SCSS, components
  - scripts/              	6 theme JS entry
- tools/                  	6 deploy.sh, optimize-images.sh
- docs/                   	6 brand-guidelines.md
- package.json
- shopify.theme.toml
- .gitignore

---

## Development

Prerequisites
- Node.js (LTS)
- npm or yarn
- Shopify CLI (v3+) 	6 recommended for previewing and pushing
- A Shopify development store or access to a store for testing

Install
```bash
npm install
# or
yarn
```

Build
- Build CSS and JS once:
```bash
npm run build
```

- Watch for changes during development:
```bash
npm run watch
```

Local preview (Shopify CLI)
```bash
shopify login --store your-store.myshopify.com
shopify theme serve
```
This runs a local preview of the theme and watches for filesystem changes.

Deploy
- Push changes to the store (use caution on a live store)
```bash
# quick push via Shopify CLI
shopify theme push

# or use the included wrapper (requires SHOPIFY_STORE env var set)
tools/deploy.sh
```

---

## Build pipeline (what the scripts do)
- SCSS: compiled from `src/styles/*.scss` to `assets/` (compressed)
- JS: built/bundled from `src/scripts/` to `assets/theme.js` (minified)
- Watch: file watcher rebuilds on changes

See `package.json` for exact scripts and devDependencies.

---

## Brand guidelines (summary)
Full guidelines in `docs/brand-guidelines.md`. Key tokens:
- Blush Pink: #F6D7D9
- Cream White: #FFF8F2
- Soft Beige: #EFE7DA
- Warm Gold: #CFA56A

Typography: clean, modern serif for headings + neutral sans for body copy. See docs for examples.

---

## Sections & Snippets (recommended)
- sections/hero.liquid 	6 hero banner with CTA
- sections/featured-products.liquid 	6 curated products block
- snippets/product-card.liquid 	6 product preview (image, title, price)
- snippets/trust-badges.liquid 	6 security/fast-shipping badges
- sections/reviews.liquid 	6 customer reviews & star ratings

---

## Performance & Accessibility
- Use WebP/sized images and srcset
- Lazy-load below-the-fold images
- Minify CSS/JS; defer non-critical scripts
- Ensure WCAG AA contrast for text; keyboard focus states on interactive elements

---

## Contributing
- Use feature branches, open PRs, include screenshots for UI changes.
- Add tests for critical logic if you add custom JS.

---

## License & Contacts
- Add LICENSE (MIT suggested) at repo root.
- For design: design@softglow.example
- For engineering: devops@softglow.example

---

What I can do next
- Commit these files to a repo (you already provided owner/repo) and open a PR if you want.
- Generate more Liquid sections (featured-products, footer, reviews) or push additional changes.
- Create an initial theme.liquid + index.json template.
- Add CI (GitHub Actions) to run build + push to a test store.
