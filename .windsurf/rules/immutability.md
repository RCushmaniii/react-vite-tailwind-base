---
trigger: always_on
---

- Treat all state and props as **immutable**. Never modify them directly.
- Always create a new object or array when updating state.
- Use immutable update patterns (`...spread`, `map`, `filter`) instead of mutating methods.
- Avoid direct mutations like `push`, `splice`, or property reassignment on state objects.
- Ensure Zustand stores, React state, and form data updates all follow immutable patterns.
- Immutability must apply across client and server logic for predictable behavior.

examples

- Good: `setItems([...items, newItem])`
- Bad: `items.push(newItem)`
- Good: `setUser({ ...user, name: 'Alice' })`
- Bad: `user.name = 'Alice'`
