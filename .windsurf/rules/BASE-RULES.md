# RCushman Base — Windsurf Rules (React + Vite Template)

## 1. Manifesto

- **Philosophy:** Boring is good. Explicit > clever. Secure by default.
- **Goal:** Keep this template clean, consistent, and portfolio-ready.

## 2. Tech Stack (Authoritative)

- **Framework:** React (Vite)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **UI Primitives:** shadcn/ui (Radix UI + Tailwind)
- **Icons:** lucide-react
- **Routing:** React Router v6 (route-level lazy loading)
- **Server State:** TanStack Query (preferred)
- **Client Global State:** Zustand (minimal; UI-only)
- **Mocking:** MSW (optional; env-toggle)

## 3. Architecture & Routing

- **Single router source of truth:** `src/routes/AppRouter.tsx`.
- **Route-based code splitting:** Page routes should be loaded via `React.lazy()` + `import()`.
- **Layouts:** Use a top-level layout that renders `<Outlet />`.
- **No Next.js assumptions:** Do not introduce App Router / file-based routing patterns here.

## 4. State Management Rules

- **Server state:** Use TanStack Query for fetch/caching/mutations.
- **Do not store fetched data in Zustand.** Zustand is for minimal UI state (theme, modal open, sidebar).
- **Local state first:** Prefer `useState` / `useReducer` for component UI logic.
- **Immutability always:** Never mutate arrays/objects in state; return new values.

## 5. Mocking (MSW)

- **Toggle:** MSW must be controlled via `VITE_ENABLE_MSW`.
- **Production safety:** Do not enable MSW in production builds by default.
- **Generated files:** `public/mockServiceWorker.js` is generated output; do not hand-edit.

## 6. UI, Styling, and Design System

- **Tailwind-only styling:** Prefer utilities and theme tokens.
- **Design tokens:** Colors/fonts come from theme variables; do not hardcode brand colors in components.
- **Consistency:** Reuse existing UI primitives (Button, Badge, etc.) instead of custom one-offs.
- **Accessibility:** Keep contrast and focus styles intact.

## 7. Accessibility & Language

- **A11y:** Use semantic HTML, keyboard navigability, and visible focus.
- **Bilingual UX:** Prefer i18n keys / a bilingual approach (`en` + `es`) for user-facing labels.

## 8. Error Handling

- **Assume failure:** Handle async errors explicitly.
- **Structured results:** Prefer `{ success: boolean, data?: T, error?: string }` for app-level operations.
- **UI feedback:** Loading states must resolve to success or an error UI.

## 9. Quality Gates

- **Verification:** `pnpm verify` must pass before release/tagging.
  - Runs: `typecheck` → `lint` → `build`

## 10. Anti-Patterns (Refusal Criteria)

- Introducing Next.js / Server Actions / file-based routing assumptions into this Vite app.
- Adding heavy global state without need.
- Copy/pasting logic instead of extracting shared utilities.
- Silent failures (no error handling / no UI feedback).
