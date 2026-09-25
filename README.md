# Personal Website — Manoj Lamichhane

A Next.js personal site (About, CV, Research, Publications, Awards, Contact)
styled as a dark technical portfolio, set up to deploy free on GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Fill in the placeholders

Everything on the page comes from **`data/content.js`**. Search that file
for `[FILL IN` and replace each one:
- Exact dates for education/experience
- Your GitHub profile URL
- Your real email address
- Your prior degree/institution and Nepal-based role details
- Awards and certificates (arrays are empty on purpose — add entries there)

Two assets to add once you have them:
- `public/cv.pdf` — your real CV (the "Download CV" / "Resume" links point here)
- `public/portrait.jpg` — your headshot. The hero already renders it
  automatically via `next/image` (see `components/Hero.js`) — just make
  sure the file is named exactly `portrait.jpg` in the `public/` folder.

## Deploying to GitHub Pages (free, no domain needed)

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.
3. That's it — `.github/workflows/deploy.yml` is already set up. Every push
   to `main` builds the site and deploys it automatically.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.
   If you name the repo `<your-username>.github.io` instead, it's served at
   `https://<your-username>.github.io/` directly (no subpath) — the config
   in `next.config.js` detects this automatically either way.

No domain purchase is required for this — the `github.io` address is free
and permanent as long as the repo exists.

## Project structure

```
app/
  layout.js       — fonts + page metadata
  page.js          — assembles all sections onto the homepage
  globals.css      — design tokens (colors, type, spacing) and layout rules
components/
  Hero.js, Nav.js, CVSection.js, ProjectsSection.js,
  PublicationsSection.js, AwardsSection.js, ContactSection.js,
  IconBadges.js   — LinkedIn / GitHub / Scholar / Resume badge icons
data/
  content.js       — ALL editable content lives here
.github/workflows/
  deploy.yml       — auto-deploys to GitHub Pages on every push to main
```

## Design notes

- Colors, fonts, and spacing are CSS variables at the top of
  `app/globals.css`.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/nav).
- The site is a single scrolling page with anchor navigation.

## Security note

`next` is pinned to `16.3.5` with React `19.2.0` — `npm audit` reports zero
vulnerabilities at this combination as of when this project was built. Run
`npm audit` and check https://nextjs.org/blog before deploying if it's been
a while since you last touched this project; Next.js has had several
security advisories, so it's worth a quick check each time you pick this
back up.

## Next steps (not built yet)

- Replace `[FILL IN]` placeholders in `data/content.js`
- Add your real CV PDF and headshot
- Push to GitHub and turn on Pages (above)
- Add the RAG chatbot (separate step — turns your documents into a
  searchable knowledge base wired to an LLM API); this will need a small
  hosted backend since GitHub Pages only serves static files
