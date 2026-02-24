# Carbon Oxide Games Hub

A complete, ready-to-run Next.js browser games hub you can deploy to Vercel.

## What is already done for you

- Home page with searchable/filterable game cards.
- Dynamic game route: `/game/[slug]`.
- Central game catalog in `data/games.json`.
- Starter thumbnails in `public/thumbnails`.
- Production-ready Next.js + TypeScript project files.

---

## Quick start (easy setup)

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open: `http://localhost:3000`

### 3) Edit your games

Open `data/games.json` and add or modify entries.

Each game uses:

- `slug`: URL id (`/game/slug`)
- `title`
- `description`
- `thumbnail`
- `category`
- `tags`
- `mode`: `external` or `embed`
- `playUrl` (for `external`)
- `embedUrl` (for `embed`)
- `sourceUrl`
- `license`

### 4) Deploy to Vercel (simple)

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) → **Add New Project**.
3. Import this repo.
4. Keep default Next.js settings.
5. Click **Deploy**.

That’s it.

---

## Add games fast (copy/paste workflow)

1. Duplicate an existing object in `data/games.json`.
2. Change `slug`, title, tags, urls, and license/source.
3. Add a thumbnail file into `public/thumbnails`.
4. Refresh the app.

You can add dozens quickly by only editing the JSON file.

---

## Legal notes (important)

- Do **not** re-host commercial copyrighted games without permission.
- Prefer open-source games or games with explicit embed permission.
- Keep `sourceUrl` and `license` up to date for every entry.
- If a site blocks iframe embedding (`X-Frame-Options`/CSP), use `mode: "external"`.

---

## Advanced guide (deeper details)

### Project structure

```text
app/
  page.tsx              # home page + filters
  game/[slug]/page.tsx # dynamic game page
data/
  games.json            # game catalog
components/
  GameGrid.tsx
  GameCard.tsx
  types.ts
public/
  thumbnails/
```

### How routing works

- Home renders all games from `games.json`.
- Clicking a card routes to `/game/[slug]`.
- Slug lookup decides whether to show an iframe (`embed`) or external launch button (`external`).

### Recommended scaling plan

- Keep categories consistent (`Arcade`, `Puzzle`, `Racing`, etc.).
- Add lightweight thumbnails (`webp` preferred when you replace starter SVGs).
- Keep third-party links monitored for dead/broken pages.
- Add analytics later for card clicks and play clicks.

### Optional improvements

- Add featured sections: Trending / New / Multiplayer.
- Add pagination or infinite scroll for 200+ games.
- Add a domain allowlist for embeddable providers.
- Add a basic admin page to edit `games.json` safely.

### CLI deployment alternative

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

---

## Pre-launch checklist

- [ ] `npm run build` succeeds
- [ ] every game has `sourceUrl` and `license`
- [ ] no broken thumbnails
- [ ] test at least 5 game pages
- [ ] Vercel deployment passes
