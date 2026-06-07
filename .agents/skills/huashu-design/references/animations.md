# Animations: Timeline Animation Engine

Read this when creating animation/motion design HTML. Principles, usage, typical patterns.

## Core Pattern: Stage + Sprite

Our animation system (`assets/animations.jsx`) provides a timeline-driven engine:

- **`<Stage>`**: Container for the entire animation, auto-provides auto-scale (fit viewport) + scrubber + play/pause/loop control
- **`<Sprite start end>`**: Time segment. A Sprite only displays between `start` and `end`. Internally you can read local progress `t` (0→1) via `useSprite()` hook
- **`useTime()`**: Read current global time (seconds)
- **`Easing.easeInOut` / `Easing.easeOut` / ...**: Easing functions
- **`interpolate(t, from, to, easing?)`**: Interpolate based on t

This pattern draws inspiration from Remotion/After Effects approaches, but is lightweight and zero-dependency.

## Getting Started

```html
<script type="text/babel" src="animations.jsx"></script>
<script type="text/babel">
  const { Stage, Sprite, useTime, useSprite, Easing, interpolate } = window.Animations;

  function Title() {
    const { t } = useSprite();  // local progress 0→1
    const opacity = interpolate(t, [0, 1], [0, 1], Easing.easeOut);
    const y = interpolate(t, [0, 1], [40, 0], Easing.easeOut);
    return (
      <h1 style={{ 
        opacity, 
        transform: `translateY(${y}px)`,
        fontSize: 120,
        fontWeight: 900,
      }}>
        Hello.
      </h1>
    );
  }

  function Scene() {
    return (
      <Stage duration={10}>  {/* 10 second animation */}
        <Sprite start={0} end={3}>
          <Title />
        </Sprite>
        <Sprite start={2} end={5}>
          <SubTitle />
        </Sprite>
        {/* ... */}
      </Stage>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Scene />);
</script>
```

## Common Animation Patterns

### 1. Fade In / Fade Out

```jsx
function FadeIn({ children }) {
  const { t } = useSprite();
  const opacity = interpolate(t, [0, 0.3], [0, 1], Easing.easeOut);
  return <div style={{ opacity }}>{children}</div>;
}
```

**Note on range**: `[0, 0.3]` means fade in completes in the first 30% of the sprite's time, then stays at opacity=1.

### 2. Slide In

```jsx
function SlideIn({ children, from = 'left' }) {
  const { t } = useSprite();
  const progress = interpolate(t, [0, 0.4], [0, 1], Easing.easeOut);
  const offset = (1 - progress) * 100;
  const directions = {
    left: `translateX(-${offset}px)`,
    right: `translateX(${offset}px)`,
    top: `translateY(-${offset}px)`,
    bottom: `translateY(${offset}px)`,
  };
  return (
    <div style={{
      transform: directions[from],
      opacity: progress,
    }}>
      {children}
    </div>
  );
}
```

### 3. Character Typewriter

```jsx
function Typewriter({ text }) {
  const { t } = useSprite();
  const charCount = Math.floor(text.length * Math.min(t * 2, 1));
  return <span>{text.slice(0, charCount)}</span>;
}
```

### 4. Number Counter

```jsx
function CountUp({ from = 0, to = 100, duration = 0.6 }) {
  const { t } = useSprite();
  const progress = interpolate(t, [0, duration], [0, 1], Easing.easeOut);
  const value = Math.floor(from + (to - from) * progress);
  return <span>{value.toLocaleString()}</span>;
}
```

### 5. Segmented Explanation (Typical Educational Animation)

```jsx
function Scene() {
  return (
    <Stage duration={20}>
      {/* Phase 1: Show problem */}
      <Sprite start={0} end={4}>
        <Problem />
      </Sprite>

      {/* Phase 2: Show approach */}
      <Sprite start={4} end={10}>
        <Approach />
      </Sprite>

      {/* Phase 3: Show result */}
      <Sprite start={10} end={16}>
        <Result />
      </Sprite>

      {/* Caption shown throughout */}
      <Sprite start={0} end={20}>
        <Caption />
      </Sprite>
    </Stage>
  );
}
```

## Easing Functions

Preset easing curves:

| Easing | Characteristic | Used For |
|---|---|---|
| `linear` | Constant speed | Scrolling captions, continuous animation |
| `easeIn` | Slow→fast | Exit/disappear |
| `easeOut` | Fast→slow | Entry/appear |
| `easeInOut` | Slow→fast→slow | Position changes |
| **`expoOut`** ⭐ | **Exponential ease-out** | **Primary Anthropic-grade easing** (physical weight) |
| **`overshoot`** ⭐ | **Elastic bounce** | **Toggle / button pop / emphasis interaction** |
| `spring` | Spring | Interaction feedback, geometry settling |
| `anticipation` | Reverse then forward | Emphasize action |

**Default main easing uses `expoOut`** (not `easeOut`) — see `animation-best-practices.md` §2.
Entry uses `expoOut`, exit uses `easeIn`, toggle uses `overshoot` — the fundamental pattern for Anthropic-grade animation.

## Timing and Duration Guidelines

### Micro-interactions (0.1-0.3s)
- Button hover
- Card expand
- Tooltip appear

### UI Transitions (0.3-0.8s)
- Page switch
- Modal appear
- List item addition

### Narrative Animation (2-10s per segment)
- One phase of concept explanation
- Data chart reveal
- Scene transitions

### Single narrative segment should not exceed 10 seconds
Human attention is limited. 10 seconds for one thing, then move to the next.

## Design Thinking Order for Animation

### 1. Content/story first, then animation

**Wrong**: First think about fancy animation, then stuff content in
**Correct**: First clarify what information to convey, then use animation to serve that information

Animation is **signal**, not **decoration**. A fade-in emphasizes "this is important, please look" — if everything fades in, the signal is lost.

### 2. Write timeline by Scene

```
0:00 - 0:03   Problem appears (fade in)
0:03 - 0:06   Problem enlarges/expands (zoom+pan)
0:06 - 0:09   Solution appears (slide in from right)
0:09 - 0:12   Solution explanation expands (typewriter)
0:12 - 0:15   Result demonstration (counter up + chart reveal)
0:15 - 0:18   Summary one-liner (static, read for 3 seconds)
0:18 - 0:20   CTA or fade out
```

Write the timeline before writing components.

### 3. Assets first

Prepare images/icons/fonts needed for animation **in advance**. Don't look for assets mid-drawing — it breaks rhythm.

## Common Issues

**Animation stutter**
→ Mainly layout thrashing. Use `transform` and `opacity`, don't animate `top`/`left`/`width`/`height`/`margin`. Browser GPU accelerates `transform`.

**Animation too fast, hard to see**
→ Humans need 100-150ms to read a character, 300-500ms for a word. If using text to tell a story, leave at least 3 seconds per sentence.

**Animation too slow, audience bored**
→ Interesting visual changes need to be dense. A static frame for more than 5 seconds feels dull.

**Multiple animations interfering with each other**
→ Use CSS `will-change: transform` to tell the browser in advance that this element will animate, reducing reflow.

**Recording to video**
→ Use the skill's built-in toolchain (one command for three formats): see `video-export.md`
- `scripts/render-video.js` — HTML → 25fps MP4 (Playwright + ffmpeg)
- `scripts/convert-formats.sh` — 25fps MP4 → 60fps MP4 + optimized GIF
- Want more precise frame rendering? Make render(t) a pure function, see `animation-pitfalls.md` Rule 5

## Coordination with Video Tools

This skill produces **HTML animations** (running in browser). If the final output needs to be video assets:

- **Short animation/concept demo**: Use this approach for HTML animation → screen recording
- **Long video/narrative**: This skill focuses on HTML animation; for long videos use AI video generation skills or professional video software
- **Motion graphics**: Professional After Effects/Motion Canvas is more suitable

## About Popmotion and Similar Libraries

If you really need physics-based animation (spring, decay, keyframes with precise timing) that our engine can't handle, fall back to Popmotion:

```html
<script src="https://unpkg.com/popmotion@11.0.5/dist/popmotion.min.js"></script>
```

But **try our engine first**. It's sufficient for 90% of cases.
