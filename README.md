# Morgner Studio

Personal portfolio for Jonas C. Morgner. Static site, built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve ./dist locally
```

## Add or edit an artwork

Each piece is one markdown file in `src/content/artworks/`. Schema is enforced in `src/content/config.ts`.

```md
---
title: 'New Painting'
year: 2026
medium: 'acrylic on canvas'
dimensions: '100cm x 100cm'
image: '/artworks/new-painting.jpg'   # drop the file in public/artworks/
order: 7                              # controls gallery order
forSale: false                        # see "Selling" below
---

Optional notes shown beneath the metadata on the detail page.
```

The slug (URL) comes from the filename: `new-painting.md` -> `/work/new-painting`.

## Replacing placeholder images

Drop a JPG (or PNG, WEBP) in `public/artworks/` and update the `image` field of the matching markdown file. The current placeholders are SVGs at the same paths.

Recommended source size: 1600x1600 minimum, square crop, sRGB.

## Marking a painting as sold

Set `sold: true` in the painting's markdown frontmatter:

```md
sold: true
```

When set, a small red dot — the standard gallery convention for a sold work — appears automatically next to the year on the gallery card and next to the title on the painting's detail page. No other changes are needed.

## Selling artwork (Stripe)

The content schema reserves three fields for the future shop. To put a piece on sale:

```md
forSale: true
price: 1800
currency: EUR                              # or USD
stripePaymentLink: https://buy.stripe.com/<your-link>
```

A "Buy" button will then render on that artwork's detail page, linking to the Stripe-hosted Payment Link. Stripe handles payment, taxes, shipping, and email receipts; no backend on this site is required.

To create a Payment Link: Stripe Dashboard -> Payment Links -> New, with one product per artwork.

## Design system

All design tokens live in `src/styles/tokens.css` (colors, type scale, spacing, layout dimensions). Single typeface throughout: JetBrains Mono variable, self-hosted via `@fontsource-variable/jetbrains-mono`. Hierarchy is built from size, weight, letter-spacing, and case rather than family contrast.

## Deploying

Free hosts that work out of the box:

- **Cloudflare Pages**: connect repo, set build command `npm run build`, output `dist/`.
- **Vercel**: same, auto-detected.
- **Netlify**: same.

## Project layout

```text
src/
  layouts/Shell.astro          rail + wordmark + nav + slot
  components/                  Wordmark, Nav, Eyebrow, ArtworkCard
  pages/
    index.astro                Gallery (home)
    about.astro
    contact.astro
    work/[slug].astro          Artwork detail
  content/
    config.ts                  Collection schema
    artworks/*.md              One file per painting
  styles/
    tokens.css                 Design tokens
    global.css                 Reset + base styles
public/
  artworks/                    Image files referenced from markdown
  favicon.svg
```
