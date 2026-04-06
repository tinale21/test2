# Checkpoint — 2026-04-06

## Context
Hero Faction character select screen (SCAD AI 201, P1 due 2026-04-08). Vite/React app deployed to GitHub Pages.

## Human Directions This Session
- Add character emblems above name in StatsPanel (Hanna: mountain, Kevin: lightbulb, Rae: book, Daniel: compass)
- Per-character emblem sizing and spacing tuning (Daniel 216px, others 240px; individual margin-bottom offsets)
- Stat bar length reductions (calc(100% - 28px))
- Hero image scale set to 75% height
- Character spotlight/aura added behind selected hero: large vertical column + floor glow
- Multiple glow intensity iterations and reverts
- Attempted to fix floor glow clipping from zone-center overflow:hidden — landed on Option 2 (lift element + reduce blur to keep bleed within bounds)

## Files Changed
- `src/data/characters.js` — added `emblem` field for all four characters
- `src/components/StatsPanel.jsx` — renders emblem img above char-name
- `src/components/StatsPanel.css` — emblem sizing, per-character margin overrides, stats-panel align-items center, gap 78px
- `src/components/StatBar.css` — stat track width calc(100% - 28px), height 12px
- `src/components/HeroDisplay.jsx` — added hero-spotlight and hero-spotlight-floor divs
- `src/components/HeroDisplay.css` — spotlight column + floor glow styles, hero at 75% height
- `src/App.css` — zone-center retains overflow:hidden
- `public/emblems/` — hanna.png, kevin.png, rae.png, daniel.png added

## Records of Resistance

### 1 — Glowing elliptical character base (pedestal)
**Produced:** A three-layer teal pedestal beneath the hero: outer bloom, visible rim border, bright inner oval. Styled to look like a selection platform.
**Rejected because:** The platform was intersecting the character's shoes. After repositioning, it was too subtle. After boosting glow, it still did not satisfy. User ultimately removed the feature entirely.
**Prompted instead:** Remove the base entirely. Keep only the spotlight aura and floor glow behind the character.

### 2 — Hero spotlight glow intensity increase
**Produced:** Boosted spotlight opacity (column: 0.28→0.55, floor: 0.35→0.60) in response to "increase the glow."
**Rejected because:** Overpowered the interface.
**Prompted instead:** Revert to previous values.

### 3 — Removing overflow:hidden from zone-center (attempt 1)
**Produced:** Removed `overflow: hidden` from `.zone-center` and added `overflow: visible` to `.hero-base-wrap` to allow the floor glow blur to render past the container boundary.
**Rejected because:** User was not satisfied with the layout impact; reverted.
**Prompted instead:** Revert the change.

### 4 — Selective clip fix (moving glow elements outside hero-base-wrap)
**Produced:** Moved `hero-spotlight` and `hero-spotlight-floor` to be direct children of `.hero-display` (outside `.hero-base-wrap`), added `overflow: hidden` to `.hero-base-wrap` to contain the character, made `.hero-display` `position: relative` as new positioning context. Floor glow set to `bottom: -40px` to bleed intentionally.
**Rejected because:** User wanted to revert both the JSX restructure and the CSS changes.
**Prompted instead:** Revert the last two changes, then try Option 2 instead.

### 5 — Removing overflow:hidden from zone-center (attempt 2 — Option 1)
**Produced:** Removed `overflow: hidden` from `.zone-center` again after user explicitly chose "Option 1."
**Rejected because:** User then asked to keep Option 1's goal without breaking hero scaling or stage layout, leading to attempt 4 above. When that was also reverted, user reverted this change as well.
**Prompted instead:** Revert, then proceed with Option 2 (lift floor element + reduce blur to stay within bounds).

## Successes
- Emblem system working with per-character size/spacing tuning
- Spotlight aura gives character a presentation feel without overpowering the UI
