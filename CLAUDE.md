# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
This file is in english but speak french !

## Project overview

Personal portfolio site for gaboflo.fr — a React app (Vite + TypeScript + Tailwind CSS v4) with a multi-page Vite build (see Architecture). Content is in French.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # type-check via tsc (through vite build) and produce dist/
npm run lint      # eslint over the whole repo
npm run preview   # preview the production build locally
```

There is no test suite/runner configured in this repo.

## Architecture

- Home page: `src/App.tsx` composes `Header`, `Hero`, `ProjectsSection`, `AboutSection`, `Footer` — there is no client-side router.
- Multi-page build: `vite.config.ts` declares extra Rollup inputs alongside `index.html` for standalone static pages (e.g. `legal/intercepteur-reseau-confidentialite.html` → `src/legal-intercepteur-reseau-confidentialite.tsx` → `src/pages/IntercepteurReseauConfidentialite.tsx`). Adding a new standalone page means adding an HTML entry under a top-level dir, a matching `src/legal-*.tsx` (or similarly named) entry script, and registering it in `vite.config.ts`'s `build.rollupOptions.input`.
- Dark mode is handled entirely in `App.tsx`: it seeds state from `localStorage.darkMode`, falls back to `prefers-color-scheme`, toggles the `dark` class on `document.documentElement` (Tailwind's `dark:` variants), and persists changes back to `localStorage`.
- Projects are static data, not fetched: `src/data/projects.ts` exports a `Project[]` (typed in `src/types/index.ts`) consumed by `ProjectsSection` → `ProjectCard` / `ProjectModal`. Adding a project means adding an entry to that array — no CMS/API involved.
- Deep-linking to a project: `ProjectsSection` reads a `?project=<id>` query param on mount, opens `ProjectModal` for the matching project, and scrolls it into view; closing the modal strips the param via `history.replaceState`. `src/utils/share.ts` generates/copies that same shareable link. Keep these two in sync if the query param name or matching logic changes.
- Icons: `lucide-react` covers standard icons (switched on `project.icon` in `ProjectModal`/`ProjectCard`). Icons that aren't in lucide (e.g. Chrome/Firefox store badges) go through `project.customLinks[].svgPath`, rendered by `src/components/CustomIcon.tsx` from raw SVGs in `public/assets/icons/`.
- Analytics: components call `window._paq.push([...])` (Matomo-style) directly, guarded by an optional-chaining check — see `trackClick` in `ProjectModal.tsx` for the pattern when adding new tracked interactions.

## Deployment

- `.github/workflows/deploy.yml`: on a GitHub release, builds with `npm run build`, then runs `actions/jekyll-build-pages` against `dist/` and deploys to GitHub Pages.
- `.github/workflows/test-deploy.yml` runs on every push/`workflow_dispatch` to verify the build + Jekyll step still succeeds; it does not deploy. It deliberately installs without the lockfile (`npm install --legacy-peer-deps`) plus explicit optional Rollup/SWC native binaries — a workaround for a prior CI failure, so don't "simplify" it back to `npm ci`.
