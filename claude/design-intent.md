# Design Intent — Hero Faction Character Select
**Project 1 | AI 201 | Written before AI engagement with code**

---

## Purpose

This is an interactive animated prototype for an already-designed character select screen. The screens, layout, visual styling, and character art are locked. The prototype's job is to make the static screens feel functional through motion, interactivity, and state changes. This is not a redesign task. The existing screens are the visual source of truth.

---

## Layout — Three-Zone Composition

The screen is divided into three fixed zones. The left zone contains back navigation, a "Select Character" label, a 2×2 character thumbnail grid, and a Ready button. The center zone displays the selected hero character large and idle animated, and remains empty until a selection is made. The right zone shows the selected character's name, title, and stat bars, and also remains empty until selection.

---

## Color Palette

The background is `#0f1923` deep navy. The stat bar fill is `#00b8a0` teal, set against a dark navy track. Text is `#ffffff`. Button fill is `#0E0F14` with a default stroke of `#959499` and a hover stroke of `#6FA8FF`. The selected thumbnail border is bright and light. Character names use a serif display font (Playfair Display). Labels and stats use uppercase sans-serif.

---

## Characters & Stats

Kevin, titled The Thinker, has Speed 65%, Knowledge 75%, and Curiosity 45%. Hanna, titled The Risk-Taker, has Speed 65%, Knowledge 75%, and Curiosity 50%. Rae, titled The Brains, has Speed 70%, Knowledge 90%, and Curiosity 55%. Daniel, titled The Explorer, has Speed 65%, Knowledge 80%, and Curiosity 100%. Character art consists of static PNG assets with white backgrounds handled using `mix-blend-mode: multiply`.

---

## Interaction States

In State 1, the default with no selection, the 2×2 thumbnail grid is visible with all thumbnails at 100% opacity. The center and right zones are empty. The Ready button is visible with default styling and inactive.

In State 2, when a character is selected, the selected thumbnail stays at 100% opacity with a highlighted border. Unselected thumbnails drop to 50% opacity with a 200–250ms ease-out transition. The center zone shows the hero character fading and rising in while playing an idle animation. The right zone reveals the name and title, and stat bars animate from 0 to their value in a staggered sequence. The Ready button activates.

In State 3, re-selection, the user clicks a different thumbnail. The newly selected thumbnail rises to 100% opacity. The previously selected drops to 50%. All others remain at 50%. The hero and stats update to match the new selection.

In State 4, the user clicks the Ready button and is taken to a placeholder "game started" screen.

---

## Thumbnail Interaction Rules

Selected thumbnails stay at 100% opacity — locked, active, no change on hover. Unselected thumbnails sit at 50% opacity. Unselected thumbnails on hover lift to approximately 72% opacity for feedback but remain visually secondary. Transitions run at 200–250ms ease-out and apply to initial selection, re-selection, and hover in and out. Thumbnails are always clickable regardless of selection state.

---

## Hero Character — Center Zone

The hero appears on selection via a fade in combined with a slight upward translate. It plays a subtle idle animation — a gentle float or bob — using the static PNG asset with no sprite. It updates on re-selection with a cross-fade. It is hidden in the default state.

---

## Stat Bars — Right Zone

There are three stats: SPEED, KNOWLEDGE, and CURIOSITY. Each bar animates its width from 0% to the character's value on selection. The bars are staggered so each one starts slightly after the previous. They reset and re-animate on re-selection.

---

## Button Rules — Ready & Back

In the default state, buttons use a fill of `#0E0F14`, a 2px inside stroke of `#959499` at 100% opacity, no glow, and no animation — quiet and inactive.

On hover, the transition in runs 180–220ms ease-out. The stroke shifts to `#6FA8FF` at 85–100% opacity. An outer glow appears — soft diffused blue, 10–16px blur — with a slow breathe and pulse animation looping every 1.5–2 seconds. The glow animation only affects glow intensity and stroke brightness, never button size or layout. The tone is premium, cinematic, and controlled — not neon.

On hover exit, the transition out runs approximately 180ms. The stroke fades back to `#959499` and the glow dissolves softly with no hard cut.

---

## Transition & Motion Principles

All state changes are animated — nothing cuts abruptly. Motion is restrained and purposeful, not flashy. The idle animation is alive but not distracting. The stat bar fill is the most expressive animation on screen.
