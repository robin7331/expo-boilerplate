# CLAUDE.md

## What: Technology Stack

- **Expo SDK** with React Native — Managed React Native development
- **TypeScript** — Strict type safety throughout
- **Expo Router** — File-based routing (like Next.js)
- **TailwindCSS v4** via Uniwind — Utility-first styling for React Native
- **HeroUI Native** — Pre-built accessible component library
- **Zustand** — Lightweight global state management
- **React Query** — Server state and data fetching
- **TanStack Form + Zod** — Type-safe form handling and validation
- **MMKV** — Encrypted local storage
- **Jest + React Testing Library** — Unit testing

## What: Project Structure

```
src/
├── app/              # Expo Router file-based routes
├── features/         # Feature modules (screens, components, API hooks per feature)
├── components/       # Shared UI components
├── hooks/            # Shared custom React hooks
├── lib/              # Pre-configured utilities (query, storage, cn)
└── global.css        # TailwindCSS + Uniwind configuration & design tokens

Root Files:
├── env.ts            # Typed environment config
├── app.config.ts     # Expo configuration
├── eas.json          # EAS Build profiles
├── DESIGN.md         # Design tokens, palette, typography, brand voice
└── README.md         # Setup & release guide
```

## How: Development Workflow

**Essential Commands:**
```bash
npm start              # Start dev server
npm run ios            # Run on iOS simulator
npm run android        # Run on Android emulator
npm run lint           # ESLint check
npm run type-check     # TypeScript validation
npm run test           # Run Jest tests
npm run check-all      # All quality checks
```

**Building & Releasing:**
```bash
npm run build:dev              # Dev client build
npm run build:preview          # Internal testing build
npm run build:production       # App Store / Play Store build
npm run build:production:local # Local production build
npm run submit:ios             # Submit .ipa to App Store Connect
```

## How: Key Patterns

- **Create features**: New folder in `src/features/[your-feature]/` with screens, components, API hooks
- **Add routes**: Create files in `src/app/` (file-based routing)
- **Forms**: Use TanStack Form + Zod for type-safe form handling and validation
- **Data fetching**: Use React Query with query key factories
- **Global state**: Use Zustand stores — persistent stores use MMKV via `zustand/middleware/persist`
- **Styling**: Tailwind classes via `className` prop (powered by Uniwind). Use `cn()` from `@/lib/cn` for conditional classes
- **Components**: Use HeroUI Native for pre-built components (Button, Card, TextField, Dialog, etc.)
- **Storage**: Use MMKV via `@/lib/storage` for persistent data (not AsyncStorage)
- **Imports**: Always use `@/` prefix, never relative imports

## How: Essential Rules

- Always use absolute imports: `@/components/button`, `@/lib/storage`
- Follow feature-based structure: `src/features/[name]/`
- Use TanStack Form for forms (not react-hook-form)
- Use MMKV storage for persistent data (not AsyncStorage)
- Use EAS Build for production builds
- Prefix env vars with `EXPO_PUBLIC_*` for app access
- Do NOT modify `android/` or `ios/` directly (use Expo config plugins)
- Design tokens live in `DESIGN.md` and are wired into `src/global.css`

## What: Design System

[DESIGN.md](DESIGN.md) is the **single source of truth** for all visual design decisions.

**When building UI or creating new screens:**
- Read `DESIGN.md` first to understand the color palette, typography, spacing, and brand voice
- Use the defined tokens — don't hardcode colors or introduce new ones without updating DESIGN.md

**When the user changes the design (colors, typography, spacing, brand voice, dark/light mode):**
1. Update `DESIGN.md` first with the new values
2. Then update `src/global.css` to match — the `@theme` and `@layer theme` blocks must stay in sync with DESIGN.md
3. Never update `global.css` without also updating `DESIGN.md`, and vice versa

## What: Available Skills

This project ships with local skills you can invoke anytime:
- `/add-auth` — Add Sanctum API token authentication (fetch wrapper, auth store, login screen, AuthGuard)
- `/add-iap` — Add RevenueCat in-app purchases and subscriptions

## How: Contributing Back to the Boilerplate

This project was cloned from `robin7331/expo-boilerplate`. When the user explicitly asks to **"add this to the boilerplate"** or **"add this to the boilerplates"**, they want the feature contributed back as a reusable skill so future projects get it too.

This does NOT apply when the user just wants to create a skill for this project only. Only act on this when the user specifically mentions "the boilerplate" or "the boilerplates".

### Boilerplate Repos

| Repo | Purpose | Skills location |
|------|---------|----------------|
| `robin7331/expo-boilerplate` | Expo mobile app boilerplate | `.claude/skills/{name}/SKILL.md` |
| `robin7331/expo-boilerplate-laravel-backend` | Laravel backend boilerplate | `.ai/skills/{name}/SKILL.md` |
| `robin7331/create-expo-app` | Orchestrator skill that scaffolds both | `create-expo-app/SKILL.md` |

### Steps

1. **Implement the feature in the current project first.** Get it working and tested.

2. **Separate deterministic from intelligent work:**
   - **Deterministic** (shell scripts): package installs, file copies, config changes → `scripts/{skill-name}.sh`
   - **Intelligent** (agent instructions): generating content, reading existing code → stays in `SKILL.md`
   - **Static files**: template files in `templates/{skill-name}/` mirroring the project directory structure

3. **Add the skill to the correct boilerplate repo:**
   - Clone the repo locally (e.g. into `/tmp/`)
   - Create the skill, script, and templates
   - Commit and push (or create a PR)
   - If the feature spans both app and backend, add to both repos

4. **Update the orchestrator (`robin7331/create-expo-app`) if the new skill should be offered as an option during project creation.** Add a question to Step 1 and an auto-invoke step to Step 3 (Expo) or Step 4 (Laravel) in `create-expo-app/SKILL.md`.
