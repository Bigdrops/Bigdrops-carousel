# Design Style Library: 20 Web Styles + 20 PPT Styles (HTML Native Priority)

> **2026-06 Refactor**. Based on research extrapolated from the top 5 globally recognized best designs across 10 major website types + 10 major presentation types (100 real cases total).
> The fatal flaw of the old 20-style "graphic/installation designer philosophy" library: bold styles were almost entirely AI-generation-only (particle/light/shadow/hand-drawn). **When users have no image generation capability by default and default entirely to HTML, the bold half is directly zeroed out, leaving only minimalism — this is the root cause of "default homogeneity."** This library labels each style with its **fidelity** under "pure HTML/CSS no image generation."
>
> ⚖️ **But remember the positioning**: This is **"ammunition to flip through when you have no ideas," not a "must choose from here" checklist**. If the user provides content/brand/reference, design unfolds from there — don't force-fit a library. The skill's job is to help users avoid the worst, not prescribe what good design looks like — good design grows from the user's real needs.

## How to Use This Library

1. **First choose the half by output type**: Web/landing page/website → Web 20 styles; PPT/deck/presentation → PPT 20 styles.
2. **Temperature system**: Each style is labeled `Bold / Neutral / Quiet`. **Bold styles intentionally make up the majority** — the model's certainty bias naturally leans toward quiet minimalism. The library's ratio pushes toward bold.
   - Direction A (safe base): Choose from quiet/neutral as needed; Direction B chooses a different temperature for contrast; **Direction C is forcibly injected with bold styles by SKILL's "seconds wheel."**
   - ❌ Three directions should not all land on "cream white + whitespace + one accent color" — that's the most common failure mode.
3. **Fidelity**: ≥90% can be done with eyes closed; 70-90% main body doable, individual details downgraded; <70% (like Memphis aging texture) must clearly mark which parts use flat color block downgrades in the output, don't pretend to reproduce the original texture.
4. **Fonts**: Each style gives open-source alternatives (Inter/Geist/Manrope/Space Grotesk/Fraunces/Playfair etc.), don't write paid fonts (Söhne/Circular etc.).
5. Companion: SKILL "Design Direction Consultant" Phase 3-5 uses this library to push 3 directions; `assets/showcases/` has a prefabricated screenshot gallery.

---

## Web Style Library (20 styles)

#### Bold

**Media-grade Editorial Brutalism (Giant Helvetica crushes small body text)** `Bold · Fidelity 98%`
- Reference: Bloomberg Businessweek (Richard Turley 2010-2014 redesign, by Code and Theory); Neue Haas Grotesk lineage
- Suitable for: Media/content publishing, AI product launches, brand website hero, research report covers, opinion long-form header images
- Visual DNA: Pure black #000 + pure white #FFF + link blue #0000EE, accent signal orange-red #FF433D/terminal green #00A33E. Font Helvetica/Neue Haas Grotesk, 120px+ giant headline left-aligned tight tracking directly presses 14px small body text, extreme font size contrast. Layout modular grid + 1px rule line column cutting, high information density deliberately without whitespace. Signature elements: rule line columns, link blue underline, black/white large color blocks.
- HTML implementation: Pure CSS can 1:1 reproduce. CSS Grid for modular grid + border for rule line columns, clamp() for oversized responsive font size + letter-spacing tightened, system Helvetica/Arial stack or Inter as fallback, links directly #0000EE underline. Zero asset dependency.
- Font: Inter (substituting Helvetica/Neue Haas Grotesk), code uses Geist Mono

**Neo-Brutalism Clashing Information Flow (Thick black outline cards + high saturation clashing colors)** `Bold · Fidelity 95%`
- Reference: The Verge 2022 redesign (in-house team, PolySans + Manuka)
- Suitable for: Media/content sites, AI product aggregation pages, event landings, community ranking pages, Xiaohongshu-style info cards
- Visual DNA: Electric purple #5200FF ~ magenta #E1306C high saturation primary + bright yellow #F8E000 emphasis + pure black #08080D + white, large area clashing color blocks deliberately unsoft. Geometric sans-serif large titles + serif body text contrast. Card feed layout, 2-4px thick black outlines, hard color block partitioning, nearly no rounded corners. Signature elements: thick outline cards hover clashing flip, unfinished interface vibe.
- HTML implementation: Pure CSS strength. border:3px solid #000 thick outline + box-shadow hard projection offset(4px 4px 0 #000) + grid/flex card flow + :hover switches background clashing flip. No 3D/light/shadow obstacles.
- Font: Space Grotesk (substituting PolySans) + any serif like Fraunces

**Memphis Retro Maximalism (Clashing color blocks + offset stacking + retro fonts)** `Bold · Fidelity 72%`
- Reference: Gucci Vault concept store (Alessandro Michele); Memphis design movement / Sagmeister rebellious genes
- Suitable for: E-commerce concept stores, creative event pages, brand experimental campaigns, Y2K retro themes, holiday marketing pages
- Visual DNA: Retro red/mustard yellow/sapphire blue/purple/olive green large area clashing juxtaposition + aged beige warm background, intense deliberate disharmony. Retro serif + decorative font mix, print texture, broken grid offset stacking. Anti-grid collage curation layout, modules of varying sizes offset overlapping, like browsing a digital room. Signature elements: clashing color blocks, offset stacking, unconventional navigational easter eggs.
- HTML implementation: transform:rotate() for offset stacking + position:absolute overlapping + high saturation background clashing blocks + retro Google Fonts. Real aging texture cannot be CSS reproduced, downgraded to flat color blocks + mix-blend-mode/contrast filter to simulate texture. Geometric collage version works, archival aging version will be downgraded.
- Font: DM Serif Display + Bungee (decorative) + Space Mono

**Candy-colored Raised 3D Button Gamified Friendly Geometric Candy** `Bold · Fidelity 85%`
- Reference: Duolingo (Johnson Banks + Monotype, Feather Bold font); Anti-Silicon Valley minimalism
- Suitable for: Education/language learning, consumer App landing, gamified products, mass-friendly products, event registration pages
- Visual DNA: Duo green #58CC02 + duck yellow #FFC800 + sky blue #1CB0F6 candy high saturation + white background, rounded friendly. Extra-bold rounded font (Feather Bold feel). Large rounded card layout, raised 3D buttons (bottom hard shadow = pressable feel), mascot position + progress bubble. Signature elements: 3px solid bottom shadow 3D buttons, press-down translate animation, extra-rounded corners.
- HTML implementation: Pure CSS. box-shadow:0 4px 0 hard bottom shadow for raised button + :active translateY(4px) eliminates shadow to simulate pressing, border-radius large rounded corners, flat color blocks. Mascot without image generation uses CSS geometric shapes or emoji placeholder (slight downgrade).
- Font: Baloo 2 / Nunito (extra-bold rounded substituting Feather)

**Pure CSS Geometric Illustration + Responsive Deformation Easter Eggs Pure-CSS Art** `Bold · Fidelity 80%`
- Reference: Lynn Fisher (lynnandtonic.com, pure CSS art legend, featured by Adobe)
- Suitable for: Personal homepage, creative 404/easter egg pages, brand playful landing, tech blog header images, designer self-showcase
- Visual DNA: 2-4 color high contrast flat surface (recolored at each breakpoint). Bold geometric sans-serif titles. Layout core is "images transform with viewport" — a set of CSS shapes recompose into different scenes at different breakpoints (e.g., building changes floors with screen width). Signature elements: Pure CSS drawn geometric illustrations, breakpoint-driven rearrangement easter eggs, zero images.
- HTML implementation: Pure CSS battlefield, zero assets is an advantage. div + border-radius/clip-path/transform/box-shadow stacked geometric shapes, @media breakpoints change shape size and position for deformation. Difficulty is in design concept not technology, but requires careful handcrafting of each shape.
- Font: Rubik / Archivo (bold geometric substituting custom)

**Giant Bold Big-Type Editorial Black/White High Contrast Fashion** `Bold · Fidelity 88%`
- Reference: Jacquemus official site / Rik Oostenbroek / Domestika; Fashion poster
- Suitable for: E-commerce fashion, portfolio, media features, brand manifesto pages, video course covers, research report large-print edition
- Visual DNA: Minimal black/white + single restrained accent color (nude pink #E8C4C0 or true red). Oversized Display sans-serif/high contrast serif, title fills entire screen. Full-width grid layout, giant text vs negative space battle, 1:1 image/text split. Signature elements: Screen-dominating giant headline, luxury-grade whitespace, left-right alignment typography.
- HTML implementation: Pure CSS perfect reproduction. clamp() giant font + CSS Grid full-width split + generous padding whitespace + vh units for title filling viewport. Without images, use flat color blocks/text blocks as fashion photo placeholders (slight downgrade but composition works).
- Font: Archivo Expanded / Anton (Display) + Playfair Display (high contrast serif)

**Cosmic Retro-Futurism Retro-Future Space Catalog** `Bold · Fidelity 75%`
- Reference: Perplexity Comet browser launch site (The Brand Identity: Black/Blue/Cream; "2001: A Space Odyssey" vibe)
- Suitable for: AI product launch sites, tech brand manifesto pages, event countdown pages, futuristic landing, concept launch events
- Visual DNA: Pure black #0A0A0A + cream paper white cream #F0EAD8 + touch of cobalt blue-peacock blue #2B4F91, low saturation like old astronomical catalogs. High contrast serif (classical astronomical atlas feel) + whitespace. Line-drawn orbital/parabolic SVG, planetary dots, cream background over black text, antiquarian typography. Signature elements: SVG celestial orbit lines, cream+blue+black tricolor, retro serif large font, astronomical catalog texture.
- HTML implementation: Pure CSS+SVG reproduces 80% of static version's character. SVG path draws orbital parabolas + CSS radial positioning of planetary dots + tricolor variables + high contrast serif. Gap is the full-screen video transition of "space falling to Earth" (the soul part) — downgraded to CSS scroll parallax + SVG orbital rotation approximation.
- Font: Cormorant Garamond / EB Garamond (high contrast serif) + Space Mono

**Cinematic Sound-Viz Dark Sound Wave Visualization** `Bold · Fidelity 72%`
- Reference: ElevenLabs; Cinema title sequence (Saul Bass-style minimal dynamics) × audio engineering interface
- Suitable for: Audio/voice AI products, music tech sites, podcast platforms, media publishing pages, cinematic brand hero
- Visual DNA: Pure black #000 background + pure white text + blue-purple gradient accent waveform. Large sans-serif titles, Saul Bass-style minimalism. Full-frame dark field layout, sound wave/spectrum visualization throughout, giant title over waveform, card function areas. Signature elements: Colored audio-waveform bands, cinematic title-style minimalism, high contrast black/white + single gradient, sound visualization motif.
- HTML implementation: Pure CSS+SVG reproduces 70% character (skeleton perfect, waveform is downgrade point). SVG polyline for static waveform or multiple unequal height div pillar arrays + CSS animation for "fake waveform" bouncing approximation. Gap: Real-time sound-responsive Web Audio/Canvas spectrum cannot be reproduced with pure CSS — looks static, dynamic soul unreproducible.
- Font: Inter / Sora (large sans-serif)

**Pixel-Game Side-Scroller Pixel Game Horizontal Narrative** `Bold · Fidelity 70%`
- Reference: Robby Leonardi interactive resume (8/16-bit platform action game narrative, homage to Nintendo SNES)
- Suitable for: Creative resume/portfolio, brand playful campaign, gamified landing, event easter egg pages, personal fun homepage
- Visual DNA: Retro game multi-segment coloring — forest green #4CAF50 grass + sky blue #5DADE2, transitioning to space purple #2C2A4A, volcanic orange-red #E8743B, seabed cyan #1ABC9C, each "level" swaps a high-saturation cartoon palette. Pixel font (8-bit feel) + bold sans-serif. Horizontal/vertical-scrolling level-scene layout, parallax layering, scroll-triggered displacement. Signature elements: Level-switching colors, pixel aesthetic, parallax scrolling, game HUD-style UI.
- HTML implementation: Pure CSS + minimal JS reproduces skeleton (original is HTML+CSS+jQuery without WebGL). Parallax layering position+scroll displacement, image-rendering:pixelated, CSS frame-by-frame background-position for sprite animation, segmented background colors. Gap: Original character/scene hand-drawn pixel art — without image generation, use CSS block simple pixel icons as substitute (art downgrade, technology same).
- Font: Press Start 2P / VT323 (pixel font) + Inter

#### Neutral

**Bauhaus Geometric Logo + Flat Illustration System** `Neutral · Fidelity 90%`
- Reference: Khan Academy rebrand (hexagon + petal logomark + Wonder Blocks design system); Bauhaus geometric composition
- Suitable for: Education course sites, brand logo systems, infographics, child-friendly products, event KV
- Visual DNA: Primary color spectrum — Bauhaus red #E63946/yellow #FFB703/blue #0077B6 + black and white, flat color block composition. Geometric sans-serif (rounded geometric feel). Circle/triangle/square basic geometric units building illustrations, aligned to grid, modular puzzle. Signature elements: Pure geometric logomark, flat no-gradient illustrations, primary color block composition.
- HTML implementation: Pure CSS geometry all-capable. border-radius:50% for circles, clip-path/border triangles, square divs for geometric illustrations, CSS Grid alignment, flat fills no assets needed. Illustrations handcrafted with CSS shapes or inline SVG geometric paths.
- Font: Poppins / Manrope (geometric rounded substituting Wonder Blocks)

**Dark Editorial (Deep background + single fluorescent accent + monospace) Dark Bicolor Sidebar Developer Portfolio** `Neutral · Fidelity 96%`
- Reference: Brittany Chiang (brittanychiang.com v4, dev portfolio de facto standard)
- Suitable for: Portfolio personal homepage, developer-oriented products, tech brand sites, resume page, AI tool landing
- Visual DNA: Deep dark green/navy background #0A192F + slate gray text #8892B0 + single fluorescent cyan accent #64FFDA. Sans-serif body + monospace (numbers/labels). Left fixed sidebar nav + right scrolling main area bicolumn layout, section numbering 01/02, link hover underline slide-in. Signature elements: Single accent color, monospace number labels, sidebar anchor highlight.
- HTML implementation: Pure CSS fully reproducible. position:sticky for fixed sidebar + CSS Grid bicolumn + single accent variable + monospace label + :hover underline transform slide-in. Zero assets, pure typography with micro-interactions.
- Font: Inter + JetBrains Mono (monospace)

**Warm Editorial (Cream paper background + terracotta orange + serif and sans-serif mix)** `Neutral · Fidelity 97%`
- Reference: Anthropic / Claude (DBCo + Geist Studio, Styrene×Tiempos); Penguin/Pelican paperback typography
- Suitable for: AI product sites, brand websites, long-form reading pages, orange paper e-books, research reports, training materials
- Visual DNA: Cream paper background #F5F0E8 + terracotta orange #CC785C/#D97757 accent + near-black text #191919, warm low saturation. Serif titles (Tiempos feel) × sans-serif body (Styrene feel) mixed. Book-style single-column reading flow, comfortable line height, restrained dividers. Signature elements: Paper-like warm background, terracotta orange, publication-grade typographic rhythm.
- HTML implementation: Pure CSS 100% reproducible, zero assets. Background color variable + serif sans-serif font stack mixed + max-width reading width limit + line-height 1.7 comfortable line height. This is Anthropic's warm terracotta safe zone.
- Font: Fraunces / Newsreader (substituting Tiempos serif) + Inter (substituting Styrene)

**Linear Dark Glowing + Bento Grid Glassmorphism Bento** `Neutral · Fidelity 85%`
- Reference: Linear / Cursor ('The Linear Look' phenomenon genre, Frontend Horse has code recipe)
- Suitable for: SaaS/AI product sites, developer tools, tech brand hero, product feature showcase, dark dashboard demos
- Visual DNA: Near-black background #08090A + desaturated blue-purple brand #5E6AD2 + low saturation cyan-purple subtle glow gradient #4EA7FC→#B59AFF. Geometric sans-serif negative tracking compact. Bento grid block layout, hairline dividing lines, glassmorphism cards. Signature elements: Dark background glowing gradient borders, bento blocks, streamer, frosted glass.
- HTML implementation: Pure CSS strong reproduction. box-shadow/filter blur+radial-gradient for glow, backdrop-filter:blur for glassmorphism, conic/linear-gradient borders, CSS Grid for bento. Gap only "real product UI screenshots" — use color blocks + text to build simplified fake UI as substitute (this part downgraded).
- Font: Inter / Geist (negative tracking) + Geist Mono

**Angled Fluid Gradient Banner** `Neutral · Fidelity 92%`
- Reference: Stripe (iconic angled gradient banner, Klim custom Sohne font)
- Suitable for: SaaS/Fintech landing pages, brand website hero, product launch pages, event banners, AI product marketing pages
- Visual DNA: Multi-color fluid gradient (indigo #635BFF→cyan→pink→orange warm tone) for hero background + pure white content area + near-black text. Refined sans-serif (Sohne feel). Skewed color block layout (skew corner partitioning), gradient hero over structured grid body text. Signature elements: Angled slanted borders, multi-color fluid gradient, rational grid over expressive gradient.
- HTML implementation: Pure CSS. transform:skewY() or clip-path:polygon() for slanted partitioning, linear-gradient multi-layer overlay (can add CSS animation slow flow) for fluid gradient band, Grid for structured body below. Zero assets.
- Font: Inter / Hanken Grotesk (substituting Sohne)

**Utility-First Colorful Docs Rainbow Classification** `Neutral · Fidelity 98%`
- Reference: Tailwind CSS Docs (Sky/Cyan brand color + functional classification rainbow color bars)
- Suitable for: Technical documentation, API reference, design system sites, tutorial sites, developer knowledge base, SaaS help center
- Visual DNA: Sky blue #38BDF8 brand + teal→cyan→sky cyan gradient + Slate grayscale #0F172A/#64748B/#F8FAFC, docs use rainbow color bars to distinguish functional categories (pink #EC4899/purple #A855F7/green #10B981/orange). Clean sans-serif + monospace code. Left sidebar nav + middle content + right TOC three-column layout, color-highlighted code blocks, category color labels. Signature elements: Cyan gradient hero, rainbow category colors, three-column doc skeleton, syntax highlighted code blocks.
- HTML implementation: Pure CSS 98% reproducible (it's itself a CSS framework doc). Grid three-column + linear-gradient cyan hero + category color variables + code block syntax colors with span coloring. Inter open-source, only dark mode toggle/copy requires lightweight JS. Zero light/3D/hand-drawn.
- Font: Inter + JetBrains Mono / Fira Code (code)

**Terminal-Core Soft-Futurism (Monospace + Isometric Cube)** `Neutral · Fidelity 80%`
- Reference: Cursor (Anysphere); Developer terminal aesthetic × Teenage Engineering industrial minimalism
- Suitable for: AI coding tool sites, CLI product landing, developer infrastructure, tech brand hero, terminal-type products
- Visual DNA: Charcoal black #0B0D14 background + warm white text #F2F0EF + restrained blue-purple gradient accent for button and glow. Monospace font as protagonist (command line feel) + sans-serif auxiliary. Command line/code block foreground layout, bento partitioning, 2.5D isometric cube illustration. Signature elements: Monospace command line, isometric projection cube, warm white × charcoal black, restrained gradient glow, industrial minimalism.
- HTML implementation: Pure CSS 80% reproducible. Monospace code block + dark bento + box-shadow glow; 2.5D isometric cube with CSS 3D transform(rotateX/Y+skew) or SVG isometric projection handcrafted. Gap: Clickable multi-interface demo needs JS + fake UI assembly. No WebGL required.
- Font: Geist Mono / JetBrains Mono (protagonist) + Inter (auxiliary)

#### Quiet

**Functional Brutalism Grid Community (Gray line dividers + system font + blue links)** `Quiet · Fidelity 98%`
- Reference: Are.na / Lobsters / Quartz; Muller-Brockmann grid digital implementation + Tufte information density
- Suitable for: Community/UGC platforms, content aggregation sites, documentation knowledge bases, mobile-first content streams, geek-oriented products
- Visual DNA: Near-white background #FBFBFB + black text + 1px gray dividing line #E0E0E0 + classic link blue #0000EE/visited purple. System font stack (-apple-system/no decoration). High-density information list layout, thin gray line columns, minimal whitespace, tight line height. Signature elements: Hairline gray dividers, blue links, system font, information density priority.
- HTML implementation: Pure CSS easiest to reproduce, this is Brutalist Web's essence. border-bottom:1px gray line list + system-ui font stack + compact padding + blue links. Almost no assets or JS needed, pure structure.
- Font: system-ui system font stack / IBM Plex Sans (fallback)

**Gallery Dark (Deep black negative space + single column large images + EXIF small text)** `Quiet · Fidelity 75%`
- Reference: Glass (glass.photo) / Bottega Veneta; Art gallery darkroom + Apple Photos content-first
- Suitable for: Photography portfolio, luxury e-commerce, visual content immersive display, personal gallery page, high-end product display
- Visual DNA: Pure black background #0A0A0A + artwork images provide sole color + very light gray EXIF small text #666. Ultra-thin sans-serif small text. Single column centered large image layout, massive negative space framing, metadata small text below image. Signature elements: Darkroom black background, content-first UI receding, EXIF-style small text footnotes, large image dominating viewport.
- HTML implementation: Pure CSS reproduces layout skeleton. Pure black background + centered max-width single column + generous padding framing whitespace + small text metadata. Gap is "real photographic works" themselves — using placeholder images/flat color blocks loses the soul, but darkroom atmosphere and layout 100% constructible.
- Font: Inter (thin weight 300) / Cormorant (serif luxury feel optional)

**Swiss Monochrome (Vercel-style pure black and white + Geist + sharp corners)** `Quiet · Fidelity 98%`
- Reference: Vercel / Next.js Docs (self-developed Geist now open-source); Massimo Vignelli less is more
- Suitable for: Developer tool documentation, tech brand website, AI product sites, SaaS landing pages, minimal research reports
- Visual DNA: Pure black #000 + pure white #FFF + grayscale #888, zero color or just one touch of blue link. Geist geometric sans-serif + Geist Mono. Sharp right angles (no rounded corners or minimal), high contrast, precision grid, restrained whitespace. Signature elements: Pure black and white, sharp corners, Geist font, triangle/arrow geometric markers.
- HTML implementation: Pure CSS 100% reproducible, Geist open-source can be directly imported. CSS Grid precision grid + pure black/white variables + border-radius:0 sharp angles + hairline borders. This is HTML's most comfortable minimal home field, zero asset dependency.
- Font: Geist + Geist Mono (Vercel open-source original)

**Kenya Hara White Gallery Japanese-style White Box Gallery** `Quiet · Fidelity 80%`
- Reference: Cosmos (cosmos.so) / Aesop official site; Kenya Hara's 'White' emptiness + Swiss grid hybrid
- Suitable for: High-end e-commerce, creative gallery, content curation platform, designer portfolio, brand boutique, moodboard site
- Visual DNA: Near-all-white #FAFAFA background + pure black text #0A0A0A + very light gray dividers #EFEFEF, content images provide all color, UI recedes to background. Minimal system/geometric sans-serif small text, large tracking. Masonry waterfall grid layout, extreme whitespace, light gray hairline separators, Eastern emptiness. Signature elements: White box aesthetic, luxurious whitespace, content-first UI receding, waterfall stream curation.
- HTML implementation: Pure CSS reproduces static layout (differentiated from dark gallery by 'white'). CSS columns or Grid for masonry + near-white variables + generous padding whitespace + light gray separators. Gap is Lenis/GSAP silky inertial scrolling and image entry easing (60% of premium feel is here), CSS only basic transition, motion layer downgraded.
- Font: Inter (thin weight) / Cooper Hewitt (Aesop-style open-source equivalent)

## PPT Style Library (20 styles)

#### Bold

**Neo-Swiss Billboard Editorial / New Swiss Poster** `Bold · Fidelity 98%`
- Reference: Scribe $75M, Flock Safety $47M etc. AI/SaaS pitch deck Big-Number Editorial genre; Bloomberg Businessweek infographics; Pentagram
- Suitable for: Fundraising pitches, QBR/business reviews, annual trend reviews, product launch key pages
- Visual DNA: Pure white (#FFFFFF) or near-black (#0A0A0A) background + single high-saturation accent color (electric blue #2D5BFF/fluorescent green #00E676/brand orange #FF6B2C) + neutral grid lines #E5E5E5. Font: Extra-large bold sans-serif, title fills half screen, numbers tabular-nums tight tracking. Master slides: ① Large color block chapter page one word ② Giant number fills half screen (3.2x) + small note ③ Left-right column comparison ④ Full-width flat line/bar chart. Signature: billboarding large text, strict baseline grid, large color block chapter page.
- HTML implementation: clamp() for oversized numbers; CSS Grid for strict grid; background-color for large color block chapter pages; pure div+CSS or inline SVG for line/bar charts (sharper than images); font-variant-numeric:tabular-nums for number alignment. Zero illustration zero 3D.
- Font: Inter / Geist / Sohne substitute for Neue Haas Grotesk; numbers with Geist Mono.

**Black Big-Number Stage / Black Background Giant Number Theater** `Bold · Fidelity 97%`
- Reference: Steve Jobs 2007 iPhone Keynote, Xiaomi SU7 Ultra Lei Jun launch, Spotify Wrapped, Presentation Zen (Garr Reynolds)
- Suitable for: Product launch keynote, thought presentation, all-hands town hall, emotional annual review
- Visual DNA: Pure black #000000 background + pure white #FFFFFF text high contrast, only one brand accent color per page (Xiaomi orange #FF6900/Spotify green #1ED760/Apple blue #2997FF). Geometric sans-serif bold, one word per screen or one giant number fills view, tight tracking. Master slides: ① Title page black background centered one line ② Data climax page giant number + unit + one line note ③ Left-right parameter comparison bicolumn (accent color vs gray) ④ Slogan single page. Lots of negative space.
- HTML implementation: Black background white text a few CSS lines; clamp() + flex center for giant number; separate span for accent highlight; CSS Grid two columns + bar highlight for left-right comparison; tabular-nums. Removing product photos and using pure text actually gets closer to the Zen essence.
- Font: Geist / Inter / Source Han Sans substitute for SF Pro.

**Mono-Brand Type-as-Hero / High Saturation Monochrome Brand Clashing Poster** `Bold · Fidelity 96%`
- Reference: Spotify Wrapped visual system, Mailchimp Brand Book (Collins), Netflix red-black modern replica, COLLINS brand system
- Suitable for: Brand/marketing strategy, campaign presentation, town hall culture pages, event key visual
- Visual DNA: Single brand primary color full spread background (Spotify green #1ED760/Mailchimp yellow #FFE01B/Netflix red #E50914) + black or white contrast text, two-layer clashing. Oversized font is the main visual (type-as-hero) dominating. Master slides: ① Full color block background + white giant text ② Bicolor block top/bottom or left/right split ③ Giant number fills screen. Signature: Single color full spread, font as image, high contrast clashing.
- HTML implementation: Full spread background-color; clamp() oversized font fills; bicolor split with two 100vh color blocks; font as image via font-weight 900 + negative letter-spacing. Pure color blocks zero assets, HTML's native sweet spot.
- Font: Inter / Manrope / Archivo (extra bold) substitute for Circular/Cavendish.

**Full-Bleed Gradient Manifesto / Full-width Gradient Declaration Typography** `Bold · Fidelity 82%`
- Reference: Zuora 'Tell a Different Story' sales deck (Andy Raskin deconstruction), Nike 'Just Do It' campaign, National Geographic spread
- Suitable for: Sales proposal vision pages, brand manifesto, keynote turning points, mission/vision single pages
- Visual DNA: Full spread CSS gradient (warm orange→magenta/deep blue→cyan) or solid color bleed + white manifesto large text + hashtag slogan (#shifthappens). Heavy sans-serif all-caps slogan horizontals. Master slides: ① Full-width gradient + centered white manifesto ② Promised Land vision page ③ Client logo wall. Signature: full-bleed, white large slogan, hashtag slogan.
- HTML implementation: linear-gradient/radial-gradient full spread (no particles/light/shadow, pure CSS gradient is allowed); centered white text position; logo wall with grid grayscale SVG/text placeholder. Parts that relied on documentary photography are downgraded to CSS gradient background + large text, photo absence reduces fidelity by about 15%.
- Font: Archivo / Anton / Manrope (extra bold).

**Candy-Color Lecture Stage / CS50 Single Concept Candy Stage** `Bold · Fidelity 94%`
- Reference: Harvard CS50 (David Malan), Lessig Method/Takahashi method, Presentation Zen
- Suitable for: Educational courseware, tech lectures, concept explanation, code teaching
- Visual DNA: Deep black background #0A0A0A + high saturation candy color large text rotating (magenta #FF2D95/cyan #00E5FF/bright yellow #FFD500/green #39FF14). Sans-serif oversized font floating centered, one concept per screen, minimal text. Master slides: ① Deep black background single candy-colored large word ② Monospace code block syntax highlighted ③ Stage spotlight large text. Signature: Deep black floating candy-colored large text, monospace code highlighting, strong stage spotlight, minimal text.
- HTML implementation: Deep black background + single color oversized font clamp() centered; code block with pre + monospace font + span coloring for syntax highlighting; spotlight feel with very light radial-gradient vignette (not particle light effect). High fidelity.
- Font: Inter extra bold + JetBrains Mono (code).

**Playful Maximalist Editorial (Collins-style) / Playful Hand-drawn Minimalism** `Bold · Fidelity 75%`
- Reference: Mailchimp Brand Book (Collins 2018), New Yorker cartoon vibe, Cooper rounded serif, Cavendish fluorescent yellow
- Suitable for: Brand with attitude deck, creative agency proposal, culture-oriented town hall, anti-SaaS minimalism marketing pages
- Visual DNA: Cavendish fluorescent yellow #FFE01B large area + black + minimal clashing, anti-SaaS minimalism. Cooper-style rounded serif large titles (playful) + magazine-style whitespace composition. Master slides: ① Fluorescent yellow full background + whimsical title ② Magazine-style irregular whitespace layout ③ Large text playful copy. Signature: Fluorescent yellow, rounded serif, playful composition, whimsical hand-drawn vibe (downgraded to geometric color blocks/emoji substitutes for real illustration).
- HTML implementation: Fluorescent yellow background; rounded serif font-family; magazine whitespace with asymmetric Grid. Hand-drawn gorilla/illustration this core element cannot be done without AI image generation, downgraded to CSS geometric color blocks + large emoji + irregular transform rotated text blocks as substitute, illustration absence reduces fidelity by about 20%.
- Font: Fraunces (adjustable roundness) / Bree Serif substitute for Cooper; body Inter.

**Irreverent Pop (Reddit-style) / Uninhibited Playful Popular Version** `Bold · Fidelity 80%`
- Reference: Reddit Ads sales deck (listed by Dock as most distinctive), David Carson's uninhibited typography, 90s web retro, Memphis playful
- Suitable for: Gen Z brands, playful marketing deck, community/creator-oriented, willing to be unserious
- Visual DNA: Reddit orange-red #FF4500 + clashing, 90s web retro colors. Mixed/broken-grid David Carson-style typography, playful colloquial copy. Master slides: ① Fun page playful large text ② Facts page rhythmic turn serious data ③ Spoken title. Signature: Broken grid mixed composition, orange-red, playfully colloquial, fun→facts rhythm reversal, retro web texture.
- HTML implementation: Deliberately break grid with transform rotation/overlap positioning/mixed font sizes; orange-red + clashing color blocks; retro texture with thick black border + hard shadow box-shadow (no blur). Custom meme illustration downgraded to emoji + geometric collage, but mixed typography itself HTML can reproduce.
- Font: Archivo / Space Grotesk + mixed Inter for contrast.

**Maximalist 3D-Type (Wrapped-style) / Y2K Inflated Large Text** `Bold · Fidelity 78%`
- Reference: Spotify Wrapped 2022/2023/2025, Memphis clashing colors, Y2K/Maximalism, duotone portrait gradient
- Suitable for: Annual review (emotional viral), personalized data cards, social sharing vertical cards, brand year-end
- Visual DNA: High saturation clashing full spread background (magenta + cyan + orange) + Spotify green accent + duotone bicolor gradient. Dominating giant numbers, year/numbers with 3D inflated/metallic texture. Master slides: ① Clashing full spread + giant inflated number ② Duotone portrait/color block background + white large text ③ Vertical shareable card. Signature: Giant inflated 3D numbers, clashing full spread, duotone gradient, year metallic texture, vertical story card.
- HTML implementation: Clashing full spread background; 3D inflated numbers with CSS text-shadow multi-layer stacking + transform:perspective or SVG+stroke for dimension (not real 3D rendering); duotone with mix-blend-mode + gradient overlaid on grayscale image placeholder block. Metallic texture downgraded to gradient fill text background-clip:text, fidelity reduces by about 15%.
- Font: Archivo Black / Anton extra bold + numbers Clash Display.

#### Neutral

**Bento Grid / Bento Lunch Box Module Grid** `Neutral · Fidelity 95%`
- Reference: Apple Keynote Bento Grid era, new-generation MBB Bento/Big-Type deck (2024-2026), Stripe annual report indicator card matrix, Pitch.com QBR template
- Suitable for: Product feature summary, consulting/QBR data reporting, sales results pages, town hall indicator pages
- Visual DNA: Light gray/cream white background (#F5F5F7/cream) or near-black background + brand primary + 1-2 accent colors, card light color partitioned background + rounded corners + subtle stroke/subtle shadow. Oversized display titles + regular body text, strong weight contrast, KPI numbers tabular figures. Master slides: ① Title page giant single line + whitespace ② Bento page 2x2/3 column unequal height cards, each card one insight (number/linear icon/sparkline) ③ One-insight oversized number page. Signature: Unequal height card grid, rounded corners subtle stroke, breathing feel.
- HTML implementation: CSS Grid grid-template-areas for unequal height bento; card border-radius + box-shadow subtle shadow + 1px hairline; sparkline with inline SVG; linear icon with inline SVG stroke. Zero textures.
- Font: Inter / Geist + numbers Geist Mono.

**Dark Hairline Terminal / Neo-Swiss Dark Terminal Aesthetic** `Neutral · Fidelity 94%`
- Reference: Linear pitch deck, Vercel design language, CS50 deep black stage courseware; font Inter Tight + JetBrains Mono
- Suitable for: Developer tools/tech product launch, tech roadshow, engineering presentation
- Visual DNA: Near-black background (#0D0D0F/#111113) + hairline thin line #262629 grid + single purple-blue accent (#5B5BD6/#7C7CFF). Inter Tight large titles + JetBrains Mono for labels/data. Master slides: ① Minimal title page one sentence + mono label ② Hairline-separated data grid ③ Mono label feature list. Signature: 1px thin line grid, mono monospace labels, extreme whitespace, near-black not pure black.
- HTML implementation: Near-black background + border:1px solid hairline grid; mono labels with monospace font-family; subtle glow with very light box-shadow/border highlight not real light effect (downgraded to avoid cyber-neon restricted zone). Avoid #0D1117 deep blue restricted zone, use neutral near-black.
- Font: Inter Tight + JetBrains Mono / IBM Plex Mono.

**Two-Font Consulting (Bower-style) / Dual Font Consulting Version** `Neutral · Fidelity 90%`
- Reference: McKinsey 2019 brand system (designed by Wolff Olins, Bower serif + sans-serif), BCG Executive Perspectives, deep blue thin line pattern
- Suitable for: Consulting reports, executive presentations, industry research, authoritative proposals
- Visual DNA: Deep blue (#051C2C/McKinsey deep blue) × white binary + single brand color highlight (BCG green #00805A), warm gray background with breathing feel. Characterful serif large titles (Bower-style) and sans-serif body high contrast juxtaposition. Master slides: ① Upper-left conclusion-style action-title ② Blue thin line pattern decoration ③ Magazine-style left-right division (conclusion text + visual) ④ Large number data-point card. Signature: Serif × sans-serif high contrast, deep blue thin line pattern, action-title, warm gray premium feel.
- HTML implementation: Dual font font-family juxtaposition (serif titles + sans-serif body); thin line pattern with repeating-linear-gradient or SVG line; data-point card pure CSS; photo grayscale treatment this item can be omitted without photos. Blue-purple edge shimmer downgraded to flat color border.
- Font: Playfair Display / Fraunces serif titles + Inter body (substituting Bower).

**Diagram-Driven Isotype / Graph Arrow Enterprise Version** `Neutral · Fidelity 88%`
- Reference: Salesforce sales deck, Isotype (Otto Neurath) lineage, Gene Zelazny 'Say It With Charts', Hans Rosling/Gapminder
- Suitable for: Platform/architecture explanation, customer journey, process methodology, ecosystem map
- Visual DNA: Corporate blue color blocks + product line color differentiation + iconified capability grid. Clean sans-serif. Master slides: ① Horizontal customer journey arrow flow ② Layered platform architecture diagram ③ Iconified capability grid ④ 2x2/waterfall/pyramid structure diagram. Signature: Arrow flow, layered architecture boxes, Isotype icon grid, process as narrative.
- HTML implementation: Arrow flow with Flexbox + CSS clip-path triangle or SVG arrow; architecture layers with nested bordered divs; icons with inline SVG stroke uniform stroke; waterfall/pyramid with Grid + skew. Bubble charts with CSS circles + positioning. Pure vector drawing.
- Font: Inter / IBM Plex Sans (chart-friendly).

**Diagrammatic Minimalism / Single Diagram Concept Illustration** `Neutral · Fidelity 95%`
- Reference: Simon Sinek Golden Circle TED, Bauhaus geometric abstraction, information architecture 'one diagram settles it all'
- Suitable for: Theoretical framework explanation, TED-style thought dissemination, model/methodology visualization, single concept keynote
- Visual DNA: Minimal white/light background + black + 1 accent color, geometric flat colors. Sans-serif, labels uppercase embedded in graphics. Master slides: ① Single geometric master diagram (concentric circles/triangle/matrix) carries all concepts ② Inside-out arrows ③ Comparison cases. Signature: Single geometric master diagram, nested concentric circles/triangle, uppercase labels, one diagram carries concept.
- HTML implementation: Concentric circles with border-radius:50% nested div or SVG circle; triangle with clip-path/SVG polygon; arrow SVG marker; labels absolute positioning on graphic. Pure geometry, HTML perfect reproduction.
- Font: Manrope / Futura series (Jost open-source substitute) geometric feel.

**Narrative Sparkline (Duarte-style) / Sparkline Narrative Waveform** `Neutral · Fidelity 91%`
- Reference: Nancy Duarte 'Resonate' Sparkline narrative map, Al Gore 'An Inconvenient Truth', Duarte Inc. data storytelling
- Suitable for: Presentation structure design, change narrative, before/after comparison, data story arc
- Visual DNA: Dark or white background + brand orange emphasis turning point + grayed comparison. Sans-serif, annotation markers. Master slides: ① Oscillating waveform line across full screen ② Text annotation on waveform ③ Top-bottom juxtaposed comparison waveform ④ All black background solitary data line ⑤ Step-by-step reveal. Signature: Cross-screen waveform line, waveform annotation points, orange turning point, comparison waveforms, curve climbing out of frame.
- HTML implementation: Waveform line with inline SVG path (smooth Bezier); annotation points with SVG circle+text positioning; comparison waveform top and bottom two paths; reveal with CSS animation stroke-dashoffset. Pure SVG drawing zero assets.
- Font: Inter + numbers Geist Mono.

#### Quiet

**Assertion-Evidence / Tufte Information Design** `Quiet · Fidelity 93%`
- Reference: Michael Alley Assertion-Evidence (Penn State empirical), McKinsey/BCG action-title, Edward Tufte data-ink ratio, Barbara Minto Pyramid Principle
- Suitable for: Academic/engineering presentations, data-rigorous consulting pages, policy research reports, technical reviews
- Visual DNA: White/very light gray background + black body + single restrained accent color (deep blue/brick red). Full-sentence title (not noun phrase), single chart under title, text annotations embedded in chart. Master slides: ① Full-sentence action-title ② Single chart evidence under title ③ Zero bullets. Signature: Full-sentence title, single chart evidence, embedded annotations, zero chartjunk, high data-ink ratio.
- HTML implementation: Full-sentence title via typographic hierarchy; charts with pure CSS/inline SVG minimal line/scatter (no grid lines no legends, annotations directly text positioned next to data points); zero decoration. Tufte's restraint is HTML's strength.
- Font: Source Serif / Lora titles + Inter body (dual font reading level).

**Institutional Swiss Minimal / Swiss Institutional Minimalism** `Quiet · Fidelity 96%`
- Reference: Sequoia official 10-page pitch template, Airbnb 2009 seed round deck, Muller-Brockmann grid, Massimo Vignelli
- Suitable for: Investment roadshow, standard business proposals, problem-solution narrative, brand unadorned proposals
- Visual DNA: Pure white background + black gray body + single brand accent color (Airbnb coral red #FF5A3C/neutral blue). Helvetica series sans-serif, titles medium bold one sentence, body short sentences large spacing. Master slides: ① Centered logo + slogan ② Top one-sentence title bar + bottom 3-column alignment (Problem/Solution three points) ③ TAM large number layered ④ 2x2 competitor matrix. Signature: Top title bar, three-column alignment, single color accent, 2x2 matrix.
- HTML implementation: Flexbox three-column alignment; 2x2 matrix pure CSS Grid + border drawing; TAM layers with nested div or concentric blocks; one page one message. Almost pure typographic grid, HTML ideal target.
- Font: Inter / Helvetica Now substitute for Helvetica; body Inter.

**Editorial Longform / Magazine Long-form Reading Flow** `Quiet · Fidelity 95%`
- Reference: Stripe Annual Letter ($1.9T), Amazon six-page narrative memo, Benedict Evans 'X eats the world', Stripe Press
- Suitable for: Annual letter/review narrative, deep thought long-form, internal updates, research report-style reading material
- Visual DNA: Cream white/beige background (#FBFAF8) + deep ink text + brand color accent (Stripe purple #635BFF). Serif or high-quality sans-serif, essay-style paragraphs + inline data cards, oversized display numbers interspersed. Master slides: ① Masthead large title ② Multi-column prose + inline metric card ③ Oversized number paragraph anchor. Signature: Publication reading rhythm, inline data cards, restrained whitespace, essay-style not bullet.
- HTML implementation: Multi-column column-count or Grid; inline data cards float/inline-block embedded in body; serif body max-width line width 65ch; oversized numbers interspersed. Pure typography, zero assets.
- Font: Newsreader / Source Serif body + Inter auxiliary; numbers tabular.

**Humanist Rounded Cards (Khan-style) / Humanistic Rounded Corner Cards** `Quiet · Fidelity 80%`
- Reference: Khan Academy Wonder Blocks design system, Source Serif Pro serif, forest green brand, friendly humanism
- Suitable for: Education products, friendly courseware, non-profit/non-profit decks, warm brand proposals
- Visual DNA: Forest green #14BF96/#0A5C4B + cream white background + warm auxiliary colors, soft not glaring. Source Serif serif titles (humanistic) + sans-serif body. Master slides: ① Rounded card component group ② Serif titles + friendly body ③ Real photography position (downgraded to green geometric/round color blocks). Signature: Forest green, serif titles, large rounded cards, humanistic warmth, imperfect friendly texture.
- HTML implementation: Large border-radius rounded cards + soft box-shadow; serif titles font-family; warm cream white background. Real teacher-student photography without AI image generation, downgraded to green geometric illustration blocks/large rounded flat color placeholders + emoji characters, photo absence reduces fidelity by about 18%.
- Font: Source Serif 4 titles + Nunito Sans / Inter body (Nunito rounded echoes humanism).

**Dense Research Report (Meeker-style) / Research Report Dense Charts** `Quiet · Fidelity 92%`
- Reference: Mary Meeker 'Internet Trends' (BOND), CB Insights 'State of AI', McKinsey Global Institute 'Year in Charts', FT/Bloomberg data journalism
- Suitable for: Trend research reports, industry data review, dense data presentations, market maps
- Visual DNA: White background + brand color (BOND/CB Insights bright blue #0066FF) stair-step monochrome highlight rest grayed, almost zero whitespace. Conclusion-style sentence titles, one chart per page density, minimal source footnotes. Master slides: ① Conclusion sentence title + full-page single chart ② Logo grid market map ③ Large number KPI cards ④ Dense multi-chart grid + footnotes. Signature: Conclusion-sentence title, zero whitespace research report feel, monochrome stair-step highlight, logo market map, source footnote standard.
- HTML implementation: Dense charts all with pure CSS/inline SVG (bar/line/stack/scatter); logo market map with Grid + text/SVG placeholder cells; KPI cards CSS; footnotes small text. Extreme information density is HTML's strength, zero assets.
- Font: Inter + IBM Plex Sans + numbers tabular Geist Mono.

**All-Text Manifesto (Netflix/Amazon-style) / Pure Text Declaration Memo** `Quiet · Fidelity 97%`
- Reference: Netflix Culture Deck (2009, 125 pages), Amazon six-page narrative memo (Bezos), Tufte anti-PowerPoint advocacy, Matthew Carter reading-level typography
- Suitable for: Culture manifesto, values presentation, deep memo, anti-PPT pure document presentation
- Visual DNA: Pure white or pure black background + single accent color (Netflix red #E50914) as only highlight, extreme restraint. Reading-level typography, one page one insight aphorism assertion / pure prose zero bullet zero image. Master slides: ① Full spread background + aphorism assertion ② Conversational candid paragraphs ③ Institutional term highlighting (Keeper Test) ④ Six-page prose + appendix table. Signature: Pure text one page one insight, zero image zero bullet, single color highlight aphorism, conversational candor, silent-read document feel.
- HTML implementation: Pure typography: aphorism with clamp() large font left-aligned hierarchy; prose max-width line width control; single accent color span highlighting key phrases; appendix with minimal table. Zero assets zero images, pure text is HTML's most reliable reproduction.
- Font: Newsreader / Source Serif (reading level) or Inter (declarative); titles can be Archivo extra bold.

---

## ⚠️ AI Image Generation Exclusive Styles (Only recommended when user has image generation capability, not selectable by default)

The soul of the following styles lies in **dynamic generated visuals / 3D / particles / cinematic lighting / hand-drawn illustration**. Under pure HTML/CSS without image generation, they can only produce severely degraded mockups, **removed from the default recommendation pool**. Only consider as candidates when the user explicitly has image generation capability (via `huashu-gpt-image`):

| Style | Soul | Why HTML can't do it |
|------|------|------------------|
| Active Theory (WebGL particles) | 3D particle system/real-time rendering | Pure CSS cannot |
| Field.io (generative art) | Algorithm-generated graphics | Static SVG can only produce rigid simplified versions |
| Resn (illustration interaction) | Character illustration + gamification | Depends on hand-drawn assets |
| Zach Lieberman (real-time generation) | Creative coding strokes | Depends on real-time generation |
| Raven Kwok (fractal parameters) | Recursive fractals | CSS can't achieve complexity |
| Ash Thorp (cinematic lighting) | Cinematic volumetric light/concept art | CSS lighting is degraded |
| Territory Studio (FUI holographic) | Sci-fi holographic interface | Depends on many layered glow assets |
| Neo Shen (ink wash diffusion) | Ink wash organic diffusion | CSS gradient ≠ ink wash |
| Sagmeister & Walsh (color explosion) | Handmade physical objects + experimental typography | Clashing skeleton can be done (merged into web "Memphis" and PPT "Mono clashing poster"), handcrafted texture cannot be reproduced |

> These styles aren't "bad" — they're "wrong medium." Their native medium is AI direct output images, not the browser DOM.

---

## Default Aesthetic Restricted Zone (Users can override per their brand)

- ❌ **GitHub-dark lazy solution**: Uniform deep blue background (#0D1117) + generic cyan/purple neon glow — only this one overused combination, not "all dark colors banned"
- ✅ **Not restricted**: Cinematic dramatic lighting, warm-toned cyber (Ash Thorp orange/cyan), sports poetics dark-field narrative — dark colors with authorial intent are retained (this library's "Linear dark glow," "Black background number theater," "CS50 candy stage" are all legitimate dark styles)
- ❌ Aggressive purple gradient universal formula, emoji as icons, rounded cards + left color border accent (unless the brand itself uses it)
- ❌ Personal signature/watermark on cover images

---

## Prompt Tips When Image Generation Is Available (Mood, Not Layout)

> Only applicable when using AI image generation path; for HTML path, just code per each style's "HTML Implementation."

Short prompts > long prompts. Describing mood and content is more effective than stacking 30 lines of layout details.

| Diversity-killing approach | Creativity-inspiring approach |
|----------------|----------------|
| Specifying color ratios (60%/25%/15%) | Describing mood ("warm like Sunday morning") |
| Specifying layout position | Referencing specific aesthetic ("Pentagram editorial feel") |
| Listing all visual elements | Describing what the audience should feel |

Complete AI image generation methodology → `huashu-gpt-image` skill.

---

**Version**: v3.0 (2026-06 full refactor to HTML native 40-style library)
**Applies to**: All visual design's default HTML path for web/PPT/PDF/infographic/cover/App etc.
