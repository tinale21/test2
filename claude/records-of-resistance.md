# Records of Resistance

---

**1. Glowing character base / selection pedestal** — 2026-04-06
- What AI produced: A three-layer teal pedestal beneath the selected hero — outer bloom div, visible rim border with box-shadow glow, bright inner oval surface. Styled to look like a raised selection platform.
- Why rejected: The platform intersected the character's shoes regardless of repositioning. After fixing the clipping it was too faint. After boosting the glow it still did not satisfy. The feature was removed entirely.
- What I did instead: Removed the base. Replaced the selection treatment with a vertical spotlight column and floor glow behind the character.

---

**2. Removing `overflow: hidden` from `.zone-center` to fix floor glow clipping** — 2026-04-06
- What AI produced: Removed `overflow: hidden` from `.zone-center` to allow the floor glow blur to render past the container boundary. Attempted three times: once outright, once paired with `overflow: visible` on the wrap, and once as a full structural refactor (moving glow elements outside `.hero-base-wrap`, adding `overflow: hidden` to the wrap, making `.hero-display` the positioning context).
- Why rejected: Each attempt either broke the hero character scaling and centering in the stage area or introduced layout side effects.
- What I did instead: Reverted all three attempts. Resolved clipping by lifting the floor glow element 30px from the bottom and reducing `filter: blur` from 28px to 8px so the bleed stays within the existing container bounds (Option 2).

---

**3. Hero spotlight glow intensity increase** — 2026-04-06
- What AI produced: Boosted the vertical spotlight column opacity from 0.28 to 0.55 and the floor glow from 0.35 to 0.60 in response to "increase the glow."
- Why rejected: The increased glow overpowered the interface and competed with the UI elements.
- What I did instead: Reverted to the original lower-opacity values.

---

**4. Stat bar height misinterpreted as length** — 2026-04-06
- What AI produced: Changed the stat bar `height` from 12px to 8px when prompted to "decrease each stat bar by 4pt," interpreting "decrease" as referring to the bar's thickness.
- Why rejected: The intent was to shorten the horizontal length of the bar, not reduce its height. Height was correct at 12px.
- What I did instead: Reverted the height back to 12px and reduced the track `width` from `calc(100% - 24px)` to `calc(100% - 28px)` instead.

---

**5. Hero character scale overcorrection (90% → 70%)** — 2026-04-06
- What AI produced: Reduced the hero image height from 90% to 70% when asked to "decrease the scale by 0.2x," treating the reduction as a flat 20-percentage-point drop.
- Why rejected: The jump was too aggressive — the character appeared too small on screen and required multiple scale-up corrections (70% → 80% → 75%) to land at the right size.
- What I did instead: Incrementally scaled back up in 0.1x steps until the character felt right at 75% height.
