# Video Export: HTML Animation to MP4/GIF

After completing an animation HTML, users often ask "can this be exported as video?" This guide provides the complete process.

## When to Export

**Export timing**:
- Animation runs through completely, visually verified (Playwright screenshots confirm correct state at each time point)
- User has watched in browser at least once and confirmed OK
- **Don't** export while animation bugs are still unfixed — fixing bugs in video format is more expensive

**User trigger phrases**:
- "Can you export this as video?"
- "Convert to MP4"
- "Make a GIF"
- "60fps"

## Output Specifications

Default: output three formats at once for user to choose:

| Format | Specs | Suitable For | Typical Size (30s) |
|---|---|---|---|
| MP4 25fps | 1920×1080 · H.264 · CRF 18 | Public account embedding, Video account, YouTube | 1-2 MB |
| MP4 60fps | 1920×1080 · minterpolate interpolation · H.264 · CRF 18 | High frame rate showcase, Bilibili, portfolio | 1.5-3 MB |
| GIF | 960×540 · 15fps · palette optimized | Twitter/X, README, Slack preview | 2-4 MB |

## Toolchain

Two scripts in `scripts/`:

### 1. `render-video.js` — HTML → MP4

Records a 25fps base MP4. Depends on global playwright.

```bash
NODE_PATH=$(npm root -g) node /path/to/claude-design/scripts/render-video.js <html file>
```

Optional params:
- `--duration=30` animation duration (seconds)
- `--width=1920 --height=1080` resolution
- `--trim=2.2` seconds to trim from video start (remove reload + font loading time)
- `--fontwait=1.5` font loading wait time (seconds), increase for many fonts

Output: same directory as HTML, same name `.mp4`.

### 2. `add-music.sh` — MP4 + BGM → MP4

Mixes background music into silent MP4. Selects from built-in BGM library by mood, or accepts custom audio. Auto-matches duration, adds fade in/out.

```bash
bash add-music.sh <input.mp4> [--mood=<name>] [--music=<path>] [--out=<path>]
```

**Built-in BGM Library** (at `assets/bgm-<mood>.mp3`):

| `--mood=` | Style | Suitable Scenario |
|---|---|---|
| `tech` (default) | Apple Silicon / Apple keynote, minimal synth + piano | Product launch, AI tools, Skill promotion |
| `ad` | upbeat modern electronic, with build + drop | Social media ads, product teasers, promo videos |
| `educational` | Warm bright, light guitar/electric piano, inviting | Science education, tutorial intros, course previews |
| `educational-alt` | Same category alternative, try a different track | Same as above |
| `tutorial` | lo-fi ambient, almost unobtrusive | Software demos, coding tutorials, long demos |
| `tutorial-alt` | Same category alternative | Same as above |

**Behavior**:
- Music trimmed to video duration
- 0.3s fade in + 1s fade out (avoid hard cuts)
- Video stream `-c:v copy` no re-encode, audio AAC 192k
- `--music=<path>` priority over `--mood`, can directly specify any external audio
- Wrong mood name lists all available options, won't fail silently

**Typical pipeline** (animation export three-piece + music) :
```bash
node render-video.js animation.html                        # Screen record
bash convert-formats.sh animation.mp4                      # Derive 60fps + GIF
bash add-music.sh animation-60fps.mp4                      # Add default tech BGM
# Or for different scenarios:
bash add-music.sh tutorial-demo.mp4 --mood=tutorial
bash add-music.sh product-promo.mp4 --mood=ad --out=promo-final.mp4
```

### 3. `convert-formats.sh` — MP4 → 60fps MP4 + GIF

Generates 60fps version and GIF from existing MP4.

```bash
bash /path/to/claude-design/scripts/convert-formats.sh <input.mp4> [gif_width] [--minterpolate]
```

Output (same directory as input):
- `<name>-60fps.mp4` — default uses `fps=60` frame copy (broad compatibility); add `--minterpolate` for high-quality interpolation
- `<name>.gif` — palette optimized GIF (default 960 width, configurable)

**60fps Mode Selection**:

| Mode | Command | Compatibility | Use Case |
|---|---|---|---|
| Frame copy (default) | `convert-formats.sh in.mp4` | QuickTime/Safari/Chrome/VLC all work | General delivery, upload platforms, social media |
| minterpolate interpolation | `convert-formats.sh in.mp4 --minterpolate` | macOS QuickTime/Safari may reject | Bilibili and other showcase scenarios requiring true interpolation, **must test on target player locally before delivery** |

Why default changed to frame copy? minterpolate output of H.264 elementary stream has a known compat bug — previously with minterpolate as default, we repeatedly hit "macOS QuickTime won't open" issues. See `animation-pitfalls.md` §14.

`gif_width` parameter:
- 960 (default) — general purpose for social platforms
- 1280 — clearer but larger file
- 600 — Twitter/X priority loading

### 4. `render-video-seek.js` — True 60fps / Deterministic Rendering (Recommended for High Quality)

The `render-video.js` recordVideo path has three inherent limitations: frame rate locked at 25fps by Chromium compositor, loading black frames at start requiring trim, and 60fps only achievable via post-hoc minterpolate interpolation (with ghosting + macOS QuickTime compatibility bug, see `animation-pitfalls.md §14`). For **true 60fps, deterministic output, or delivery to Bilibili/portfolio**, switch to seek rendering.

It seeks to each timestamp frame-by-frame, takes screenshots, then encodes the PNG sequence into MP4 with ffmpeg. The technical core borrows from HeyGen HyperFrames (Apache 2.0)'s "frozen clock + seek screenshot" approach, but without introducing any third-party packages — only uses this skill's existing playwright + ffmpeg, runtime neutral.

```bash
NODE_PATH=$(npm root -g) node /path/to/claude-design/scripts/render-video-seek.js <html file> --fps=60
```

Parameters: `--duration` · `--fps` (default 60) · `--width` · `--height` · `--concurrency` (default 4 parallel workers) · `--settle` (wait N rAF after seek before screenshot, default 2, increase for heavy layout animations) · `--keep-chrome`. Output same directory as HTML, same name `.mp4`.

Directly solves recordVideo's three deadlocks:
- **True native any frame rate**: `--fps=60` produces true 60fps (each frame is a real seek render), no more `convert-formats.sh` minterpolate interpolation, bypassing ghosting + macOS compatibility bug
- **No leading black frames**: No screen recording, no loading black frames, no need for `--trim` / `--fontwait`
- **Deterministic**: seek to timestamp for screenshot, same input same output, unaffected by machine load/dropped frames

**Applicability boundary (important)**: Only supports animations driven by Stage clock — `<Stage>` from `assets/animations.jsx` or `<NarrationStage>` from `narration_stage.jsx`, which respond to `window.__seekRender` to freeze their self-driven clock and expose `window.__seek(t)`. Pure CSS `@keyframes` / Lottie / hand-written non-Stage animations don't respond to `__seek` — use `render-video.js` for these (the script will error and prompt if `__seek` is not detected).

**Trade-off**: Frame-by-frame screenshots — for long videos, total time may exceed real-time recording via recordVideo (mitigated by `--concurrency` multi-worker); large temporary PNGs on disk, close other memory-heavy apps before rendering.

**Two-choice strategy**: Default still use `render-video.js` (zero risk, covers all animation types); when true 60fps / determinism / high-quality delivery is needed and animation uses Stage clock, use `render-video-seek.js`. Long narrated animations use `render-narration.sh --seek` for one-click seek rendering + audio mix.

## Complete Flow (Standard Recommended)

After user says "export video":

```bash
cd <project directory>

# Assume $SKILL points to this skill's root directory (replace with actual installation location)

# 1. Record 25fps base MP4
NODE_PATH=$(npm root -g) node "$SKILL/scripts/render-video.js" my-animation.html

# 2. Derive 60fps MP4 and GIF
bash "$SKILL/scripts/convert-formats.sh" my-animation.mp4

# Output inventory:
# my-animation.mp4         (25fps · 1-2 MB)
# my-animation-60fps.mp4   (60fps · 1.5-3 MB)
# my-animation.gif         (15fps · 2-4 MB)
```

## Technical Details (Troubleshooting)

### Playwright recordVideo Pitfalls

- Frame rate fixed at 25fps, cannot directly record 60fps (Chromium headless compositor limit)
- Recording starts from context creation, must use `trim` to remove leading load time
- Default webm format, needs ffmpeg conversion to H.264 MP4 for universal playback

`render-video.js` handles the above issues.

### ffmpeg minterpolate Parameters

Current config: `minterpolate=fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1`

- `mi_mode=mci` — motion compensation interpolation
- `mc_mode=aobmc` — adaptive overlapped block motion compensation
- `me_mode=bidir` — bidirectional motion estimation
- `vsbmc=1` — variable size block motion compensation

Works well for CSS **transform animations** (translate/scale/rotate).
May produce slight ghosting for **pure fades** — if user complains, fall back to simple frame copy:

```bash
ffmpeg -i input.mp4 -r 60 -c:v libx264 ... output.mp4
```

### Why Two-stage GIF Palette

GIF only supports 256 colors. A single-pass GIF would compress the entire animation's colors to a 256-color universal palette, blurring subtle color schemes like beige + orange.

Two-stage:
1. `palettegen=stats_mode=diff` — first scan the entire video, generate **optimal palette for this specific animation**
2. `paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle` — encode with this palette, rectangle diff only updates changed areas, significantly reducing file size

For fade transitions, `dither=bayer` is smoother than `none`, but file size slightly larger.

## Pre-flight Check (Before Export)

30-second self-check before export:

- [ ] HTML runs through completely in browser, no console errors
- [ ] Animation frame 0 is complete initial state (not blank loading)
- [ ] Animation last frame is stable ending state (not mid-frame)
- [ ] Fonts/images/emoji all render correctly (reference `animation-pitfalls.md`)
- [ ] Duration parameter matches actual animation duration in HTML
- [ ] Stage in HTML detects `window.__recording` to force loop=false (must check for hand-written Stage; `assets/animations.jsx` has built-in)
- [ ] End Sprite's `fadeOut={0}` (last video frame doesn't fade out)
- [ ] Contains "Created by Huashu-Design" watermark (required for animation scenarios; for third-party brand works, add "Unofficial · " prefix. See SKILL.md § "Skill Promotion Watermark")

## Delivery Accompanying Notes

Standard note format after export:

```
**Complete Delivery**

| File | Format | Specs | Size |
|---|---|---|---|
| foo.mp4 | MP4 | 1920×1080 · 25fps · H.264 | X MB |
| foo-60fps.mp4 | MP4 | 1920×1080 · 60fps (motion interpolation) · H.264 | X MB |
| foo.gif | GIF | 960×540 · 15fps · palette optimized | X MB |

**Notes**
- 60fps uses minterpolate motion estimation interpolation, works well for transform animations
- GIF uses palette optimization, 30s animation can be compressed to ~3MB

Let me know if you need different dimensions or frame rates.
```

## Common User Follow-up Requests

| User Says | Response |
|---|---|
| "Too large" | MP4: increase CRF to 23-28; GIF: lower resolution to 600 or fps to 10 |
| "GIF too blurry" | Increase `gif_width` to 1280; or suggest MP4 instead (WeChat Moments supports it) |
| "Need portrait 9:16" | Change HTML source `--width=1080 --height=1920`, re-record |
| "Add watermark" | ffmpeg add `-vf "drawtext=..."` or `overlay=` a PNG |
| "Need transparent background" | MP4 doesn't support alpha; use WebM VP9 + alpha or APNG |
| "Need lossless" | CRF 0 + preset veryslow (file will be 10x larger) |
