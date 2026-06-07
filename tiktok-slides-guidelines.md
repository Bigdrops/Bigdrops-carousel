# tiktok-slides-guidelines.md

## 1. Frame Geometry & The TikTok "UI Death Zones"
TikTok does not show a clean full-screen canvas. Native application overlay components (username, interaction buttons, descriptions, music tickers) cover the frame. To prevent critical data, text, specs, or numbers from being cut off, the generating agent MUST contain all visible data within a hard-restricted target field.

### Core Canvas Specifications
- **Base Frame Geometry:** Exactly 1080px width by 1920px height (Aspect Ratio 9:16).
- **Target Export Framework:** A single, self-contained HTML file rendering layout nodes into high-contrast text and UI layers optimized for `html2canvas` conversion.

### Absolute Disallowed UI Clipping Zones (No-Go Sectors)
- **The Top Ceiling (First 150px):** Blocked by native app global navigation ("Following", "For You", Search icon). No headers, badges, titles, or tags are allowed to float here.
- **The Right Margin (Last 160px of Width):** The "Engagement Track" death zone. Native interaction icons (Profile, Like, Comment, Bookmark, Share) sit directly over this space. **NEVER place phone images, specifications, ratings, or rank numbers inside the right margin.**
- **The Bottom Pit (Bottom 450px):** Reserved completely for account handles, text captions, hashtags, and sound metadata tracks. Keep layout elements entirely clear of this region.

---

## 2. Layout Structure & Safe Zone Boxing
To ensure full rendering safety automatically, the generating agent MUST utilize an immutable bounding box layout framework built using CSS custom properties.

### The CSS Blueprint Rules
Every single slide component must be anchored within a structurally centered layout box calculated precisely to remain untouched by native overlay interfaces:

```css
:root {
  /* Dimensions for target output */
  --canvas-width: 1080px;
  --canvas-height: 1920px;
  
  /* Hard TikTok UI Boundary Padding */
  --pad-top: 180px;
  --pad-bottom: 480px;
  --pad-left: 80px;
  --pad-right: 180px; /* Wider padding on right due to interaction buttons */
}

/* Master Slide Node */
.slide-frame {
  width: var(--canvas-width);
  height: var(--canvas-height);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: #09090B; /* Strict OLED pitch black base */
}

/* Central Safe Zone Box - Content MUST live here exclusively */
.safe-content-zone {
  position: absolute;
  top: var(--pad-top);
  left: var(--pad-left);
  width: calc(var(--canvas-width) - var(--pad-left) - var(--pad-right));
  height: calc(var(--canvas-height) - var(--pad-top) - var(--pad-bottom));
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

```
## 3. Visual Identity & Device Profiling (BIGDROPS Spec Rules)
Every generated layout must conform to a standardized typographic and visual hierarchy optimized for fast scrolling on dark-mode mobile screens.
### Typography Stack
 * **Ranks and Hero Headers:** Use font-family: 'Bebas Neue', sans-serif; with a minimum size of 72px. Always specify tracking/letter-spacing (letter-spacing: 2px) to guarantee readability.
 * **Technical Specs and Body Copy:** Use font-family: 'DM Sans', sans-serif;. Maintain a uniform line-height: 1.35 to aid fast, high-speed on-screen scanning.
 * **System Diagnostics / Hardware Metrics:** Use font-family: 'DM Mono', monospace; for absolute technical specifications (e.g., *Snapdragon 8 Gen 3*, *7,550mAh*, *120W*).
### Dynamic Theme Injection (Replace Static Brand-Accent)
**STRICT RULE:** Do NOT use a single static `--brand-accent` color. Every phone slide must be assigned a theme class based on its device classification. The accent color maps dynamically.

```css
:root {
  --text-main:    #EEECEA;
  --text-muted:   #6B6875;
  --alert-red:    #F87171;
  --alert-orange: #FF5722;
  --chip-bg:      #16161A;
  --border-lines: #252530;

  /* Theme-able accent — overridden by theme classes below */
  --brand-accent: #C8FF00;

  /* Available accent palette */
  --blue:   #38BDF8;
  --purple: #A78BFA;
  --lime:   #C8FF00;
  --orange: #FF5722;
  --red:    #F87171;
  --green:  #34D399;
  --gold:   #FBBF24;
}

/* ── DYNAMIC THEMES ── */
/* 1. FLAGSHIP — polished all-rounder premium devices */
.theme-flagship {
  --brand-accent: var(--blue);
}
.theme-flagship .ps-bar { background: var(--blue); box-shadow: 0 0 16px rgba(56,189,248,.4); }
.theme-flagship .c-eyebrow { color: var(--blue); }
.theme-flagship .c-eyebrow::before { background: var(--blue); }
.theme-flagship .c-divider { background: var(--blue); }
.theme-flagship .cover-stripe { background: var(--blue); box-shadow: 0 0 24px rgba(56,189,248,.6); }
.theme-flagship .hl { color: var(--blue); }
.theme-flagship .hl2 { -webkit-text-stroke: 2px var(--blue); }

/* 2. GAMING / PERFORMANCE — raw power, shortcuts elsewhere */
.theme-gaming {
  --brand-accent: var(--purple);
}
.theme-gaming .ps-bar { background: var(--purple); box-shadow: 0 0 16px rgba(167,139,250,.4); }
.theme-gaming .c-eyebrow { color: var(--purple); }
.theme-gaming .c-eyebrow::before { background: var(--purple); }
.theme-gaming .c-divider { background: var(--purple); }
.theme-gaming .cover-stripe { background: var(--purple); box-shadow: 0 0 24px rgba(167,139,250,.6); }
.theme-gaming .hl { color: var(--purple); }
.theme-gaming .hl2 { -webkit-text-stroke: 2px var(--purple); }

/* 3. ELITE DISRUPTER — category champion, extreme value */
.theme-elite {
  --brand-accent: var(--lime);
}
.theme-elite .ps-bar { background: var(--lime); box-shadow: 0 0 16px rgba(200,255,0,.4); }
.theme-elite .c-eyebrow { color: var(--lime); }
.theme-elite .c-eyebrow::before { background: var(--lime); }
.theme-elite .c-divider { background: var(--lime); }
.theme-elite .cover-stripe { background: var(--lime); box-shadow: 0 0 24px rgba(200,255,0,.6); }
.theme-elite .hl { color: var(--lime); }
.theme-elite .hl2 { -webkit-text-stroke: 2px var(--lime); }
```

**Theme Assignment Rules:**
| Theme | Class | Target Devices | Accent |
|---|---|---|---|
| Flagship | `.theme-flagship` | Xiaomi 14, OnePlus 11, Samsung S23, Xiaomi 13 | `--blue` |
| Gaming/Performance | `.theme-gaming` | ROG Phone, iQOO Neo, Redmi K-series performance variants | `--purple` |
| Elite Disrupter | `.theme-elite` | Vivo X100, Honor Magic 5 Pro, category champions | `--lime` |

### Hazard Highlight Overrides (`.c-warn`)
When writing a spec/badge about a system bottleneck or flaw (e.g., Pixel 7 Pro thermal throttling, S23 25W charging), wrap that specific element in `.c-warn` using `--orange` or `--red`:

```html
<span class="chip c-warn">⚠ 25W Charging 💀</span>
```

```css
.c-warn { background: rgba(248,113,113,.07); border: 1px solid rgba(248,113,113,.22); color: var(--red); }
```
## 4. UI Element Placement Best Practices
### The Rank Number & Device Identity Header
 * Anchor the rank element and name identifier to the top-left coordinate of the .safe-content-zone.
 * Utilize an aligned row structure to prevent awkward wrapping:
```html
<div class="header-row">
  <span class="rank-badge">#05</span>
  <h1 class="device-name">ONEPLUS 11</h1>
</div>

```
### Technical Specs Component Grouping
 * Do not dump long, unstructured blocks of running copy. Break technical metrics up into clean, scannable modular UI containers using background: var(--chip-bg);.
 * Implement bold, clear keys on individual specifications to maximize visual punch:
```html
<div class="spec-card">
  <span class="spec-label">CHIPSET:</span>
  <span class="spec-value">Snapdragon 8 Gen 2 (Pure Flagship)</span>
</div>

```
### The Unfiltered Real-World "Verdict" Block
 * Place custom strategic evaluations or localized market criticisms inside an independent, high-visibility highlight block anchored at the bottom tier of the safe container zone.
 * Highlight specific regional features or high-value perks (e.g., *Xiaomi 14T Dual eSIM support*) with --brand-accent. Highlight performance flaws, heating issues, or bottlenecks (e.g., *Pixel 7 Pro thermal throttling*) with --alert-red.
## 5. Automation Guardrails for AI Generation (System Prompt Enforcement)
When programmatically writing or adjusting HTML/CSS slide assets, the code generator must strictly respect these system constraints:
 1. **No External Positional Floating:** Layout components must never deploy absolute coordinates targeting top: 0, bottom: 0, or right: 0 relative to the window. All components must remain structurally nested within a parent wrapper governed by .safe-content-zone.
 2. **Text Wrapping Length Caps:** Descriptive text fragments must be short, punchy, and deliberate. Prevent auto-wrapping overflows by capping hardware descriptions at a maximum of three layout lines per component block.
 3. **Left-Heavy or Centered Geometry Only:** Do not right-align critical graphic components, benchmarking plots, charts, or images. Maintain strict left or centered alignments to completely avoid conflicts with the TikTok interactive sidebar layout.
 4. **HTML2Canvas Rendering Compatibility:** Avoid advanced CSS blend-modes, multi-layered complex clip-paths, or exotic SVG masking patterns that standard client-side canvas engines struggle to snapshot correctly. Stick to flat canvas panels, explicit typography boxes, high-contrast structural borders, and clean alpha-channel image resources.
