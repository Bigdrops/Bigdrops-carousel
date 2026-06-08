# tiktok-slides-guidelines.md
## 1. Frame Geometry & The TikTok "UI Death Zones"
Native application overlays (username, engagement buttons, descriptions, search bar) cover significant portions of the 9:16 frame. To prevent content clipping, all data must be contained within a strictly defined safe zone.
### Core Canvas Specifications
 * **Base Frame Geometry:** Exactly 1080px (width) × 1920px (height).
 * **Target Export:** Single HTML file optimized for html2canvas rendering.
### Absolute UI Clipping Zones (No-Go Sectors)
 * **Top Header Zone (0px to 280px):** Occupied by search bars and app navigation. **No content permitted.**
 * **Right Margin Zone (900px to 1080px):** Occupied by the engagement track (Like, Comment, Save). **No content permitted.**
 * **Bottom UI Zone (1240px to 1920px):** Occupied by captions, hashtags, and audio metadata. **Bottom 680px must remain blank.**
## 2. Layout Structure & Safe Zone Boxing
The agent must utilize an immutable bounding box system. Content is anchored within the defined container to avoid bleeding into the UI death zones.
### CSS Blueprint Rules
```css
:root {
  --canvas-width: 1080px;
  --canvas-height: 1920px;
  
  /* Hard TikTok UI Boundary Padding */
  --pad-top: 280px;
  --pad-left: 80px;
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
## 3. Typography & Data Formatting
 * **Headers/Ranks:** font-family: 'Bebas Neue', sans-serif;. Minimum size 72px.
 * **Body/Specs:** font-family: 'DM Sans', sans-serif;.
 * **Technical Metrics:** font-family: 'DM Mono', monospace;.
 * **Formatting:** No hard-coded <br> tags in device names. Maintain linear string outputs.
## 4. UI Element Placement Best Practices
 * **Header Row:** Always anchor the rank and device name to the top-left of the .safe-content-zone using a consistent flex-row.
 * **Component Grouping:** Use modular container blocks for technical specs to ensure readability.
 * **Verdict Block:** Anchor the "Verdict" text box to the lower portion of the .safe-content-zone (directly above the 1240px mark).
## 5. Automation Guardrails (System Prompt Enforcement)
 1. **No External Floating:** All elements must be nested within .safe-content-zone. Never use top: 0 or bottom: 0 relative to the window.
 2. **Left/Center Geometry:** All content must be left-aligned or centered. Never right-align assets, as this forces conflict with the TikTok sidebar.
 3. **Rendering Stability:** Avoid CSS blend-modes, complex SVG masks, or advanced filter layers that cause html2canvas failures. Stick to flat panels and clean alpha-channel images.
 4. **Boundary Integrity:** If text content exceeds the available vertical space, the agent is responsible for dynamic sizing or layout compression—never allow the box to overflow the 1240px vertical line.
