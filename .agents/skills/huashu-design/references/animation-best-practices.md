# Animation Best Practices · Positive Animation Design Grammar

> Based on deep deconstruction of Anthropic's three official product animations (Claude Design / Claude Code Desktop / Claude for Word),
> distilling "Anthropic-grade" animation design rules.
>
> Use with `animation-pitfalls.md` (pitfall checklist) — this file is "**what to do**",
> pitfalls is "**what not to do**", they are orthogonal, read both.
>
> **Constraint statement**: This file only covers **motion logic and expression style**, **does not introduce any specific brand color values**.
> Color decisions go through §1.a Core Asset Protocol (extracted from brand spec) or "Design Direction Consultant"
> (20 philosophies' respective color schemes). This reference discusses "**how to move**", not "**what color**".

---

## §0 · Who You Are · Identity and Taste

> Before reading any technical rules below, read this section first. Rules **emerge from identity** —
> not the other way around.

### §0.1 Identity Anchor

**You are a motion designer who has studied Anthropic / Apple / Pentagram / Field.io motion archives.**

When making animations, you aren't adjusting CSS transitions — you're using digital elements to **simulate a physical world**,
making the audience's subconscious believe "this is an object with weight, inertia, and overflow."

You don't do PowerPoint-style animation. You don't do "fade in fade out" animation. The animation you make **makes people believe the screen
is a space you can reach into.**

### §0.2 Core Beliefs (3 Rules)

1. **Animation is physics, not animation curves**
   `linear` is digital, `expoOut` is an object. You believe pixels on screen deserve to be treated as "objects."
   Every easing choice answers the physical question "how heavy is this element? What's the friction coefficient?"

2. **Timing allocation is more important than curve shape**
   Slow-Fast-Boom-Stop is your breath. **Uniformly paced animation is a technical demo; animated animation is storytelling.**
   Slowing down at the right moment — is more important than using the right easing at the wrong moment.

3. **Yielding to the audience is harder than showing off**
   Pausing 0.5s before a key result is **technique**, not compromise. **Giving the human brain reaction time is the animator's highest virtue.**
   AI defaults to an uninterrupted, information-dense animation — that's a novice. What you do is restraint.

### §0.3 Taste Standards · What is Beautiful

Your criteria for "good" and "great" are as follows. Each has a **recognition method** — when evaluating a candidate animation,
use these questions to determine if it meets the standard, rather than mechanically checking against 14 rules.

| Dimension of Beauty | Recognition Method (Audience Reaction) |
|---|---|
| **Physical weight** | When animation ends, elements "**land**" steadily — not "**stop**" there. Subconsciously the audience feels "this has weight" |
| **Yielding to audience** | A perceptible pause (≥300ms) before key information appears — audience has time to "**see**" before continuing |
| **Whitespace** | Ending is abrupt stop + hold, not fade to black. Last frame is clear, definitive, with decisiveness |
| **Restraint** | Only one place of "120% polish" in the entire piece, the rest 80% is just right — **showing off everywhere is a cheap signal** |
| **Texture** | Curves (not straight lines), irregularity (not setInterval's mechanical rhythm), with breath |
| **Reverence** | Showing the tweak process, showing bug fixes — **not hiding work, not presenting "magic"**. AI is a collaborator not a magician |

### §0.4 Self-check · Audience First Reaction Method

After finishing an animation, **what is the audience's first reaction?** — this is the only metric you need to optimize.

| Audience Reaction | Rating | Diagnosis |
|---|---|---|
| "Looks pretty smooth" | good | Passable but no character, you're doing PowerPoint |
| "This animation is really smooth" | good+ | Technique is right, but not impressive |
| "This thing really looks like it's **floating up from the desktop**" | great | You've touched physical weight |
| "This doesn't look like it was made by AI" | great+ | You've touched the Anthropic threshold |
| "I want to **screenshot** this and share it" | great++ | You've achieved active audience sharing |

**The difference between great and good is not technical correctness, it's taste judgment**. Technical correctness + good taste = great.
Technical correctness + empty taste = good. Technical errors = not even started.

### §0.5 Relationship Between Identity and Rules

The technical rules in §1-§8 below are **execution methods** of this identity in specific scenarios — not an independent rule checklist.

- Encountering a scenario not covered by rules → Return to §0, judge with **identity**, don't guess
- Encountering conflicts between rules → Return to §0, judge with **taste standards** which is more important
- Want to break a rule → First answer: "Does this align with which beauty standard in §0.3?" If yes, break it. If not, don't.

Good. Continue reading.

---

## Overview · Animation as Physics in Three Layers

The root cause of cheapness in most AI-generated animations is — **they behave like "numbers" not "objects"**.
Real-world objects have mass, inertia, elasticity, and overflow. The "premium feel" of the three Anthropic films
comes from giving digital elements a **set of physical world motion rules**.

These rules have 3 layers:

1. **Narrative Rhythm Layer**: Slow-Fast-Boom-Stop time allocation
2. **Motion Curve Layer**: Expo Out / Overshoot / Spring, reject linear
3. **Expression Language Layer**: Show process, mouse arcs, Logo morph convergence

---

## 1. Narrative Rhythm · Slow-Fast-Boom-Stop 5-Segment Structure

All three Anthropic films follow this structure without exception:

| Segment | Ratio | Tempo | Purpose |
|---|---|---|---|
| **S1 Trigger** | ~15% | Slow | Give human reaction time, establish realism |
| **S2 Generate** | ~15% | Medium | Visual highlight appears |
| **S3 Process** | ~40% | Fast | Show control/density/detail |
| **S4 Boom** | ~20% | Boom | Camera pull back/3D pop-out/multi-panel emergence |
| **S5 Landing** | ~10% | Still | Brand Logo + abrupt stop |

**Concrete duration mapping** (for a 15-second animation):
S1 Trigger 2s · S2 Generate 2s · S3 Process 6s · S4 Boom 3s · S5 Landing 2s

**Prohibited practices**:
- ❌ Uniform rhythm (same information density per second) — audience fatigue
- ❌ Sustained high density — no peaks, no memory points
- ❌ Fade-out ending (fade to transparent) — should **stop abruptly**

**Self-check**: Draw 5 thumbnails on paper, each representing the climax frame of one segment. If the 5 drawings aren't very different, the rhythm isn't working.

---

## 2. Easing Philosophy · Reject Linear, Embrace Physics

All effects in the three Anthropic films use Bezier curves with "damping feel." The default cubic easeOut
(`1-(1-t)³`) is **not sharp enough** — not fast enough at start, not stable enough at stop.

### Three Core Easings (built into animations.jsx)

```js
// 1. Expo Out · Fast start, slow brake (most common, default primary easing)
// CSS equivalent: cubic-bezier(0.16, 1, 0.3, 1)
Easing.expoOut(t) // = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)

// 2. Overshoot · Elastic toggle/button pop
// CSS equivalent: cubic-bezier(0.34, 1.56, 0.64, 1)
Easing.overshoot(t)

// 3. Spring Physics · Geometry settling, natural landing
Easing.spring(t)
```

### Usage Mapping

| Scenario | Which Easing |
|---|---|
| Card rise-in / panel entry / Terminal fade / focus overlay | **`expoOut`** (primary easing, most common) |
| Toggle switch / button pop / emphasis interaction | `overshoot` |
| Preview geometry settling / physical landing / UI element bounce | `spring` |
| Continuous motion (e.g. mouse trajectory interpolation) | `easeInOut` (preserves symmetry) |

### Counter-Intuitive Insight

Most product promotional animations are **too fast and too hard**. `linear` makes digital elements feel like machines, `easeOut` is baseline,
`expoOut` is the technical root of "premium feel" — it gives digital elements a **physical world weight**.

---

## 3. Motion Language · 8 Common Principles

### 3.1 Base Color Not Pure Black or White

None of the three Anthropic films use `#FFFFFF` or `#000000` as the main base color. **Color-temperature neutrals**
(warm or cool) have a "paper / canvas / desktop" material feel, reducing machine-like feel.

**Specific color value decisions** go through §1.a Core Asset Protocol (extracted from brand spec) or "Design Direction Consultant"
(20 philosophies' respective base color schemes). This reference doesn't give specific values — that's **brand decision**, not motion rules.

### 3.2 Never linear Easing

See §2.

### 3.3 Slow-Fast-Boom-Stop Narrative

See §1.

### 3.4 Show "Process" Rather Than "Magic Result"

- Claude Design shows tweaking parameters, dragging sliders (not one-click perfect results)
- Claude Code shows code errors + AI fixes (not first-time success)
- Claude for Word shows Redline red-delete green-add modification process (not directly the final draft)

**Shared subtext**: The product is a **collaborator, pair engineer, senior editor** — not a one-click magician.
This precisely hits professional users' pain points about "controllability" and "authenticity."

**Anti AI slop**: AI defaults to "magic one-click success" animations (one-click generate → perfect result),
this is the common denominator. **Do the opposite** — show process, show tweaks, show bugs and fixes —
this is the source of brand distinctiveness.

### 3.5 Mouse Trajectory Hand-drawn (Arc + Perlin Noise)

Real human mouse movement is not a straight line — it's "start acceleration → arc → deceleration correction → click."
AI's straight-line interpolated mouse trajectory **has subconscious repulsion**.

```js
// Quadratic Bezier curve interpolation (start → control point → end)
function bezierQuadratic(p0, p1, p2, t) {
  const x = (1-t)*(1-t)*p0[0] + 2*(1-t)*t*p1[0] + t*t*p2[0];
  const y = (1-t)*(1-t)*p0[1] + 2*(1-t)*t*p1[1] + t*t*p2[1];
  return [x, y];
}

// Path: start → deviated midpoint → end (creating arc)
const path = [[100, 100], [targetX - 200, targetY + 80], [targetX, targetY]];

// Then overlay minimal Perlin Noise (±2px) to create "hand tremor"
const jitterX = (simpleNoise(t * 10) - 0.5) * 4;
const jitterY = (simpleNoise(t * 10 + 100) - 0.5) * 4;
```

### 3.6 Logo "Morph Convergence"

The three Anthropic films' Logo appearances **are not simple fade-ins** — they **morph from the previous visual element**.

**Shared pattern**: In the last 1-2 seconds, Morph / Rotate / Converge, making the entire narrative "collapse" onto the brand point.

**Low-cost implementation** (not real morph):
Let the previous visual element "collapse" into a color block (scale → 0.1, translate to center),
then the color block "expands" into the wordmark. Use 150ms quick cut + motion blur
(`filter: blur(6px)` → `0`) for transition.

```js
<Sprite start={13} end={14}>
  {/* Collapse: previous element scale 0.1, opacity maintained, filter blur increasing */}
  const scale = interpolate(t, [0, 0.5], [1, 0.1], Easing.expoOut);
  const blur = interpolate(t, [0, 0.5], [0, 6]);
</Sprite>
<Sprite start={13.5} end={15}>
  {/* Expand: Logo from color block center scale 0.1 → 1, blur 6 → 0 */}
  const scale = interpolate(t, [0, 0.6], [0.1, 1], Easing.overshoot);
  const blur = interpolate(t, [0, 0.6], [6, 0]);
</Sprite>
```

### 3.7 Serif + Sans-Serif Dual Fonts

- **Brand / Narration**: Serif (has "academic / publication / taste" feel)
- **UI / Code / Data**: Sans-serif + Monospace

**A single font is incorrect**. Serif provides "taste," Sans-serif provides "function."

Specific font selection goes through brand spec (brand-spec.md's Display / Body / Mono three stacks) or Design Direction
Consultant's 20 philosophies. This reference doesn't give specific fonts — that's **brand decision**.

### 3.8 Focus Switch = Background Dimming + Foreground Sharpening + Flash Guide

Focus switching **isn't just** reducing opacity. The complete recipe is:

```js
// Non-focus element filter combination
tile.style.filter = `
  brightness(${1 - 0.5 * focusIntensity})
  saturate(${1 - 0.3 * focusIntensity})
  blur(${focusIntensity * 4}px)        // ← Key: adding blur truly makes it "recede"
`;
tile.style.opacity = 0.4 + 0.6 * (1 - focusIntensity);

// After focus completes, do a 150ms Flash highlight at focus position to guide gaze back
focusOverlay.animate([
  { background: 'rgba(255,255,255,0.3)' },
  { background: 'rgba(255,255,255,0)' }
], { duration: 150, easing: 'ease-out' });
```

**Why blur is essential**: Using only opacity + brightness, elements outside focus are still "sharp,"
visually not "receding to the background." blur(4-8px) truly pushes non-focus elements back one depth layer.

---

## 4. Specific Motion Techniques (Copy-Pasteable Code Snippets)

### 4.1 FLIP / Shared Element Transition

Button "expanding" into input field is **not** button disappears + new panel appears. The core is **the same DOM element**
transitioning between two states, not two elements cross-fading.

```jsx
// Using Framer Motion layoutId
<motion.div layoutId="design-button">Design</motion.div>
// ↓ After click, same layoutId
<motion.div layoutId="design-button">
  <input placeholder="Describe your design..." />
</motion.div>
```

Native implementation reference: https://aerotwist.com/blog/flip-your-animations/

### 4.2 "Breathing" Expansion (width→height)

Panel expansion is **not** simultaneously expanding width and height, but:
- First 40% time: only expand width (keeping height small)
- Last 60% time: width maintained, expand height

This simulates the physical world feel of "first unfold, then fill."

```js
const widthT = interpolate(t, [0, 0.4], [0, 1], Easing.expoOut);
const heightT = interpolate(t, [0.3, 1], [0, 1], Easing.expoOut);
style.width = `${widthT * targetW}px`;
style.height = `${heightT * targetH}px`;
```

### 4.3 Staggered Fade-up (30ms Stagger)

When table rows, card columns, list items enter, **each element delays 30ms**, `translateY` from 10px back to 0.

```js
rows.forEach((row, i) => {
  const localT = Math.max(0, t - i * 0.03);  // 30ms stagger
  row.style.opacity = interpolate(localT, [0, 0.3], [0, 1], Easing.expoOut);
  row.style.transform = `translateY(${
    interpolate(localT, [0, 0.3], [10, 0], Easing.expoOut)
  }px)`;
});
```

### 4.4 Non-linear Breath · 0.5s Pause Before Key Result

Machines execute fast and continuously, but **pause 0.5 seconds before a key result appears**, giving the audience's brain reaction time.

```jsx
// Typical scenario: AI finishes generating → 0.5s pause → result appears
<Sprite start={8} end={8.5}>
  {/* 0.5s pause — nothing moves, let audience stare at loading state */}
  <LoadingState />
</Sprite>
<Sprite start={8.5} end={10}>
  <ResultAppear />
</Sprite>
```

**Anti-pattern**: AI finishes generating and seamlessly transitions to result — audience has no reaction time, information lost.

### 4.5 Chunk Reveal · Simulating Token Streaming

AI-generated text **should not use `setInterval` single-character popping** (like old movie subtitles), but **chunk reveal**
— appearing 2-5 characters at a time with irregular intervals, simulating real token streaming output.

```js
// Split by chunk, not by character
const chunks = text.split(/(\s+|,\s*|\.\s*|;\s*)/);  // split by word + punctuation
let i = 0;
function reveal() {
  if (i >= chunks.length) return;
  element.textContent += chunks[i++];
  const delay = 40 + Math.random() * 80;  // irregular 40-120ms
  setTimeout(reveal, delay);
}
reveal();
```

### 4.6 Anticipation → Action → Follow-through

Three of Disney's 12 principles. Anthropic uses them very explicitly:

- **Anticipation**: Small counter-movement before action begins (button slightly shrinks then pops)
- **Action**: The main action itself
- **Follow-through**: After action ends, there's a lingering effect (card settles with slight bounce)

```js
// Complete three-segment card entry
const anticip = interpolate(t, [0, 0.2], [1, 0.95], Easing.easeIn);     // Anticipation
const action  = interpolate(t, [0.2, 0.7], [0.95, 1.05], Easing.expoOut); // Action
const settle  = interpolate(t, [0.7, 1], [1.05, 1], Easing.spring);       // Bounce
// Final scale = three segments multiplied or applied segmentally
```

**Anti-pattern**: Animation with only Action, no Anticipation + Follow-through, looks like "PowerPoint animation."

### 4.7 3D Perspective + translateZ Layering

For a "tilted 3D + floating card" aesthetic, add perspective to the container and different translateZ to individual elements:

```css
.stage-wrap {
  perspective: 2400px;
  perspective-origin: 50% 30%;  /* slight top-down view */
}
.card-grid {
  transform-style: preserve-3d;
  transform: rotateX(8deg) rotateY(-4deg);  /* golden ratio */
}
.card:nth-child(3n) { transform: translateZ(30px); }
.card:nth-child(5n) { transform: translateZ(-20px); }
.card:nth-child(7n) { transform: translateZ(60px); }
```

**Why rotateX 8° / rotateY -4° is the golden ratio**:
- Greater than 10° → elements distort too much, look like "falling over"
- Less than 5° → looks like "shear" not "perspective"
- 8° × -4° asymmetric ratio simulates the natural angle of "camera looking down from top-left of desktop"

### 4.8 Diagonal Pan · Move XY Simultaneously

Camera movement is not purely vertical or horizontal, but **moving XY simultaneously** simulating diagonal movement:

```js
const panX = Math.sin(flowT * 0.22) * 40;
const panY = Math.sin(flowT * 0.35) * 30;
stage.style.transform = `
  translate(-50%, -50%)
  rotateX(8deg) rotateY(-4deg)
  translate3d(${panX}px, ${panY}px, 0)
`;
```

**Key**: X and Y have different frequencies (0.22 vs 0.35), avoiding Lissajous cycle regularization.

---

## 5. Scene Recipes (Three Narrative Templates)

The three videos in the reference material correspond to three product personalities. **Choose the one that fits your product best**, don't mix.

### Recipe A · Apple Keynote Dramatic (Claude Design-like)

**Suitable for**: Major version releases, hero animations, visual impact priority
**Rhythm**: Slow-Fast-Boom-Stop strong arc
**Easing**: `expoOut` throughout + minimal `overshoot`
**SFX Density**: High (~0.4/s), SFX pitch tuned to BGM key
**BGM**: IDM / minimal tech electronic, calm + precise
**Convergence**: Camera quickly pulls back → drop → Logo morph → ethereal single note → abrupt stop

### Recipe B · One-shot Tool-style (Claude Code-like)

**Suitable for**: Developer tools, productivity apps, flow state scenarios
**Rhythm**: Sustained stable flow, no obvious peaks
**Easing**: `spring` physics + `expoOut`
**SFX Density**: **0** (purely BGM-driven edit rhythm)
**BGM**: Lo-fi Hip-hop / Boom-bap, 85-90 BPM
**Core technique**: Key UI actions hit BGM kick/snare transients — **"musical rhythm as interaction sound"**

### Recipe C · Office Productivity Narrative (Claude for Word-like)

**Suitable for**: Enterprise software, documents/spreadsheets/calendar, professional feel priority
**Rhythm**: Multi-scene hard cuts + Dolly In/Out
**Easing**: `overshoot` (toggle) + `expoOut` (panel)
**SFX Density**: Medium (~0.3/s), UI clicks primarily
**BGM**: Jazzy Instrumental, minor key, BPM 90-95
**Core highlight**: One scene must have the "full-piece highlight" — 3D pop-out / floating off the plane

---

## 6. Anti-patterns · This is AI Slop

| Anti-pattern | Why Wrong | Correct Approach |
|---|---|---|
| `transition: all 0.3s ease` | `ease` is linear's relative, all elements same speed | Use `expoOut` + per-element stagger |
| All entries `opacity 0→1` | No motion direction | Add `translateY 10→0` + Anticipation |
| Logo fade in | No narrative convergence | Morph / Converge / collapse-expand |
| Mouse moves in straight line | Subconscious machine feel | Bezier arc + Perlin Noise |
| Typewriter single-char popping (setInterval) | Like old movie subtitles | Chunk Reveal, random intervals |
| No pause before key result | Audience has no reaction time | 0.5s pause before result |
| Focus switch only changes opacity | Non-focus elements still sharp | opacity + brightness + **blur** |
| Pure black / pure white background | Cyber feel / glare fatigue | Color-temperature neutral (via brand spec) |
| All animations same speed | No rhythm | Slow-Fast-Boom-Stop |
| Fade out ending | No decisiveness | Abrupt stop (hold last frame) |

---

## 7. Self-check Checklist (60 Seconds Before Delivery)

- [ ] Narrative structure is Slow-Fast-Boom-Stop, not uniform rhythm?
- [ ] Default easing is `expoOut`, not `easeOut` or `linear`?
- [ ] Toggle / button pop uses `overshoot`?
- [ ] Card / list entry has 30ms stagger?
- [ ] 0.5s pause before key result?
- [ ] Typing uses Chunk Reveal, not setInterval single-character?
- [ ] Focus switch adds blur (not just opacity)?
- [ ] Logo is morph convergence, not fade in?
- [ ] Base color not pure black/white (color-temperature)?
- [ ] Text has serif + sans-serif hierarchy?
- [ ] Ending is abrupt stop, not fade out?
- [ ] (If mouse present) Mouse trajectory is arc, not straight line?
- [ ] SFX density matches product personality (see Recipe A/B/C)?
- [ ] BGM and SFX have 6-8dB loudness difference? (see `audio-design-rules.md`)

---

## 8. Relationship with Other References

| Reference | Positioning | Relationship |
|---|---|---|
| `animation-pitfalls.md` | Technical pitfalls (16 rules) | "**What not to do**" · Reverse of this file |
| `animations.md` | Stage/Sprite engine usage | **How to write** animations basics |
| `audio-design-rules.md` | Dual-track audio rules | Rules for **pairing audio** with animation |
| `sfx-library.md` | 37 SFX inventory | SFX **asset library** |
| `apple-gallery-showcase.md` | Apple gallery showcase style | One specific motion style deep dive |
| **This file** | Positive motion design grammar | "**What to do**" |

**Call order**:
1. First read SKILL.md workflow Step 3's four questions (determine narrative role and visual temperature)
2. After selecting direction, read this file to determine **motion language** (Recipe A/B/C)
3. When writing code, reference `animations.md` and `animation-pitfalls.md`
4. When exporting video, go through `audio-design-rules.md` + `sfx-library.md`

---

## Appendix · Source Material for This File

- Anthropic official animation deconstruction: `reference-animations/BEST-PRACTICES.md` in Uncle Hua's project directory
- Anthropic audio deconstruction: `AUDIO-BEST-PRACTICES.md` in same directory
- 3 reference videos: `ref-{1,2,3}.mp4` + corresponding `gemini-ref-*.md` / `audio-ref-*.md`
- **Strictly filtered**: This reference does not include any specific brand color values, font names, or product names.
  Color/typography decisions go through §1.a Core Asset Protocol or 20 design philosophies.
