# Food Storage Guide

How long does it keep? Fridge, freezer, and pantry storage times for 200+ foods.

## Features

- **250+ foods** — Meat, poultry, seafood, dairy, produce, leftovers, condiments, pantry, baked goods, beverages
- **Rich content** — Storage times by condition, how to store, signs of spoilage, thawing tips
- **Instant search** — Fuzzy search with Fuse.js, type-ahead results
- **SEO-optimized** — FAQ schema, breadcrumbs, sitemap, dynamic metadata
- **Category pages** — Browse by meat, dairy, produce, etc.
- **Situation pages** — Can you freeze it? Leftovers guide

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
food-storage-guide/
├── data/
│   └── foods.json          # All food data
├── src/
│   ├── app/
│   │   ├── food/[id]/      # Food detail pages
│   │   ├── category/[slug]/# Category pages
│   │   ├── search/         # Search results
│   │   ├── freezer-guide/   # Can you freeze it?
│   │   └── leftovers/      # Leftover storage
│   ├── components/
│   │   ├── SearchBar.tsx   # Instant fuzzy search
│   │   ├── FoodCard.tsx
│   │   └── FoodDetail.tsx
│   └── lib/
│       ├── data.ts
│       ├── search.ts       # Fuse.js setup
│       └── seo.ts
└── package.json
```

## Adding Foods

Edit `data/foods.json`. Each food needs:

- `id` — URL-friendly (e.g. `chicken-raw`)
- `name` — Display name
- `aliases` — Search terms (e.g. `["raw chicken", "chicken breast"]`)
- `category` — meat, poultry, dairy, produce, etc.
- `storage` — fridge, freezer, pantry, counter with condition/duration/notes
- `howToStore` — Array of tips
- `signsOfSpoilage` — Array of signs
- `faqs` — Array of {question, answer}
- `thawing` — Optional
- `related` — Optional related food IDs

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- Fuse.js for search

## Deploy

Push to GitHub, import in Vercel, deploy.

## Google Search Console Verification

**HTML file method:** Add `GOOGLE_VERIFICATION_ID` to Vercel env vars. Use the code from your filename — if Google gives you `google1a2b3c4d5e6f.html`, set `GOOGLE_VERIFICATION_ID=1a2b3c4d5e6f`. The file will be served at `yoursite.com/google1a2b3c4d5e6f.html`.

**Meta tag method:** Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` with your verification code. In Search Console, choose "HTML tag" and copy the `content` value.
