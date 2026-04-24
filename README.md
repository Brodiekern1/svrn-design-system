# SVRN Design System

Source of truth for the **Sovereign Operators / SVRN** brand.

Deployed one-pager: [svrn-design-system-oxk1ot0m5-brodiekern1s-projects.vercel.app](https://svrn-design-system-oxk1ot0m5-brodiekern1s-projects.vercel.app)

> Note: repo is private and Vercel deployment protection is on. The URL returns 401 to non-logged-in visitors. To share publicly, either make the repo public or disable deployment protection in Vercel → Project Settings → Deployment Protection.

## What's in here

```
svrn-design-system/
├── brand-onepager.html    ← Visual brand book (the shareable artifact)
├── brand.md               ← Plain-text rules (for AI tools + humans)
├── tokens/
│   ├── tokens.css         ← CSS custom properties (import in projects)
│   └── tokens.json        ← Machine-readable version
└── logos/
    ├── logomark-cream.svg
    ├── logomark-maroon.svg
    ├── logomark-charcoal.svg
    ├── symbol-cream.svg
    ├── symbol-maroon.svg
    └── symbol-charcoal.svg
```

## How to use

**In a web project:**
```html
<link rel="stylesheet" href="https://svrn-design.vercel.app/tokens/tokens.css">
```

Then use the CSS variables:
```css
.card {
  background: var(--svrn-bg-elevated);
  border: 1px solid var(--svrn-border);
  border-radius: var(--svrn-radius-lg);
  box-shadow: var(--svrn-shadow-card);
}
```

**In an AI tool / skill:**
Point the agent at `brand.md` or `tokens.json`. Both are self-contained.

## Change rules

1. Tokens and rules change here **first**, then propagate to dashboards / sites.
2. Any proposed new token (color, radius, shadow, duration) must justify itself in `brand.md` section 8 before adoption.
3. No breaking changes without bumping a visible version label on the one-pager.

## Related repos

- Operator dashboard: `svrn-command-center`
- Admin dashboard: `svrn-admin`
