# Checkpoint 02 — Design Intent Complete
Date: 2026-04-01

## Context
Design Intent is fully written and committed. No code has been written for the Hero Faction
prototype yet. This checkpoint marks the end of the pre-AI-engagement design phase.

The project is a character select screen prototype for SCAD AI 201 Project 1. The visual
design, layout, and character art are locked — provided as reference screens and PNG assets.
The task is to build the interaction and animation layer only.

Character assets (PNG, white backgrounds) are located at:
- /Users/tinale/Downloads/Kevin.png
- /Users/tinale/Downloads/Hanna.png
- /Users/tinale/Downloads/Rae.png
- /Users/tinale/Downloads/Daniel.png

These need to be copied into the project at `public/characters/` before build begins.

Next step: copy assets into repo, then build the prototype per the Design Intent.

## Human Directions
1. Clone `https://github.com/tinale21/test2`
2. Run `npm install`
3. Copy character PNGs into `public/characters/`
4. Review `claude/docs/design-intent.md` to understand the full interaction spec
5. Build begins from `src/App.jsx` — replace the current go-outside placeholder

## Records of Resistance
None yet — this checkpoint covers design definition only.

## Successes
- Prompt: Pasting the 5 reference screens and 4 character assets together gave a complete
  picture of the visual system in one pass. No back-and-forth needed to establish layout,
  colors, or character data.
- The three-zone layout, all four states, thumbnail rules, button rules, and motion
  principles are fully defined and documented before a single line of prototype code
  is written. This is exactly what the Design Intent is for.
