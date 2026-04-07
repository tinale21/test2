# AI Direction Log

## Entry 1 — Project Scaffolding & Pipeline Test
---
**Date:** 2026-03-29 **What was asked:** Set up the Vite + React repo for GitHub Pages deployment and build a quick test page with a single button that keeps a record of clicks and celebrates each click. **What AI produced:** A multi-stage escalating shame/celebration page with particles, a blinking badge, and a quest-accept flow. Configured GitHub Actions to build on push to `main` and deploy to GitHub Pages. **Decision:** Kept as-is. Confirmed the end-to-end pipeline worked. User noted the creative execution was on target.

## Entry 2 — Hero Faction Select Screen Build
---
**Date:** 2026-04-01 **What was asked:** Build the three-zone hero select screen per the Design Intent — character thumbnails on the left, full hero display in the center, stats panel on the right. **What AI produced:** Grid layout with thumbnail grid, hero display with enter animation, stats panel with stat bars, character data file, selection states, opacity transitions, and ready button. **Decision:** Kept. Matched the design intent. Iterative refinements followed across multiple sessions for sizing, spacing, typography, and visual polish.

## Entry 3 — Character Emblems
---
**Date:** 2026-04-06 **What was asked:** "Now I am going to give you images of each character's emblem. When a character is selected, display that character's emblem above the character name on the right side character descriptor section. The emblem should be positioned above the character name by 8px and centered on the same horizontal axis as the name and descriptor." **What AI produced:** Emblem images copied to `public/emblems/`, emblem field added to character data, emblem rendered above char-name in StatsPanel with per-character CSS size and spacing overrides. **Decision:** Kept after iterative per-character tuning of size and margin-bottom offsets.

## Entry 4 — Glowing Character Base / Selection Pedestal
---
**Date:** 2026-04-06 **What was asked:** "Now I want you to add a glowing elliptical character base beneath the selected hero character. It should sit directly beneath the feet, centered to the hero, and use colors that match the existing teal/cyan language of the UI. The glow should also feel similar to the stat bar palette and emblem color family. It should appear only once a character is selected." **What AI produced:** A three-layer teal pedestal: outer bloom div, visible rim border with box-shadow, and a bright inner oval surface. **Decision:** Rejected and removed entirely. The platform intersected the character's shoes regardless of repositioning. After resolving the clipping it was too faint. After boosting the glow it still did not satisfy. Feature was scrapped.

## Entry 5 — Hero Selection Spotlight Aura
---
**Date:** 2026-04-06 **What was asked:** "Add a soft glow behind the selected character so they feel more highlighted and visually important on the screen. The glow should sit behind the hero character in the center area and act like a subtle selection aura, helping separate the character from the dark background without overpowering the interface." **What AI produced:** A diffuse radial body aura centered behind the character. Rejected as too body-shaped. Followed by: "Replace the current narrow glow behind the selected character with a broader character showcase lighting treatment similar to a game character creation or selection screen. I want the selected hero to feel like they are standing in a softly lit presentation area, not surrounded by a body-shaped halo." **What AI produced (revised):** A large vertical spotlight column anchored behind the hero plus a separate floor glow element at ground level. **Decision:** Kept. The spotlight column and floor glow remained after the body aura approach was rejected.

## Entry 6 — Floor Glow Clipping Fix
---
**Date:** 2026-04-06 **What was asked:** "The pedestal ellipse is being clipped at the front. Remove any overflow or masking that is cutting off the front edge, and render the base as a full visible ellipse beneath the character. Keep it behind the PNG and below the shoes but make sure the front arc of the platform is fully visible so it reads as a complete glowing oval." **What AI produced:** Removed `overflow: hidden` from `.zone-center` — attempted twice outright, and once as a full structural refactor moving glow elements outside `.hero-base-wrap` with selective clipping. **Decision:** All three attempts rejected. Each broke hero character scaling or stage layout. Resolved instead by lifting the floor glow element 30px from the bottom and reducing blur from 28px to 8px so the bleed stays within existing container bounds (Option 2).

## Entry 7 — Atmospheric Background Image
---
**Date:** 2026-04-06 **What was asked:** "I am going to give you an image. I want you to blend it into the existing background as a subtle atmospheric layer rather than replacing the current background outright. I want the image detail to be faintly readable so reduce the brightness, saturation, and contrast of the photo scene so it sits farther back visually. Make sure the background does not compete with the interface." **What AI produced:** A `body::before` pseudo-element with the background image set to `brightness(0.32) saturate(0.45) contrast(0.85) opacity(0.72)`. The `#root` element set to `z-index: 1` to keep all UI above the layer. **Decision:** Kept. The snowy mountain night scene blends into the dark UI without competing with the teal/cyan interface elements.
