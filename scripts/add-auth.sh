#!/bin/bash
#
# add-auth.sh — Add Sanctum auth flow to the Expo app
#
# Copies auth template files into the project:
#   - src/lib/api.ts (fetch wrapper with Bearer token)
#   - src/features/auth/ (types, API calls, Zustand store)
#   - src/app/login.tsx (login screen)
#   - src/app/_layout.tsx (replaced with auth-enabled layout)

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATES="$PROJECT_ROOT/templates/auth"

if [ ! -d "$TEMPLATES" ]; then
  echo "Error: auth templates not found at $TEMPLATES"
  exit 1
fi

echo "Adding Sanctum auth flow..."

mkdir -p "$PROJECT_ROOT/src/features/auth"

cp "$TEMPLATES/src/lib/api.ts" "$PROJECT_ROOT/src/lib/api.ts"
cp "$TEMPLATES/src/features/auth/types.ts" "$PROJECT_ROOT/src/features/auth/types.ts"
cp "$TEMPLATES/src/features/auth/api.ts" "$PROJECT_ROOT/src/features/auth/api.ts"
cp "$TEMPLATES/src/features/auth/store.ts" "$PROJECT_ROOT/src/features/auth/store.ts"
cp "$TEMPLATES/src/app/login.tsx" "$PROJECT_ROOT/src/app/login.tsx"
cp "$TEMPLATES/src/app/_layout.tsx" "$PROJECT_ROOT/src/app/_layout.tsx"

echo "Auth flow added:"
echo "  - src/lib/api.ts (fetch wrapper with Bearer token)"
echo "  - src/features/auth/types.ts"
echo "  - src/features/auth/api.ts"
echo "  - src/features/auth/store.ts"
echo "  - src/app/login.tsx"
echo "  - src/app/_layout.tsx (updated with AuthGuard)"
echo ""
echo "Done!"
