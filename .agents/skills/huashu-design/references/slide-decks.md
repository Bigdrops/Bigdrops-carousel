# Slide Decks: HTML Slide Creation Standards

Creating slides is a high-frequency scenario for design work. This document explains how to make good HTML slides — from architecture selection and single-page design to PDF/PPTX export paths.

**This skill's capability coverage**:
- **HTML presentation version (base output, always default required)** → each page as independent HTML + `assets/deck_index.html` aggregator, keyboard page turning, full-screen presentation in browser
- HTML → PDF export → `scripts/export_deck_pdf.mjs` / `scripts/export_deck_stage_pdf.mjs`
- HTML → editable PPTX export → `references/editable-pptx.md` + `scripts/html2pptx.js` + `scripts/export_deck_pptx.mjs` (requires HTML written to 4 hard constraints)

> **⚠️ HTML is the foundation, PDF/PPTX are derivatives.** Regardless of final delivery format, you **must** first create the HTML aggregation presentation version (`index.html` + `slides/*.html`) — it is the "source" of the slide work. PDF/PPTX are snapshots exported from HTML with a single command.
>
> **Why HTML first**:
> - Best for live presentation (projector / screen sharing directly full-screen, keyboard navigation, doesn't depend on Keynote/PPT software)
> - Each page can be opened and verified independently during development without re-exporting
> - It's the only upstream for PDF/PPTX export (avoids the death loop of "finding HTML needs changes after export, having to re-export")
> - Deliverable can be "HTML + PDF" or "HTML + PPTX" dual copies, recipient can use whichever they prefer
>
> 2026-04-22 moxt brochure proven: after completing 13 pages HTML + index.html aggregation, `export_deck_pdf.mjs` exported PDF in one line with zero modifications. The HTML version itself is a deliverable that can be presented directly in browser.

---

## 🛑 Confirm Delivery Format Before Starting (Hardest Checkpoint)

**This decision comes before "single file or multi-file."** 2026-04-20 Options Private Board project proven: **not confirming delivery format before starting work = 2-3 hours rework.**

### Decision Tree (HTML-first Architecture)

All deliveries start from the same HTML aggregation page (`index.html` + `slides/*.html`). Delivery format only determines **HTML writing constraints** and **export command**:

```
【Always default · Required】 HTML aggregation presentation version (index.html + slides/*.html)
   │
   ├── Browser presentation only / local HTML archive   → Already complete, HTML has maximum visual freedom
   │
   ├── Also need PDF (print / share / archive)          → Run export_deck_pdf.mjs one-click output
   │                                                       HTML writing free, no visual constraints
   │
   └── Also need editable PPTX (colleagues need to edit text) → Write HTML from the start following 4 hard constraints
                                                           Run export_deck_pptx.mjs one-click output
                                                           Sacrifice gradients / web components / complex SVG
```

### Opening Script (Copy and Use)

> Regardless of whether the final delivery is HTML, PDF, or PPTX, I will first create an HTML aggregation version that can be navigated and presented in a browser (`index.html` with keyboard navigation) — this is the permanent default base output. On top of that, I'll ask if you need an additional PDF/PPTX snapshot.
>
> Which export format do you need?
> - **HTML only** (presentation/archive) → Completely free visuals
> - **Also need PDF** → Same as above, add one export command
> - **Also need editable PPTX** (colleagues will edit text in PPT) → I must write HTML from the first line following 4 hard constraints, sacrificing some visual capabilities (no gradients, no web components, no complex SVG).

### Why "PPTX Requires Following 4 Hard Constraints from the Start"

PPTX editability requires `html2pptx.js` to translate DOM elements one-by-one into PowerPoint objects. It needs **4 hard constraints**:

1. Body fixed at 960pt × 540pt (matching `LAYOUT_WIDE`, 13.333″ × 7.5″, not 1920×1080px)
2. All text wrapped in `<p>`/`<h1>`-`<h6>` (no direct text in div, no `<span>` as main text carrier)
3. `<p>`/`<h*>` cannot have background/border/shadow (put on outer div)
4. `<div>` cannot use `background-image` (use `<img>` tag)
5. No CSS gradients, no web components, no complex SVG decorations

**This skill's default HTML has high visual freedom** — lots of spans, nested flex, complex SVG, web components (like `<deck-stage>`), CSS gradients — **almost none of it naturally passes html2pptx constraints** (empirically, visually-driven HTML directly on html2pptx has < 30% pass rate).

### Real-World Cost Comparison of Two Paths (2026-04-20 Actual Pitfall)

| Path | Approach | Result | Cost |
|---|---|---|---|
| ❌ **Free HTML first, retrofit PPTX later** | Single file deck-stage + lots of SVG/span decorations | Editable PPTX only leaves two paths: A. Hand-write pptxgenjs hundreds of lines of hardcoded coordinates B. Rewrite 17 pages HTML to Path A format | 2-3 hours rework, and hand-written version has **perpetual maintenance cost** (change one word in HTML, PPTX needs manual sync) |
| ✅ **Follow Path A constraints from step 1** | Each page independent HTML + 4 hard constraints + 960×540pt | One command exports 100% editable PPTX, also works for browser full-screen presentation (Path A HTML is standard browser-playable HTML) | Spend 5 extra minutes per HTML thinking "how to wrap text in `<p>`", zero rework |

### Mixed Delivery Handling

User says "I want HTML presentation **and** editable PPTX" — **this is not a mix**, it's PPTX requirement overriding HTML requirement. HTML written in Path A format can itself be used for browser full-screen presentation (just add a `deck_index.html` aggregator). **No extra cost.**

User says "I want PPTX **and** animations / web components" — **this is a real contradiction**. Tell the user: editable PPTX requires sacrificing these visual capabilities. Let them make the trade-off, don't secretly implement the hand-written pptxgenjs approach (it becomes perpetual maintenance debt).

### Found Out PPTX Needed After the Fact (Emergency Recovery)

Rare case: HTML already written before discovering PPTX is needed. Recommended **fallback process** (full details in `references/editable-pptx.md` end section "Fallback: Existing Visual Draft but User Insists on Editable PPTX"):

1. **First choice: output PDF** (100% visual fidelity, cross-platform, recipient can view and print) — if the recipient's actual need is "presentation/archive," PDF is the best deliverable
2. **Second choice: AI rewrites an editable HTML version using the visual draft as blueprint** → export editable PPTX — preserve color/layout/copy design decisions, sacrifice gradients, web components, complex SVG
3. **Not recommended: hand-write pptxgenjs from scratch** — position, font, alignment all manually tuned, high maintenance cost, and any subsequent HTML changes require manual sync

Always present the choice to the user and let them decide. **Never make hand-writing pptxgenjs your first reaction** — it's the last resort.

---

## 🛑 Before Batch Production: Create 2 Page Showcase to Establish Grammar

**Whenever deck ≥ 5 pages, absolutely never write from page 1 straight to the last page.** Correct order proven by 2026-04-22 moxt brochure:

1. Select **2 visually most different page types** for showcase first (e.g. "cover" + "emotion/quote page", or "cover" + "product display page")
2. Screenshot for user to confirm grammar (masthead / font / color / spacing / structure / bilingual ratio)
3. Direction confirmed → batch produce remaining N-2 pages, each reusing established grammar
4. After all complete, synthesize HTML aggregation + PDF/PPTX derivatives

**Why**: Writing 13 pages straight → user says "direction wrong" = rework 13 times. First do 2 pages showcase → direction wrong = rework 2 times. Once visual grammar is established, decision space for subsequent N pages narrows dramatically, only "how to fit content in."

**Showcase page selection principle**: Choose the two most visually different pages. If these pass = all intermediate states will pass.

| Deck Type | Recommended Showcase Pair |
|---|---|
| B2B brochure / product launch | Cover + content page (concept/emotion page) |
| Brand launch | Cover + product feature page |
| Data report | Big data page + analysis conclusion page |
| Tutorial/course | Chapter cover + specific knowledge point page |

---

## 📐 Publication Grammar Template (moxt Proven Reusable)

Suitable for B2B brochure / product launch / long report decks. Each page reuses this structure = 13 pages visually identical, 0 rework.

### Page Skeleton

```
┌─ masthead (top strip + horizontal line) ────────┐
│  [logo 22-28px] · A Product Brochure                Issue · Date · URL │
├──────────────────────────────────────────┤
│                                          │
│  ── kicker (green short dash + uppercase label) │
│  CHAPTER XX · SECTION NAME                 │
│                                          │
│  H1 (Noto Serif SC 900)                  │
│  Key words individually in brand primary color │
│                                          │
│  English subtitle (Lora italic)          │
│  ─────────── divider ──────────           │
│                                          │
│  [Specific content: two-column 60/40 / 2x2 grid / list] │
│                                          │
├──────────────────────────────────────────┤
│ section name                     XX / total │
└──────────────────────────────────────────┘
```

### Style Conventions (Copy Directly)

- **H1**: Noto Serif SC 900, font size 80-140px depending on information volume, key words individually in brand primary color (don't color whole text)
- **English subtitle**: Lora italic 26-46px, brand signature words (e.g. "AI team") bold + primary color italic
- **Body text**: Noto Serif SC 17-21px, line-height 1.75-1.85
- **Accent highlight**: Use bold + primary color for key words in body text, no more than 3 per page (too many loses anchor effect)
- **Background**: Warm beige base #FAFAFA + very subtle radial-gradient noise (`rgba(33,33,33,0.015)`) for paper feel

### Visual Hero Must Differentiate

If all 13 pages are "text + one screenshot," it's too monotonous. **Rotate visual hero types per page**:

| Visual Type | Suitable Section |
|---|---|
| Cover typography (large text + masthead + pillar) | Home / chapter cover |
| Single character portrait (oversized single momo etc.) | Introduce single concept/character |
| Multi-character group photo / headshot cards side by side | Team / user cases |
| Timeline card progression | Show "long-term relationship," "evolution" |
| Knowledge graph / connection node diagram | Show "collaboration," "flow" |
| Before/After comparison card + middle arrow | Show "change," "difference" |
| Product UI screenshot + outlined device frame | Specific feature display |
| Big-quote (half-page large text) | Emotion page / problem page / quote page |
| Real person portrait + quote card (2×2 or 1×4) | User testimonial / usage scenario |
| Large text back cover + URL ellipse button | CTA / ending |

---

## ⚠️ Common Pitfalls (moxt Practical Summary)

### 1. Emoji Not Rendered in Chromium / Playwright Export

Chromium doesn't include color emoji fonts by default, so `page.pdf()` or `page.screenshot()` shows emoji as empty boxes.

**Solution**: Use Unicode text symbols (`✦` `✓` `✕` `→` `·` `—`) instead, or switch to plain text ("Email · 23" instead of "📧 23 emails").

### 2. `export_deck_pdf.mjs` Error `Cannot find package 'playwright'`

Cause: ESM module resolution searches for `node_modules` upward from the script location. The script is at `~/.claude/skills/huashu-design/scripts/`, which has no dependencies.

**Solution**: Copy the script to the deck project directory (e.g. `brochure/build-pdf.mjs`), run `npm install playwright pdf-lib` in the project root, then `node build-pdf.mjs --slides slides --out output/deck.pdf`.

### 3. Google Fonts Screenshot Before Loading → Chinese Shows as System Default

Wait at least `wait-for-timeout=3500` before Playwright screenshot/PDF to let webfont download and paint. Or self-host fonts in `shared/fonts/` to reduce network dependency.

### 4. Information Density Imbalance: Content Page Too Packed

The first version of the moxt philosophy page used 2×2 = 4 paragraphs + bottom 3 tenets = 7 pieces of content, cramped and repetitive. Changed to 1×3 = 3 paragraphs, breathing immediately returned.

**Solution**: Keep each page to "1 core information + 3-4 supporting points + 1 visual hero." If exceeding, split to new page. **Less is more** — viewers spend 10 seconds per page, giving them 1 memory point is easier to remember than 4.

---

## 🛑 Architecture Decision: Single File or Multi-file?

**This choice is the first step in making slides. Getting it wrong means repeated pitfalls. Read this section before starting.**

### Architecture Comparison

| Dimension | Single File + `deck_stage.js` | **Multi-file + `deck_index.html` Aggregator** |
|---|---|---|
| Code structure | One HTML, all slides as `<section>` | Each page independent HTML, `index.html` uses iframe aggregation |
| CSS scope | ❌ Global, one page's style may affect all | ✅ Naturally isolated, each iframe its own world |
| Verification granularity | ❌ Need JS goTo to switch to a page | ✅ Single page file opens in browser by double-click |
| Parallel development | ❌ One file, multiple agents editing conflicts | ✅ Multiple agents can work on different pages simultaneously, zero conflict merge |
| Debug difficulty | ❌ One CSS error crashes entire deck | ✅ One page error only affects itself |
| Embedded interaction | ✅ Cross-page state sharing is simple | 🟡 iframes need postMessage |
| Print PDF | ✅ Built-in | ✅ Aggregator beforeprint traverses iframes |
| Keyboard navigation | ✅ Built-in | ✅ Built into aggregator |

### Which to Choose? (Decision Tree)

```
│ Question: How many pages is the deck?
├── ≤10 pages, needs in-deck animation or cross-page interaction, pitch deck → Single file
└── ≥10 pages, academic lecture, course material, long deck, multi-agent parallel → Multi-file (recommended)
```

**Default path is multi-file**. It's not an "alternative," it's the **main path for long decks and team collaboration**. Reason: every advantage of single-file architecture (keyboard navigation, printing, scaling) is also available in multi-file, while multi-file's scope isolation and verifiability cannot be compensated for in single-file.

### Why This Rule Is So Strong (Real Incident Record)

Single-file architecture once hit four pitfalls in an AI psychology lecture deck:

1. **CSS specificity override**: `.emotion-slide { display: grid }` (specificity 10) overrode `deck-stage > section { display: none }` (specificity 2), causing all pages to render simultaneously overlapped.
2. **Shadow DOM slot rules suppressed by outer CSS**: `::slotted(section) { display: none }` couldn't withstand outer rule override, sections refused to hide.
3. **localStorage + hash navigation race condition**: After refresh, it didn't navigate to hash position but stayed at old localStorage position.
4. **High verification cost**: Must use `page.evaluate(d => d.goTo(n))` to capture a page, twice as slow as `goto(file://.../slides/05-X.html)`, and often errors.

All root cause is **single global namespace** — multi-file architecture eliminates these issues at the physical level.

---

## Path A (Default): Multi-file Architecture

### Directory Structure

```
myDeck/
├── index.html              # Copy from assets/deck_index.html, modify MANIFEST
├── shared/
│   ├── tokens.css          # Shared design tokens (color palette, font sizes, common chrome)
│   └── fonts.html          # <link> for Google Fonts (included by each page)
└── slides/
    ├── 01-cover.html       # Each file is a complete 1920×1080 HTML
    ├── 02-agenda.html
    ├── 03-problem.html
    └── ...
```

### Single Slide Template Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>P05 · Chapter Title</title>
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
<link rel="stylesheet" href="../shared/tokens.css">
<style>
  /* Page-specific styles. Any class name won't pollute other pages. */
  body { padding: 120px; }
  .my-thing { ... }
</style>
</head>
<body>
  <!-- 1920×1080 content (body width/height locked in tokens.css) -->
  <div class="page-header">...</div>
  <div>...</div>
  <div class="page-footer">...</div>
</body>
</html>
```

**Key constraints**:
- `<body>` is the canvas, lay out directly on it. Don't wrap in `<section>` or other wrappers.
- `width: 1920px; height: 1080px` locked by `body` rule in `shared/tokens.css`.
- Reference `shared/tokens.css` for shared design tokens (color palette, font sizes, page-header/footer etc.).
- Font `<link>` each page writes its own (fonts imported individually are cheap, and ensure each page opens independently).

### Aggregator: `deck_index.html`

**Copy directly from `assets/deck_index.html`**. You only need to change one thing — the `window.DECK_MANIFEST` array, listing all slide filenames and human-readable labels in order:

```js
window.DECK_MANIFEST = [
  { file: "slides/01-cover.html",    label: "Cover" },
  { file: "slides/02-agenda.html",   label: "Agenda" },
  { file: "slides/03-problem.html",  label: "Problem Statement" },
  // ...
];
```

Built-in features: keyboard navigation (←/→/Home/End/number keys/P print), scale + letterbox, bottom-right counter, localStorage memory, hash page navigation, print mode (traverse iframes for PDF output).

#### Two Overview Modes (Adaptive + Anti-pitfall, rewritten 2026-06)

Opening the deck defaults to **overview**, randomly weighted when user hasn't specified: **grid 60% / infinite gallery 40%** (can use URL `?ov=grid|gallery` or `window.DECK_OVERVIEW='grid'|'gallery'` to fix).

- **Grid (default main)**: Uses **iframe to render real sub-pages** (clear, WYSIWYG, no thumbnails needed). **Adaptive**: fits on one screen → diagonal tilt centered fill; too many pages → cards maintain comfortable size, **vertical scroll** (never cram dozens of pages into one screen shrink to stamp size).
- **Infinite Gallery**: All pages **seamlessly infinitely tiled + slow drift + slight breathing zoom**, one tile per page (shuffled layout, repeating only after viewing all pages). Many tiles **must use `<img>` thumbnails** for performance (see below), fallback to iframe when no thumb.

🛑 **Three hard constraints from real-world practice (read before modifying this file, or you'll repeat past mistakes)**:
1. **Overview wall must never use `transform-style: preserve-3d` for card walls**. In preserve-3d 3D scenes, browser hit testing for "receding cards" (top row) is unreliable → top row unclickable, middle row hit-and-miss. **Correct approach**: entire wall as a **single 3D-tilted plane** (no preserve-3d), all cards coplanar, reverse-project clicks to one plane → reliable. Hover uses 2D `scale` not `translateZ`.
2. **Any number of pages must be adaptive**: Fixed column count + hardcoded strong tilt for entire wall → pages overflow collapses/perspective distortion. Must calculate column count based on page count + viewport, tilt flattens when rows are many, scroll when one screen can't fit.
3. **Thumbnail resolution not too low**: Gallery thumbnails < 1000px become blurry on hover zoom. Default 1600px.

**Generate thumbnails for gallery**: Use `scripts/gen_deck_thumbs.mjs` (playwright captures each page + sharp downsampling):
```bash
npm install playwright sharp
node gen_deck_thumbs.mjs --slides slides --out thumbs --width 1600
```
Then add `thumb: "thumbs/<same-name>.jpg"` to each MANIFEST item. Grid mode ignores thumb (always iframe), only gallery mode uses it.

### Single Page Verification (Multi-file Architecture's Killer Advantage)

Each slide is an independent HTML. **After completing one, double-click to open in browser**:

```bash
open slides/05-personas.html
```

Playwright screenshot also directly `goto(file://.../slides/05-personas.html)`, no JS navigation needed, no CSS interference from other pages. This makes the "change a little, verify a little" workflow cost nearly zero.

### Parallel Development

Split each slide task to different agents, run simultaneously — HTML files are independent, no merge conflicts. Long decks using this parallel approach can compress production time to 1/N.

### What Belongs in `shared/tokens.css`

Only put **truly cross-page shared** items:

- CSS variables (color palette, font size scale, spacing scale)
- `body { width: 1920px; height: 1080px; }` canvas locking
- `.page-header` / `.page-footer` identical chrome used by every page

**Don't** put single-page layout classes here — that degrades back to single-file architecture's global pollution problem.

---

## Path B (Small Deck): Single File + `deck_stage.js`

Suitable for ≤10 pages, needs cross-page state sharing (e.g. a React tweaks panel controlling all pages), or pitch deck demos requiring extreme compactness.

### Basic Usage

1. Read content from `assets/deck_stage.js`, embed into HTML's `<script>` (or `<script src="deck_stage.js">`)
2. Use `<deck-stage>` in body to wrap slides
3. 🛑 **Script tag must be placed after `</deck-stage>`** (see hard constraint below)

```html
<body>

  <deck-stage>
    <section>
      <h1>Slide 1</h1>
    </section>
    <section>
      <h1>Slide 2</h1>
    </section>
  </deck-stage>

  <!-- ✅ Correct: script after deck-stage -->
  <script src="deck_stage.js"></script>

</body>
```

### 🛑 Script Position Hard Constraint (2026-04-20 Real Pitfall)

**Cannot put `<script src="deck_stage.js">` inside `<head>`.** Even if it defines `customElements` in `<head>`, the parser triggers `connectedCallback` when encountering the `<deck-stage>` opening tag — at this point child `<section>` elements haven't been parsed yet, `_collectSlides()` gets empty array, counter shows `1 / 0`, all pages render simultaneously overlapped.

**Three Compliant Approaches** (choose one):

```html
<!-- ✅ Most recommended: script after </deck-stage> -->
</deck-stage>
<script src="deck_stage.js"></script>

<!-- ✅ Also OK: script in head with defer -->
<head><script src="deck_stage.js" defer></script></head>

<!-- ✅ Also OK: module scripts are naturally deferred -->
<head><script src="deck_stage.js" type="module"></script></head>
```

`deck_stage.js` already has built-in `DOMContentLoaded` delayed collection defense, so putting script in head won't completely crash — but `defer` or placing at body bottom is still cleaner, avoiding reliance on defense branches.

### ⚠️ Single-file CSS Traps (Must Read)

The most common single-file pitfall — **`display` property stolen by individual page styles**.

Common Mistake 1 (writing display: flex directly on section):

```css
/* ❌ External CSS specificity 2, overrides shadow DOM's ::slotted(section){display:none} (also 2) */
deck-stage > section {
  display: flex;            /* All pages render simultaneously! */
  flex-direction: column;
  padding: 80px;
  ...
}
```

Common Mistake 2 (section has higher specificity class):

```css
.emotion-slide { display: grid; }   /* Specificity: 10, even worse */
```

Both cause **all slides to render simultaneously overlapped** — counter may show `1 / 10` pretending normal, but visually page 1 covers page 2 covers page 3.

### ✅ Starter CSS (Copy Directly, No Pitfalls)

**Section itself** only handles "visible/invisible"; **layout (flex/grid etc.) goes on `.active`**:

```css
/* section only defines non-display generic styles */
deck-stage > section {
  background: var(--paper);
  padding: 80px 120px;
  overflow: hidden;
  position: relative;
  /* ⚠️ Don't write display here! */
}

/* Lock: non-active means hidden — specificity + weight double insurance */
deck-stage > section:not(.active) {
  display: none !important;
}

/* Active page gets the needed display + layout */
deck-stage > section.active {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Print mode: all pages visible, override :not(.active) */
@media print {
  deck-stage > section { display: flex !important; }
  deck-stage > section:not(.active) { display: flex !important; }
}
```

Alternative: **Write single-page flex/grid to an internal wrapper `<div>`**, section itself is always just a `display: block/none` toggle. This is the cleanest approach:

```html
<deck-stage>
  <section>
    <div class="slide-content flex-layout">...</div>
  </section>
</deck-stage>
```

### Custom Size

```html
<deck-stage width="1080" height="1920">
  <!-- 9:16 portrait -->
</deck-stage>
```

---

## Slide Labels

Both deck_stage and deck_index add labels to each page (counter display). Give them **more meaningful** labels:

**Multi-file**: Write `{ file, label: "04 Problem Statement" }` in MANIFEST
**Single file**: Add `<section data-screen-label="04 Problem Statement">`

**Key: Slide numbering starts from 1, not 0.**

When the user says "slide 5," they mean the 5th slide, never array position `[4]`. Humans don't use 0-indexed.

---

## Speaker Notes

**Not added by default**, only when user explicitly requests.

With speaker notes, you can minimize text on slides, focusing on impactful visuals — notes carry the full script.

### Format

**Multi-file**: Write in `index.html`'s `<head>`:

```html
<script type="application/json" id="speaker-notes">
[
  "Script for slide 1...",
  "Script for slide 2...",
  "..."
]
</script>
```

**Single file**: Same position.

### Notes Writing Tips

- **Complete**: not an outline, actual spoken words
- **Conversational**: like everyday speech, not written language
- **Corresponding**: array Nth item corresponds to Nth slide
- **Length**: 200-400 characters optimal
- **Emotion line**: mark emphasis, pauses, key points

---

## Slide Design Patterns

### 1. Establish a System (Required)

After exploring design context, **verbally state the system you'll use**:

```markdown
Deck System:
- Background colors: max 2 (90% white + 10% dark section divider)
- Typography: display uses Instrument Serif, body uses Geist Sans
- Rhythm: section divider uses full-bleed color + white text, regular slide white background
- Images: hero slide uses full-bleed photo, data slide uses chart

I'll follow this system, let me know if there are issues.
```

Get user confirmation before proceeding.

### 2. Common Slide Layouts

- **Title slide**: Solid color background + huge title + subtitle + author/date
- **Section divider**: Color background + chapter number + chapter title
- **Content slide**: White background + title + 1-3 bullet points
- **Data slide**: Title + large chart/number + brief description
- **Image slide**: Full-bleed photo + small caption at bottom
- **Quote slide**: Whitespace + huge quote + attribution
- **Two-column**: Left-right comparison (vs / before-after / problem-solution)

Maximum 4-5 layout types per deck.

### 3. Scale (Re-emphasized)

- Body text minimum **24px**, ideal 28-36px
- Titles **60-120px**
- Hero text **180-240px**
- Slides are viewed from 10 meters away, text must be large enough

### 4. Visual Rhythm

Deck needs **intentional variety**:

- Color rhythm: mostly white background + occasional colored section divider + occasional dark segment
- Density rhythm: some text-heavy pages + some image-heavy pages + some quote whitespace pages
- Font size rhythm: normal titles + occasional giant hero text

**Don't make every slide look the same** — that's a PPT template, not design.

### 5. Spatial Breathing (Must Read for Data-dense Pages)

**Beginner's most common pitfall**: cramming all possible information into one page.

Information density ≠ effective communication. Academic/presentation decks especially need restraint:

- List/matrix pages: don't draw N elements at the same size. Use **hierarchical emphasis** — the 5 items being discussed today are large as heroes, the remaining 16 are small as background hints.
- Big number pages: the number itself is the visual hero. Surrounding captions shouldn't exceed 3 lines, otherwise the audience's eyes bounce back and forth.
- Quote pages: leave whitespace between the quote and attribution, don't stick them together.

Self-check against "is the data the hero" and "is the text crowded together." Adjust until the whitespace makes you slightly uneasy.

---

## Print to PDF

**Multi-file**: `deck_index.html` handles `beforeprint` event, outputs PDF by page.

**Single file**: `deck_stage.js` also handles it.

Print styles are already written, no additional `@media print` CSS needed.

---

## Export to PPTX / PDF (Self-service Scripts)

HTML-first is the first-class citizen. But users often need PPTX/PDF delivery. Two universal scripts provided, **usable with any multi-file deck**, located in `scripts/`:

### `export_deck_pdf.mjs` — Export Vector PDF (Multi-file Architecture)

```bash
node scripts/export_deck_pdf.mjs --slides <slides-dir> --out deck.pdf
```

**Features**:
- Text **retains vector** (copyable, searchable)
- 100% visual fidelity (Playwright embedded Chromium renders then prints)
- **No need to change a single character of HTML**
- Each slide independent `page.pdf()`, then merged with `pdf-lib`

**Dependencies**: `npm install playwright pdf-lib`

**Limitation**: PDF can no longer edit text — go back to HTML to make changes.

### `export_deck_stage_pdf.mjs` — Single-file Deck-stage Architecture Only ⚠️

**When to use**: Deck is a single HTML file + `<deck-stage>` web component wrapping N `<section>`s (Path B architecture). In this case, `export_deck_pdf.mjs`'s "one `page.pdf()` per HTML" approach doesn't work, requiring this dedicated script.

```bash
node scripts/export_deck_stage_pdf.mjs --html deck.html --out deck.pdf
```

**Why can't reuse export_deck_pdf.mjs** (2026-04-20 real pitfall record):

1. **Shadow DOM beats `!important`**: deck-stage's shadow CSS has `::slotted(section) { display: none }` (only active one gets `display: block`). Even with `@media print { deck-stage > section { display: block !important } }` in light DOM, it can't override — after `page.pdf()` triggers print media, Chromium's final render only has the active one, resulting in **only 1 page in the entire PDF** (repeat of current active slide).

2. **Looping goto each page still outputs 1 page**: The intuitive solution "navigate to each `#slide-N` and `page.pdf({pageRanges:'1'})`" also fails — because print CSS outside shadow DOM also has `deck-stage > section { display: block }` rules overridden, final render is always the first section in the list (not the page you navigated to). Result: 17 loops produce 17 P01 covers.

3. **Absolute child elements run to next page**: Even if all sections render successfully, if section itself is `position: static`, its absolute-positioned `cover-footer`/`slide-footer` will position relative to the initial containing block — when section is forced to 1080px height by print, absolute footer may be pushed to the next page (manifesting as PDF having 1 more page than section count, the extra page only containing orphan footer).

**Fix strategy** (already implemented in script):

```js
// After opening HTML, use page.evaluate to extract sections from deck-stage slot,
// directly mount under a normal div in body, inline styles ensuring position:relative + fixed size
await page.evaluate(() => {
  const stage = document.querySelector('deck-stage');
  const sections = Array.from(stage.querySelectorAll(':scope > section'));
  document.head.appendChild(Object.assign(document.createElement('style'), {
    textContent: `
      @page { size: 1920px 1080px; margin: 0; }
      html, body { margin: 0 !important; padding: 0 !important; }
      deck-stage { display: none !important; }
    `,
  }));
  const container = document.createElement('div');
  sections.forEach(s => {
    s.style.cssText = 'width:1920px!important;height:1080px!important;display:block!important;position:relative!important;overflow:hidden!important;page-break-after:always!important;break-after:page!important;background:#F7F4EF;margin:0!important;padding:0!important;';
    container.appendChild(s);
  });
  // Disable page break on last page to avoid trailing blank page
  sections[sections.length - 1].style.pageBreakAfter = 'auto';
  sections[sections.length - 1].style.breakAfter = 'auto';
  document.body.appendChild(container);
});

await page.pdf({ width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true });
```

**Why this works**:
- Pulls sections from shadow DOM slot to light DOM normal div — completely bypasses `::slotted(section) { display: none }` rule
- Inline `position: relative` makes absolute child elements position relative to section, won't overflow
- `page-break-after: always` makes browser print each section as independent page
- `:last-child` disables page break to avoid trailing blank page

**When verifying with `mdls -name kMDItemNumberOfPages`**: macOS Spotlight metadata caches, after PDF rewrite run `mdimport file.pdf` to force refresh, otherwise old page count shows. Use `pdfinfo` or `pdftoppm` to count files for true count.

---

### `export_deck_pptx.mjs` — Export Editable PPTX

```bash
# Only mode: native editable text boxes (fonts fall back to system fonts)
node scripts/export_deck_pptx.mjs --slides <dir> --out deck.pptx
```

How it works: `html2pptx` reads computedStyle element-by-element, translates DOM into PowerPoint objects (text frame / shape / picture). Text becomes real text boxes, double-click to edit in PPT.

**Hard constraints** (HTML must satisfy, otherwise the page is skipped; full details in `references/editable-pptx.md`):
- All text must be in `<p>`/`<h1>`-`<h6>`/`<ul>`/`<ol>` (no bare text in div)
- `<p>`/`<h*>` tags themselves cannot have background/border/shadow (put on outer div)
- Don't use `::before`/`::after` to insert decorative text (pseudo-elements can't be extracted)
- Inline elements (span/em/strong) cannot have margin
- Don't use CSS gradients (can't render)
- div no `background-image` (use `<img>`)

Script has built-in **auto preprocessor** — automatically wraps "bare text in leaf divs" into `<p>` (preserving class). This solves the most common violation (bare text). But other violations (border on p, margin on span, etc.) still need HTML source compliance.

**Font fallback caveat**:
- Playwright uses webfont to measure text-box size; PowerPoint/Keynote uses local fonts to render
- Differences can cause **overflow or misalignment** — must visually check each page
- Recommend installing the fonts used in HTML on the target machine, or fall back to `system-ui`

**Visual-first scenarios don't use this path** → use `export_deck_pdf.mjs` for PDF. PDF is 100% visual fidelity, vector, cross-platform, text searchable — the true destination for visual-first decks, not a "compromise of not being editable."

### Make HTML Export-friendly from the Start

Most stable deck performance: **write HTML following the 4 hard constraints for editable from the beginning**. This way `export_deck_pptx.mjs` passes everything directly. Extra cost is minimal:

```html
<!-- ❌ Bad -->
<div class="title">Key Findings</div>

<!-- ✅ Good (wrapped in p, class inherited) -->
<p class="title">Key Findings</p>

<!-- ❌ Bad (border on p) -->
<p class="stat" style="border-left: 3px solid red;">41%</p>

<!-- ✅ Good (border on outer div) -->
<div class="stat-wrap" style="border-left: 3px solid red;">
  <p class="stat">41%</p>
</div>
```

### When to Choose Which

| Scenario | Recommendation |
|---|---|
| Archive for organizers/files | **PDF** (universal, high fidelity, text searchable) |
| Send to collaborators for text tweaks | **PPTX editable** (accept font fallback) |
| Live presentation, no content changes | **PDF** (vector fidelity, cross-platform) |
| HTML is the primary presentation medium | Browser play directly, export is just backup |

## Deep Path for Editable PPTX Export (Long-term Projects Only)

If your deck will be maintained long-term, repeatedly revised, team collaboration — recommend **writing HTML from the start following html2pptx constraints**, so `export_deck_pptx.mjs` passes everything directly. See `references/editable-pptx.md` (4 hard constraints + HTML template + common error quick reference + fallback process for existing visual drafts).

---

## Common Issues

**Multi-file: iframe page won't open / white screen**
→ Check if MANIFEST's `file` path is correct relative to `index.html`. Use browser DevTools to see if iframe's src can be accessed directly.

**Multi-file: page style conflicts with another page**
→ Impossible (iframe isolation). If it feels like a conflict, it's cache — Cmd+Shift+R hard refresh.

**Single file: multiple slides render simultaneously overlapped**
→ CSS specificity issue. See "Single-file CSS Traps" section above.

**Single file: scaling looks wrong**
→ Check if all slides are directly under `<deck-stage>` as `<section>`. No `<div>` wrapper in between.

**Single file: want to jump to specific slide**
→ Add URL hash: `index.html#slide-5` jumps to slide 5.

**Both architectures: text position differs on different screens**
→ Use fixed size (1920×1080) and `px` units, not `vw`/`vh` or `%`. Scaling handled uniformly.

---

## Verification Checklist (Required After Completing Deck)

1. [ ] Open `index.html` (or main HTML) directly in browser, check first page has no broken images, fonts loaded
2. [ ] Press → key to navigate through each page, no blank pages, no layout misalignment
3. [ ] Press P key for print preview, each page fits exactly one A4 (or 1920×1080) with no cropping
4. [ ] Randomly select 3 pages, Cmd+Shift+R hard refresh, localStorage memory working correctly
5. [ ] Playwright batch screenshot (multi-file: traverse `slides/*.html`; single-file: use goTo to switch), manually visually check
6. [ ] Search for `TODO` / `placeholder` residuals, confirm all cleaned up
