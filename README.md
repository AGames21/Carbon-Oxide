# Carbon-Oxide

## Build a "Lots of Games Fast" Hub (Legal + Vercel-Ready)

This guide shows **exactly** how to build a browser games hub quickly, deploy it to Vercel, and scale to many games using a JSON catalog.

---

## 0) Important legality check (do this first)

Before adding any game:

1. **Do not re-host commercial/proprietary games** unless you have explicit permission from the rights holder.
2. Prefer one of these legal sources:
   - Games you built yourself.
   - Open-source games with clear licenses (MIT/Apache/BSD/GPL, etc.).
   - Games with explicit embeddable permission (for example, creators offering iframe/embed code).
3. Keep a small `license` and `sourceUrl` field for every game in your catalog so you always know where it came from.

---

## 1) What you are building

A simple architecture that scales quickly:

- **Homepage**: grid of game cards.
- **Game page**: either
  - loads an iframe embed (`embedUrl`), or
  - links out to an external page (`playUrl`), or
  - serves locally hosted static game files (advanced option).
- **Single source of truth**: `games.json` (or TS file) with title, tags, URLs, and metadata.

This lets you add games in seconds by appending one object to your catalog.

---

## 2) Create the Next.js project

```bash
npx create-next-app@latest games-hub
```

Use these options:

- TypeScript: **Yes**
- ESLint: **Yes**
- App Router: **Yes**
- Tailwind: optional (recommended for fast UI)

Then:

```bash
cd games-hub
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## 3) Recommended project structure

```text
games-hub/
  app/
    page.tsx                 # Home grid
    game/[slug]/page.tsx     # Dynamic game page
  data/
    games.json               # Catalog of games
  public/
    thumbnails/              # Card images
```

---

## 4) Create your game catalog

Create `data/games.json`:

```json
[
  {
    "slug": "hextris",
    "title": "Hextris",
    "description": "Fast-paced hex puzzle game.",
    "thumbnail": "/thumbnails/hextris.jpg",
    "category": "Puzzle",
    "tags": ["puzzle", "arcade"],
    "mode": "embed",
    "embedUrl": "https://example-creator-site.com/embed/hextris",
    "playUrl": "",
    "sourceUrl": "https://github.com/...",
    "license": "MIT"
  },
  {
    "slug": "open-snake",
    "title": "Open Snake",
    "description": "Classic snake clone.",
    "thumbnail": "/thumbnails/snake.jpg",
    "category": "Arcade",
    "tags": ["arcade", "retro"],
    "mode": "external",
    "embedUrl": "",
    "playUrl": "https://example.com/play/open-snake",
    "sourceUrl": "https://github.com/...",
    "license": "Apache-2.0"
  }
]
```

### Field rules

- `slug`: unique URL-safe id.
- `mode`:
  - `embed` = use iframe.
  - `external` = open third-party page.
- Always keep `sourceUrl` + `license` for compliance tracking.

---

## 5) Build the homepage (game grid)

On `app/page.tsx`:

1. Import `games.json`.
2. Render cards with title, thumbnail, tags.
3. Link each card to `/game/[slug]`.
4. Add simple filters (category/tag/search) for scale.

Suggested UX:

- Search bar at top.
- Category chips (`All`, `Puzzle`, `Sports`, `Action`, `Racing`).
- Card hover effect.

---

## 6) Build dynamic game pages

On `app/game/[slug]/page.tsx`:

1. Read slug from route params.
2. Look up matching game in `games.json`.
3. If not found, return `notFound()`.
4. If `mode === "embed"`, render:
   - responsive iframe container
   - game title + source/license metadata
5. If `mode === "external"`, render:
   - big "Play on source site" button
   - metadata + screenshot

### Iframe checklist

- Use `allowFullScreen`.
- Use a fixed aspect-ratio wrapper for mobile.
- If a site blocks iframe (`X-Frame-Options`/CSP), switch that entry to `external` mode.

---

## 7) Add many games quickly (the fast workflow)

For each new game:

1. Verify license/permission.
2. Prepare a thumbnail.
3. Add one object in `games.json`.
4. Test `/game/<slug>` locally.
5. Commit.

You can batch 25+ games at once by editing only `games.json` and dropping thumbnails into `public/thumbnails`.

---

## 8) Popular categories people add

Use categories users immediately recognize:

- **Arcade**: Snake, Breakout, Space Invaders-like shooters
- **Puzzle**: 2048 variants, minesweeper-like games, tile puzzle games
- **Sports**: football/soccer/basketball style titles (only authorized/open versions)
- **Racing**: top-down and endless runner car games
- **Idle/Clicker**: incremental economy games
- **Board/Card**: chess, checkers, solitaire variants
- **Platformers**: short levels with keyboard controls

Tip: Mix “quick rounds” and “long session” games to improve retention.

---

## 9) Vercel deployment (exact steps)

### Option A: Vercel dashboard (easiest)

1. Push your project to GitHub.
2. Go to Vercel dashboard.
3. Click **Add New Project**.
4. Import your GitHub repo.
5. Framework preset should auto-detect **Next.js**.
6. Leave build command defaults.
7. Click **Deploy**.
8. After deploy, open your `.vercel.app` URL and test home + a few game pages.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

When prompted:

- Set up and deploy: **Yes**
- Link to existing project: **No** (first deploy)
- Build settings: accept defaults

For production deploy:

```bash
vercel --prod
```

---

## 10) Performance + reliability checklist

- Use compressed thumbnails (`webp` preferred).
- Lazy-load card images.
- Keep iframe pages lightweight.
- Add fallback UI when embed fails.
- Avoid huge client-side libraries unless needed.

---

## 11) SEO + discoverability

- Add unique title/description for each game page.
- Include category/tag sections on homepage.
- Add a simple `sitemap` and `robots` config.
- Use clean URLs like `/game/hextris`.

---

## 12) Safety + moderation basics

- Don’t embed unknown third-party scripts directly.
- Maintain allowlist of trusted domains.
- Remove entries that break or violate terms.
- If users can submit games, queue for review before publishing.

---

## 13) Suggested launch plan

Day 1:

- Build scaffold + dynamic routing.
- Add first 20 legal games.
- Deploy to Vercel.

Day 2:

- Add filters/search.
- Add 30 more games.
- Add “report broken game” button.

Day 3:

- Improve thumbnails + metadata.
- Add featured rows (“Trending”, “New”, “Multiplayer”).
- Add analytics events (card click, play click).

---

## 14) Common mistakes to avoid

- Re-hosting copyrighted commercial content without permission.
- Adding embeds that block iframes and not providing fallback.
- Not tracking licenses/source links.
- Shipping a massive homepage without lazy loading.

---

## 15) Starter checklist (copy/paste)

- [ ] Next.js app created
- [ ] `games.json` added
- [ ] Dynamic `/game/[slug]` route working
- [ ] 10+ legal games added
- [ ] Thumbnails optimized
- [ ] Search/filter working
- [ ] Deployed to Vercel
- [ ] Source/license fields filled for each game

If you follow this exactly, you can launch a high-volume games hub quickly while staying on safer legal ground.
