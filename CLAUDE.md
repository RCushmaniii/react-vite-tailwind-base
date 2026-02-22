# CLAUDE.md — React Vite Tailwind Base

## Project Overview

Production-ready React template and component showcase deployed on Vercel. Demonstrates ShadCN UI components, Recharts data visualizations, an interactive appointment booking flow, and Mock Service Worker API mocking. Serves as a portfolio piece and reusable starter for new React projects.

## Tech Stack

- React 19 with TypeScript 5.8
- Vite 7 (build + dev server)
- Tailwind CSS 4 with @tailwindcss/typography
- ShadCN UI (Radix UI primitives) — 17+ components
- Recharts 3 (Area, Pie, Bar charts)
- React Router 7 (lazy-loaded routes)
- Mock Service Worker (MSW) 2 for API mocking
- FormSpree for contact form submission
- DOMPurify for markdown HTML sanitization
- date-fns for date formatting
- pnpm package manager

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, LegalLayout, MarkdownContent
│   └── ui/              # ShadCN UI components (17 components)
├── pages/               # Route-level page components (lazy-loaded)
├── routes/              # AppRouter with React Router config
├── lib/                 # Utilities (cn, markdown loader, MSW setup)
├── mocks/               # MSW handlers (browser.ts, handlers.ts)
├── examples/            # Example component + API handler demos
└── docs/                # Markdown documentation files
```

## Development Commands

```powershell
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Build for production (typecheck + vite build)
pnpm build

# Preview production build
pnpm preview

# Lint and format
pnpm lint
pnpm lint:fix
pnpm format

# Type check only
pnpm typecheck

# Full verification (typecheck + lint + build)
pnpm verify
```

## Key Patterns and Conventions

- **File naming:** PascalCase for components (`HomePage.tsx`), camelCase for utilities (`setupMsw.ts`)
- **Path aliases:** `@/` maps to `src/` — use for all imports
- **Component exports:** Named exports for page components, default exports for UI primitives
- **Routing:** All page components are lazy-loaded via `React.lazy()` with Suspense
- **Styling:** Tailwind utility classes; `cn()` helper for conditional class merging
- **State:** Local `useState` — no global state management needed at this scale
- **Markdown rendering:** Parsed via `marked`, sanitized via `DOMPurify` before `dangerouslySetInnerHTML`
- **API mocking:** MSW enabled by default in dev; controlled via `VITE_ENABLE_MSW` env var
- **Static data:** Chart datasets and service lists defined as module-level constants outside components

## Environment Setup

MSW is enabled by default. To disable:

```
VITE_ENABLE_MSW=false
```

FormSpree form ID is hardcoded in `HomePage.tsx` (`mgvnkbgq`). Replace with your own for production use.

## Deployment

Deployed to Vercel. `vercel.json` handles SPA routing rewrites. The `public/` directory contains favicons, PWA manifest, legal markdown, and the MSW service worker.

## Known Issues

- Components page chunk is ~640KB due to Recharts bundle. Already code-split via lazy loading so it only loads on navigation to `/components`.
- `core_coding_principals` has a typo (should be "principles") — preserved for URL stability.

*Last updated: 2026-02-22*
