# Gallery Ripple + Multi-Focus · Scene Orchestration Philosophy

> Distilled from the huashu-design hero animation v9 (25 seconds, 8 scenes) — **a reusable visual orchestration structure**.
> Not an animation production pipeline, but **when this orchestration is "right"**.
> Practical reference: [demos/hero-animation-v9.mp4](../demos/hero-animation-v9.mp4) · [https://www.huasheng.ai/huashu-design-hero/](https://www.huasheng.ai/huashu-design-hero/)

## One-Liner First

> **When you have 20+ homogeneous visual assets and need to express "scale and depth," prioritize Gallery Ripple + Multi-Focus orchestration over stacking layouts.**

Generic SaaS feature animations, product launches, skill promotions, series portfolio showcases — as long as you have enough assets with consistent style, this structure almost always delivers.

---

## What This Technique Actually Expresses

It's not "showing off assets" — it tells a narrative through **two tempo shifts**:

**First Beat · Ripple Reveal (~1.5s)**: 48 cards radiate from center outward, the audience is struck by the "quantity" — "oh, this thing has this much output."

**Second Beat · Multi-Focus (~8s, 4 cycles)**: While the camera slowly pans, 4 times the background dims + desaturates, individually enlarging one card to screen center — the audience shifts from "impact of quantity" to "gaze at quality," each 1.7s at a steady rhythm.

**Core narrative structure**: **Scale (Ripple) → Gaze (Focus × 4) → Fade out (Walloff)**. These three beats together express "Breadth × Depth" — not just capable of doing many things, but each one worth stopping to look at.

Compare with counterexamples:

| Approach | Audience Perception |
|----------|---------|
| 48 cards static layout (no Ripple) | Looks nice but no narrative, like a grid screenshot |
| One-by-one quick cuts (no Gallery context) | Like a slideshow, loses "sense of scale" |
| Only Ripple without Focus | Stunned but didn't remember any specific card |
| **Ripple + Focus × 4 (this recipe)** | **First awed by quantity, then gaze at quality, finally fade out calmly — complete emotional arc** |

---

## Prerequisites (All Must Be Met)

This orchestration is **not universal** — all 4 conditions below are indispensable:

1. **Asset count ≥ 20, preferably 30+**
   Fewer than 20 makes Ripple feel "empty" — only when all 48 cells are moving do you get density. v9 used 48 cells × 32 images (cycling fill).

2. **Visual style must be consistent**
   All 16:9 slide previews / all app screenshots / all cover designs — aspect ratio, color palette, layout should feel like "a set." Mixing makes the Gallery look like a clipboard.

3. **Assets still have readable information when enlarged individually**
   Focus enlarges a card to 960px wide. If the original image is blurry or information-sparse when enlarged, the Focus beat is wasted. Reverse check: can you pick 4 "most representative" cards out of 48? If not, asset quality is uneven.

4. **Scene is landscape or square, not portrait**
   Gallery's 3D tilt (`rotateX(14deg) rotateY(-10deg)`) needs a sense of horizontal extension; portrait mode makes the tilt look narrow and awkward.

**Fallback paths when conditions are not met**:

| Missing | Degrade To |
|---------|-----------|
| Assets < 20 | Use "3-5 side-by-side static display + individual focus" |
| Inconsistent style | Use "cover + 3 chapter large images" keynote-style |
| Information-sparse | Use "data-driven dashboard" or "quote + large text" |
| Portrait scene | Use "vertical scroll + sticky cards" |

---

## Technical Recipe (v9 Production Parameters)

### 4-Layer Structure

```
viewport (1920×1080, perspective: 2400px)
  └─ canvas (4320×2520, large overflow) → 3D tilt + pan
      └─ 8×6 grid = 48 cards (gap 40px, padding 60px)
          └─ img (16:9, border-radius 9px)
      └─ focus-overlay (absolute center, z-index 40)
          └─ img (matches selected slide)
```

**Key**: Canvas is 2.25× larger than viewport, so the pan gives a sense of "peeking into a bigger world."

### Ripple Reveal (Distance Delay Algorithm)

```js
// Each card's entry time = distance from center × 0.8s delay
const col = i % 8, row = Math.floor(i / 8);
const dc = col - 3.5, dr = row - 2.5;       // Offset from center
const dist = Math.hypot(dc, dr);
const maxDist = Math.hypot(3.5, 2.5);
const delay = (dist / maxDist) * 0.8;       // 0 → 0.8s
const localT = Math.max(0, (t - rippleStart - delay) / 0.7);
const opacity = expoOut(Math.min(1, localT));
```

**Core Parameters**:
- Total duration 1.7s (`T.s3_ripple: [8.3, 10.0]`)
- Max delay 0.8s (center earliest, corners latest)
- Each card entry duration 0.7s
- Easing: `expoOut` (explosive feel, not smooth)

**Simultaneous action**: canvas scale from 1.25 → 0.94 (zoom out to reveal) — the feeling of pulling back in sync with appearance.

### Multi-Focus (4 Tempo Cycles)

```js
T.focuses = [
  { start: 11.0, end: 12.7, idx: 2  },  // 1.7s
  { start: 13.3, end: 15.0, idx: 3  },  // 1.7s
  { start: 15.6, end: 17.3, idx: 10 },  // 1.7s
  { start: 17.9, end: 19.6, idx: 16 },  // 1.7s
];
```

**Rhythm**: Each focus 1.7s, 0.6s breathing interval. Total 8s (11.0–19.6s).

**Inside each focus**:
- In ramp: 0.4s (`expoOut`)
- Hold: Middle 0.9s (`focusIntensity = 1`)
- Out ramp: 0.4s (`easeOut`)

**Background changes (this is key)**:

```js
if (focusIntensity > 0) {
  const dimOp = entryOp * (1 - 0.6 * focusIntensity);  // dim to 40%
  const brt = 1 - 0.32 * focusIntensity;                // brightness 68%
  const sat = 1 - 0.35 * focusIntensity;                // saturate 65%
  card.style.filter = `brightness(${brt}) saturate(${sat})`;
}
```

**Not just opacity — simultaneously desaturate + darken**. This makes the foreground overlay's colors "pop," rather than just "brighten a bit."

**Focus overlay size animation**:
- From 400×225 (entry) → 960×540 (hold state)
- Outer ring: 3 layers of shadow + 3px accent-colored outline ring, creating a "framed" feel

### Pan (Sustained Motion Keeps Static from Being Boring)

```js
const panT = Math.max(0, t - 8.6);
const panX = Math.sin(panT * 0.12) * 220 - panT * 8;
const panY = Math.cos(panT * 0.09) * 120 - panT * 5;
```

- Sine wave + linear drift dual-layer motion — not pure loop, every moment's position is different
- X/Y frequencies differ (0.12 vs 0.09) to avoid visually perceiving a "regular cycle"
- Clamped at ±900/500px to prevent drifting out

**Why not pure linear pan**: With linear pan, the audience can "predict" where it will be next second; sine + drift makes every second new, producing a "slight seasick feeling" (the good kind) under 3D tilt, holding attention.

---

## 5 Reusable Patterns (Distilled from v6→v9 Iterations)

### 1. **expoOut as Primary Easing, Not CubicOut**

`easeOut = 1 - (1-t)³` (smooth) vs `expoOut = 1 - 2^(-10t)` (explosive then rapidly converges).

**Why choose**: expoOut's first 30% reaches 90%, more like physical damping, matching the intuition of "heavy things landing." Especially suitable for:
- Card entry (weightiness)
- Ripple diffusion (shockwave)
- Brand floating up (settling feel)

**When to still use cubicOut**: focus out ramp, symmetric micro-animations.

### 2. **Paper-like Background + Terracotta Orange Accent (Anthropic Heritage)**

```css
--bg: #F7F4EE;        /* Warm paper */
--ink: #1D1D1F;       /* Almost black */
--accent: #D97757;    /* Terracotta orange */
--hairline: #E4DED2;  /* Warm lines */
```

**Why**: Warm background still has "breathability" after GIF compression, unlike pure white which feels "screen-like." Terracotta orange as the sole accent runs through terminal prompt, dir-card selection, cursor, brand hyphen, focus ring — all visual anchors strung together by this one color.

**v5 lesson**: Added noise overlay to simulate "paper texture," but GIF frame compression ruined it (every frame different). v6 changed to "background color + warm shadow only," preserving 90% of the paper feel while reducing GIF size by 60%.

### 3. **Two-Level Shadow for Depth, No Real 3D**

```css
.gallery-card.depth-near { box-shadow: 0 32px 80px -22px rgba(60,40,20,0.22), ... }
.gallery-card.depth-far  { box-shadow: 0 14px 40px -16px rgba(60,40,20,0.10), ... }
```

Uses `sin(i × 1.7) + cos(i × 0.73)` deterministic algorithm to assign each card one of three shadow levels — **visually "3D stacked" but every frame's transform is completely unchanged, GPU cost: 0**.

**Cost of real 3D**: Each card needs individual `translateZ`, GPU recalculates 48 transforms + shadow blur every frame. v4 tried this, even Playwright recording struggled at 25fps. v6's two-level shadow: <5% visual difference, but 10× cost difference.

### 4. **Font Weight Variation (font-variation-settings) More Cinematic Than Size Change**

```js
const wght = 100 + (700 - 100) * morphP;  // 100 → 700 over 0.9s
wordmark.style.fontVariationSettings = `"wght" ${wght.toFixed(0)}`;
```

Brand wordmark transitions from Thin → Bold over 0.9s, with letter-spacing micro-adjustments (-0.045 → -0.048em).

**Why better than scale**:
- Scale up/down is overused, audience expectations are hardened
- Weight change is "internal substance filling," like a balloon being inflated, not "being pushed closer"
- Variable fonts only became mainstream post-2020, audiences subconsciously feel "modern"

**Limitation**: Must use fonts that support variable font technology (Inter/Roboto Flex/Recursive, etc.). Regular static fonts can only simulate (switching between a few fixed weights creates jumps).

### 5. **Corner Brand: Low-Intensity Continuous Signature**

During the Gallery phase, a small `HUASHU · DESIGN` label sits in the top-left corner, 16% opacity color value, 12px font size, wide letter-spacing.

**Why add this**:
- After the Ripple burst, the audience can easily "lose focus" and forget what they're looking at; the light label in the top-left helps anchor
- More sophisticated than a full-screen big logo — those who build brands know brand signatures don't need to shout
- Leaves an attribution signal when the GIF is screenshot and shared

**Rule**: Only appears in the middle segment (when the screen is busy), hidden at opening (doesn't obscure terminal), hidden at closing (brand reveal is the protagonist).

---

## Counterexamples: When NOT to Use This Orchestration

**❌ Product demo (needs to show functionality)**: Gallery makes each card flash by, the audience won't remember any single feature. Use "single-screen focus + tooltip annotations" instead.

**❌ Data-driven content**: The audience needs to read numbers; Gallery's fast rhythm doesn't give time to read. Use "data charts + item-by-item reveal" instead.

**❌ Story narrative**: Gallery is a "parallel" structure, stories need "causality." Use keynote chapter transitions instead.

**❌ Only 3-5 assets**: Ripple's density is insufficient, looks like "patches." Use "static arrangement + individual highlights" instead.

**❌ Portrait (9:16)**: 3D tilt needs horizontal extension; portrait makes the tilt feel "crooked" rather than "unfolding."

---

## How to Determine if Your Task Fits This Orchestration

Three-step quick check:

**Step 1 · Asset Count**: Count your visually similar assets. < 15 → stop; 15-25 → barely; 25+ → use directly.

**Step 2 · Consistency Test**: Place 4 random assets side by side — do they look like "a set"? If not → unify style first, or change approach.

**Step 3 · Narrative Match**: Are you expressing "Breadth × Depth"? Or "process," "function," "story"? If not the former, don't force it.

All three yes → directly fork v6 HTML, change `SLIDE_FILES` array and timeline, and it's reusable. Change palette `--bg / --accent / --ink` for a complete skin swap without changing the bones.

---

## Related References

- Full technical workflow: [references/animations.md](animations.md) · [references/animation-best-practices.md](animation-best-practices.md)
- Animation export pipeline: [references/video-export.md](video-export.md)
- Audio configuration (BGM + SFX dual-track): [references/audio-design-rules.md](audio-design-rules.md)
- Apple gallery style horizontal reference: [references/apple-gallery-showcase.md](apple-gallery-showcase.md)
- Source HTML (v6 + audio integrated version): `www.huasheng.ai/huashu-design-hero/index.html`
