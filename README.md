# pelham.dev

A personal portfolio site for Ryan Pelham — Senior Software Engineer. It highlights an about page, a blog, selected work, and a downloadable resume. The site is built with Next.js and deployed to GitHub Pages.

Live site: https://pelham.dev (also available at https://www.pelham.dev)

## Features
- About: Background, interests, and current focus.
- Blog: Writing about engineering, architecture, and craft.
- Work: Selected projects and professional highlights.
- Resume: One‑page PDF served from `/public/resume.pdf` and linked in the header.
- Responsive, fast, and accessible by default.

## Tech stack
- Next.js 15 (App Router, Static Export)
- React 19
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Lucide Icons (`lucide-react`)
- ESLint + Prettier

## Local development
Requirements:
- Node.js 22+
- pnpm 10+

Install and run:

```bash
pnpm install
pnpm dev
```

Build (static export) and preview:

```bash
pnpm build
pnpm start
```

Notes:
- `next.config.ts` sets `output: 'export'` and `images: { unoptimized: true }` for GitHub Pages.
- Images use Next Image but are exported unoptimized for static hosting.

## Deployment
Automated on every push to `main` via GitHub Actions:
- Workflow: `.github/workflows/deploy.yml`
- Steps: checkout → pnpm install → `pnpm build` → publish `./out` to GitHub Pages
- CNAME is set to `www.pelham.dev`; the site is also reachable at `https://pelham.dev`

If you fork this project:
- Update the CNAME in the workflow or disable it.
- Configure your repository’s Pages settings to deploy from the `gh-pages` branch created by the workflow.

## Scripts
- `pnpm dev` — Run the dev server (Turbopack)
- `pnpm build` — Build the static site
- `pnpm start` — Serve the production build
- `pnpm lint` — Lint with ESLint
- `pnpm format` / `pnpm format:check` — Prettier formatting

## License
This repository contains my personal portfolio. All rights reserved. If you’d like to reference or reuse parts of it, please open an issue to discuss.
