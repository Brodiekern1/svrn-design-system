# SVRN Brand — Source of Truth

> Single plain-text reference for AI tools building assets in the SVRN system.
> When in doubt, this document wins. Import `tokens/tokens.css` for exact values.

---

## 1. What SVRN is

SVRN is the house brand for **Sovereign Operators** — a premium coaching and movement brand for male founders. Positioning is **tactical brutalism × luxury editorial**: serious, planted, deliberate. Never bouncy, never cheerful, never corporate-tech-bro.

Read as: a magazine laid out by an ex-military operator, not a SaaS dashboard.

---

## 2. Palette

| Role | Token | Hex |
|---|---|---|
| Base canvas | `--svrn-bg` | `#1F1F1F` |
| Elevated (cards, modals) | `--svrn-bg-elevated` | `#2A2A2A` |
| Subtle (hovers, chips) | `--svrn-bg-subtle` | `#353535` |
| Inset (deepest) | `--svrn-bg-inset` | `#171717` |
| Cream (display / hero) | `--svrn-fg` | `#ECE5CB` |
| Maroon (primary accent) | `--svrn-accent` | `#671F1F` |
| Bright maroon (emphasis) | `--svrn-accent-bright` | `#943838` |

Cream is the editorial note. Use for masthead, hero, identity. **Do not** use cream for body copy — body copy is 95% white.

Maroon is the weapon. Primary action, active states, highlighted cells. Avoid on body text.

---

## 3. Typography

Three-family stack — never substitute:

- **Fraunces** — all display (headings, page titles, section titles). Weight 400. Letter-spacing `-0.025em`. Always pair with the `.svrn-display-shadow` class (text-shadow) for the "planted" feel.
- **Inter** — all body, UI, labels. Default 14px, weight 400.
- **JetBrains Mono** — metadata, timestamps, uppercase kickers, numeric tables.

### Type rules

1. **Section / page titles end in a period.** Terminal period is the type signature. "Wordmark." "Color." "The Operator." Never question marks or exclamation points.
2. **Short, hard words win.** Single-word titles > multi-word. "Form." > "Shape & Motion." Avoid the Fraunces ampersand — it's the most decorative glyph in the font.
3. **Cap display size at ~44px.** Anything larger pushes Fraunces into editorial/feminine optical territory.
4. **Always apply `.svrn-display-shadow`** to `font-display` text. Non-negotiable. It's what makes Fraunces read tactical instead of precious.
5. **Never use Fraunces for body.** Inter only.

---

## 4. Form (shape + motion)

### Radius scale
`4px` (chips) · `6px` (buttons, inputs) · `8px` (cards) · `12px` (modals). **No 10px or 16px orphans.**

### Shadows
Two tiers only: `--svrn-shadow-card` (default) and `--svrn-shadow-hover` (lift on hover). Plus `--svrn-display-shadow` for Fraunces text.

### Motion
- **150ms** default — hovers, state changes, button presses
- **300ms** page / section entrance (rare)
- **600ms** cinematic (very rare)

**Snap, don't bounce. Fade fast, not slow.** No swooshes, no spring physics, no animated gradients. If it moves, it moves in one direction and stops.

---

## 5. Voice

### Headlines
- Declarative. Finite. Never question form.
- "The Operator." "Enter the arena." "Hold the line."
- Never: "Ready to level up?" "Are you the one?" "Unlock your potential."

### Buttons
- Imperative, one or two words. Often end in a period.
- "Enlist." "Begin." "Submit." "Hold."
- Never: "Sign up now!" "Get started today" "Click here"

### Body
- Short sentences. No hedging. No "perhaps," no "maybe."
- Say what it is, not what it could be.

---

## 6. Logos

Four variants per mark:

| File | Use |
|---|---|
| `logos/logomark-cream.svg` | Default on dark surfaces (`--svrn-bg`) |
| `logos/logomark-maroon.svg` | On cream / light backgrounds |
| `logos/logomark-charcoal.svg` | On cream / light neutrals where maroon clashes |
| `logos/symbol-*.svg` | Small spaces: avatars, favicons, hats, merch |

**Wordmark** = full `SVRN` lockup. Use on landing pages, email headers, primary identity.
**Symbol** = abstract mark. Use when width is constrained or on physical merch.

### Clear space
Minimum clear space = height of the `S` glyph on all sides.
Minimum wordmark size: 80px wide for screen, 24mm wide for print.
Minimum symbol size: 24px square for screen, 8mm square for print.

---

## 7. Component patterns

- **Card:** `--svrn-bg-elevated` background, `1px solid --svrn-border`, `--svrn-radius-lg`, `--svrn-shadow-card`. Hover lifts to `--svrn-shadow-hover`.
- **Button (primary):** `--svrn-accent` bg, cream text, `--svrn-radius-md`, 150ms ease. Hover to `--svrn-accent-hover`.
- **Button (secondary):** transparent bg, `1px solid --svrn-border-strong`, 95%-white text. Hover fills with `--svrn-bg-subtle`.
- **Kicker label:** JetBrains Mono, 11px, uppercase, letter-spacing `0.18em`, color `--svrn-fg-faint`. Often precedes a Fraunces title as section framing.
- **Active sidebar item:** `--svrn-bg-elevated` bg, `2px solid --svrn-accent-bright` left border.

---

## 8. Do / Don't

**DO**
- End section titles with a period.
- Apply `.svrn-display-shadow` to every Fraunces heading.
- Pair kicker + Fraunces title + Inter lead as a unit.
- Use transparent maroon `rgba(103, 31, 31, 0.15)` for soft emphasis backgrounds.
- Keep display size ≤ 44px except for the single masthead on a page.

**DON'T**
- Use Fraunces for body copy.
- Use the Fraunces ampersand in display text unless unavoidable.
- Introduce a new radius, shadow, color, or duration outside this document.
- Bounce, spring, swoosh, or crossfade.
- Mix cream and white in the same element — cream is for display only.
