# Editable PPTX Export: HTML Hard Constraints + Size Decision + Common Errors

This document describes the path of **using `scripts/html2pptx.js` + `pptxgenjs` to translate HTML element-by-element into a truly editable PowerPoint text box**, which is also the only path supported by `export_deck_pptx.mjs`.

> **Core Premise**: To take this path, the HTML must be written from the first line following the 4 constraints below. **Not convert after writing** — post-remediation triggers 2-3 hours of rework (verified by the 2026-04-20 Options Private Board project).
>
> Scenarios that prioritize visual freedom (animations / web components / CSS gradients / complex SVG) should take the PDF path (`export_deck_pdf.mjs` / `export_deck_stage_pdf.mjs`). **Do not** expect pptx export to achieve both visual fidelity and editability — this is a physical constraint of the PPTX file format itself (see "Why the 4 Constraints Are Not Bugs but Physical Constraints" at the end).

---

## Canvas Size: Use 960×540pt (LAYOUT_WIDE)

PPTX units are **inches** (physical size), not px. Decision principle: the body's computedStyle size must **match the presentation layout's inch size** (±0.1", enforced by `html2pptx.js`'s `validateDimensions`).

### 3 Candidate Sizes Comparison

| HTML body | Physical Size | Corresponding PPT layout | When to Choose |
|---|---|---|---|
| **`960pt × 540pt`** | **13.333″ × 7.5″** | **pptxgenjs `LAYOUT_WIDE`** | ✅ **Default recommendation** (modern PowerPoint 16:9 standard) |
| `720pt × 405pt` | 10″ × 5.625″ | Custom | Only when user specifies "Old PowerPoint Widescreen" template |
| `1920px × 1080px` | 20″ × 11.25″ | Custom | ❌ Non-standard size, fonts appear abnormally small when projected |

**Don't think of HTML size as resolution.** PPTX is a vector document — the body size determines **physical size**, not sharpness. An oversized body (20″×11.25″) won't make text clearer — it just makes font pt relatively smaller on the canvas, looking worse when projected/printed.

### Body Writing: Three Equivalent Options

```css
body { width: 960pt;  height: 540pt; }    /* clearest, recommended */
body { width: 1280px; height: 720px; }    /* equivalent, px habit */
body { width: 13.333in; height: 7.5in; }  /* equivalent, inch intuition */
```

Corresponding pptxgenjs code:

```js
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';  // 13.333 × 7.5 inch, no custom needed
```

---

## 4 Hard Constraints (will error directly if violated)

`html2pptx.js` translates HTML DOM elements one-by-one into PowerPoint objects. PowerPoint's format constraints projected onto HTML = the 4 rules below.

### Rule 1: DIV cannot contain text directly — must use `<p>` or `<h1>`-`<h6>`

```html
<!-- ❌ Wrong: text directly in div -->
<div class="title">Q3 revenue grew 23%</div>

<!-- ✅ Correct: text in <p> or <h1>-<h6> -->
<div class="title"><h1>Q3 revenue grew 23%</h1></div>
<div class="body"><p>New users are the main driver</p></div>
```

**Why**: PowerPoint text must exist in a text frame, which corresponds to HTML paragraph-level elements (p/h*/li). Bare `<div>` has no corresponding text container in PPTX.

**Also cannot use `<span>` as main text carrier** — span is an inline element and cannot be independently aligned as a text box. Span can only be **nested inside p/h\*** for local styling (bold, color changes).

### Rule 2: CSS gradients not supported — use solid colors only

```css
/* ❌ Wrong */
background: linear-gradient(to right, #FF6B6B, #4ECDC4);

/* ✅ Correct: solid color */
background: #FF6B6B;

/* ✅ If multi-color stripes are needed, use flex children with solid colors */
.stripe-bar { display: flex; }
.stripe-bar div { flex: 1; }
.red   { background: #FF6B6B; }
.teal  { background: #4ECDC4; }
```

**Why**: PowerPoint's shape fill only supports solid/gradient-fill two types, but pptxgenjs's `fill: { color: ... }` only maps to solid. Gradients using PowerPoint's native gradient require a different structure, currently not supported by the toolchain.

### Rule 3: Background/border/shadow can only be on DIV, not on text tags

```html
<!-- ❌ Wrong: <p> has background color -->
<p style="background: #FFD700; border-radius: 4px;">Key content</p>

<!-- ✅ Correct: outer div carries background/border, <p> only handles text -->
<div style="background: #FFD700; border-radius: 4px; padding: 8pt 12pt;">
  <p>Key content</p>
</div>
```

**Why**: In PowerPoint, shape (rectangle/rounded rectangle) and text frame are two separate objects. HTML's `<p>` only translates to a text frame — background/border/shadow belong to the shape and must be written on the **div wrapping the text**.

### Rule 4: DIV cannot use `background-image` — use `<img>` tag

```html
<!-- ❌ Wrong -->
<div style="background-image: url('chart.png')"></div>

<!-- ✅ Correct -->
<img src="chart.png" style="position: absolute; left: 50%; top: 20%; width: 300pt; height: 200pt;" />
```

**Why**: `html2pptx.js` only extracts image paths from `<img>` elements, not from CSS `background-image` URLs.

---

## Merged Text Boxes (`data-pptx-merge`)

**Default behavior**: Each `<p>`/`<h1>`-`<h6>` in HTML becomes an **independent text box** in PPTX. Writing 3 `<p>`s in a card → 3 stacked text boxes in PowerPoint, can't press Enter to add paragraph breaks while editing, must adjust font size/alignment individually.

**Solution**: Add `data-pptx-merge="true"` to the outer div. All `<p>/<h*>` inside will merge into **one editable text box**, separated by paragraph breaks — continuous editing in PowerPoint.

```html
<!-- ✅ Merge approach: all 4 paragraphs in one text box -->
<div class="card" data-pptx-merge="true"
     style="position: absolute; top: 60pt; left: 60pt; width: 420pt;
            background: #1A4A8A; border-radius: 8pt; padding: 20pt 24pt;">
  <h2 style="font-size: 24pt; color: #FFFFFF;">Title</h2>
  <p  style="font-size: 14pt; color: #DDEEFF;">First paragraph body text.</p>
  <p  style="font-size: 14pt; color: #FFD166;">Second paragraph: color change for emphasis.</p>
  <p  style="font-size: 14pt; color: #DDEEFF;">Third paragraph: continue writing in the same text box.</p>
</div>
```

**Preserved styles** (per-paragraph as run options): `font-size`, `color`, `font-family`, `font-weight` (bold), `font-style` (italic), `text-decoration: underline`, `<b>/<i>/<u>/<strong>/<em>/<span>` inline styles.

**Taken from first paragraph, unified across box**: `text-align`, `line-height`. Because PowerPoint alignment and line spacing are paragraph/textbox level — only one alignment per box. If paragraphs have different alignments, don't use merge; keep them independent.

**Container's own `background`/`border`/`box-shadow`/`border-radius`** render as shape normally, behavior identical to regular div — meaning blue card background + text is still "shape + text frame" two layers, just the text layer collapses from 3-4 text boxes into 1.

**Limitations**:
- Nested `data-pptx-merge` not supported (will error).
- Container cannot use `background-image` (same as hard constraint Rule 4).
- Do not place child divs with `background`/`border` inside the container — they'll still render as independent shapes, but their text has been merged away, potentially causing visual misalignment.

**When to use**: Content that will be repeatedly edited, scenarios requiring continued editing in PPT. For one-time export/archive, don't need it — behavior is identical.

---

## Path A HTML Template Skeleton

Each slide as an independent HTML file, scoped isolation (avoiding CSS pollution of single-file decks).

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 960pt; height: 540pt;           /* ⚠️ Match LAYOUT_WIDE */
    font-family: system-ui, -apple-system, "PingFang SC", sans-serif;
    background: #FEFEF9;                    /* solid color, no gradient */
    overflow: hidden;
  }
  /* DIV handles layout/background/border */
  .card {
    position: absolute;
    background: #1A4A8A;                    /* background on DIV */
    border-radius: 4pt;
    padding: 12pt 16pt;
  }
  /* Text labels only handle font styling, no background/border */
  .card h2 { font-size: 24pt; color: #FFFFFF; font-weight: 700; }
  .card p  { font-size: 14pt; color: rgba(255,255,255,0.85); }
</style>
</head>
<body>

  <!-- Title area: outer div for positioning, inner text labels -->
  <div style="position: absolute; top: 40pt; left: 60pt; right: 60pt;">
    <h1 style="font-size: 36pt; color: #1A1A1A; font-weight: 700;">Use assertive statements for titles, not topic words</h1>
    <p style="font-size: 16pt; color: #555555; margin-top: 10pt;">Subtitle supplementary description</p>
  </div>

  <!-- Content card: div handles background, h2/p handles text -->
  <div class="card" style="top: 130pt; left: 60pt; width: 240pt; height: 160pt;">
    <h2>Point One</h2>
    <p>Brief description text</p>
  </div>

  <!-- List: use ul/li, no manual • symbols -->
  <div style="position: absolute; top: 320pt; left: 60pt; width: 540pt;">
    <ul style="font-size: 16pt; color: #1A1A1A; padding-left: 24pt; list-style: disc;">
      <li>First key point</li>
      <li>Second key point</li>
      <li>Third key point</li>
    </ul>
  </div>

  <!-- Illustration: use <img> tag, not background-image -->
  <img src="illustration.png" style="position: absolute; right: 60pt; top: 110pt; width: 320pt; height: 240pt;" />

</body>
</html>
```

---

## Common Errors Quick Reference

| Error Message | Cause | Fix |
|---|---|---|
| `DIV element contains unwrapped text "XXX"` | Bare text in div | Wrap text in `<p>` or `<h1>`-`<h6>` |
| `CSS gradients are not supported` | Used linear/radial-gradient | Change to solid color, or use flex children for segments |
| `Text element <p> has background` | `<p>` tag has background color | Wrap in `<div>` for background, `<p>` only has text |
| `Background images on DIV elements are not supported` | div uses background-image | Change to `<img>` tag |
| `HTML content overflows body by Xpt vertically` | Content exceeds 540pt | Reduce content or font size, or use `overflow: hidden` to clip |
| `HTML dimensions don't match presentation layout` | Body size doesn't match pres layout | Use `960pt × 540pt` body with `LAYOUT_WIDE`; or defineLayout custom size |
| `Text box "XXX" ends too close to bottom edge` | Large font `<p>` too close to body bottom (< 0.5 inch) | Move up, leave enough bottom margin; part of PPT bottom is covered anyway |

---

## Basic Workflow (3 Steps to PPTX)

### Step 1: Write each page as independent HTML following constraints

```
myDeck/
├── slides/
│   ├── 01-cover.html    # Each file is a complete 960×540pt HTML
│   ├── 02-agenda.html
│   └── ...
└── illustration/        # All images referenced by <img>
    ├── chart1.png
    └── ...
```

### Step 2: Write build.js calling `html2pptx.js`

```js
const pptxgen = require('pptxgenjs');
const html2pptx = require('../scripts/html2pptx.js');  // This skill's script

(async () => {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';  // 13.333 × 7.5 inch, matching HTML's 960×540pt

  const slides = ['01-cover.html', '02-agenda.html', '03-content.html'];
  for (const file of slides) {
    await html2pptx(`./slides/${file}`, pres);
  }

  await pres.writeFile({ fileName: 'deck.pptx' });
})();
```

### Step 3: Open and check

- Open exported PPTX in PowerPoint/Keynote
- Double-click any text should allow direct editing (if it's an image, Rule 1 is violated)
- Verify overflow: each page should be within body bounds, not clipped

---

## This Path vs Other Options (When to Choose What)

| Requirement | Choose |
|---|---|
| Colleagues will edit text in PPTX / send to non-technical people for continued editing | **This path** (editable, HTML must be written from scratch following 4 constraints) |
| Presentation only / archive, no further edits | `export_deck_pdf.mjs` (multi-file) or `export_deck_stage_pdf.mjs` (single-file deck-stage), output vector PDF |
| Visual freedom prioritized (animations, web components, CSS gradients, complex SVG), accept non-editable | **PDF** (same) — PDF is both faithful and cross-platform, more suitable than "image PPTX" |

**Never force html2pptx on visually-driven HTML** — empirically, visual-driven HTML pass rate < 30%, and retrofitting page-by-page is slower than rewriting. Such scenarios should output PDF, not force PPTX.

---

## Fallback: Existing Visual Draft but User Insists on Editable PPTX

Occasionally you'll encounter this scenario: you/the user have already written visually-driven HTML (gradients, web components, complex SVG all used), PDF would be most suitable, but the user explicitly says "No, it must be an editable PPTX."

**Don't force `html2pptx` expecting it to pass** — empirically, visually-driven HTML pass rate on html2pptx is < 30%, the remaining 70% will error or look wrong. The correct fallback is:

### Step 1 · Communicate limitations first (transparent communication)

One sentence to the user covering three points:

> "Your current HTML uses [specifically list: gradients / web components / complex SVG / ...], converting directly to editable PPTX will fail. I have two options:
> - A. **Output PDF** (recommended) — 100% visual fidelity, receiver can view and print but cannot edit text
> - B. **Using the visual draft as a blueprint, rewrite an editable HTML version** (retain color/layout/copy design decisions, but reorganize HTML structure following the 4 hard constraints, **sacrificing** gradients, web components, complex SVG etc.) → then export editable PPTX
>
> Which do you choose?"

Don't make Option B sound trivial — clearly communicate **what will be lost**. Let the user make the trade-off.

### Step 2 · If user chooses B: AI rewrites proactively, don't ask user to do it themselves

The doctrine here: **the user provides design intent, you translate into compliant implementation**. Don't expect the user to learn the 4 hard constraints and rewrite themselves.

Rewrite guiding principles:
- **Preserve**: color system (primary/secondary/neutral), information hierarchy (title/subtitle/body/annotation), core copy, layout skeleton (top-middle-bottom / left-right split / grid), page rhythm
- **Degrade**: CSS gradients → solid color or flex segments, web components → paragraph-level HTML, complex SVG → simplified `<img>` or solid geometry, shadows → remove or minimize, custom fonts → align with system fonts
- **Rewrite**: bare text → wrap in `<p>` / `<h*>`, `background-image` → `<img>` tag, background/border on `<p>` → outer div

### Step 3 · Produce comparison checklist (transparent delivery)

After rewriting, give the user a before/after comparison so they know which visual details were simplified:

```
Original design → editable version adjustments
- Title area purple gradient → primary color #5B3DE8 solid background
- Data card shadows → removed (replaced with 2pt stroke for distinction)
- Complex SVG line chart → simplified to <img> PNG (generated from HTML screenshot)
- Hero area web component animation → static first frame (web component cannot be translated)
```

### Step 4 · Export & dual-format delivery

- `editable` version HTML → run `scripts/export_deck_pptx.mjs` to output editable PPTX
- **Recommend keeping** the original visual draft → run `scripts/export_deck_pdf.mjs` to output high-fidelity PDF
- Deliver dual formats to user: visual PDF + editable PPTX, each serving its purpose

### When to directly reject Option B

In certain scenarios the rewrite cost is too high, persuade the user to give up editable PPTX:
- HTML's core value is animation or interaction (rewrite leaves only static first frame, losing 50%+ information)
- Page count > 30, rewrite cost exceeds 2 hours
- Visual design deeply relies on precise SVG / custom filters (rewrite is almost unrelated to original)

In this case, tell the user: "This deck's rewrite cost is too high. Recommend outputting PDF instead of PPTX. If the recipient really needs pptx format, accept that the visuals will be significantly simplified — would you like to switch to PDF?"

---

## Why the 4 Constraints Are Not Bugs but Physical Constraints

These 4 constraints aren't because the `html2pptx.js` author was lazy — they are **PowerPoint file format (OOXML) constraints** projected onto HTML:

- PPTX text must be in a text frame (`<a:txBody>`), corresponding to paragraph-level HTML elements
- PPTX shape and text frame are two objects, cannot simultaneously draw background and write text on the same element
- PPTX shape fill support for gradients is limited (only certain preset gradients, doesn't support CSS arbitrary-angle gradients)
- PPTX picture objects must reference real image files, not CSS properties

Understanding this, **don't expect the tool to get smarter** — it's HTML writing that must adapt to PPTX format, not the other way around.
