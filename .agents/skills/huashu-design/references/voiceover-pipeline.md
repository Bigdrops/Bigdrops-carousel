# Voiceover Pipeline · Narration-driven Animation

> Upgrades animation from "silent visuals + post-production dubbing" to a workflow of **"script first, then drive visuals based on measured audio duration."**
> Suitable for: 5-20 minute concept explanation videos, tutorial videos, long-form educational content.
>
> Use with `references/animation-best-practices.md` — this file handles **how to sync narration with visuals**,
> animation-best-practices handles **how each frame moves**.

---

## 🛑 Iron Laws · Must Read Before Writing Any Code

> **Cannot emphasize enough: the failure mode #1 of narrated animation is making a PowerPoint with voiceover.**

### First Law · The whole piece is a continuous motion narrative, not a set of independent scenes

PowerPoint is 7 slides. What we make is **1 continuous X-minute film**.

**Identity Shift**:
- ❌ You are not "making 7 scenes of content"
- ✅ You are "letting one or several hero elements perform for X minutes on screen"

**Visual Skeleton = one or several hero elements run through the entire film**:
- It appears at t=0 and doesn't leave until the end
- Each cue is a **state change** (position / size / color / perspective / form), not "swap in a new element"
- Scene boundaries exist in the script, **but should not be visible on screen** — the audience shouldn't see "this is scene 3," only a continuous motion

**Anti-pattern (this skill v1 real pitfall · 2026-05-10)**:
- 7 `<Scene>`s each with independent layout, scene switch = full page opacity 1→0 to next page
- Each cue = `opacity: p, transform: translateY((1-p)*30px)` (monotonous fade-up)
- Result: audience's first reaction "looks like pages of a keynote," entire piece feels zero

**Correct Pattern**:
- Choose 1-2 hero elements (e.g. for this document's demo, choose "md" and "html" two characters as skeleton)
- These two characters **stay on screen from start to end**
- Each "scene" is actually a state change of the hero element
  - opening: two characters face off center screen
  - md-side: md grows bigger and occupies the screen, html retreats to corner small text; data surges around md
  - html-side: html reverses to protagonist; md retreats to corner
  - the-real-question: two characters return to center, but a "≠" separator appears between them
  - the-split: two characters push apart sideways, blank space opens in the middle
  - activity-proof: two characters alternately flash on timeline
  - closing: two characters settle into final answer positions
- This makes the whole piece "md and html performed for X minutes on screen," not 7 independent PPT slides

**Minimal Implementation Skeleton** (copy and adapt directly):

```jsx
// ── Step 1: Define hero's target state for each scene (position/size/opacity) ──
const HERO_KEYS = {
  opening:    { md: { x: 50, y: 35, scale: 1.0, opacity: 1 }, html: { x: 50, y: 65, scale: 1.0, opacity: 1 } },
  'md-side':  { md: { x: 78, y: 50, scale: 1.6, opacity: 1 }, html: { x: 92, y: 8,  scale: 0.25, opacity: 0.4 } },
  'html-side':{ md: { x: 8,  y: 8,  scale: 0.25, opacity: 0.4 }, html: { x: 22, y: 50, scale: 1.6, opacity: 1 } },
  // ... one entry per segment, continuous motion from previous segment's final → current segment's from
};

// ── Step 2: easing + lerp utilities ──
const expoOut = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
const lerp = (a, b, t) => a + (b - a) * t;
const lerpPos = (from, to, t) => ({
  x: lerp(from.x, to.x, t), y: lerp(from.y, to.y, t),
  scale: lerp(from.scale, to.scale, t),
  opacity: lerp(from.opacity ?? 1, to.opacity ?? 1, t),
});

// ── Step 3: HeroAnchor component — mounted directly under <NarrationStage>, NOT inside <Scene> ──
const HeroAnchor = () => {
  const { time, scene, timeline } = useNarration();
  if (!scene) return null;
  const idx = timeline.scenes.findIndex(s => s.id === scene.id);
  const prevId = idx > 0 ? timeline.scenes[idx - 1].id : scene.id;
  const from = HERO_KEYS[prevId];
  const to   = HERO_KEYS[scene.id];

  // First ~45% of segment time used to morph from prev state to this segment's state, rest hold
  const transitionDur = Math.min(2.0, scene.duration * 0.45);
  const t = expoOut(Math.min(1, (time - scene.start) / transitionDur));
  const md   = lerpPos(from.md,   to.md,   t);
  const html = lerpPos(from.html, to.html, t);

  // Add subtle breathing so any frame has motion (corresponds to iron law third)
  const breath = 1 + Math.sin(time * 0.6) * 0.012;

  const renderHero = (label, pos, color) => (
    <div style={{
      position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`,
      transform: `translate(-50%, -50%) scale(${pos.scale * breath})`,
      opacity: pos.opacity, color, fontSize: 360, fontWeight: 800,
      lineHeight: 1, willChange: 'transform, opacity', pointerEvents: 'none',
    }}>{label}</div>
  );
  return <>
    {renderHero('md',   md,   '#1B4965')}
    {renderHero('html', html, '#C04A1A')}
  </>;
};

// ── Step 4: Main component — hero as NarrationStage child, in-scene auxiliary elements separately managed ──
const App = () => (
  <NarrationStage timeline={TIMELINE} audioSrc="_narration/voiceover.mp3" width={1920} height={1080}>
    <HeroAnchor />  {/* ← persists across scenes, visual skeleton of entire piece */}
    {/* In-scene auxiliary elements use useSceneFade for soft fade in/out, no hard cuts */}
    <MdSideAux />
    <HtmlSideAux />
    {/* ... */}
  </NarrationStage>
);
```

**Complete runnable reference**: `demos/md-html-narration/md-html-demo.html` (3 min 21 sec, 7 segments, 21 cues, battle-tested)

### Second Law · No "Hard Cuts" Between Scenes

| Wrong Pattern (PowerPoint slop) | Correct Pattern (Cinematic feel) |
|---|---|
| Scene A entire `opacity 1→0` while scene B `opacity 0→1` | Scene A's core elements **morph into** B (position/size/color smoothly transform) |
| Each scene independent layout, elements appear/disappear | Elements **persist on screen**, only their position and form change |
| `keepMounted=false`, components unmount on scene switch | hero uses `keepMounted=true`, sharing DOM nodes across scenes |
| Caption bars/data cards each fade in fade out | Caption bar as the only "non-hero" entry, hold then **exit coordinatly with hero's motion** |

Implementation level:
- **Shared elements across scenes** → put hero as direct child of `<NarrationStage>`, **not inside any `<Scene>`**
- Use `useNarration()` hook in hero to read `time`, `scene`, `isCueTriggered`, decide form based on current time
- `<Scene>` only manages auxiliary elements that appear in that segment (data cards, quote blocks, etc.), and **these auxiliary elements should not hard-cut either** — entry with expoOut + stagger, exit with fade overlap the next segment

### Third Law · Every Frame Must Have Motion

**Self-check method**: **Pause at any arbitrary frame** during recording (not the second the cue triggers).
- If the frame looks "**completely still**" → Wrong. Go add underlying motion (background drift / hero subtle scale / camera pan / parallax)
- Always have an **underlying motion** running (even if not in focus):
  - hero element's `scale: 1 ↔ 1.02` 5-second breathing cycle
  - Background `translateX: 0 ↔ -20px` slow drift
  - Data cards retain `translateY` micro jitter after entry (Perlin noise)
- A completely still frame = PowerPoint slop

### Fourth Law · Easing / Stagger / Hold Are the Baseline

| Item | Must | Forbidden |
|---|---|---|
| Easing | `expoOut` main axis (`cubic-bezier(0.16, 1, 0.3, 1)`), `overshoot` for emphasis, `spring` for landing | `linear`, `ease`, CSS defaults |
| Multi-element entry | 30ms stagger (each 30ms later) | Everything appears at once |
| Before key cue | hold 0.3-0.5s for audience to "see" (previous segment elements hold still for 0.3s, then trigger cue) | Seamlessly move from one segment to the next |
| Ending | Abrupt stop, hold last frame for 1s | fade to black |

Detailed rules reference `animation-best-practices.md` §1-§4.

### Self-check · First Audience Reaction

After finishing, show someone who hasn't seen it (or watch yourself 24 hours later), **what's their first reaction?**

| Reaction | Rating | Action |
|---|---|---|
| "This is a PowerPoint with voiceover" | Failed | Go back and redo |
| "The visuals are switching with the audio" | Unacceptable | Missing continuous narrative, hero element doesn't exist or doesn't run through |
| "This thing is moving" | Passable | But no memory points |
| "I want to watch till the end" | Good | Rhythm is right |
| "I want to screenshot this part" | Great | You made it |

---

## Workflow (High Level)

```
                ┌──────────────────────────┐
                │  Script .md (## scene + │
                │  [[cue:xx]] mark key sentences)│
                └──────────────┬───────────┘
                               │
                  narrate-pipeline.mjs
                               │
                               ▼
            ┌──────────────────────────────┐
            │ voiceover.mp3 (concatenated) │
            │ timeline.json (measured durations)    │
            └──────────────┬───────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
    ┌─────────────────┐      ┌──────────────────┐
    │ HTML Animation  │      │ Record MP4 + Mix │
    │ (NarrationStage)│      │ render-narration  │
    │ Live playback   │      │ → Final MP4      │
    │ audio sync      │      │                   │
    └─────────────────┘      └──────────────────┘
       Delivery Form 1         Delivery Form 2
```

## Script Format

Place anywhere in the project directory, filename suggested as `script.md`:

```markdown
---
title: What is LLM
voice: S_JSdgdWk22   # Optional, override .env default voice
speed: 1.0           # Optional, 0.5-2.0
gap: 0.4             # Silence between segments in seconds, default 0.3
---

## intro
Hello everyone, today we'll explain what LLM is in 5 minutes.

## what-is
LLM stands for Large Language Model, [[cue:bigmodel]]it's a neural network with hundreds of billions of parameters.
Essentially it's a text completion predictor.

## demo
For example, you input "today's weather," [[cue:input]]the model predicts what the next character most likely is.
[[cue:predict]]Maybe "is great," maybe "is nice."
```

**Rules**:
- Segment titles `## scene-id` are English/numbers + hyphens (e.g. `## what-is`, `## scene-1`)
- `[[cue:xx]]` marks **within key sentences** — the script splits text at that position, the moment after the cue is the visual trigger point
- Cue ids are listened for with `<Cue id="xx">` in the animation HTML
- When writing the script, **focus on rhythm + short sentences** — long sentences come out flat in TTS

## timeline.json Schema

```ts
{
  title: string,
  voice: string | null,
  speed: number,
  gap: number,
  totalDuration: number,        // Measured duration in seconds of entire voiceover.mp3
  voiceover: 'voiceover.mp3',   // Path relative to timeline.json
  scenes: [
    {
      id: string,
      start: number,            // Start time of this segment within the full audio
      end: number,
      duration: number,
      audio: 'audio/<id>.mp3',  // Individual audio for this segment (sub-segments pre-concatenated)
      text: string,             // Full segment text with [[cue:xx]] markers stripped
      // chunks are the source for subtitle display — sub-segments split by cues, with TTS measured time windows
      chunks: [
        {
          text: string,            // Sub-segment text
          start: number,           // Relative time within segment
          end: number,
          absoluteStart: number,   // Absolute time across entire track (aligned with voiceover.mp3)
          absoluteEnd: number,
        }
      ],
      cues: [
        {
          id: string,
          offset: number,       // Relative time within segment
          absoluteTime: number, // Absolute time on the overall timeline
        }
      ]
    }
  ]
}
```

`absoluteTime` and `absoluteStart/End` are **actually measured** — the pipeline splits segment text by cues into sub-segments, TTS each individually, and the time = cumulative sum of preceding sub-segments' measured durations. **Not linear estimation based on character count**.

## Subtitles

> **Subtitles are included by default** — long narrated videos without subtitles see significantly reduced retention. NarrationStage provides `<Subtitles />` out of the box.

### Usage (One Line)

```jsx
const { NarrationStage, Subtitles } = NarrationStageLib;
<NarrationStage timeline={TIMELINE} audioSrc="...">
  {/* Your hero / scene content */}
  <Subtitles />  {/* ← auto-fetches active text from timeline.scenes[].chunks */}
</NarrationStage>
```

### Visual Rules (Bilibili-style · Anti-PowerPoint)

| Item | Rule | Anti-pattern |
|---|---|---|
| Background | **No background** (no black bar, no backdrop-blur) | Semi-transparent black + blur = subtitle bar covers the frame = PPT feel |
| Text color | **Dark ink `#1a1a1a` + white glow on light background**; white + black glow on dark | White text + black outline on light background = text blurry |
| Font size | 32px (1080p video) | <24px unreadable, >40px steals focus from main visual |
| Font | `PingFang SC` / `Noto Sans SC` (sans-serif, Bilibili standard) | Serif fonts = looks like movie subtitles |
| Position | bottom: 90px (not flush to edge) | Flush to bottom looks cheap |
| Line length | **≤ 12-13 characters** (mixed Chinese/English: English counts as 0.5 char) | >15 chars per line can't be read on mobile |
| Sentence splitting | **Never split across sentence-ending punctuation**: first split by `。！？`, then merge each sentence by `，、；：` to ≤ maxLen | Split by character count, turning "this is good" into "this i" + "s good" |

`<Subtitles />` runs by default with the above rules. For dark backgrounds: `<Subtitles color="#fff" haloColor="rgba(0,0,0,0.85)" />`.

### Sentence Splitting Algorithm (built into narration_stage.jsx)

```js
splitChunkToLines(text, maxLen = 13)
// 1. Split by strong punctuation（。！？\n）
// 2. Each sentence ≤ maxLen, keep directly
// 3. Otherwise split by weak punctuation（，、；：）and merge to ≤ maxLen
// 4. Fallback hard split (rare)
// Mixed Chinese/English: English/numbers count as 0.5 char for visual width
```

If a chunk's lines are obviously too long or too short after splitting, **adjust cue positions in the script** (finer cue splitting), don't adjust line-splitting logic in the frontend.

## NarrationStage API

```jsx
import 'assets/narration_stage.jsx';
const { NarrationStage, Scene, Cue, useNarration } = NarrationStageLib;

<NarrationStage
  timeline={TIMELINE}                  // timeline.json content
  audioSrc="_narration/voiceover.mp3"  // Path relative to current HTML
  width={1920} height={1080}
  background="#f5f1e8"
  controls={true}                      // Show bottom playback bar during live playback
>
  {/* hero element: persists across scenes — placed directly as NarrationStage child */}
  <HeroAnchor />

  {/* In-scene auxiliary elements: only appear in that segment */}
  <Scene id="intro">
    <Cue id="bigmodel">{(triggered, progress) => (
      <SomeElement style={{ opacity: progress }} />
    )}</Cue>
  </Scene>
</NarrationStage>
```

**Hooks**:
- `useNarration()` returns `{ time, scene, sceneTime, isCueTriggered, cueProgress }`
- Read directly in custom components, no need to pass props

**Scene Component**:
- Default: only mounted when `scene.id === id`
- Add `keepMounted` to stay mounted (for continuous cross-scene animation)

**Cue Component**:
- Children must be `(triggered, progress) => ReactNode`
- progress is the 0→1 ramp value after cue triggers (default 0.6s)

## Time Source (Dual-track)

NarrationStage auto-detects `window.__recording`:
- **Live playback mode** (default): follows audio element's currentTime, user pause/seek all sync
- **Recording mode** (render-video.js sets `window.__recording = true`): rAF wall-clock self-driven from 0, exposes `window.__seek(t)` for render-video.js reset

## Three Scripts

| Script | Input | Output |
|---|---|---|
| `scripts/tts-doubao.mjs` | Single text segment | Single mp3 + measured duration |
| `scripts/narrate-pipeline.mjs` | Script .md | voiceover.mp3 + timeline.json |
| `scripts/mix-voiceover.sh` | Video + voiceover.mp3 [+ BGM] | MP4 with audio |
| `scripts/render-narration.sh` | Narration HTML + timeline.json | Final MP4 (recording + mixing one-stop) |

## .env Configuration

`.env` in skill root directory (gitignored):

```
DOUBAO_TTS_API_KEY=<your_key>
DOUBAO_TTS_VOICE_ID=<your_clone_voice_id>
DOUBAO_TTS_CLUSTER=volcano_icl
DOUBAO_TTS_ENDPOINT=https://openspeech.bytedance.com/api/v1/tts
```

Reference `.env.example` template. Doubao voice clone ID obtained from Volcano Engine console.

## Standard Workflow (10 Steps)

1. **Write script**: Script is the source code. First write the full narration, mark segment titles `## scene-id`, add `[[cue:xx]]` before key sentences
2. **Run narrate-pipeline**: `node scripts/narrate-pipeline.mjs --script script.md --out-dir _narration`
3. **Listen to entire voiceover.mp3**: If rhythm is off, go back and revise script. **This step determines the quality ceiling of the entire piece**
4. **🛑 Answer iron laws before designing**: What is the hero element? What state is it in for each segment? How does it morph across scenes? Can't answer? Don't write code.
5. **Write animation HTML**: Use NarrationStage + one or several hero elements performing across scenes
6. **Live preview**: Open HTML in browser, click ▶ Play, watch visuals + narration sync
7. **First audience self-check**: Score using the "Self-check · First Audience Reaction" table above. Failed? Return to Step 4 and redo
8. **Record video**: `bash scripts/render-narration.sh demo.html --timeline=_narration/timeline.json` (auto-records silent MP4 + mixes in voiceover)
9. **Optional BGM**: Add `--bgm-mood=educational` (or tech / tutorial etc.) to render-narration
10. **Deliver**: Browser HTML (for live demo) + final MP4 (for publication)

## Exception Handling

| Issue | Solution |
|---|---|
| TTS API error | Check `DOUBAO_TTS_API_KEY` in .env |
| Certain segment audio noticeably longer/shorter than script | Segment text contains strange punctuation or emoji, TTS parsing irregular → revise script |
| Cue absoluteTime inaccurate | ffmpeg issue when concatenating sub-segments within a segment → check mp3 encoding consistency |
| Recording result has black screen | render-video.js didn't receive `window.__ready` signal → check if NarrationStage mounted properly |
| Recording video stutter | Animation has heavy layout (lots of box-shadow / blur) → simplify or pre-composite |
| Live playback audio-video desync | audio element loading delay → add `preload="auto"` or preload locally |

## When Not to Use This Pipeline

- **<60s short animation**: Directly make silent animation + post-production dubbing (add-music.sh + single TTS segment) is sufficient, no timeline-driven needed
- **Pure BGM video**: Use `add-music.sh` with preset BGM
- **Human recording replacing TTS**: Replace `voiceover.mp3` with human recording, write timeline by hand or use ffprobe to measure segment durations + utility script to generate → rest of the flow is common

---

**Final reminder**: Return to the iron laws before writing code. **Don't make a PowerPoint with voiceover**.
