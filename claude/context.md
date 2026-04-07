# Project Context

**Course:** SCAD AI 201 — Spring 2026
**Project:** P1 — Hero Faction Screen
**Due:** 2026-04-08
**Live URL:** https://tinale21.github.io/test2/

## What This Is
A character select screen prototype built as a Vite + React app deployed to GitHub Pages. Players choose one of four hero characters. The screen has three zones: left (character thumbnails + ready button), center (full hero display), right (stats panel with emblem, name, title, and stat bars).

## Stack
- Vite + React (JSX)
- Plain CSS modules per component
- GitHub Actions CI/CD → GitHub Pages
- Google Fonts: Cinzel, Playfair Display

## Characters
| ID | Name | Title |
|----|------|-------|
| kevin | Kevin | The Thinker |
| hanna | Hanna | The Risk-Taker |
| rae | Rae | The Brains |
| daniel | Daniel | The Explorer |

## Visual Language
- Background: `#0f1923` dark navy with atmospheric background image overlay
- Accent: teal/cyan (`#016858` → `#24AEA8` gradient)
- Stat bars: linear-gradient teal, `calc(100% - 28px)` width, 12px height
- Fonts: Playfair Display (character name, 60px 900), Cinzel (select label), Helvetica Neue (body)
- Glow interactions: `rgba(111, 168, 255)` blue for hover states

## Phase History
- **Checkpoint 01 (2026-03-29):** Repo scaffolded, GitHub Actions pipeline verified
- **Checkpoint 02 (2026-04-01):** Design Intent complete, no UI code yet
- **Checkpoint 03 (2026-04-06):** Character emblems, hero spotlight aura, UI polish
- **Checkpoint 04 (2026-04-06):** Atmospheric background image added
