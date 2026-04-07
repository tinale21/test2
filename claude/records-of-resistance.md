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

---

**6. Initial body aura behind selected hero** — 2026-04-06
- What AI produced: A single diffuse radial gradient element (`hero-aura`) centered behind the character body — a tall ellipse that created a glow around the character's silhouette.
- Why rejected: The glow read as a body-shaped halo surrounding the character rather than a presentation environment. It was too narrow and too closely hugged the character's outline.
- What I did instead: Prompted for a broader showcase lighting treatment inspired by a game character creation screen reference image — replacing the body halo with a large vertical spotlight column and floor glow.

---

**7. Floor glow + rise layer approach (hero-aura-floor + hero-aura-rise)** — 2026-04-06
- What AI produced: Two elements replacing the body aura — a wide flat floor pool (`hero-aura-floor`) at ground level and an upward-fading bloom (`hero-aura-rise`) anchored at the character's base. Built in response to a reference image of a teal floor spotlight.
- Why rejected: The treatment still did not feel like a proper presentation environment. The glow read as too ground-focused and did not create enough vertical depth behind the character.
- What I did instead: Prompted for a complete redesign — "Replace the current narrow glow behind the selected character with a broader character showcase lighting treatment similar to a game character creation or selection screen. I want the selected hero to feel like they are standing in a softly lit presentation area, not surrounded by a body-shaped halo. Create a large, diffused vertical spotlight behind the character that is centered on the hero and blends naturally into the background." This produced the current `hero-spotlight` column and `hero-spotlight-floor` elements.

---

**8. Pedestal redesign before full removal** — 2026-04-06
- What AI produced: After the original three-layer pedestal was built, a second redesign pass produced a larger platform with a brighter inner oval, a visible teal/cyan outer rim, and a soft outer bloom at 150px wide — intended to feel like a "real selection pedestal."
- Why rejected: The pedestal was intersecting the character's shoes and the front arc was being clipped by `overflow: hidden` on the stage container. Every attempt to fix the clipping introduced other layout problems.
- What I did instead: Removed the base entirely after multiple failed attempts to resolve the intersection and clipping issues.
