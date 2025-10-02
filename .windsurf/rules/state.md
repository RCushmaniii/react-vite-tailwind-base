---
trigger: always_on
---

- Use TanStack Query to manage all server state, including data fetching, caching, and mutations.
- Use Zustand for minimal global client state only (e.g., theme, modal visibility, sidebar state).
- Default to local component state (`useState`, `useReducer`) for all other UI logic.
- Use React Context sparingly, only for cross-cutting concerns such as authentication or localization.
- Strictly separate server and client state; never store fetched data directly in a Zustand store.
- Persist client state (e.g., theme preference) via Zustand middleware, not ad-hoc localStorage calls.
