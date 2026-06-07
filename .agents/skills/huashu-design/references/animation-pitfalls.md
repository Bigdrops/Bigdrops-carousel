# Animation Pitfalls: HTML Animation Bugs and Rules

The most common bugs when making animations and how to avoid them. Every rule comes from real failure cases.

Read this before writing animation — it saves one iteration.

## 1. Stacked Layout — `position: relative` is a Default Obligation

**Bug**: A sentence-wrap element wraps 3 bracket-layers (`position: absolute`). Didn't set `position: relative` on sentence-wrap, so absolute brackets use `.canvas` as coordinate system, floating 200px below screen bottom.

**Rule**:
- Any container with `position: absolute` children **must** explicitly have `position: relative`
- Even if no "offset" is needed visually, write `position: relative` as coordinate system anchor
- If writing `.parent { ... }` and its children have `.child { position: absolute }`, reflexively add relative to parent

**Quick check**: Every time you see `position: absolute`, go up the ancestor chain, ensure the nearest positioned ancestor is the coordinate system you *intend*.

## 2. Character Traps — Don't Depend on Rare Unicode

**Bug**: Tried to use `␣` (U+2423 OPEN BOX) to visualize "space token." Noto Serif SC / Cormorant Garamond don't have this glyph, render as blank/tofu, audience can't see it at all.

**Rule**:
- **Every character appearing in the animation must exist in your chosen font**
- Common rare character blacklist: `␣ ␀ ␐ ␋ ␨ ↩ ⏎ ⌘ ⌥ ⌃ ⇧ ␦ ␖ ␛`
- To express meta-characters like "space / enter / tab", use **CSS-constructed semantic boxes**:
  ```html
  <span class="space-key">Space</span>
  ```
  ```css
  .space-key {
    display: inline-flex;
    padding: 4px 14px;
    border: 1.5px solid var(--accent);
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.3em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  ```
- Emoji also needs verification: some emoji outside Noto Emoji will fallback to gray boxes — best to use `emoji` font-family or SVG

## 3. Data-driven Grid/Flex Templates

**Bug**: Code has `const N = 6` tokens, but CSS hardcodes `grid-template-columns: 80px repeat(5, 1fr)`. Token 6 has no column, entire matrix misaligned.

**Rule**:
- When count comes from JS array (`TOKENS.length`), CSS template should also be data-driven
- Option A: Use CSS variables injected from JS
  ```js
  el.style.setProperty('--cols', N);
  ```
  ```css
  .grid { grid-template-columns: 80px repeat(var(--cols), 1fr); }
  ```
- Option B: Use `grid-auto-flow: column` to let browser auto-expand
- **Disable "fixed number + JS constant" combinations** — changing N won't update CSS

## 4. Transition Gap — Scene Switching Must Be Continuous

**Bug**: Between zoom1 (13-19s) → zoom2 (19.2-23s), the main sentence is already hidden, zoom1 fade out (0.6s) + zoom2 fade in (0.6s) + stagger delay (0.2s+) = ~1 second of pure blank screen. Audience thinks the animation froze.

**Rule**:
- When switching scenes continuously, fade out and fade in should **overlap**, not have one completely disappear before the next starts
  ```js
  // Bad:
  if (t >= 19) hideZoom('zoom1');      // 19.0s out
  if (t >= 19.4) showZoom('zoom2');    // 19.4s in → 0.4s blank in between

  // Good:
  if (t >= 18.6) hideZoom('zoom1');    // start fade out 0.4s early
  if (t >= 18.6) showZoom('zoom2');    // fade in simultaneously (cross-fade)
  ```
- Or use an "anchor element" (like the main sentence) as visual connection between scenes, briefly echoing during zoom switching
- Calculate CSS transition duration carefully to avoid triggering next transition before current one finishes

## 5. Pure Render Principle — Animation State Should Be Seekable

**Bug**: Using `setTimeout` + `fireOnce(key, fn)` chained triggering of animation states. Normal playback works fine, but doing frame-by-frame recording/seeking to arbitrary time points — previous setTimeout already executed, can't "go back."

**Rule**:
- `render(t)` function should ideally be a **pure function**: given t, output unique DOM state
- If side effects are necessary (e.g. class toggling), use `fired` set with explicit reset:
  ```js
  const fired = new Set();
  function fireOnce(key, fn) { if (!fired.has(key)) { fired.add(key); fn(); } }
  function reset() { fired.clear(); /* clear all .show classes */ }
  ```
- Expose `window.__seek(t)` for Playwright / debugging:
  ```js
  window.__seek = (t) => { reset(); render(t); };
  ```
- Animation-related setTimeout should not span >1 second, otherwise seeking backwards will be chaotic

## 6. Pre-font-load Measurement = Wrong Measurement

**Bug**: Page calls `charRect(idx)` to measure bracket position immediately on DOMContentLoaded — fonts haven't loaded, each character width is fallback font width, positions all wrong. When font loads (~500ms later), bracket's `left: Xpx` is still the old value, permanently offset.

**Rule**:
- Any layout code relying on DOM measurement (`getBoundingClientRect`, `offsetWidth`) **must** be wrapped in `document.fonts.ready.then()`
  ```js
  document.fonts.ready.then(() => {
    requestAnimationFrame(() => {
      buildBrackets(...);  // fonts ready, measurements accurate
      tick();              // animation starts
    });
  });
  ```
- Extra `requestAnimationFrame` gives browser one frame to commit layout
- If using Google Fonts CDN, `<link rel="preconnect">` to speed up first load

## 7. Recording Preparation — Provide Handles for Video Export

**Bug**: Playwright `recordVideo` defaults to 25fps, starts recording from context creation. First 2 seconds of page loading, font loading are all recorded. Delivered video has 2 seconds of blank/flash at the start.

**Rule**:
- Use `render-video.js` tool that handles: warmup navigate → reload restart animation → wait duration → ffmpeg trim head + convert to H.264 MP4
- Animation's **frame 0** should be the complete initial state with final layout ready (not blank or loading)
- Want 60fps? Use ffmpeg `minterpolate` post-processing, don't rely on browser source frame rate
- Want GIF? Two-phase palette (`palettegen` + `paletteuse`), can compress 30s 1080p animation to 3MB

See `video-export.md` for complete script invocation.

## 8. Batch Export — tmp Directory Must Include PID to Prevent Concurrency Conflicts

**Bug**: Using `render-video.js` with 3 processes recording 3 HTMLs in parallel. Because TMP_DIR only uses `Date.now()` for naming, 3 processes starting at the same millisecond share the same tmp directory. The first process to finish cleans tmp, the other two get `ENOENT` when reading, all crash.

**Rule**:
- Any temp directory that might be shared across processes must be named with **PID or random suffix**:
  ```js
  const TMP_DIR = path.join(DIR, '.video-tmp-' + Date.now() + '-' + process.pid);
  ```
- If you truly want parallel multi-file, use shell `&` + `wait` rather than forking within one Node script
- For batch recording multiple HTMLs, conservative approach: **serial** execution (2 or fewer can be parallel, 3+ should queue)

## 9. Recording Contains Progress Bar/Replay Button — Chrome Elements Contaminate Video

**Bug**: Animation HTML includes `.progress` progress bar, `.replay` replay button, `.counter` timestamp for human debugging. When recording to MP4, these elements appear at the bottom of the video, looking like developer tools were captured.

**Rule**:
- Separate "chrome elements" for humans (progress bar / replay button / footer / masthead / counter / phase labels) from video content
- **Convention class name** `.no-record`: any element with this class will be auto-hidden by the recording script
- Script side (`render-video.js`) by default injects CSS to hide common chrome class names:
  ```
  .progress .counter .phases .replay .masthead .footer .no-record [data-role="chrome"]
  ```
- Use Playwright's `addInitScript` to inject (takes effect before each navigate, reliable even on reload)
- Use `--keep-chrome` flag to view HTML as-is with chrome

## 10. First Few Seconds of Recording Show Repeated Animation — Warmup Frame Leak

**Bug**: Old `render-video.js` flow `goto → wait fonts 1.5s → reload → wait duration`. Recording starts from context creation, warmup phase already played some animation, then reload restarts from 0. Result: first few seconds of video show "animation mid-section + switch + animation from 0", with strong repetition.

**Rule**:
- **Warmup and Record must use independent contexts**:
  - Warmup context (no `recordVideo` option): only responsible for loading url, waiting for fonts, then close
  - Record context (with `recordVideo`): fresh state start, animation recorded from t=0
- ffmpeg `-ss trim` can only cut Playwright's small startup latency (~0.3s), **cannot** be used to mask warmup frames; source must be clean
- Record context close = webm file written to disk, this is Playwright's constraint
- Related code pattern:
  ```js
  // Phase 1: warmup (throwaway)
  const warmupCtx = await browser.newContext({ viewport });
  const warmupPage = await warmupCtx.newPage();
  await warmupPage.goto(url, { waitUntil: 'networkidle' });
  await warmupPage.waitForTimeout(1200);
  await warmupCtx.close();

  // Phase 2: record (fresh)
  const recordCtx = await browser.newContext({ viewport, recordVideo });
  const page = await recordCtx.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(DURATION * 1000);
  await page.close();
  await recordCtx.close();
  ```

## 11. Don't Draw "Fake Chrome" in the Frame — Decorative Player UI Collides with Real Chrome

**Bug**: Animation uses `Stage` component which already has scrubber + time code + pause button (`.no-record` chrome, auto-hidden on export). I also drew a "`00:60 ──── CLAUDE-DESIGN / ANATOMY`" "magazine pagination feel decorative progress bar" at the bottom, feeling good about it. **Result**: User sees two progress bars — one is the Stage controller, one is my decorative bar. Visually colliding completely, considered a bug. "Why is there another progress bar inside the video?"

**Rule**:

- Stage already provides: scrubber + time code + pause/replay buttons. **Don't draw** progress indicators, current time code, copyright credit bars, chapter counters inside the frame — they either collide with chrome or are filler slop (violating "earn its place" principle).
- "Pagination feel," "magazine feel," "bottom credit bar" these **decorative impulses** are high-frequency filler that AI auto-adds. Be alert for each occurrence — does it truly convey irreplaceable information? Or just fill blank space?
- If you insist some bottom bar must exist (e.g. the animation theme is about player UI), it must be **narratively necessary** and **visually distinct from Stage scrubber** (different position, different form, different color tone).

**Element Attribution Test** (every element drawn into the canvas must answer):

| What does it belong to | Handling |
|---|---|
| Narrative content of a particular scene | OK, keep it |
| Global chrome (control/debug) | Add `.no-record` class, hide on export |
| **Belongs to neither any scene nor chrome** | **Delete**. It's an orphan, definitely filler slop |

**Self-check (3 seconds before delivery)**: Take a static screenshot, ask yourself —

- Is there anything in the frame that "looks like video player UI" (horizontal progress bar, time code, control button shapes)?
- If yes, would removing it hurt the narrative? If not, delete.
- Does the same type of information (progress/time/credit) appear twice? Merge into one chrome.

**Anti-pattern**: Drawing `00:42 ──── PROJECT NAME` at bottom, "CH 03 / 06" chapter count at bottom-right, version number "v0.3.1" at frame edge — all are fake chrome filler.

## 12. Pre-recording Blank + Recording Offset — `__ready` × tick × lastTick Triple Trap

**Bug A (pre-recording blank)**: 60-second animation exported to MP4, first 2-3 seconds are blank page. `ffmpeg --trim=0.3` can't cut it.

**Bug B (offset, 2026-04-20 real incident)**: Exported 24-second video, user perceived "video starts playing first frame at 19 seconds." Actually animation started recording from t=5, recorded to t=24 then looped back to t=0, recording 5 more seconds to end — so the last 5 seconds of the video are actually the animation's true beginning.

**Root cause** (both bugs share one root cause):

Playwright `recordVideo` starts writing WebM from the moment `newContext()` is called. Babel/React/font loading together take L seconds (2-6s). The recording script waits for `window.__ready = true` as the anchor saying "animation starts here" — it must strictly pair with animation `time = 0`. Two common mistakes:

| Mistake | Symptom |
|---|---|
| `__ready` set in `useEffect` or synchronous setup (before tick's first frame) | Recording script thinks animation started, but WebM is still recording blank page → **pre-recording blank** |
| tick's `lastTick = performance.now()` initialized at **script top level** | Font loading L seconds counted into first frame `dt`, `time` jumps to L → entire recording lags by L seconds → **offset** |

**✅ Correct complete starter tick template** (hand-written animations must use this skeleton):

```js
// ━━━━━━ state ━━━━━━
let time = 0;
let playing = false;   // ❗ Default not playing, wait for fonts ready
let lastTick = null;   // ❗ Sentinel — first tick forces dt=0 (don't use performance.now())
const fired = new Set();

// ━━━━━━ tick ━━━━━━
function tick(now) {
  if (lastTick === null) {
    lastTick = now;
    window.__ready = true;   // ✅ Pair: "recording start" and "animation t=0" same frame
    render(0);               // Re-render to ensure DOM ready (fonts already loaded)
    requestAnimationFrame(tick);
    return;
  }
  const dt = (now - lastTick) / 1000;   // dt starts advancing only after first frame
  lastTick = now;

  if (playing) {
    let t = time + dt;
    if (t >= DURATION) {
      t = window.__recording ? DURATION - 0.001 : 0;  // Don't loop when recording, keep 0.001s for last frame
      if (!window.__recording) fired.clear();
    }
    time = t;
    render(time);
  }
  requestAnimationFrame(tick);
}

// ━━━━━━ boot ━━━━━━
// Don't rAF at top level immediately — wait for fonts to load
document.fonts.ready.then(() => {
  render(0);                 // Draw initial frame first (fonts ready)
  playing = true;
  requestAnimationFrame(tick);  // First tick pairs __ready + t=0
});

// ━━━━━━ seek interface (for render-video defensive correction) ━━━━━━
window.__seek = (t) => { fired.clear(); time = t; lastTick = null; render(t); };
```

**Why this template is correct**:

| Aspect | Why it must be this way |
|---|---|
| `lastTick = null` + first frame `return` | Prevents L seconds from script load to first tick execution from being counted into animation time |
| `playing = false` default | Even if `tick` runs during font loading, it doesn't advance time, preventing rendering misalignment |
| `__ready` set in tick's first frame | Recording script starts timing now, corresponding frame is animation's true t=0 |
| Start tick inside `document.fonts.ready.then(...)` | Avoid font fallback width measurement issues, prevent first frame font jump |
| `window.__seek` exists | Lets `render-video.js` actively correct — second line of defense |

**Corresponding defenses on recording script side**:
1. `addInitScript` injects `window.__recording = true` (before page goto)
2. `waitForFunction(() => window.__ready === true)`, records this offset for ffmpeg trim
3. **Extra**: After `__ready`, actively `page.evaluate(() => window.__seek && window.__seek(0))`, force-resets HTML's possible time deviation to zero — this is the second defense for HTML that doesn't strictly follow the starter template

**Verification method**: After exporting MP4
```bash
ffmpeg -i video.mp4 -ss 0 -vframes 1 frame-0.png
ffmpeg -i video.mp4 -ss $DURATION-0.1 -vframes 1 frame-end.png
```
First frame must be animation t=0 initial state (not mid-section, not black), last frame must be animation final state (not some moment in the second loop).

**Reference implementation**: `assets/animations.jsx`'s Stage component, `scripts/render-video.js` both follow this protocol. Hand-written HTML must use the starter tick template — every line defends against a specific bug.

## 13. Disable Loop During Recording — `window.__recording` Signal

**Bug**: Animation Stage defaults to `loop=true` (convenient for preview in browser). `render-video.js` waits an extra 300ms buffer after recording duration seconds, and this 300ms lets Stage enter the next loop cycle. When ffmpeg `-t DURATION` cuts, the last 0.5-1s falls into the next loop — video end suddenly jumps back to first frame (Scene 1), audience thinks video is buggy.

**Root cause**: No handshake protocol between recording script and HTML saying "I'm recording." HTML doesn't know it's being recorded, still behaves as browser interaction scenario with looping.

**Rule**:

1. **Recording script**: Inject `window.__recording = true` in `addInitScript` (before page goto):
   ```js
   await recordCtx.addInitScript(() => { window.__recording = true; });
   ```

2. **Stage component**: Detect this signal, force loop=false:
   ```js
   const effectiveLoop = (typeof window !== 'undefined' && window.__recording) ? false : loop;
   // ...
   if (next >= duration) return effectiveLoop ? 0 : duration - 0.001;
   //                                                       ↑ keep 0.001 to prevent Sprite end=duration from being closed
   ```

3. **End Sprite's fadeOut**: In recording scenario, set `fadeOut={0}`, otherwise the video end will fade to transparent/dark — users expect to stop at a clear final frame, not fade out. For hand-written HTML, recommend ending Sprites use `fadeOut={0}`.

**Reference implementation**: `assets/animations.jsx`'s Stage / `scripts/render-video.js` both have built-in handshake. Hand-written Stage must implement `__recording` detection — otherwise recording will definitely hit this bug.

**Verification**: After exporting MP4, `ffmpeg -ss 19.8 -i video.mp4 -frames:v 1 end.png`, check that the last 0.2 seconds are still the expected final frame, not suddenly switching to another scene.

## 14. 60fps Video Defaults to Frame Copy — minterpolate Compatibility Poor

**Bug**: `convert-formats.sh` using `minterpolate=fps=60:mi_mode=mci...` generated 60fps MP4 that can't be opened on some versions of macOS QuickTime / Safari (black screen or outright rejection). VLC / Chrome can open it.

**Root cause**: H.264 elementary stream output by minterpolate contains SEI / SPS fields that some players have trouble parsing.

**Rule**:

- Default 60fps uses simple `fps=60` filter (frame copy), broad compatibility (QuickTime/Safari/Chrome/VLC all work)
- High-quality interpolation uses `--minterpolate` flag explicitly — but **must test locally on target player before delivery**
- The value of the 60fps label is **upload platform algorithm recognition** (Bilibili/YouTube prioritize 60fps tagged content for streaming), actual perceived smoothness improvement for CSS animations is minimal
- Add `-profile:v high -level 4.0` to improve H.264 general compatibility

**`convert-formats.sh` already defaults to compatibility mode**. If you need interpolated high quality, add `--minterpolate` flag:
```bash
bash convert-formats.sh input.mp4 --minterpolate
```

## 15. `file://` + External `.jsx` CORS Trap — Single-file Delivery Must Inline Engine

**Bug**: Animation HTML uses `<script type="text/babel" src="animations.jsx"></script>` to load engine externally. Opening locally by double-click (`file://` protocol) → Babel Standalone fetches `.jsx` via XHR → Chrome reports `Cross origin requests are only supported for protocol schemes: http, https, chrome, chrome-extension...` → entire page black screen, no `pageerror` only console error, easily misdiagnosed as "animation not triggered."

Starting an HTTP server might not save it either — when global proxy is active, `localhost` also goes through proxy, returning 502 / connection failed.

**Rule**:

- **Single-file delivery (double-click-to-open HTML)** → `animations.jsx` must be **inlined** into `<script type="text/babel">...</script>` tag, don't use `src="animations.jsx"`
- **Multi-file project (served via HTTP server)** → can load externally, but clearly document the `python3 -m http.server 8000` command in delivery
- Judgment: are you delivering an "HTML file" or a "project directory with server"? Former uses inline
- Stage component / animations.jsx is often 200+ lines — embedding into HTML `<script>` block is completely acceptable, don't fear the size

**Minimum verification**: Double-click your generated HTML, **don't** open it through any server. If Stage shows the animation's first frame normally, it passes.

## 16. Cross-scene Color Context — In-frame Elements Should Not Hardcode Colors

**Bug**: When making multi-scene animation, elements that appear **across scenes** like `ChapterLabel` / `SceneNumber` / `Watermark`, hardcoded `color: '#1A1A1A'` (dark text) in the component. First 4 scenes on light background OK, but on 5th scene with dark background, "05" and watermark disappear — no error, no check triggers, key information invisible.

**Rule**:

- **In-frame elements reused across multiple scenes** (chapter labels / scene numbers / time codes / watermarks / copyright bars) **must not hardcode color values**
- Use one of three approaches instead:
  1. **`currentColor` inheritance**: Element only writes `color: currentColor`, parent scene container sets `color: computed value`
  2. **invert prop**: Component accepts `<ChapterLabel invert />` to manually toggle light/dark
  3. **Auto-compute based on background**: `color: contrast-color(var(--scene-bg))` (CSS 4 new API, or JS judgment)
- Before delivery, use Playwright to capture **one representative frame per scene**, visually check that "cross-scene elements" are all visible

The insidiousness of this bug — **no bug alert**. Only human eyes or OCR can find it.

## 17. True Offline/No-CDN Self-containment — React/Babel Fully Inlined, and Engine Also Needs Transpilation

**Bug (2026-05 Miyou promotional animation)**: Animation HTML uses `<script src="https://unpkg.com/react...">` + `<script src=".../@babel/standalone">` via CDN. Local machine has global proxy, Playwright recording with chromium connects to unpkg / Google Fonts all `net::ERR_CONNECTION_CLOSED`:

1. React/ReactDOM didn't load → `window.React undefined`
2. Babel didn't load → `<script type="text/babel">`'s JSX runs as regular JS → `Unexpected token '<'`

After fixing React/Babel, hit a second trap: **treating the `animations.jsx` engine as regular inline `<script>`, still got `Unexpected token '<'` → `window.Animations is undefined`**. Root cause: **the `animations.jsx` engine itself contains JSX** (`Stage`/`Sprite` components `return (<div>...)`), originally designed to be loaded by Babel via `<script type="text/babel">`. Only transpiled app code, forgot to transpile the engine → that engine JSX wasn't compiled.

**Rule** (when making truly self-contained single-file that "opens on double-click / works offline / can be recorded by Playwright"):

- **React + ReactDOM locally inlined**: `curl` download `react.production.min.js` (~10KB) + `react-dom.production.min.js` (~131KB) locally, inline into `<script>`, don't use CDN
- **Build-time Babel pre-compilation, no Babel at runtime**: Use `@babel/standalone` (download once, build-only) in node to `Babel.transform(src,{presets:['react']}).code`, converting JSX → `React.createElement`. **Both app and `animations.jsx` engine must go through transform** — engine contains JSX, missing it will cause `Unexpected token '<'`
- **Fonts switch to system fonts**: Google Fonts CDN will also be cut off by proxy. Chinese animations use `'PingFang SC'` (sans) / `'Songti SC'` (serif) system fonts, not dependent on network. `document.fonts.ready` resolves immediately for system fonts, recording won't stall
- **Base64 inline image assets**: `<img src="png/x.png">` relative paths work in `file://`, but for true portability (moving files without losing images), use base64 data URL inline; compress large background images with JPEG first then base64
- **Build template-ized**: HTML template reserves `__REACT__/__REACTDOM__/__ASSETS__/__ENGINE__` tokens + a `type="text/jsx-source"` app source block; node build script reads tokens, injects (vendor as-is, engine+app through Babel) → outputs final single file. To change animation, only edit template and re-run build

**Verification**: Playwright `page.evaluate(()=>({React:typeof window.React, Animations:typeof window.Animations}))` — both should be `object`. Either `undefined` → corresponding `<script>` threw an error (likely untranspiled JSX).

**Relation to pitfall #15**: #15 covers "don't use `src=` external link for `.jsx` in single-file (file:// CORS)"; this pitfall goes further — even React/Babel/fonts **remote CDN can be cut off under restricted networks**, to achieve true self-containment requires full inline + build-time transpilation.

## Quick Self-check List (5 Seconds Before Starting)

- [ ] Every `position: absolute` element's parent has `position: relative`?
- [ ] Special characters (`␣` `⌘` `emoji`) exist in the chosen font?
- [ ] Grid/Flex template count matches JS data length?
- [ ] Scene transitions have cross-fade, no >0.3s pure blank?
- [ ] DOM measurement code wrapped in `document.fonts.ready.then()`?
- [ ] `render(t)` is pure, or has clear reset mechanism?
- [ ] Frame 0 is complete initial state, not blank?
- [ ] No "fake chrome" decorations in frame (progress bar/time code/bottom credit bar colliding with Stage scrubber)?
- [ ] Animation tick first frame synchronously sets `window.__ready = true`? (animations.jsx has built-in; hand-written HTML add yourself)
- [ ] Stage detects `window.__recording` to force loop=false? (hand-written HTML must add)
- [ ] End Sprite's `fadeOut` set to 0 (stop at clear frame for video end)?
- [ ] 60fps MP4 defaults to frame copy mode (compatibility), high-quality interpolation uses `--minterpolate`?
- [ ] After export, check first frame + last frame are animation initial/final states?
- [ ] Involves specific brand (Stripe/Anthropic/Lovart/...): completed "Brand Asset Protocol" (SKILL.md §1.a five steps)? `brand-spec.md` written?
- [ ] Single-file HTML delivery: `animations.jsx` is inlined, not `src="..."`? (file:// external .jsx will CORS black screen)
- [ ] Cross-scene elements (chapter labels/watermark/scene numbers) no hardcoded colors? Visible on every scene's background?
- [ ] For offline/true self-containment: React+ReactDOM locally inlined, **both app and `animations.jsx` engine through Babel transpile**, system fonts? (see pitfall #17; engine contains JSX, missing transpile will cause `Unexpected token '<'`)
