# Admin Guide

## Overview

This project is a frontend template and does not include a dedicated "admin system" (no authentication/authorization, no admin-only routes, and no backend).

The word "admin" appears only in demo/example content:

- `src/examples/exampleHandlers.ts` includes mock users with a `role` field (`'admin' | 'user'`).
- The template showcases dashboard-style UI patterns on `/components` (charts, cards, dialogs), which can be used to build an admin dashboard.

## Current Behavior

- There are no protected routes.
- There is no role enforcement.
- There are no admin APIs; `/api/*` endpoints are mocked via MSW for demo purposes.

## Where to Look

- UI building blocks: `src/components/ui/*`
- Layout: `src/components/layout/*`
- Demo dashboard patterns: `src/pages/Components.tsx`
- MSW mock API examples: `src/mocks/*` and `src/examples/exampleHandlers.ts`
