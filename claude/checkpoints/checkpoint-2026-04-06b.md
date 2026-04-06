# Checkpoint — 2026-04-06b

## Context
Hero Faction character select screen (SCAD AI 201, P1 due 2026-04-08). Vite/React app deployed to GitHub Pages.

## Human Directions This Session
- Add atmospheric background image (snowy night mountain scene with torches) as a subtle layer behind the UI
- Reduce brightness, saturation, and contrast so it doesn't compete with the interface
- Image detail should be faintly readable, not overpowering

## Files Changed
- `public/bg.png` — background image added
- `src/index.css` — body::before pseudo-element with background image and CSS filters (brightness 0.32, saturate 0.45, contrast 0.85, opacity 0.72); #root set to z-index 1

## Records of Resistance
- None this session

## Successes
- Background blends cleanly into existing dark UI without competing with teal/cyan interface elements
- Torch lights remain faintly visible adding atmosphere
