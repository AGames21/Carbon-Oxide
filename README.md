# Carbon Oxide Games Hub

A ready-to-deploy **Next.js games hub** with searchable cards and dynamic game pages.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/Carbon-Oxide)

> Replace `your-username` in the button URL above with your actual GitHub username/org after you push the repo.

## Beginner Setup (Do This First)

### 1) Download + install

```bash
git clone <your-repo-url>
cd Carbon-Oxide
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### 3) Add your games (fast)

Open `data/games.json` and copy an existing entry.

Required fields:

- `slug` → URL part like `/game/slug`
- `title`
- `description`
- `thumbnail` → file path in `public/thumbnails`
- `category`
- `tags`
- `mode` → `external` or `embed`
- `playUrl` (external mode)
- `embedUrl` (embed mode)
- `sourceUrl`
- `license`


### 3.1) Example game entry (copy/paste)

Add this object inside `data/games.json` (comma-separated with other entries):

```json
{
  "slug": "example-hextris",
  "title": "Example Hextris",
  "description": "Fast puzzle game example entry.",
  "thumbnail": "/thumbnails/hextris.svg",
  "category": "Puzzle",
  "tags": ["puzzle", "arcade"],
  "mode": "external",
  "embedUrl": "",
  "playUrl": "https://hextris.github.io/hextris/",
  "sourceUrl": "https://github.com/Hextris/hextris",
  "license": "GPL-3.0"
}
```

### 3.2) File types you can use

- `data/games.json` → **JSON** file that stores all game metadata.
- `public/thumbnails/*` → image files like **.svg**, **.png**, **.jpg**, **.webp**.
- Game pages/components → **.tsx** React/Next files (`app/*`, `components/*`).

### 3.3) How games are imported in code

This project imports games directly from JSON in `app/page.tsx` and `app/game/[slug]/page.tsx`:

```ts
import games from "@/data/games.json";
```

- Home page passes `games` into `GameGrid` to render cards.
- Dynamic page finds a game by `slug` and renders that game's details.

### 4) Deploy on Vercel (beginner flow)

1. Push this repo to GitHub.
2. Click the **Deploy with Vercel** button at the top of this README.
3. In Vercel, confirm the repo and project name.
4. Keep default Next.js build settings.
5. Click **Deploy**.

Done. Your hub is live.

### 4.1) Exact Vercel New Project selections

On the Vercel **New Project** screen, use these exact values:

- **Git Repository**: `AGames21/Carbon-Oxide` (or your fork)
- **Project Name**: `Carbon-Oxide` (or any name you want)
- **Application Preset**: `Next.js`
- **Root Directory**: `./`
- **Build Command**: leave default (`next build` / `npm run build`)
- **Output Directory**: leave default (`Next.js default`)
- **Install Command**: leave default (`npm install`)

Environment variables:

- You do **not** need env vars for the current starter version.
- Leave the Key/Value section empty unless you add features that require secrets later.

Then click **Deploy**.

### 4.2) If Vercel asks to edit settings

Use this quick fallback:

- Framework: `Next.js`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: blank/default
- Node version: default from Vercel


---

## What this project already includes

- Homepage game grid with search + category filters.
- Dynamic route at `/game/[slug]`.
- External launch button or iframe embed renderer.
- Starter catalog and thumbnails.
- TypeScript + Next.js project config suitable for Vercel.

---

## Advanced / Important Notes (for experienced users)

### Deploy button customization

If you want the Vercel button to pre-fill project details, use query params:

- `repository-url`
- `project-name`
- `repository-name`
- `root-directory`

Example:

```text
https://vercel.com/new/clone?repository-url=https://github.com/your-username/Carbon-Oxide&project-name=carbon-oxide-games&repository-name=carbon-oxide-games
```

### Legal + compliance

- Do **not** upload or re-host commercial games without explicit permission.
- Prefer open-source games or official creator-approved embeds.
- Keep `sourceUrl` and `license` accurate for each game entry.
- If embed is blocked by CSP or `X-Frame-Options`, switch to `external` mode.

### Scaling strategy (50+ to 500+ games)

- Keep categories normalized (`Arcade`, `Puzzle`, `Racing`, etc.).
- Add tags consistently for better filtering.
- Store thumbnails with compressed assets (prefer WebP in production).
- Add broken-link checks as your catalog grows.

### Performance checklist

- Use optimized thumbnail sizes.
- Keep iframe games in lazy-loaded views.
- Avoid heavy client libraries unless necessary.
- Consider analytics events on card clicks and launches.

### Security checklist

- Prefer trusted domains for embeds.
- Keep links opening in new tabs with `rel="noreferrer"`.
- Avoid injecting arbitrary third-party scripts.

### Optional next upgrades

- Featured rows (Trending / New / Popular).
- Favorites and recently played (localStorage).
- Admin panel for adding/editing games.
- Automated validation for `games.json` in CI.

---

## File map

```text
app/
  page.tsx               # home
  game/[slug]/page.tsx   # dynamic game page
  layout.tsx
  globals.css
components/
  GameGrid.tsx
  GameCard.tsx
  types.ts
data/
  games.json
public/
  thumbnails/
```
