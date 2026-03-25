---
name: add-iap
description: >
  Add RevenueCat in-app purchases and subscriptions to this Expo app. Installs
  react-native-purchases and react-native-purchases-ui packages. Use when the user
  wants to add in-app purchases, subscriptions, or RevenueCat to the app.
---

# Add IAP

Run the IAP scaffolding script:

```bash
./scripts/add-iap.sh
```

After the script completes, remind the user to:
1. Add `EXPO_PUBLIC_REVENUECAT_API_KEY` to their `.env`
2. Uncomment `REVENUECAT_API_KEY` in `env.ts`
