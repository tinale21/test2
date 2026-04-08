# Checkpoint: Utility Bar Polish + Disclaimer Block
**Date:** 2026-04-07

## Context
Third checkpoint. Covers utility bar refinement, disclaimer component, stats panel scaling, and background saturation.

## What Was Built / Changed

### Utility Bar
- Coin icon: 3D teal gradient coin with $, 30px
- Currency number: teal (#24AEA8), bold, 1.18rem
- Notification + settings: filled icons, 27px, white
- Profile avatar: circular, 27px, with green status dot
- Live clock: right of profile, 72px gap, Fauna One light, military time removed
- Controls cluster (coin, notification, settings) grouped with 26px internal gap
- Clock separated from profile by 72px

### Disclaimer Component (new)
- Fixed bottom-left at left: 48px, bottom: 48px (mirrors screen padding)
- Rotates through 5 messages every 6s with 500ms fade
- Label: Fauna One 16px, rgba(255,255,255,0.55)
- Body: Fauna One 14px, rgba(255,255,255,0.38), single line (white-space: nowrap)
- Fauna One added to Google Fonts import

### Stats Panel
- Whole panel scaled to scale(0.85) from top center
- char-identity scaled additional 0.95x
- Gap between identity and stats: 56px

### Layout
- zone-left-inner offset: translate(15px, 5px)

### Background
- Saturation increased from 0.45 to 0.50

### Data
- Daniel curiosity stat: 100 → 90

## Human Directions Summary
- Polish utility bar: unbox all elements, filled icons, teal coin, teal number, live clock
- Add profile avatar with status dot
- Add disclaimer/game fact rotating text block bottom-left
- Scale stats panel down proportionally
- Adjust background saturation
