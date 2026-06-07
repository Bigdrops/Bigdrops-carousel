# Core Asset Protocol (Full Version)

> Full protocol descended from SKILL.md "Core Philosophy #1.a" (2026-06 slimmed). SKILL.md retains trigger conditions + 5-step titles + self-check; here are the 5-step detailed operations, download commands, brand-spec template, full-process failure fallback, anti-patterns and cost comparison.
> Trigger: Enforced when the task involves a specific brand/product. Go back to SKILL.md for the condensed version and context.

#### 1.a Core Asset Protocol (Enforced When Involving Specific Brands)

> **This is v1's most critical constraint and the lifeline of stability.** Whether the agent completes this protocol directly determines whether output quality is 40 points or 90 points. Don't skip any step.
>
> **v1.1 Refactor (2026-04-20)**: Upgraded from "Brand Asset Protocol" to "Core Asset Protocol". The previous version over-focused on color values and fonts, missing the most fundamental assets — logos / product images / UI screenshots. Uncle Hua's original words: "Besides so-called brand colors, we should obviously find and use DJI's logo, use Pocket 4's product images. For websites or apps and other non-physical products, at least the logo should be mandatory. This might be even more important than the so-called brand design spec. Otherwise, what are we expressing?"

**Trigger Condition**: The task involves a specific brand — the user mentioned a product name/company name/explicit client (Stripe, Linear, Anthropic, Notion, Lovart, DJI, their own company, etc.), regardless of whether the user actively provided brand materials.

**Prerequisite**: Before proceeding with the protocol, you must have confirmed the brand/product exists and its known state via "#0 Fact Verification Before Assumption". If you're not sure whether the product has been released/specifications/version, go search first.

##### Core Philosophy: Assets > Specifications

**The essence of a brand is "being recognized"**. What enables recognition? Sorted by recognition contribution:

| Asset Type | Recognition Contribution | Necessity |
|---|---|---|
| **Logo** | Highest · Any brand with a logo is instantly recognizable | **Mandatory for every brand** |
| **Product Image/Product Render** | Very High · The "protagonist" of physical products is the product itself | **Mandatory for physical products (hardware/packaging/consumer goods)** |
| **UI Screenshot/Interface Assets** | Very High · The "protagonist" of digital products is its interface | **Mandatory for digital products (App/Website/SaaS)** |
| **Color Values** | Medium · Aids recognition, often collides with others without the first three | Supplementary |
| **Font** | Low · Needs to work with the above to establish recognition | Supplementary |
| **Tone Keywords** | Low · For agent self-check | Supplementary |

**Translated into execution rules**:
- Only extracting color values + fonts, not finding logos / product images / UI → **Violates this protocol**
- Using CSS silhouettes/SVG hand-drawn to replace real product images → **Violates this protocol** (produces "generic tech animation" that looks the same for any brand)
- Can't find assets and doesn't tell the user, nor uses AI generation, forces through → **Violates this protocol**
- Better to stop and ask the user for assets than to fill with generic content

##### 5-Step Hard Process (Each step has fallback, never silently skip)

##### Step 1 · Ask (Asset List All at Once)

Don't just ask "Do you have brand guidelines?" — that's too vague, the user won't know what to provide. Ask item by item per the checklist:

```
Regarding <brand/product>, which of the following materials do you have? Listed by priority:
1. Logo (SVG / HD PNG) — Essential for any brand
2. Product Image / Official Render — Essential for physical products (e.g., DJI Pocket 4 product photos)
3. UI Screenshots / Interface Assets — Essential for digital products (e.g., main App page screenshots)
4. Color value list (HEX / RGB / brand palette)
5. Font list (Display / Body)
6. Brand guidelines PDF / Figma design system / brand website link

If you have any, send them to me. If not, I'll search/fetch/generate them.
```

##### Step 2 · Search Official Channels (By Asset Type)

| Asset | Search Path |
|---|---|
| **Logo** | `<brand>.com/brand` · `<brand>.com/press` · `<brand>.com/press-kit` · `brand.<brand>.com` · Inline SVG in website header |
| **Product Image/Render** | `<brand>.com/<product>` product detail page hero image + gallery · Official YouTube launch film frame capture · Official press release images |
| **UI Screenshot** | App Store / Google Play product page screenshots · Website screenshots section · Official product demo video frame capture |
| **Color Values** | Website inline CSS / Tailwind config / brand guidelines PDF |
| **Font** | Website `<link rel="stylesheet">` reference · Google Fonts tracking · brand guidelines |

`WebSearch` fallback keywords:
- Logo not found → `<brand> logo download SVG`, `<brand> press kit`
- Product image not found → `<brand> <product> official renders`, `<brand> <product> product photography`
- UI not found → `<brand> app screenshots`, `<brand> dashboard UI`

##### Step 3 · Download Assets · Three Fallback Paths Per Type

**3.1 Logo (Mandatory for Any Brand)**

> ⚠️ **Don't just try `curl <brand>.com/logo.svg` and give up** — most websites today are SPAs; directly accessing static paths returns empty shell HTML (verified 2026-06-06: Trae website 5 direct paths all returned shells). **For digital products / SaaS / AI tools, prioritize icon aggregation sources** — highest hit rate, clean SVG output.

By decreasing success rate:
0. **Icon aggregation sources (preferred for well-known digital products/SaaS/AI tools, highest hit rate)**:
   ```bash
   unset ALL_PROXY HTTP_PROXY HTTPS_PROXY all_proxy http_proxy https_proxy   # Clear proxy, otherwise TLS may fail
   # svgl — Best coverage of AI/developer brands (Claude/Cursor/OpenAI/Copilot/Anthropic/Vercel…), includes light/dark + wordmark
   curl -s "https://api.svgl.app?search=<brand>"   # Returns JSON, take route(.light/.dark)'s svg URL then download
   # simpleicons — Monochrome glyph, can be colored per brand color
   curl -o logo.svg "https://cdn.simpleicons.org/<slug>/<hexcolor>"
   ```
1. Standalone SVG/PNG file / Official brand page (e.g. `<brand>.com/brand`, `/press`):
   ```bash
   curl -A "Mozilla/5.0" -L -o assets/<brand>-brand/logo.svg "<official-logo-url>"
   ```
2. Full website HTML to extract inline SVG:
   ```bash
   curl -A "Mozilla/5.0" -L https://<brand>.com -o assets/<brand>-brand/homepage.html
   # Then grep <svg>...</svg> to extract the logo node
   ```
3. **Google favicon service (site mark fallback, almost never fails)**:
   ```bash
   curl -o logo.png "https://www.google.com/s2/favicons?domain=<brand-domain>&sz=256"   # 256px official site icon
   ```
4. Official social media avatar (last resort): Company avatars on GitHub/Twitter/LinkedIn are usually 400×400 or 800×800 transparent PNG

After downloading, **verify each one**: `file <logo>` to confirm it's real SVG/PNG (not a 106-byte placeholder or empty HTML), `head -c 90 <logo.svg>` to check for `<svg`.

**3.2 Product Image/Render (Mandatory for Physical Products)**

By priority:
1. **Official product page hero image** (highest priority): Right-click to view image address / curl to fetch. Resolution usually 2000px+
2. **Official press kit**: `<brand>.com/press` often has HD product images for download
3. **Official launch video frame capture**: Use `yt-dlp` to download YouTube video, ffmpeg to extract several HD frames
4. **Wikimedia Commons**: Often available in public domain
5. **AI generation fallback** (nano-banana-pro): Send real product images as reference to AI, let it generate variants suitable for the animation scene. **Don't use CSS/SVG hand-drawn instead**

```bash
# Example: Download DJI official product hero image
curl -A "Mozilla/5.0" -L "<hero-image-url>" -o assets/<brand>-brand/product-hero.png
```

**3.3 UI Screenshot (Mandatory for Digital Products)**

- App Store / Google Play product screenshots (note: may be mockups not real UI, compare)
- Website screenshots section
- Product demo video frame capture
- Product official Twitter/X launch screenshots (often latest version)
- When user has an account, directly screenshot the real product interface

**3.4 · Asset Quality Threshold "5-10-2-8" Principle (Hard Rule)**

> **Logo rules differ from other assets.** If a logo exists, it must be used (if not, stop and ask the user); other assets (product images/UI/reference images/illustrations) follow the "5-10-2-8" quality threshold.
>
> 2026-04-20 Uncle Hua's original words: "Our principle is: search 5 rounds, find 10 assets, select 2 good ones. Each must score 8/10 or above. Better to have fewer than to fill with subpar material just to get the job done."

| Dimension | Standard | Anti-pattern |
|---|---|---|
| **5 rounds of search** | Multi-channel cross-search (website / press kit / official social media / YouTube frame capture / Wikimedia / user account screenshot), not just first page top 2 | Using first page results directly |
| **10 candidates** | Gather at least 10 candidates before starting to filter | Only grab 2, no choice |
| **Select 2 good ones** | Select 2 from 10 as final assets | Using all = visual overload + taste dilution |
| **Each 8/10 or above** | If below 8, **better not to use**, use honest placeholder (gray block + text label) or AI generation (nano-banana-pro based on official reference) | Using 7-point filler in brand-spec.md |

**8/10 Scoring Dimensions** (record in `brand-spec.md` when scoring):

1. **Resolution** · ≥2000px (print/large-screen ≥3000px)
2. **Copyright Clarity** · Official source > public domain > free stock > suspected stolen (suspected stolen = 0)
3. **Brand Tone Fit** · Consistent with "tone keywords" in brand-spec.md
4. **Lighting/Composition/Style Consistency** · The 2 assets don't fight each other when placed together
5. **Independent Narrative Ability** · Can independently express a narrative role (not decoration)

**Why this threshold is a hard rule**:
- Uncle Hua's philosophy: **Better to go without than to settle**. Subpar filler materials are worse than none — they pollute visual taste and convey an "unprofessional" signal
- Quantitative version of **"one detail at 120%, rest at 80%"**: 8 is the baseline for "rest at 80%", true hero assets need 9-10
- When the audience views the work, every visual element is **either adding points or deducting points**. A 7-point asset = deduction, better to leave empty

**Logo Exception** (restated): If it exists, it must be used, the "5-10-2-8" does not apply. Because logo is not a "choose one" issue — it's a "recognition foundation" issue — even if the logo itself is only 6 points, it's 10x better than having no logo.

##### Step 4 · Verification + Extraction (Not Just grep Color Values)

| Asset | Verification Action |
|---|---|
| **Logo** | File exists + SVG/PNG opens + at least two versions (dark/light background) + transparent background |
| **Product Image** | At least one 2000px+ resolution + cutout or clean background + multiple angles (primary view, detail, scene) |
| **UI Screenshot** | Real resolution (1x / 2x) + latest version (not old) + no user data contamination |
| **Color Values** | `grep -hoE '#[0-9A-Fa-f]{6}' assets/<brand>-brand/*.{svg,html,css} | sort | uniq -c | sort -rn | head -20`, filter black/white/gray |

**Beware of demo brand contamination**: Product screenshots often contain demo users' brand colors (e.g., a tool screenshot showing Heytea red), which is not the tool's own color. **When two strong colors appear simultaneously, they must be distinguished.**

**Brand Multi-facets**: The same brand's marketing website colors and product UI colors are often different (Lovart website warm beige+orange, product UI is Charcoal+Lime). **Both are real** — choose the appropriate facet based on the delivery scenario.

##### Step 5 · Solidify into `brand-spec.md` file (Template must cover all assets)

```markdown
# <Brand> · Brand Spec
> Collection Date: YYYY-MM-DD
> Asset Source: <List download sources>
> Asset Completeness: <Complete / Partial / Inferred>

## 🎯 Core Assets (First-Class Citizens)

### Logo
- Primary version: `assets/<brand>-brand/logo.svg`
- Light-background inverse version: `assets/<brand>-brand/logo-white.svg`
- Usage scenario: <Opening/Closing/Corner watermark/Global>
- Prohibited deformation: <No stretching/color-changing/stroke-adding>

### Product Image (Mandatory for Physical Products)
- Primary view: `assets/<brand>-brand/product-hero.png` (2000×1500)
- Detail: `assets/<brand>-brand/product-detail-1.png` / `product-detail-2.png`
- Scene: `assets/<brand>-brand/product-scene.png`
- Usage scenario: <Close-up/Rotation/Comparison>

### UI Screenshot (Mandatory for Digital Products)
- Homepage: `assets/<brand>-brand/ui-home.png`
- Core feature: `assets/<brand>-brand/ui-feature-<name>.png`
- Usage scenario: <Product showcase/Dashboard fade-in/Comparison demo>

## 🎨 Supplementary Assets

### Color Palette
- Primary: #XXXXXX  <Source note>
- Background: #XXXXXX
- Ink: #XXXXXX
- Accent: #XXXXXX
- Prohibited colors: <Color families the brand explicitly doesn't use>

### Typography
- Display: <font stack>
- Body: <font stack>
- Mono (for data HUD): <font stack>

### Signature Details
- <Which details are "done at 120%">

### Restricted Zone
- <What's explicitly not allowed: e.g., Lovart doesn't use blue, Stripe doesn't use low-saturation warm colors>

### Tone Keywords
- <3-5 adjectives>
```

**Execution Discipline After Spec Completion (Hard Requirement)**:
- All HTML must **reference** asset file paths from `brand-spec.md`, no CSS silhouettes/SVG hand-drawn as substitutes
- Logo as `<img>` referencing real file, not redrawn
- Product images as `<img>` referencing real files, not CSS silhouettes
- CSS variables injected from spec: `:root { --brand-primary: ...; }`, HTML only uses `var(--brand-*)`
- This makes brand consistency "enforced by structure" rather than "dependent on self-discipline" — wanting to temporarily add a color requires first modifying the spec

##### Full-Process Failure Fallback

Handle by asset type:

| Missing | Action |
|---|---|
| **Logo completely unfindable** | **Stop and ask the user**, don't force it (logo is the foundation of brand recognition) |
| **Product image (physical product) unfindable** | Priority: nano-banana-pro AI generation (based on official reference image) → next ask user to provide → last resort is honest placeholder (gray block + text label, clearly marked "product image pending") |
| **UI screenshot (digital product) unfindable** | Ask the user for screenshots from their own account → official demo video frame capture. Don't use a mockup generator |
| **Color values completely unfindable** | Follow "Design Direction Consultant" mode, recommend 3 directions to the user and mark assumptions |

**Forbidden**: Silently using CSS silhouettes/generic gradients when assets can't be found — this is the protocol's biggest anti-pattern. **Better to stop and ask than to settle.**

##### Anti-Patterns (Real Mistakes Made)

- **Kimi animation**: Guessed from memory "should be orange", but Kimi is actually `#1783FF` blue — had to redo
- **Lovart design**: Mistook the demo brand's Heytea red in product screenshots as Lovart's own color — almost ruined the entire design
- **DJI Pocket 4 launch animation (2026-04-20, real case that triggered this protocol upgrade)**: Used the old version that only extracted color values, didn't download DJI logo, didn't find Pocket 4 product images, used CSS silhouettes instead of the product — produced "generic tech animation on black background with orange accent", no DJI recognition. Uncle Hua's original words: "Otherwise, what are we expressing?" → Protocol upgraded.
- Extracted colors but didn't write into brand-spec.md, forgot the primary color value by page three, temporarily added a "close but not exact" hex — brand consistency collapsed
- **Five Coding Agent Comparison PPT (2026-06-06, real case that triggered trigger condition expansion)**: The agent judged the task as "PPT + no style reference", went to Fallback Design Direction Consultant, only extracted five brands' colors and spawned three design logic versions, **didn't fetch any of the five product logos (Claude Code / Cursor / Codex / Copilot / Trae)** — caught red-handed by Uncle Hua: "Why didn't we fetch these products' logos?" Root cause: Misjudged "comparison/ranking deck" as not triggering §1.a (thought §1.a only applies to "creating materials for a single client"), and the Fallback path had no logo check point. → Fix: ①Expanded trigger conditions to two categories (including "naming/juxtaposing real products in design") ②Fallback doesn't exempt logo fetching ③Added Phase 3.5 "Named product logo sub-gate" must pass before spawn ④Step 3.1 added svgl/simpleicons/Google favicon reliable image fetching chain.

##### Protocol Cost vs. Cost of Not Doing It

| Scenario | Time |
|---|---|
| Correctly completing the protocol | Download logo 5 min + download 3-5 product images/UI 10 min + grep color values 5 min + write spec 10 min = **30 minutes** |
| Cost of not doing the protocol | Producing a generic animation with no recognition → user rework 1-2 hours, or even redo entirely |

**This is the cheapest investment in stability.** Especially for commercial projects, launch events, and important client projects, 30 minutes of asset protocol is lifesaving.
