# SVRN Design System

Source of truth for SVRN brand tokens, logos, and the `@svrn/design-system` npm package consumed by `svrn-admin-platform` and `svrn-operator-platform`.

## Canonical surfaces
- **Repo:** `Brodiekern1/svrn-design-system`
- **Live URL:** https://svrn-design-system.vercel.app (one-pager preview)
- **Canonical branch:** `main`
- **Consumed by:** `svrn-admin-platform` and `svrn-operator-platform` via `"@svrn/design-system": "github:Brodiekern1/svrn-design-system"` — no npm publish.

## What lives here
- Brand one-pager (tactical brutalism × luxury editorial, maroon/cream/black palette)
- Design tokens, logos

## Non-obvious rules
- Palette: maroon (oxblood), cream, black. Never drift without explicit approval.
- Bumping this repo affects both platforms — run a build of each after a breaking change.
