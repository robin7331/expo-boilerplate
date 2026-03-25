#!/bin/bash
#
# add-iap.sh — Add RevenueCat in-app purchases to the Expo app
#
# Installs RevenueCat packages and adds the env var placeholder.

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "Adding RevenueCat in-app purchases..."

cd "$PROJECT_ROOT"
npm install react-native-purchases react-native-purchases-ui

# Add RevenueCat skill (best-effort)
npx skills add openclaw/revenuecat-skill@revenuecat -y 2>/dev/null || true

echo ""
echo "RevenueCat added. Next steps:"
echo "  1. Add EXPO_PUBLIC_REVENUECAT_API_KEY to your .env"
echo "  2. Uncomment REVENUECAT_API_KEY in env.ts"
echo ""
echo "Done!"
