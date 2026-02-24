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

### 4) Deploy on Vercel (beginner flow)

1. Push this repo to GitHub.
2. Click the **Deploy with Vercel** button at the top of this README.
3. In Vercel, confirm the repo and project name.
4. Keep default Next.js build settings.
5. Click **Deploy**.

Done. Your hub is live.

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
