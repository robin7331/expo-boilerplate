---
name: add-auth
description: >
  Add Sanctum API token authentication to this Expo app. Creates api.ts fetch wrapper,
  auth feature module (types, API calls, Zustand store), login screen, and auth-enabled
  root layout with AuthGuard. Use when the user wants to add authentication, login flow,
  or Sanctum auth to the app.
---

# Add Auth

Run the auth scaffolding script:

```bash
./scripts/add-auth.sh
```

After the script completes, inform the user what was added and that they need a Laravel backend with Sanctum API endpoints for this to work.
