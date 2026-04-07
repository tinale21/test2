# AI Direction Log

| # | Prompt | AI Output | Decision |
|---|--------|-----------|----------|
| 1 | Build a pipeline test page with a button that celebrates clicks | Multi-stage escalating shame/celebration page with particles, blinking badge, and quest-accept flow | Kept — confirmed end-to-end pipeline worked |
| 2 | Build the three-zone hero select screen from design reference | Grid layout with thumbnail grid, hero display, stats panel, character data, selection states, animations | Kept — matched design intent |
| 3 | Add character emblems above name in stats panel | Per-character emblem images with individual size and spacing overrides in CSS | Kept after iterative per-character tuning |
| 4 | Add a glowing elliptical character base beneath the selected hero | Three-layer teal pedestal: outer bloom, rim border, inner oval surface | Rejected and removed — intersected shoes, couldn't resolve clipping cleanly |
| 5 | Add a selection glow behind the hero character | Diffuse radial body aura, then vertical spotlight column + floor glow | Spotlight column + floor glow kept after body aura was rejected |
| 6 | Fix floor glow being clipped at front edge | Removed `overflow: hidden` from `.zone-center` (attempted twice); then structural refactor moving glow outside `.hero-base-wrap` | All attempts rejected — settled on Option 2: lift element + reduce blur |
| 7 | Add atmospheric background image as subtle layer | `body::before` pseudo-element with `brightness(0.32) saturate(0.45) contrast(0.85) opacity(0.72)` | Kept — blends without competing with UI |
