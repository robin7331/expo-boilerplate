# Expo Boilerplate

Production-ready React Native Expo starter with Tailwind CSS, HeroUI Native, Zustand, React Query, and MMKV.

## Getting Started

```bash
npm install
npm start
```

Run on a device or simulator:

```bash
npm run ios          # iOS simulator
npm run ios:device   # Physical iOS device
npm run android      # Android emulator
```

## Project Structure

```
src/
├── app/              # Expo Router file-based routes
├── features/         # Feature modules (screens, components, API hooks)
├── components/       # Shared UI components
├── hooks/            # Shared custom React hooks
├── lib/              # Pre-configured utilities (query, storage, cn)
└── global.css        # TailwindCSS + design tokens
```

## Quality Checks

```bash
npm run lint          # ESLint
npm run type-check    # TypeScript
npm run test          # Jest
npm run check-all     # All of the above
npm run format        # Prettier
```

## Building & Releasing

```bash
npm run build:dev              # Dev client (internal)
npm run build:preview          # Preview build (internal)
npm run build:production       # Production build (App Store / Play Store)
npm run build:production:local # Local production build
npm run submit:ios             # Submit to App Store Connect
```

## Stack

- **Expo SDK** + React Native
- **TypeScript** (strict)
- **Expo Router** (file-based routing)
- **TailwindCSS v4** via Uniwind
- **HeroUI Native** components
- **Zustand** (global state) + **React Query** (server state)
- **TanStack Form** + **Zod** (forms & validation)
- **MMKV** (encrypted storage)
- **Jest** + **React Testing Library**

## Available Skills

Run these anytime via Claude Code:

- `/add-auth` — Add Sanctum API authentication
- `/add-iap` — Add RevenueCat in-app purchases

## Design Tokens

See [DESIGN.md](DESIGN.md) for the color palette, typography, spacing, and brand voice guidelines.
