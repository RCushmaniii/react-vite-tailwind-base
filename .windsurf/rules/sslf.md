---
trigger: model_decision
description: Apply when handling sensitive or business-critical logic to ensure it runs server-side and is not exposed in client code.
---

- Apply server side logic first when there is sensitive or business-critical logic (authentication, payments, database writes) must run on the server.
- Example: Submit forms to server actions or API endpoints instead of calling the database directly.
- Example: Perform payment validation and processing in a server-side service.
- Avoid: Exposing discount calculations or business rules in client-side code.
- Avoid: Including secrets such as API keys or database credentials in client bundles.
