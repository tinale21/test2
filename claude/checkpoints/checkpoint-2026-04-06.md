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
- Removing overflow:hidden from zone-center to fix floor glow clipping — user reverted twice; settled on Option 2 (reduce blur, lift element)
- Character base/pedestal — went through several iterations before user removed it entirely

## Successes
- Emblem system working with per-character size/spacing tuning
- Spotlight aura gives character a presentation feel without overpowering the UI
