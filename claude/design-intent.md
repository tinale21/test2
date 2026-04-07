# Design Intent — Hero Faction Character Select
**Project 1 | AI 201 | Written before AI engagement with code**

---

## Purpose

This is an interactive animated prototype for an already-designed character select screen. The screens, layout, visual styling, and character art are locked. The prototype's job is to make the static screens feel functional through motion, interactivity, and state changes. This is not a redesign task. The existing screens are the visual source of truth.

---

## Layout — Three-Zone Composition

The screen is divided into three fixed zones. Left: Back navigation, "Select Character" label, 2×2 character thumbnail grid, Ready button. Center: Selected hero character (large, idle animated) — empty until selection. Right: Selected character name, title, and stat bars — empty until selection.

---

## Color Palette

Background: `#0f1923` (deep navy). Stat bar fill: `#00b8a0` (teal). Stat bar track: dark navy. Text: `#ffffff`. Button fill: `#0E0F14`. Button stroke default: `#959499`. Button stroke hover: `#6FA8FF`. Thumbnail selected border: bright/light. Font (character names): serif display (Playfair Display). Font (labels/stats): uppercase sans-serif.

---

## Characters & Stats

Kevin, The Thinker — Speed 65%, Knowledge 75%, Curiosity 45%. Hanna, The Risk-Taker — Speed 65%, Knowledge 75%, Curiosity 50%. Rae, The Brains — Speed 70%, Knowledge 90%, Curiosity 55%. Daniel, The Explorer — Speed 65%, Knowledge 80%, Curiosity 100%. Character art: static PNG assets, white backgrounds handled with `mix-blend-mode: multiply`.

---

## Interaction States

State 1 — Default (No Selection): 2×2 thumbnail grid visible, all thumbnails at 100% opacity. Center zone: empty. Right zone: empty. Ready button: visible, default styling, inactive.

State 2 — Character Selected: Selected thumbnail: 100% opacity, highlighted border. Unselected thumbnails: 50% opacity (`200–250ms ease-out` transition). Center zone: hero character fades/rises in, plays idle animation. Right zone: name + title appear, stat bars animate from 0 to value (staggered). Ready button: activates.

State 3 — Re-selection: User clicks a different thumbnail. Newly selected thumbnail rises to 100%. Previously selected drops to 50%. All others remain at 50%. Hero and stats update to match new selection.

State 4 — Ready: User clicks Ready button → placeholder "game started" screen.

---

## Thumbnail Interaction Rules

Selected: 100% opacity — locked, active, no change on hover. Unselected: 50% opacity. Unselected (hover): lifts to ~72% opacity for feedback, remains visually secondary. Transition: `200–250ms ease-out` — applies to initial selection, re-selection, and hover in/out. Thumbnails are always clickable regardless of selection state.

---

## Hero Character — Center Zone

Appears on selection via fade in + slight upward translate. Plays a subtle idle animation (gentle float/bob — static PNG asset, no sprite). Updates on re-selection with cross-fade. Hidden in default state.

---

## Stat Bars — Right Zone

Three stats: SPEED, KNOWLEDGE, CURIOSITY. Bar animates width from 0% to character's value on selection. Bars are staggered — each one starts slightly after the previous. Resets and re-animates on re-selection.

---

## Button Rules — Ready & Back

Default State: Fill: `#0E0F14`. Stroke: 2px inside, `#959499` at 100%. No glow, no animation — quiet and inactive.

Hover State: Transition in: `180–220ms ease-out`. Stroke: shifts to `#6FA8FF` at 85–100% opacity. Outer glow: soft diffused blue, `10–16px` blur. Glow animation: slow breathe/pulse, `1.5–2s` loop — only affects glow intensity and stroke brightness, never button size or layout. Tone: premium, cinematic, controlled — not neon.

Hover Exit: Transition out: `~180ms`. Stroke fades back to `#959499`. Glow dissolves softly — no hard cut.

---

## Transition & Motion Principles

All state changes are animated — nothing cuts abruptly. Motion is restrained and purposeful — not flashy. Idle animation is alive but not distracting. Stat bar fill is the most expressive animation on screen.
