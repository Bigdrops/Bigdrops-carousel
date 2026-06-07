# Design Review Deep Guide

> Detailed reference for Phase 7. Provides scoring criteria, scenario focus areas, and common issue checklist.

---

## Scoring Criteria Explained

### 1. Philosophy Alignment

| Score | Standard |
|---|---|
| 9-10 | Design perfectly embodies the core spirit of the chosen philosophy, every detail has philosophical grounding |
| 7-8 | Overall direction correct, core features in place, individual details deviate |
| 5-6 | Intent visible, but execution mixed with other style elements, not pure enough |
| 3-4 | Surface-level imitation only, did not understand the philosophical core |
| 1-2 | Essentially unrelated to chosen philosophy |

**Review Points**:
- Does it use the signature techniques of that designer/institution?
- Do colors, fonts, layout conform to that philosophical system?
- Any "self-contradictory" elements? (e.g. chose Kenya Hara but crammed with content)

### 2. Visual Hierarchy

| Score | Standard |
|---|---|
| 9-10 | User's gaze flows naturally along the designer's intent, zero friction in information acquisition |
| 7-8 | Primary-secondary relationships clear, occasional 1-2 instances of hierarchy blurring |
| 5-6 | Can distinguish titles from body text, but intermediate levels are chaotic |
| 3-4 | Information laid out flat, no clear visual entry point |
| 1-2 | Chaotic, user doesn't know where to look first |

**Review Points**:
- Is the font size contrast between title and body sufficient? (at least 2.5x)
- Do color/weight/size establish 3-4 clear levels?
- Does whitespace guide the eye?
- "Squint test": squint your eyes, is the hierarchy still clear?

### 3. Craft Quality

| Score | Standard |
|---|---|
| 9-10 | Pixel-perfect, no flaws in alignment, spacing, or color |
| 7-8 | Overall refined, 1-2 minor alignment/spacing issues |
| 5-6 | Basic alignment, but spacing inconsistent, color usage not systematic |
| 3-4 | Obvious alignment errors, chaotic spacing, too many colors |
| 1-2 | Rough, looks like a draft |

**Review Points**:
- Does it use a unified spacing system (e.g. 8pt grid)?
- Is spacing consistent for similar elements?
- Is the color count controlled? (typically no more than 3-4)
- Is the font family unified? (typically no more than 2)
- Are edges aligned precisely?

### 4. Functionality

| Score | Standard |
|---|---|
| 9-10 | Every design element serves the goal, zero redundancy |
| 7-8 | Function-oriented, a small amount of removable decoration |
| 5-6 | Basically usable, but have obvious decorative elements distracting attention |
| 3-4 | Form over function, user needs to work hard to find information |
| 1-2 | Completely drowned by decoration, loses ability to convey information |

**Review Points**:
- If any element were removed, would the design be worse? (If not, it should be removed)
- Is the CTA/key information in the most prominent position?
- Are there elements added "because they look good"?
- Does information density match the medium? (PPT shouldn't be too dense, PDF can be denser)

### 5. Originality

| Score | Standard |
|---|---|
| 9-10 | Refreshing, found a unique expression within the philosophical framework |
| 7-8 | Has its own ideas, not simple template reuse |
| 5-6 | Adequate, looks like a template |
| 3-4 | Heavy use of clichés (e.g. gradient spheres for AI) |
| 1-2 | Completely template or asset stitching |

**Review Points**:
- Does it avoid common clichés? (see "Common Issues Checklist" below)
- Is there personal expression while following the design philosophy?
- Are there "unexpected yet reasonable" design decisions?

---

## Scenario Review Focus

Different output types have different review priorities:

| Scenario | Most Important Dimension | Second Most | Can Relax |
|---|---|---|---|
| Public account cover/illustration | Originality, Visual Hierarchy | Philosophy Alignment | Functionality (single image, no interaction) |
| Info graphic | Functionality, Visual Hierarchy | Craft Quality | Originality (accuracy first) |
| PPT/Keynote | Visual Hierarchy, Functionality | Craft Quality | Originality (clarity first) |
| PDF/Whitepaper | Craft Quality, Functionality | Visual Hierarchy | Originality (professionalism first) |
| Landing page/Website | Functionality, Visual Hierarchy | Originality | — (comprehensive requirements) |
| App UI | Functionality, Craft Quality | Visual Hierarchy | Philosophy Alignment (usability first) |
| Xiaohongshu illustration | Originality, Visual Hierarchy | Philosophy Alignment | Craft Quality (atmosphere first) |

---

## Top 10 Common Design Issues

### 1. AI Tech Cliché
**Issue**: Gradient spheres, digital rain, blue circuit boards, robot faces
**Why it's a problem**: Users are fatigued by these visuals, can't distinguish you from others
**Fix**: Use abstract metaphors instead of literal symbols (e.g. "conversation" metaphor instead of chat bubble icon)

### 2. Insufficient Font Size Hierarchy
**Issue**: Title and body gap too small (<2.5x)
**Why it's a problem**: Users can't quickly locate key information
**Fix**: Title at least 3x body size (e.g. body 16px → title 48-64px)

### 3. Too Many Colors
**Issue**: Using 5+ colors with no primary-secondary distinction
**Why it's a problem**: Visual chaos, weak brand identity
**Fix**: Limit to 1 primary + 1 secondary + 1 accent + grayscale

### 4. Inconsistent Spacing
**Issue**: Element spacing is arbitrary, no system
**Why it's a problem**: Looks unprofessional, visual rhythm is chaotic
**Fix**: Establish 8pt grid system (spacing only: 8/16/24/32/48/64px)

### 5. Insufficient Whitespace
**Issue**: Every space filled with content
**Why it's a problem**: Information crowding causes reading fatigue, actually reduces communication efficiency
**Fix**: Whitespace at least 40% of total area (minimalist 60%+)

### 6. Too Many Fonts
**Issue**: Using 3+ font families
**Why it's a problem**: Visual noise, weakens unity
**Fix**: Maximum 2 fonts (1 heading + 1 body), use weight and size for variation

### 7. Inconsistent Alignment
**Issue**: Some left-aligned, some centered, some right-aligned
**Why it's a problem**: Breaks visual order
**Fix**: Choose one alignment method (left alignment recommended), unify globally

### 8. Decoration Over Content
**Issue**: Background patterns/gradients/shadows steal focus from main content
**Why it's a problem**: Putting the cart before the horse — users come for information, not decoration
**Fix**: "If this decoration were removed, would the design be worse?" If not, remove it

### 9. Cyber Neon Overuse
**Issue**: Dark blue background (#0D1117) + neon color glow effects
**Why it's a problem**: Default aesthetic forbidden zone (this skill's taste baseline), and has become one of the biggest clichés — users can override with their own brand
**Fix**: Choose a more distinctive color scheme (reference the 20-style color system)

### 10. Information Density Mismatch with Medium
**Issue**: A full page of text in a PPT / 10 elements crammed into a cover image
**Why it's a problem**: Different media have different optimal information densities
**Fix**:
- PPT: 1 core point per page
- Cover image: 1 visual focus
- Info graphic: layered presentation
- PDF: can be denser, but needs clear navigation

---

## Review Output Template

```
## Design Review Report

**Overall Score**: X.X/10 [Excellent (8+)/Good (6-7.9)/Needs Improvement (4-5.9)/Failing (<4)]

**Dimension Scores**:
- Philosophy Alignment: X/10 [one sentence explanation]
- Visual Hierarchy: X/10 [one sentence explanation]
- Craft Quality: X/10 [one sentence explanation]
- Functionality: X/10 [one sentence explanation]
- Originality: X/10 [one sentence explanation]

### Strengths (Keep)
- [Specifically point out what's done well, describe in design language]

### Issues (Fix)
[Sorted by severity]

**1. [Issue Name]** — ⚠️Critical / ⚡Major / 💡Optimization
- Current: [Describe current state]
- Problem: [Why this is a problem]
- Fix: [Specific action, including values]

### Quick Wins (If only 5 minutes, prioritize these 3)
- [ ] [Most impactful fix]
- [ ] [Second most important fix]
- [ ] [Third most important fix]
```

---

**Version**: v1.0
**Updated**: 2026-02-13
