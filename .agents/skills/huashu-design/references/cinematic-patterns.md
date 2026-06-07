# Cinematic Patterns · Workflow Demo Best Practices

> 5 key patterns for upgrading from "PPT animation" to "keynote-level cinematic."
> Distilled from two cinematic demos in the 2026-04 "Chat about Skill" deck (Nuwa workflow + Darwin workflow), empirically reproducible.

---

## 0 · What This Document Solves

When you need to create a "demo animation demonstrating a workflow" (typical scenarios: skill workflow, product onboarding, API call flow, agent task execution), there are two common approaches:

| Paradigm | What It Looks Like | Result |
|---|---|---|
| **PPT Animation** (bad) | step 1 fade in → step 2 fade in → step 3 fade in, 4 boxes on screen simultaneously | Audience feels "it's just a PPT with fade effect," no wow moment |
| **Cinematic** (good) | scene-based, focus on one thing at a time, dissolve / focus pull / morph between scenes | Audience feels "this is a product launch clip," will want to screenshot and share |

The root of the difference is **not animation technique**, it's **narrative paradigm**. This document covers how to upgrade from the former to the latter.

---

## 1 · Five Core Patterns

### Pattern A · Dashboard + Cinematic Overlay Dual-Layer Structure

**Problem**: Pure cinematic defaults to a black screen + a ▶ button. If the user lands on this page without clicking, they see nothing.

**Solution**:
```
DEFAULT state (always visible): Complete static workflow dashboard
  └── Audience sees at a glance how this skill / workflow runs

POINT ▶ trigger (overlay comes up): 22-second cinematic
  └── Auto fades back to DEFAULT on completion
```

**Implementation Points**:
- `.dash` default visible, `.cinema` default `opacity: 0; pointer-events: none`
- `.play-cta` is a small gold button at bottom-right (not a large central overlay)
- Click → `cinema.classList.add('show')` + `dash.classList.add('hide')`
- Run once with `requestAnimationFrame` (not in a loop), then `endCinematic()` reverses state on completion

**Anti-pattern**: Default = large central ▶ overlay covering everything, blank page before clicking.

---

### Pattern B · Scene-based, NOT Step-based

**Problem**: Breaking animation into "step 1 show → step 2 show → ..." is PPT thinking.

**Solution**: Break into 5 scenes, each scene is an **independent shot**, full screen focused on one thing:

| Scene Type | Responsibility | Duration |
|---|---|---|
| 1 · Invoke | User input triggers (terminal typewriter) | 3-4s |
| 2 · Process | Core workflow visualization (unique visual language) | 5-6s |
| 3 · Result/Insight | Key output distilled (visualized) | 4-5s |
| 4 · Output | Actual output display (file / diff / numbers) | 3-4s |
| 5 · Hero Reveal | Closing hero moment (large type + value proposition) | 4-5s |

**Total duration ≈ 22 seconds** — the empirically tested golden length:
- Shorter than 18s: PM hasn't gotten into the zone before it ends
- Longer than 25s: patience lost
- 22s is just right for "hook → unfold → conclude → leave impression"

**Implementation Points**:
- `T = { DURATION: 22.0, s1_in: [0, 0.7], s2_in: [3.8, 4.6], ... }` global timeline
- Single `requestAnimationFrame(render)` runs all scene opacity / transform calculations
- Don't chain setTimeout (fragile, hard to debug)
- Easing must use `expoOut` / `easeOut` / cubic-bezier, **no linear**

---

### Pattern C · Each demo's visual language must be independent

**Problem**: After finishing the first cinematic, reuse the same template lazily for the second (same orbit + pentagon + typewriter + hero large text), only changing the copy.

**Consequence**: The audience sees two skills "look exactly the same" — effectively communicating "these two skills have no difference."

**Solution**: Each workflow's core metaphor is different, so the visual language must be different.

**Comparison Case**:

| Dimension | Nuwa (Distillation Persona) | Darwin (Optimization Skill) |
|---|---|---|
| Core Metaphor | Collect → Distill → Write | Loop → Evaluate → Ratchet |
| Visual Motion | Floating / Radiating / Pentagon | Cycling / Ascending / Comparison |
| Scene 2 | 3D Orbit · 8 documents floating on perspective ellipse | Spin Loop · tokens running around 6-node ring for 5 laps |
| Scene 3 | Pentagon · 5 tokens radiating from center | v1 vs v5 · side-by-side diff (red version vs gold version) |
| Scene 4 | SKILL.md typewriter | Hill-Climb · full-screen curve drawing |
| Scene 5 hero | "21 min" serif italic large type | Rotating gear ⚙ + "KEPT +1.1" gold tag |

**Judgment criterion**: Cover the copy, look only at the visuals — can you tell which demo this is? If not, it's lazy.

---

### Pattern D · Use AI-generated real assets, not emoji or hand-drawn SVG

**Problem**: 3D orbit / gallery needs asset fragments floating, emoji (📚🎤) is ugly and unbranded, hand-drawn SVG book spines never look like real books.

**Solution**: Use `huashu-gpt-image` to generate a large 4×2 grid image (8 themed items · white background · 60px breathing space · unified style), then use `extract_grid.py --mode bbox` to crop into 8 independent transparent PNGs.

**Prompt key points** (detailed prompt patterns in `huashu-gpt-image` skill):
- IP anchoring ("1960s Caltech archive aesthetic" / "Hearthstone-style consistent treatment")
- White background (easier for matting; gray background has better atmosphere but harder to extract transparent background)
- 4×2 not 5×5 (avoid last-row compression bug)
- Persona finishing ("You are a Wired magazine curator preparing an exhibition photo")

**Anti-pattern**: Using emoji as icons, using CSS silhouettes instead of product images.

---

### Pattern E · BGM + SFX Dual-Track System

**Problem**: Animation without sound — the audience subconsciously feels "this looks like a cheap demo."

**Solution**: Sustained BGM + 11 SFX cues.

**Generic SFX cue recipe** (suitable for workflow demos):

| Time | SFX | Trigger Scene |
|---|---|---|
| 0.10s | whoosh | Terminal rises from bottom |
| 3.0s | enter | Typewriter completes, press enter |
| 4.0s | slide-in | Scene 2 elements enter |
| 5-9s × 5 times | sparkle | Key process nodes (each generation / each token / each data point) |
| 14s | click | Switch to output scene |
| 17.8s | logo-reveal | Hero reveal moment |
| typewriter | type | Trigger every 2 characters (don't make too dense) |

**Frequency isolation**: BGM volume 0.32 (low-frequency ambient noise), SFX volume 0.55 (mid-high frequency punch), sparkle 0.7 (should stand out), logo-reveal 0.85 (strongest hero moment).

**User control**:
- Must have ▶ start overlay (browser autoplay restriction)
- Small mute button at top-right (user can mute anytime)
- Don't make it play automatically on page load

---

## 2 · Static Dashboard Design Points

Dashboard is Layer 1 of the dual-layer structure — PM can understand this skill without clicking ▶.

**Layout**: 3-column grid (or 1 large + 2 small), each panel answers one question:

| Panel Type | What Problem It Solves | Example |
|---|---|---|
| **Pipeline / Flow Diagram** | "What's the workflow of this skill?" | Nuwa 4-stage pipeline · Darwin autoresearch loop |
| **Snapshot / State** | "What does the actual output data look like?" | Darwin 8-dimension rubric snapshot |
| **Trajectory / Evolution** | "How does it change after multiple runs?" | Darwin 5-generation hill-climb curve |
| **Examples / Gallery** | "What has been produced so far?" | Nuwa 21 personas gallery |
| **Strip · Example I/O** | "Input what → output what" | Nuwa example strip: `› nuwa distill feynman → feynman.skill (21 min)` |

**Key constraints**:
- Information density must be sufficient (each panel must carry differentiated information)
- But can't stuff with data slop (every number must mean something)
- Color scheme consistent with cinematic (same color system, smooth switching)

---

## 3 · Debugging and Development Tools

Any long animation must come with three dev tools, or debugging will explode.

### Tool 1 · `?seek=N` Freeze at Nth second

```js
const seek = parseFloat(params.get('seek'));
if (!isNaN(seek)) {
  started = true; muted = true;
  frozenT = seek;  // render() uses this t instead of elapsed
  cinema.classList.add('show'); dash.classList.add('hide');
}

// In render():
let t = frozenT !== null ? frozenT : (elapsed % T.DURATION);
```

Usage: `http://.../slide.html?seek=12` to view the 12th second directly, no need to play through.

### Tool 2 · `?autoplay=1` Skip ▶ overlay

Convenient for playwright auto-screenshot testing, and for forcing start when embedded in iframe.

### Tool 3 · Manual REPLAY button

Small button at top-right, user/debugger can replay any number of times. CSS:

```css
.replay{position:absolute;top:18px;right:18px;background:rgba(212,165,116,0.1);
  border:1px solid rgba(212,165,116,0.3);color:#D4A574;
  font-family:monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;
  padding:6px 12px;border-radius:1px;cursor:pointer;backdrop-filter:blur(6px);z-index:6}
```

---

## 4 · iframe Embedding Pitfalls (when cinematic is embedded in deck)

### Pitfall 1 · Parent window's click zone intercepts iframe buttons

If deck index.html has "left-right 22vw transparent click zone for page turning," it will **overlay the ▶ play button inside the iframe** — user clicks are swallowed as "next page."

**Fix**: Add `top: 12vh; bottom: 25vh` to click zones, leaving top and bottom 25% unblocked, allowing both center ▶ and bottom-right ▶ to be clickable.

### Pitfall 2 · iframe grabs focus, keyboard events lost

After user clicks inside iframe, focus is in iframe, parent window's ←/→ keyboard events can't be received.

**Fix**:
```js
iframe.addEventListener('load', () => {
  // Inject keyboard forwarder
  const doc = iframe.contentDocument;
  doc.addEventListener('keydown', (e) => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: e.key, ... }));
  });
  // Return focus to parent window after click
  doc.addEventListener('click', () => setTimeout(() => window.focus(), 0));
});
```

### Pitfall 3 · file:// vs https:// behavior differences

Cinematic tested locally at file:// might break after deployment because:
- file:// iframe contentDocument is same-origin
- https:// is also same-origin (if same host), but audio autoplay restrictions are stricter

**Fix**:
- Before deployment, test with `python3 -m http.server` local HTTP server
- BGM must wait for user ▶ click before `bgm.play()`, don't play immediately on page load

---

## 5 · Anti-pattern Quick Reference

| ❌ Anti-pattern | ✅ Correct pattern |
|---|---|
| Default = black screen ▶ overlay | Default = static dashboard, ▶ is auxiliary |
| 4 steps side-by-side faded in | 5 scenes full-screen switching, each focuses on one thing |
| Reuse template with different copy for different demos | Each demo has independent visual language (can distinguish with copy covered) |
| emoji / hand-drawn SVG as assets | gpt-image-2 large image + extract_grid cropping |
| No BGM and no SFX | BGM + 11 SFX cues dual-track system |
| setTimeout chain for scheduling | requestAnimationFrame + global timeline T object |
| linear animation | Expo / cubic-bezier easing |
| No dev tools | `?seek=N` + `?autoplay=1` + REPLAY button |
| iframe buttons swallowed by parent click zone | Add top/bottom margin to click zone for buttons |

---

## 6 · Time Budget

Following these patterns, a complete cinematic demo (including dashboard):

| Task | Time |
|---|---|
| Design 5-scene narrative + visual language | 30 minutes (be deliberate, determine independence) |
| Dashboard static layout + content | 1 hour |
| Cinematic 5 scenes implementation | 1.5 hours |
| Audio cues timing + replay button | 30 minutes |
| Playwright screenshot verification of 5 key moments | 15 minutes |
| **Single demo total** | **3-4 hours** |

Second demo reuses framework but **visual language must be independent**, takes about 2-3 hours.
