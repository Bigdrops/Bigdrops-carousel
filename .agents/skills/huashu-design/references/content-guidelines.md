# Content Guidelines: Anti-AI Slop, Content Standards, Scale Specs

The easiest trap to fall into in AI design. This is a "what NOT to do" checklist — more important than "what to do" — because AI slop is the default, you must actively avoid it.

## AI Slop Complete Blacklist

### Visual Traps

**❌ Aggressive gradient backgrounds**
- Purple → pink → blue full-screen gradient (typical AI-generated web page flavor)
- Rainbow gradient in any direction
- Mesh gradient covering the background
- ✅ If using gradients: subtle, monochromatic, intentional as accent (e.g. button hover)

**❌ Rounded card + left border accent color**
```css
/* This is the signature of AI-flavored cards */
.card {
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  padding: 16px;
}
```
These cards are everywhere in AI-generated Dashboards. Want emphasis? Use more design-oriented approaches: background color contrast, font weight/size contrast, plain dividers, or skip cards altogether.

**❌ Emoji decoration**
Unless the brand itself uses emoji (e.g. Notion, Slack), don't put emoji on UI. **Especially avoid**:
- 🚀 ⚡️ ✨ 🎯 💡 before titles
- ✅ in feature lists
- → in CTA buttons (arrow alone is OK, emoji arrow not OK)

No icons? Use real icon libraries (Lucide/Heroicons/Phosphor), or use placeholders.

**❌ SVG-drawn imagery**
Don't try to draw with SVG: people, scenes, devices, objects, abstract art. AI-drawn SVG imagery looks AI-flavored at a glance — childish and cheap. **A gray rectangle + text label "Illustration placeholder 1200×800" is 100x better than a poorly drawn SVG hero illustration**.

The only acceptable SVG scenarios:
- Real icons (16×16 to 32×32 level)
- Geometric shapes as decorative elements
- Data viz charts

**❌ Excessive iconography**
Not every title/feature/section needs an icon. Overusing icons makes the interface look like a toy. Less is more.

**❌ "Data slop"**
Fabricated stats for decoration:
- "10,000+ happy customers" (you don't even know if that's true)
- "99.9% uptime" (don't write it without real data)
- Decorative "metric cards" composed of icon + number + word
- Fancy fake data in mock tables

No real data? Leave a placeholder or ask the user.

**❌ "Quote slop"**
Fabricated user testimonials, decorative celebrity quotes on the page. Leave a placeholder and ask the user for a real quote.

### Font Traps

**❌ Avoid these overused fonts**:
- Inter (AI-generated web page default)
- Roboto
- Arial / Helvetica
- Pure system font stack
- Fraunces (AI discovered it and overused it)
- Space Grotesk (recent AI favorite)

**✅ Use distinctive display+body pairings**. Inspiration directions:
- Serif display + sans body (editorial feel)
- Mono display + sans body (technical feel)
- Heavy display + light body (contrast)
- Variable font for hero weight animation

Font resources:
- Lesser-known gems on Google Fonts (Instrument Serif, Cormorant, Bricolage Grotesque, JetBrains Mono)
- Open source font sites (Fraunces sibling fonts, Adobe Fonts)
- Don't invent font names out of thin air

### Color Traps

**❌ Inventing colors out of nowhere**
Don't design an unfamiliar color system from scratch. It's usually discordant.

**✅ Strategy**:
1. Have brand colors → use brand colors, interpolate missing color tokens with oklch
2. No brand colors but have references → pick colors from reference product screenshots
3. Starting completely from zero → choose a known color system (Radix Colors / Tailwind default palette / Anthropic brand), don't tune it yourself

**Defining colors with oklch** is the most modern approach:
```css
:root {
  --primary: oklch(0.65 0.18 25);      /* warm terracotta */
  --primary-light: oklch(0.85 0.08 25); /* same hue, lighter */
  --primary-dark: oklch(0.45 0.20 25);  /* same hue, darker */
}
```
oklch ensures hue doesn't shift when adjusting lightness — more useful than hsl.

**❌ Dark mode as simple color inversion**
Don't just invert colors. Good dark mode requires re-adjusting saturation, contrast, accent colors. Don't want to do dark mode? Don't do it.

### Layout Traps

**❌ Bento grid overuse**
Every AI-generated landing page wants to do bento. Unless your information structure is truly suitable for bento, use other layouts.

**❌ Big hero + 3-column features + testimonials + CTA**
This landing page template is worn out. Want innovation? Really innovate.

**❌ Every card in a card grid looks the same**
Asymmetric, different sized cards, some with images some text-only, some spanning columns — that's what real designers do.

## Content Standards

### 1. Don't add filler content

Every element must earn its place. Empty space is a design problem — solve it with **composition** (contrast, rhythm, whitespace), **not** by filling with content.

**Questions to identify filler**:
- If this content were removed, would the design be worse? Answer "no" → remove it.
- What real problem does this element solve? If "to make the page less empty" → delete it.
- Is this stat/quote/feature backed by real data? No → don't fabricate it.

"One thousand no's for every yes."

### 2. Ask before adding material

Think an extra paragraph/page/section would be better? Ask the user first, don't add unilaterally.

Reasons:
- The user knows their audience better than you do
- Adding content has cost, the user might not want it
- Adding unilaterally violates the "junior designer reporting work" relationship

### 3. Create a system up front

After exploring design context, **verbally state the system you'll use** first, get user confirmation:

```markdown
My design system:
- Colors: #1A1A1A body + #F0EEE6 background + #D97757 accent (from your brand)
- Typography: Instrument Serif for display + Geist Sans for body
- Rhythm: section titles with full-bleed colored background + white text; regular sections with white background
- Imagery: hero with full-bleed photo, feature sections with placeholder awaiting your input
- Maximum 2 background colors, avoid clutter

Confirm this direction and I'll start.
```

Get user confirmation before starting. This check-in prevents "finding out direction is wrong halfway through."

## Scale Specs

### Slides (1920×1080)

- Body text minimum **24px**, ideal 28-36px
- Titles 60-120px
- Section titles 80-160px
- Hero headlines can use 180-240px large type
- Never use <24px font on slides

### Print Documents

- Body text minimum **10pt** (≈13.3px), ideal 11-12pt
- Titles 18-36pt
- Captions 8-9pt

### Web and Mobile

- Body text minimum **14px** (16px for elderly-friendly)
- Mobile body text **16px** (avoid iOS auto-zoom)
- Hit target (clickable elements) minimum **44×44px**
- Line height 1.5-1.7 (Chinese: 1.7-1.8)

### Contrast

- Body text vs background **at least 4.5:1** (WCAG AA)
- Large text vs background **at least 3:1**
- Use Chrome DevTools accessibility tools to check

## CSS Magic

**Advanced CSS features** are a designer's best friend — use them boldly:

### Typography

```css
/* Make headings wrap more naturally, avoid orphan words on last line */
h1, h2, h3 { text-wrap: balance; }

/* Body text wrapping, avoid widows and orphans */
p { text-wrap: pretty; }

/* Chinese typesetting magic: punctuation compression, line-start/line-end control */
p { 
  text-spacing-trim: space-all;
  hanging-punctuation: first;
}
```

### Layout

```css
/* CSS Grid + named areas = readability explosion */
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Subgrid for card content alignment */
.card { display: grid; grid-template-rows: subgrid; }
```

### Visual Effects

```css
/* Design-savvy scrollbar */
* { scrollbar-width: thin; scrollbar-color: #666 transparent; }

/* Glassmorphism (use sparingly) */
.glass {
  backdrop-filter: blur(20px) saturate(150%);
  background: color-mix(in oklch, white 70%, transparent);
}

/* View Transitions API for silky page transitions */
@view-transition { navigation: auto; }
```

### Interaction

```css
/* :has() selector makes conditional styling easy */
.card:has(img) { padding-top: 0; } /* cards with images have no top padding */

/* Container queries make components truly responsive */
@container (min-width: 500px) { ... }

/* New color-mix function */
.button:hover {
  background: color-mix(in oklch, var(--primary) 85%, black);
}
```

## Decision Quick Reference: When You're Hesitating

- Want to add a gradient? → Probably don't
- Want to add an emoji? → Don't
- Want to add rounded corners + border-left accent to a card? → Don't, use other methods
- Want to draw a hero illustration with SVG? → Don't, use a placeholder
- Want to add a decorative quote? → Ask the user if they have a real quote first
- Want to add a row of icon features? → Ask if icons are needed first, probably not
- Using Inter? → Switch to something more distinctive
- Using purple gradient? → Switch to a justified color scheme

**When you think "adding this would look better" — that's usually a sign of AI slop**. Make the simplest version first, only add when the user asks.
