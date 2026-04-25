# SVRN Design System (npm package only)

Distribution repo for the `@svrn/design-system` npm package consumed by `svrn-admin` and `svrn-command-center`. **NOT the canonical brand source.**

## Canonical brand source
- **The brand one-pager at https://svrn-lessons.vercel.app/brand-onepager is the ONLY source of truth for SVRN design.** It lives in the `svrn-lessons` repo at `brand-onepager.html`.
- This repo's `tokens/`, `src/Button.tsx`, and any visual style guide files are DERIVED CONSUMERS — they must mirror the values in `brand-onepager.html`. Never edit them in isolation.
- The `index.html` in this repo was a duplicated style guide and is now considered legacy. Do not treat it as canonical. When the cascade is fully cleaned up it will be replaced with a redirect.

## Canonical surfaces (this repo)
- **Repo:** `Brodiekern1/svrn-design-system`
- **Live URL:** https://svrn-design-system.vercel.app (legacy one-pager preview — slated for redirect)
- **Canonical branch:** `main`
- **Consumed by:** `svrn-admin` and `svrn-command-center` via `"@svrn/design-system": "github:Brodiekern1/svrn-design-system"` — no npm publish.

## What lives here
- `tokens/tokens.css` and `tokens/tokens.json` — CSS variables and JSON values that mirror the brand one-pager. Sync these when the one-pager changes.
- `src/Button.tsx` — React Button primitive that implements the canonical button recipe from the one-pager.
- `logos/` — logomark and symbol SVG assets.

## Non-obvious rules
- **Brand changes start at the one-pager, never here.** Editing tokens or Button.tsx without first updating the one-pager creates drift. Workflow is always: one-pager → tokens → consumers.
- Palette: maroon (oxblood), cream, black. Hex values must match the brand one-pager.
- Bumping this repo affects both platforms — run a build of each after a breaking change.
