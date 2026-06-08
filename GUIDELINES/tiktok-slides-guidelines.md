```markdown
# tiktok-slides-guidelines.md

## 1. Frame Geometry & The TikTok "UI Death Zones"
Native application overlays (username, engagement buttons, descriptions, search bar) cover significant portions of the 9:16 frame. To prevent content clipping, all data must be contained within a strictly defined safe zone.

### Core Canvas Specifications
- **Base Frame Geometry:** Exactly 1080px (width) × 1920px (height).
- **Target Export:** Single HTML file optimized for html2canvas rendering.

### Absolute UI Clipping Zones (No-Go Sectors)
- **Top Header Zone (0px to 280px):** Occupied by search bars and app navigation. **No content permitted.**
- **Right Margin Zone (900px to 1080px):** Occupied by the engagement track (Like, Comment, Save). **No content permitted.**
- **Bottom UI Zone (1240px to 1920px):** Occupied by captions, hashtags, and audio metadata. **Bottom 680px must remain blank.**

## 2. Layout Structure & Safe Zone Boxing
The agent must utilize an immutable bounding box system. Content is anchored within the defined container to avoid bleeding into the UI death zones.

### CSS Blueprint Rules
```css
:root {
  --canvas-width: 1080px;
  --canvas-height: 1920px;
  
  /* Hard TikTok UI Boundary Padding */
  --pad-top: 280px;
  --pad-left: 80px;        /* can be relaxed to 60px for content containers */
  --pad-right: 180px; 
  
  /* Dynamic Content Height */
  --content-max-h: 960px;
}

.slide-frame {
  width: var(--canvas-width);
  height: var(--canvas-height);
  position: relative;
  overflow: hidden;
}

.safe-content-zone {
  position: absolute;
  top: var(--pad-top) !important;
  left: var(--pad-left) !important;
  width: calc(var(--canvas-width) - var(--pad-left) - var(--pad-right)) !important;
  max-height: var(--content-max-h) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  z-index: 100;
}

/* Blank Bottom Guard */
.slide-frame::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1080px;
  height: 680px;
  background: transparent;
  pointer-events: none;
  z-index: 200;
}
```

Note on left margin: The winner file uses left:60px (20px less than the guideline) without clipping. For content containers, 60px is acceptable if the container has internal padding. Keep 80px as the conservative default for bare text or edge‑to‑edge layouts.

3. Typography & Data Formatting

· Headers/Ranks: font-family: 'Bebas Neue', sans-serif;. Minimum size 72px.
· Body/Specs: font-family: 'DM Sans', sans-serif;.
· Technical Metrics: font-family: 'DM Mono', monospace;.
· Formatting: No hard-coded <br> tags in device names. Maintain linear string outputs.

Verdict Block Requirements (Updated)

· Minimum length: 3 sentences or 50+ words.
· Must contain at least one specific data point, comparison, or opinion with justification.
· Prohibited: One‑sentence verdicts, bullet‑fragment lists, generic statements like "Smart money lands here."
· Example of acceptable verdict:
    "SD 8 Gen 3. Leica optics. 4K selfie. 90W. Compact body. Runs cooler than everything here. iPhone 15 Pro is the same chip generation – costs 3x more. Best overall package on this list. Argument closed."

4. UI Element Placement Best Practices

· Header Row: Always anchor the rank and device name to the top‑left of the .safe-content-zone using a consistent flex‑row.
· Image Container Discipline (Updated):
  · Use a fixed width container: width: 280px; flex-shrink: 0;
  · Image itself: width: 100%; height: auto; object-fit: contain;
  · Do not use max-width: 400px or larger – oversizing crowds out text.
· Component Grouping: Use modular container blocks for technical specs to ensure readability.
· Verdict Block: Anchor the "Verdict" text box to the lower portion of the .safe-content-zone (directly above the 1240px mark).
· Swipe Indicator (Updated):
  · Must be placed inside the main content block (not absolutely positioned outside the content flow).
  · Use flex alignment (justify-content: flex-end; margin-top: auto;) inside the content container.
  · Horizontal text, small opacity, no vertical writing mode.
  · Prohibited: position: absolute; bottom: 20px; right: 20px; detached from the content block.

5. Automation Guardrails (System Prompt Enforcement)

1. No External Floating: All elements must be nested within .safe-content-zone. Never use top: 0 or bottom: 0 relative to the window.
2. Left/Center Geometry: All content must be left‑aligned or centered. Never right‑align assets – this forces conflict with the TikTok sidebar.
3. Export Scale (Updated):
   · Always use scale: 2 in html2canvas options.
   · Do not use scale: 3 – it produces 2.25x larger files, increases memory pressure, and slows batch exports with no visible quality gain on TikTok.
4. CSS Blacklist for Export Safety (Updated):
   · Do not use CSS keyframe animations, clip-path, backdrop-filter, box-shadow on fixed‑position overlays, or complex SVG inline graphics inside elements that will be captured by html2canvas.
   · These cause rendering artifacts, frozen frames, or complete export failure.
   · Stick to flat colors, standard borders, and simple alpha‑channel images.
5. Safe Zone Diagnostic Overlay (Updated):
   · The safe zone toggle button must default to OFF (overlay hidden on page load).
   · Do not hardcode class="show" or any visible state in the HTML.
   · JavaScript toggle only.
   · When ON, draw only clean, dashed border lines – no text labels (e.g., "TIKTOK TOP UI") inside the overlay.
6. Boundary Integrity: If text content exceeds the available vertical space (max-height: 960px), the agent must perform dynamic sizing or layout compression – never allow the box to overflow the 1240px vertical line.

```