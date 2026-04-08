# Hero Faction Screen
**SCAD AI 201 — Project 1**

> You are the Lead UI Designer. Build the screen where players choose their fate.

**Live URL:** https://tinale21.github.io/test2/

---

## Design Intent

*To be completed before AI engagement — Session 2 (3/25/26)*

---

## Mermaid Diagram

*To be added after design is finalized.*

```mermaid
flowchart TD
    A[App Loads] --> B[Character Select Screen]

    B --> C[UtilityBar — fixed top-right]
    B --> D[Disclaimer — fixed bottom-left]
    B --> E[Background — default bg.png]
    B --> F[Left Zone]

    F --> F1[Back Button]
    F --> F2[Select Character Label]
    F --> F3[2x2 Character Grid]

    F3 -->|User selects character| G[Character Selected State]

    G --> H[Background crossfades to character bg]
    G --> I[Fog layer appears]
    G --> J[HeroDisplay — center zone]
    G --> K[StatsPanel — right zone]
    G --> L[Ready Button appears]

    K --> K1[Character Emblem]
    K --> K2[Character Name]
    K --> K3[Character Title]
    K --> K4[Stat Bars — Speed / Knowledge / Curiosity]

    L -->|User clicks Ready| M[GameScreen]
    F1 -->|User clicks Back| N[Deselect — return to default state]
```

---

## AI Direction Log

See [`claude/ai-direction-log.md`](claude/ai-direction-log.md)

---

## Records of Resistance

See [`claude/records-of-resistance.md`](claude/records-of-resistance.md)

---

## Five Questions Reflection

*To be completed before submission.*

---

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173/test2/`
