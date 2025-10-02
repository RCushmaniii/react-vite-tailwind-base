# 🧠 Coding Principles — Project Summary

Our codebase is guided by a clear set of principles to ensure it remains **secure, maintainable, and predictable**.  
These rules are enforced through Windsurf and documented here for clarity.

---

## 🎯 Why This Matters

Without consistent rules, projects drift into chaos:

- Features leak across boundaries.
- Styles become inconsistent.
- State is mutated unpredictably.
- Errors fail silently.

Our principles remove ambiguity and provide a **single source of truth** for coding decisions.

---

## ⚡ Core Principles

### 🔹 SRP (Single Responsibility Principle)

Every module or function does one thing and has one reason to change.

### 🔹 DRY (Don’t Repeat Yourself)

Abstract repeated logic into reusable utilities instead of duplicating code.

### 🔹 SoC (Separation of Concerns)

Keep UI, state, and data logic clearly separated.

### 🔹 SOLID

Design for extension, small interfaces, and dependency abstraction.

---

## 🚀 Extended Principles

### 🔹 Server-Side Logic First

Sensitive logic (auth, payments, DB writes) always runs server-side.

### 🔹 Error Handling

All operations must anticipate failure and provide structured, user-facing error feedback.

### 🔹 Code Style

Prettier + ESLint formatting enforced. Naming conventions:

- camelCase → variables/functions
- PascalCase → components/types
- kebab-case → files

### 🔹 Immutability

Treat state and props as immutable; never modify them directly.

### 🔹 State Management

- TanStack Query → server state
- Zustand → minimal global client state
- Local state → component logic

### 🔹 Routing

Use React Router v6 with route-based code splitting.

### 🔹 Forms & Validation

React Hook Form + Zod for all forms and validation.

### 🔹 Styling

Tailwind for utilities, ShadCN for components. Extend via Tailwind config, not ad-hoc CSS.

### 🔹 Structure

Feature-based modules with clear import boundaries. Shared layers (`ui`, `lib`, `hooks`, `utils`) never depend on features.

### 🔹 SEO, Performance, Responsive

- Semantic HTML + metadata for SEO
- Optimized assets, lazy-loading, and code-splitting for performance
- Mobile-first, responsive layouts for accessibility

---

## 🏆 Why This Works

- **Predictable:** No surprises when reading code.
- **Maintainable:** New features fit existing patterns.
- **Scalable:** Structure supports growth without rewrites.
- **Resilient:** Errors are handled, state is safe, UI is consistent.

---

**Tip:** Each principle is defined in detail under `.windsurf/rules/`.  
This summary links them together as the **why** behind the rules.
