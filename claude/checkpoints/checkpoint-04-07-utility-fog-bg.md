# Checkpoint: Utility Bar, Fog, and Character Backgrounds
**Date:** 2026-04-07

## Context
Second checkpoint for the Hero Faction character select screen. This checkpoint captures the atmospheric systems and utility UI added after the first checkpoint.

## What Was Built
- **Character-specific background system** — `Background.jsx` + `Background.css`: stacks all character bg images as fixed layers; active layer crossfades to opacity 0.72 over 600ms. Kevin and null both map to bg.png. Daniel, Hanna, Rae each have their own background image.
- **Atmospheric fog layer** — `Fog.jsx` + `Fog.css`: three-layer fog pinned to bottom: 0, height 415px, z-index 2. Only renders when a character is selected (fog disappears on the opening/unselected state). Dark slate-blue-grey gradient drifts at different speeds (28s/20s/14s) per layer.
- **Utility bar** — `UtilityBar.jsx` + `UtilityBar.css`: fixed top-right (top: 48px, right: 48px). Contains: boxed coin currency display (304), unboxed notification bell button, unboxed settings gear button. Notification and settings use `align-self: stretch` + `height: 100%` on icon so they match the currency box height.
- **HeroDisplay cleanup** — All spotlight/aura divs removed. Clean hero-base-wrap + hero-img only.
- **Background image files** — bg-daniel.png, bg-hanna.png, bg-rae.png added to public/.

## Human Directions Summary
- Add character-specific backgrounds with crossfade transitions
- Add fog/mist layer along bottom, visible only when character selected
- Make fog darker and more subdued; increase height by 10px (to 415px)
- Add utility bar with coins, notifications, settings in top-right
- Unbox notification and settings (no border around them)
- Match notification/settings height to the currency box height

## Records of Resistance
- See `records-of-resistance.md` entries 1–8 for all reverts and resistances up to this point
- Notable in this session: spotlight removal (twice), floor glow clipping attempts, fog border-radius confusion, "10x" vs "10px" misinterpretation

## Successes
- Background crossfade system worked cleanly on first implementation
- Fog gradient shape (no border-radius, gradient handles softness) resolved after one correction
- Utility bar height matching resolved with align-self: stretch approach
