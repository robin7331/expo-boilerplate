# Design System

> Clean, neutral defaults — customize these tokens to match your app's visual identity.

## Color Palette

All colors use OKLCH for perceptual uniformity. These values are wired directly into `src/global.css`.

### Core Colors

| Token | OKLCH | Usage |
|-------|-------|-------|
| `primary` | `oklch(0.55 0.2 250)` | Main brand color, buttons, active states |
| `primary-foreground` | `oklch(0.98 0.01 250)` | Text/icons on primary backgrounds |
| `accent` | `oklch(0.65 0.15 300)` | Secondary actions, highlights |
| `accent-foreground` | `oklch(0.98 0.01 300)` | Text/icons on accent backgrounds |

### Surface Colors

| Token | OKLCH | Usage |
|-------|-------|-------|
| `background` | `oklch(0.99 0.002 250)` | App background |
| `foreground` | `oklch(0.15 0.01 250)` | Primary text color |
| `surface` | `oklch(0.97 0.005 250)` | Cards, elevated containers |
| `surface-light` | `oklch(0.93 0.01 250)` | Subtle backgrounds, hover states |

### Semantic Colors

| Token | Usage |
|-------|-------|
| `success` | Confirmations, completed states |
| `warning` | Caution states, pending actions |
| `error` | Errors, destructive actions |
| `muted` | Disabled states, placeholder text |

## Typography

| Element | Font | Size | Weight | Tracking |
|---------|------|------|--------|----------|
| Display | System default | 32px | Bold (700) | -0.02em |
| Heading 1 | System default | 24px | Bold (700) | -0.01em |
| Heading 2 | System default | 20px | Semibold (600) | 0 |
| Body | System default | 16px | Regular (400) | 0 |
| Caption | System default | 13px | Regular (400) | 0.01em |

> Prefer system fonts for performance. If custom fonts are needed, load via `expo-font` and update this table.

## Spacing & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius` | `0.25rem` | Default border radius |
| `radius-sm` | `0.125rem` | Small elements (chips, badges) |
| `radius-lg` | `0.5rem` | Large elements (cards, modals) |
| `radius-full` | `9999px` | Circular elements (avatars, pills) |

**Spacing scale**: Uses Tailwind's default 4px grid (p-1 = 4px, p-2 = 8px, p-4 = 16px, etc.)

## Brand Voice

> Neutral and professional — update this section to reflect your app's personality.

**Guidelines:**
- Lead with clarity over cleverness
- Use active, direct language
- Keep microcopy concise

**Examples:**
| Context | Instead of | Write |
|---------|-----------|-------|
| Empty state | "No items found" | "Nothing here yet" |
| CTA button | "Submit" | "Continue" |
| Error | "Error occurred" | "Something went wrong — try again" |

## Dark / Light Mode

Strategy: Light-first, dark mode follows system preference.

- Light mode tokens are defined in `@layer theme { :root { @variant light { ... } } }` in `global.css`
- All custom colors should work in both modes
- Use HeroUI Native's built-in dark mode support for components

## Token → CSS Mapping

These tokens map directly to `src/global.css`:

```css
@theme {
  --radius: 0.25rem;
  --color-primary: oklch(0.55 0.2 250);
  --color-primary-foreground: oklch(0.98 0.01 250);
  --color-accent: oklch(0.65 0.15 300);
  --color-surface: oklch(0.97 0.005 250);
  --color-surface-light: oklch(0.93 0.01 250);
}

@layer theme {
  :root {
    @variant light {
      --accent: oklch(0.65 0.15 300);
      --accent-foreground: oklch(0.98 0.01 300);
      --background: oklch(0.99 0.002 250);
      --foreground: oklch(0.15 0.01 250);
    }
  }
}
```
