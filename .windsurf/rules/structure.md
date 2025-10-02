---
trigger: always_on
---

- Isolate **frontend** and **backend** in top-level `/client` and `/server` directories.
- Organize application logic into **feature-based modules** under `/client/src/features`.
- Each feature module must be self-contained, including its own `components/`, `hooks/`, and `api/` logic.
- Place **global UI primitives** in `/client/src/components/ui` (e.g., `Button`, `Card`, `Input`).
- Reserve top-level `/hooks`, `/lib`, and `/utils` for shared, application-wide logic only.
- **Import rules:**
  - Features may import from `/components/ui`, `/lib`, `/hooks`, `/utils`.
  - Features may **not** import directly from other features.
  - Shared layers must not import back into features.
- Mirror the **feature-based structure** on the backend (`/server/features/...`) for consistency.
- Avoid `index.ts` “barrel” exports except for small, stable modules where it simplifies imports without creating cycles.
