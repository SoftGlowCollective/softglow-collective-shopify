# Soft Glow Collective Shopify Theme

Welcome to the Soft Glow Collective Shopify theme - a luxury, high-converting skincare and beauty dropshipping storefront built for elegance and performance.

---

## Project Overview

This is the official theme repository for Soft Glow Collective's premium skincare and beauty dropshipping store. It features:
- Modular Liquid sections (hero, featured-products, reviews, etc.)
- Reusable snippets (product-card, trust badges, testimonials)
- Optimized build pipeline for SCSS and JS
- Brand guidelines aligned with our luxury aesthetic
- Deploy helpers and performance optimization tools

### Project Structure
```
.
├── README.md
├── assets/                    # Images, fonts, compiled CSS/JS
├── config/                    # settings_schema.json, settings_data.json
├── layout/                    # theme.liquid
├── templates/                 # index.json, product.json, collection.json
├── sections/                  # hero.liquid, featured-products.liquid, reviews.liquid
├── snippets/                  # product-card.liquid, trust-badges.liquid, testimonials.liquid
├── locales/                   # en.default.json
├── src/
│   ├── styles/                # Base SCSS, components
│   └── scripts/               # Theme JS entry
├── tools/                     # deploy.sh, optimize-images.sh
├── docs/                      # brand-guidelines.md
├── package.json
├── shopify.theme.toml
└── .gitignore
```

---

## Development

### Prerequisites
- Node.js (LTS)
- npm or yarn
- Shopify CLI (v3+) - recommended for previewing and pushing
- A Shopify development store or access to softglowcollective.myshopify.com

### Install
```bash
npm install
# or
yarn
```

### Build
- Build CSS and JS once:
```bash
npm run build
```

- Watch for changes during development:
```bash
npm run watch
```

### Local Preview (Shopify CLI)
```bash
shopify login --store softglowcollective.myshopify.com
shopify theme serve
```

### Deploy
```bash
# Push changes to the store
shopify theme push

# Or use the included wrapper
tools/deploy.sh
```

---

## Build Pipeline

- **SCSS**: Compiled from `src/styles/*.scss` to `assets/` (compressed)
- **JS**: Built/bundled from `src/scripts/` to `assets/theme.js` (minified)
- **Watch**: File watcher rebuilds on changes

See `package.json` for exact scripts and devDependencies.

---

## Brand Guidelines

### Color Palette
- **Bluish Pink (Primary)**: #B8A0D4 / #D4A9B8
- **White (Background)**: #FFFFFF
- **Gold (Accent)**: #D4AF37

### Typography
- **Headings**: Clean, modern serif font (elegance & luxury)
- **Body**: Neutral sans-serif (readability & trust)

### Brand Voice
Luxurious, trustworthy, and aspirational. Premium skincare and beauty products for conscious consumers.

For complete guidelines, see `docs/brand-guidelines.md`.

---

## Store Features

### Core Sections
- **Hero Banner** - Eye-catching welcome with CTA
- **Featured Products** - Curated skincare & beauty collections
- **Reviews & Testimonials** - Customer social proof
- **Newsletter Signup** - Build email list
- **Trust Badges** - Security, fast shipping, quality assurance

### Product Pages
- High-quality product images with zoom
- Detailed ingredient lists and benefits
- Customer reviews and ratings
- Variant selection (size, type, etc.)

### Dropshipping Optimizations
- Supplier integration points
- Inventory sync capabilities
- Flexible pricing adjustments
- Fast fulfillment support

---

## Performance & Accessibility

- **Images**: WebP/sized images with srcset
- **Lazy Loading**: Below-the-fold content loads on demand
- **Code**: Minified CSS/JS; non-critical scripts deferred
- **Accessibility**: WCAG AA contrast standards; keyboard navigation; focus states

---

## Contributing

- Use feature branches for all changes
- Open pull requests with screenshots for UI updates
- Add tests for critical JS logic
- Follow the brand guidelines for consistency

---

## License & Contact

- **License**: MIT
- **Design**: design@softglowcollective.com
- **Engineering**: devops@softglowcollective.com
- **Store**: softglowcollective.myshopify.com

---

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Create feature branch: `git checkout -b feature/your-feature`
4. Build with `npm run watch`
5. Preview with `shopify theme serve`
6. Push to store when ready: `shopify theme push`

Happy developing! ✨