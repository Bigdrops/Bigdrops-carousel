# v5 · "Markdown is the new typewriter."

> Director's Notes for the **huashu-md-html v2.0** launch film
> 30 seconds · 1920×1080 · 25 fps · no voiceover
> Director: huashu-design (acting as Apple-tier launch film director)
> Composer: TBD (target: Max Richter / Ólafur Arnalds / Jóhann Jóhannsson minimal-cinematic register)
> Color base: ivory white #FAFAF6 · ink #1A1A1A · terracotta #C2410C
> Type: Newsreader (display + body) · JetBrains Mono (interface) · Noto Serif SC (中文)

---

## Table of Contents

- [Part I · Director's Statement](#part-i--directors-statement)
- [Part II · Visual System](#part-ii--visual-system)
- [Part III · Story Arc](#part-iii--story-arc)
- [Part IV · Shot-by-Shot Storyboard](#part-iv--shot-by-shot-storyboard)
- [Part V · Production Manifest](#part-v--production-manifest)

---

# Part I · Director's Statement

## 1.1 This Is Not a "Feature Introduction Video"

Most SaaS upgrade videos all make the same mistake — treating the camera like a PPT. Open → 6 features slide by → logo + slogan → end. Every second is "showing," not a single second is "telling." Viewers leave remembering not the product, but "yet another page that looks AI-generated."

**This film will not do this.**

We're going to tell a story. A story just one line long:

> **"md is the source code. Everything else is product."**

This isn't a slogan, it's a worldview. Markdown isn't "a lightweight document format" — it's the source of writing. All downstream forms (html, docx, pdf, epub) are products derived from this same source. huashu-md-html v2.0 extends this product chain from 4 to 6 — but what's being extended isn't a "feature list," it's the **radius of the source's influence**.

If viewers remember only one thing after watching this film, I hope it's this: "So md is the real source code." Whatever features they remember are bonus.

## 1.2 A Dialogue of Visual Language Context

Every good promotional film is in dialogue with a set of predecessors. The context I want this film to converse with:

**Apple — "Designed by Apple in California" (2013)**

That film is, in my eyes, the ceiling of tech company promotional films. Director Mark Romanek got three things right:
1. **Pure white background + serif typeface** — tells the audience this is a "film about design," not a demo
2. **Slow pacing** — every subtitle lingers half a beat slower than the audience's reading speed, forcing them to stay
3. **Jony Ive's narration is almost a whisper** — not selling, sharing

Our film has **no voiceover**, so the first two principles need to be amplified to 200% through typography and timing.

**Apple Silicon Launch Films (M1 / M2 / M3, 2020-2024)**

This series of short films taught me that **typography can dance too**. The three characters "M1" can go from vanishing, to appearing, to enlarging, to rotating, to exploding into dust, to reassembling — the audience watches a logo become the protagonist of a dance drama in 30 seconds.

**This film's hero is not the product UI, but the two characters `md.` + an orange period**. It must become the dance drama's protagonist in 30 seconds.

**Anthropic Brand Language (2024-2026)**

Anthropic turned "terracotta + serif + geometric abstraction" into the anti-slop template for AI companies. It tells the industry: you can be a tech company, but you can also look like a little philosophy book published by Penguin Classics.

We inherit this palette. But we do it **more restrained** — Anthropic occasionally uses solid terracotta as large color blocks; our terracotta is always only an accent (< 8% of total frame area), leaving the remaining 92% for ivory white and ink black.

**Penguin Classics (from 1947, after Romek Marber's 1961 grid)**

Penguin taught me **typographic courage**. A book cover can be large-size serif + a single black horizontal line + no illustration — and readers stop anyway.

The slogan reveal at seconds 25-29 borrows this language: **ONE SOURCE.** and **SIX FORMS.** are not "decorative text" — they are the frame itself.

**Pentagram (Paula Scher / Michael Bierut)**

Pentagram's signature is **information architecture** — the distance between text and text, text and boundary, the size ratios between type hierarchy levels — none of it is "by intuition," it's math.

Our grid system (Part II.3) comes from this tradition.

**Kenya Hara — "White" (2008)**

Hara wrote: "White is not a color, it's a sensibility." (白は色彩ではなく、感受性なのだ)

This film's true protagonist is not `md.`, but the **expanse of ivory white** that surrounds it. Every shot must leave at least 60% negative space. Negative space isn't "not yet filled" — it is the content itself.

**Massimo Vignelli — Modernism in design**

Vignelli's 8-word motto: "If you can design one thing, you can design everything."

Our design system does not allow "adding a font on the fly for this shot" or "making up a corner radius for this shot." All 12 shots share the same set of 5 color values, 3 typefaces, and 4 easing curves.

## 1.3 Audience Profile

Three types of audience, ranked by importance:

**Primary A · Existing huashu-md-html v1 users (~60% of traffic)**

They open the film to know "what's new." Our promise to them: within 30 seconds, you must clearly know —
- New capability 5: md → publication-grade PDF
- New capability 6: md → standard EPUB
- The visual quality of these two capabilities is higher than expected (not "I could do this with wkhtmltopdf" level)

→ Shots 08 and 09, 3 seconds each, must have a "★ NEW" label + destination cards must show **visible professional-grade details** like "printer's crop marks" and "Apple Books frame" — so existing users instantly get "this isn't filler, it's properly done."

**Secondary B · AI-native creators who've heard of huashu-md-html but haven't used it (~25%)**

They care about "what does this skill have to do with me." Our promise to them: within 30 seconds, you must realize —
- When you write articles / do research / create whitepapers, **md should be your source of truth**
- 6 downstream formats, solved with one command

→ Shot 04 (any → md) should show them PDF/DOCX/PPTX/XLSX/HTML all being absorbed by md — this is the visual embodiment of "source thinking."

**Tertiary C · Designers / editors / publishers unfamiliar with the product (~15%)**

They see a "beautiful tech short film" and may not follow up. Our promise to them: within 30 seconds, you must come away with the impression —
- This company's work **has publishing house taste**
- It's different from the AI tools you've seen before

→ The entire film's anti-AI slop checklist (Part II.7) is made for them. No purple gradients, emoji icons, or hand-drawn SVG characters — none appear.

## 1.4 Rhythm Philosophy

Apple promo films are not uniform in speed. They follow a **slow — accelerate — peak — decelerate** curve (see Part III emotional arc chart).

Specific to this film:

- **0-3s slow**: Audience enters. Typography breathes character by character.
- **3-6s first acceleration**: md character is born, 6 file cards fly in one after another.
- **6-22s second acceleration**: 6 capabilities executed in one breath, each 3 seconds without letting go.
- **22-26s peak**: slogan two-line reveal, all chrome pulses in sync.
- **26-30s deceleration**: capability map slowly fades in, final second reserved for brand stamp + faint piano reverb.

**Key decision**: Second 22 is this film's climax point (not second 29). Second 29 is resolution, 22 is climax. Don't mix these two.

## 1.5 What This Film **Does Not** Do (Anti-AI Slop Checklist)

Ranked by importance:

| Don't | Reason |
|------|------|
| No purple gradients | The universal formula for "tech feeling" in training data — by 2026 it's cyber slop |
| No emoji as icons | The disease of "use an emoji when you can't design" |
| No drawn SVG people / hands / abstract figures | AI-drawn SVG figures always have misaligned features and bizarre proportions |
| No Inter/Roboto/Arial for display | Too common, collides with system fonts |
| No cyber neon / deep blue backgrounds #0D1117 | Overused clone of GitHub dark mode aesthetic |
| No stacking effects (blur/glow/particle) | An effect twice is decoration, three times is slop |
| No Lorem ipsum | Every dummy text uses real readable content (including hooks like "md is the source. Anything else is product.") |
| No stock photos | No real photographs appear in the entire film (it's about typography, not lifestyle) |
| No progress bars + timecodes + copyright credit bars | These are player chrome, not content chrome — they'll conflict with external players |
| md character doesn't look the same in every scene | It must have 12 states across 12 shots, while maintaining the same core glyph |

## 1.6 One-Sentence Positioning

> **"Markdown is the new typewriter."**
>
> A 30-second film about source-of-truth thinking, made for designers who write and writers who design.

---

# Part II · Visual System

## 2.1 Complete Color Palette

Not 3 colors, but 10. Every color has a **functional definition** (not "it looks nice so we use it").

```
Name            HEX        Role                           Max frame coverage
─────────────────────────────────────────────────────────────────────
Ivory paper    #FAFAF6    Primary background (ivory white, a touch of warmth)    60-70%
Mist           #F2EDE4    Secondary background layer (subtle dark under card shadow)    < 15%
Mica           #E6E1D6    Fine lines / separators / card borders          < 5%
Smoke          #6B6B6B    Secondary text / metadata             < 5%
Cinder         #3D3530    Secondary dark (deep brown-black, not pure black)       < 10%
Ink            #1A1A1A    Primary black / primary text                    20-25%
Charred        #2A2620    Extremely deep brown-black (cover card only)            < 5%
Terracotta     #C2410C    Primary accent (Anthropic tone)         5-8%
Terra Hot      #E55D21    Highlight variant (only for NEW label flash) < 1%
Terra Deep     #8B2D08    Shadow variant (terracotta projection)         < 1%
```

**Iron Law**:
- No color outside the 10 above appears in any shot. **No "let's add a cool gray for this shot."**
- Terracotta series (Terracotta + variants) total < 10% of frame, otherwise visual overload.
- Any text can only use 1 of 4 colors: Ink / Cinder / Smoke / Terracotta.

## 2.2 Typography System

```
Size Level      Font                weight    Usage                       Letter-spacing (em)
────────────────────────────────────────────────────────────────────────────────────
Display XXL    Newsreader            700       slogan top word (200px)         -0.035
Display XL     Newsreader            700       capability number (48px)   -0.020
Display L      Newsreader            600       hero md characters (300-480px)   -0.040
Display M      Newsreader            600       chapter title (32-44px)     -0.015
Body L         Newsreader            400       essay body (18-22px)         0
Body M (zh)    Noto Serif SC         500       Chinese sub-line (20-26px)     +0.04
Italic         Newsreader italic     400       quotes, subtitles                   +0.01
Mono S         JetBrains Mono        500       labels / capability counter   +0.18
Mono XS        JetBrains Mono        700       NEW / version chip (11-14px) +0.22
Caret          (block 3px wide)      —         typing cursor               —
```

**Font loading strategy**:
- Google Fonts preconnect `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- Single `<link>` request combines all weights, reducing round-trip
- Before recording MP4, must wait for `document.fonts.ready` to complete before starting timer (Stage already implements this)

## 2.3 Grid System

**Main canvas**: 1920 × 1080

**Outer margins (safe zone)**: 80px top, bottom, left, right

**Main content area**: 1760 × 920

**12-column grid**: column-width = 132px, gutter = 16px

**Baseline grid**: 8px base rhythm. All vertical positions must be multiples of 8 (unless there is a special visual reason).

**Golden ratio anchor points**:
- Upper 1/3 line: y = 360
- Lower 1/3 line: y = 720
- Center line: y = 540 (hero md default anchor)
- Golden ratio upper: y = 412
- Golden ratio lower: y = 668

**Key safe zones**:
- Within top 60px: chrome element area (capability counter, version chip)
- Within bottom 60px: watermark / metadata area
- Central 800×600 region: main content zone (every shot's hero element must fall within this area)

## 2.4 Animation System

**Easing library** (4 curves total, all others forbidden):

```
Name           Curve formula                      Usage
──────────────────────────────────────────────────────────────────
expoOut       1 - 2^(-10t)                       Default ease (90% of entrances use this)
overshoot     cubic-bezier(0.34, 1.56, 0.64, 1)  NEW label pop / button emergence
linear        t                                   Base color fade / paper texture movement
expoIn        2^(10(t-1))                        Exit ease (10% of exits use this)
```

**Duration dictionary**:

```
Event type                  Duration      Notes
────────────────────────────────────────────────────────
Character stagger           30-50ms       Typing effect / slogan characters appear one by one
Small element entry         300ms         file card / pill / chip
Medium element entry        500ms         destination card / capability number
Hero element entry          700-900ms     md character morph
Slogan character entry      800ms         "ONE SOURCE." as a whole
Scene transition            300ms overlap cross-dissolve + scale
Exit                        200-300ms     Exit is always faster than entry
```

**Stagger rule**:
- When multiple elements enter simultaneously, adjacent elements delay 30-80ms (not 0, and not exceeding 100ms)
- 6 pills entering: cumulative stagger 250ms (50ms each)
- Slogan characters entering: cumulative stagger 280ms (~30ms × 10 characters)

**Scene transitions**:
- Always **cross-dissolve + soft scale** (no hard cuts)
- Previous shot within last 300ms: opacity 1 → 0, scale 1 → 0.96
- Next shot within first 300ms: opacity 0 → 1, scale 1.04 → 1
- Two shots overlap 300ms (on timeline, previous end is 0.3s later than next start)

## 2.5 Chrome Elements (Run Through Entire Film)

These are **small persistent items on screen** that provide the feeling of "this is a complete film."

**Chrome A · top-left · capability counter (00-22s)**

```
   ┌─────────────┐
   │  ●  CAP·01  │     pulse dot (terracotta) + label
   │  ●●●●○○○○○  │     6-dot progress (filled = current)
   └─────────────┘
```

- Font: JetBrains Mono 12px, letter-spacing 0.24em
- Color: Ink for label, Terracotta for current dot, Mica for upcoming dots
- Animation: each time scene changes, next dot goes from hollow → filled (500ms expoOut)

**Chrome B · top-right · version chip (02-30s)**

```
   ╔═════════════════════════╗
   ║ ● HUASHU-MD-HTML · v2.0 ║
   ╚═════════════════════════╝
```

- Font: JetBrains Mono 13px Bold, letter-spacing 0.22em
- Color: Terracotta dot + Ink label
- Entry: at 02s, entire fade-in 600ms
- Pulse dot: very subtle breathing every 4 seconds (opacity 1 → 0.6 → 1, 1500ms ease-in-out)

**Chrome C · bottom-center · timeline ticker (07-22s)**

```
   any→md  ━━━━●━━━━━━━━━━━━  md→html  ─  html→md  ─  md→docx  ─  md→pdf  ─  md→epub
```

- Font: JetBrains Mono 11px, letter-spacing 0.18em
- Current capability uses Terracotta + bold, others use Smoke
- A horizontal line connects 6 names, progress dot (●) slides from left to right over time
- Entry: at 07s, entire bar fade-in 500ms

**Chrome D · bottom-right · watermark (persistent)**

```
   CREATED BY HUASHU-DESIGN
```

- Font: JetBrains Mono 10px, letter-spacing 0.24em
- Color: rgba(26,26,26,0.32)
- Completely static, no motion

**Chrome E · Extremely subtle paper texture (persistent)**

- SVG noise + very slow 0.3% scale breathing
- opacity ≤ 0.04
- Almost invisible during recording, but gives the frame a sense of "breathing"

## 2.6 Audio System

### BGM Direction (30-second segmented curve)

```
Intensity
 │                            ╱╲
1│                          ╱╱  ╲╲
 │                       ╱╱      ╲╲
 │                    ╱╱             ╲
 │                ╱╱                   ╲
 │            ╱╱                          ╲
 │       ╱╱                                  ╲
 │   ╱╱                                          ╲
0└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴
   0  2  4  6  8 10 12 14 16 18 20 22 24 26 28 30s
   │  │     │              │           │  │
   entry│   strings in │      rhythmic pulse joins  │ peak │  decay
      piano                              swell
```

**Layers (each layer 30s continuous, intensity controlled by envelope)**:

- **L0 · Room tone** (00-30s): Very subtle background noise, gives the frame a breathing sense of "not dead silence"
- **L1 · Piano single note** (00-08s): Single piano note strikes continuously, every 1.2 seconds, slowly accumulating
- **L2 · Piano arpeggio** (03-22s): Piano arpeggio enters, gives a "picking up rhythm" feeling
- **L3 · Cello drone** (08-22s): Low-frequency strings lay the foundation, giving "weight"
- **L4 · Pulse** (15-22s): Very subtle sub-kick, 4/4 rhythm (not dance beat, cinematic pulse)
- **L5 · String swell** (22-26s): Full string section swells up to climax
- **L6 · Decay + reverb tail** (26-30s): All layers decay, leaving piano + reverb

**Style target**: Max Richter's *On the Nature of Daylight* + Ólafur Arnalds' *Re:member* + Jóhann Jóhannsson's *Orphée*

### SFX Dictionary

```
Cue                          Time        Type               Volume
────────────────────────────────────────────────────────────────────
keyboard click               00.5-02.0   keypress × 12     -18dB (each 30ms)
cursor blink                 02.0-02.8   subtle tick        -28dB
md morph swell               02.8-03.2   soft whoosh + bloom -16dB
file card whoosh × 6         05.5-08.0   short whoosh       -20dB (each 200ms)
absorb / ink drop             08.0-08.4   "absorb" splash    -16dB
paper rustle                 08.5-09.0   paper turn         -22dB
chime: capability 02 →        09.0       single chime tone  -18dB
chime: capability 03 →        12.0       single chime tone  -18dB
chime: capability 04 →        15.0       single chime tone  -18dB
chime: NEW (05)               18.0       double chime + glow -14dB
chime: NEW (06)               21.0       double chime + glow -14dB
build sweep                  22.0-22.6   ascending sweep    -10dB
impact (slogan ONE)          22.6        deep impact         -8dB
impact (slogan SIX)          23.4        deep impact         -8dB
pen flourish                 24.0-24.4   pen on paper        -22dB
final stamp / sign-off       29.0-29.5   ink stamp           -14dB
```

**SFX frequency band isolation** (preventing mutual interference):
- BGM occupies low frequencies (40Hz-2kHz)
- SFX whooshes / chimes occupy mid-high frequencies (2kHz-8kHz)
- SFX impacts occupy low sub (40Hz-120Hz) — overlaps with BGM cello but BGM simultaneously ducks -3dB

## 2.7 Anti-AI Slop Checklist (per-shot)

Every shot must pass this checklist before execution:

```
□  No purple (any saturation)
□  No rounded card + left border accent combination (except destination card's honest mica border)
□  No emoji as icon
□  No SVG-drawn people / abstract figures
□  No color outside Part II.1 palette
□  No Inter / Roboto / Arial for display
□  Letter-spacing, line-height, font-size all from Part II.2 Typography System (no values set "by feel")
□  Vertical position is a multiple of 8 (except for deliberate visual reasons)
□  Terracotta in this shot < 10% of frame
□  This shot has at least one "worth screenshotting at pause" detail (120% signature)
□  Transition from previous shot to this one is cross-dissolve + scale, not hard cut
□  This shot visually "makes room" for the next shot (not "frame filled all the way to the end")
```

---

# Part III · Story Arc

## 3.1 Three-Act Structure

**ACT I · SET-UP (00.0 — 06.0s)**

Audience enters the frame. The question is posed: what is source of truth?

- SHOT 01 (0.0-1.5s) · BLANK PAGE
- SHOT 02 (1.5-3.0s) · THE CURSOR
- SHOT 03 (3.0-5.0s) · THE TRANSFORMATION
- SHOT 04 (5.0-6.0s) · entering gathering (overlaps with ACT II)

**ACT II · ESCALATION (06.0 — 22.0s)**

The answer unfolds: md is the source. It radiates 6 product chains outward.

- SHOT 04 (5.0-8.5s) · GATHERING（any → md）
- SHOT 05 (8.5-11.5s) · FIRST FLOWER（md → html）
- SHOT 06 (11.5-14.5s) · REVERSE FLOW（html → md）
- SHOT 07 (14.5-17.5s) · PUBLISHER GRADE（md → docx）
- SHOT 08 (17.5-20.5s) · ★ NEW · PRINT（md → pdf）
- SHOT 09 (20.5-22.5s) · ★ NEW · EBOOK (md → epub, overlaps with ACT III by 0.5s)

**ACT III · PAYOFF (22.5 — 30.0s)**

Theme ascends. Slogan appears. Brand stamp.

- SHOT 10 (22.5-24.0s) · THE CONVERGENCE
- SHOT 11 (24.0-26.5s) · ONE SOURCE.
- SHOT 12 (26.5-29.0s) · SIX FORMS.
- SHOT 13 (29.0-30.0s) · SIGN-OFF

## 3.2 Emotional Arc

```
Emotional intensity
 │                                       ╔═══╗
 │                                    ╔══╝   ╚══╗
 │                              ╔═════╝         ╚══╗
 │                          ╔═══╝                   ╚══╗
 │                       ╔══╝                          ╚══╗
 │                   ╔═══╝                                 ╚════════╗
 │             ╔═════╝                                              ╚══╗
 │       ╔═════╝                                                       ╚══
 │  ╔════╝
 │══╝
 0──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──>
    0     2     4     6     8    10    12    14    16    18    20    22    24    26    28    30s
    │     │     │            │           │            │            │     │     │
    blank cursor morph      gather       cap 02-04   cap 05/06 ★  slogan slogan sign-off
                                                                  ONE   SIX
                                                                  ──────►
                                                                  PEAK 24.5s
```

**Key emotional beats**:
- **02.0s**: first keyboard click → audience enters
- **03.0s**: md character is born → first "awe"
- **08.0s**: 6 file cards converge into md → "ah, so md is the source" first click
- **18.0s**: first NEW label appears → existing users "oh"
- **22.5s**: all chrome converges, preparing to enter Act III → tension build-up peak
- **24.5s**: SIX FORMS. lands → emotional climax
- **30.0s**: md stamp quietly rests → resolution

---

# Part IV · Shot-by-Shot Storyboard

Format for each shot:

```
SHOT NN · NAME
[TIMECODE]  |  FUNCTION
[VISUAL]     Frame composition
[TYPE]       Typography precise spec
[ANIM]       Each element in/out/easing/delay
[AUDIO]      music beat + SFX cue
[CHROME]     Four-corner element states
[ANTI-SLOP]  Checklist items passed
[WHY]        Continuation + progression
```

---

## SHOT 01 · "BLANK PAGE"

**[TIMECODE]** 00.00 — 01.50s (1.5s) `|` **FUNCTION** Opening. Leads the audience in. Gives "emptiness" its time.

**[VISUAL]**

The entire 1920×1080 is Ivory paper #FAFAF6. **There is nothing in the frame**.

The only presence: an extremely subtle paper texture (SVG noise + 0.3% scale very slow breathing), almost invisible, yet it gives the frame the subconscious feeling of "this is a real piece of paper."

Composition: completely empty. This is "white" in the Kenya Hara sense — not "not yet painted," but "content itself."

**[TYPE]** No text.

**[ANIM]**

- 0.00s · paper texture opacity from 0 → 0.04 (500ms linear)
- 0.50-1.50s · entire frame hold, no motion. Let the audience's eyes adjust to this white.
- 1.40-1.50s · a cursor position starts to emerge at center-left (x=860, y=540) (transparent, will only appear in next shot)

**[AUDIO]**

- BGM: room tone enters (300ms fade-in to -38dB)
- SFX: none

**[CHROME]** All hidden. Chrome A/B/C/D/E have not yet appeared.

**[ANTI-SLOP]**

- ✅ No logo, no "Loading...", no brand upfront
- ✅ No gradients, no effects
- ✅ This shot's "pause-and-look" signature: frame has texture (paper texture) but never steals the show

**[WHY]**

Apple's "Designed by Apple in California" also opens this way — giving emptiness its time. It tells the audience "this film needs you to slow down." If the opening piles on logos and chrome, the audience's attention scatters and can't be recovered for the remaining 30 seconds.

These 1.5 seconds are among the most important 1.5 seconds of this film.

---

## SHOT 02 · "THE CURSOR"

**[TIMECODE]** 01.50 — 03.00s (1.5s) `|` **FUNCTION** Typewriter is born. First content.

**[VISUAL]**

At frame center-left (x=860, y=540), a vertical black block (3px × 56px, Ink #1A1A1A) starts blinking. This is the cursor.

After blinking twice (0.7s cycle × 2), characters begin to appear one by one behind the cursor: `# markdown.md`, font JetBrains Mono 56px, color Ink #1A1A1A, letter-spacing -0.01em.

Each keystroke triggers a keyboard click sound. After the last character (13 total), the cursor blinks once more after `.md`.

**[TYPE]**

- Text: `# markdown.md`
- Font: JetBrains Mono 500 weight
- Size: 56px
- Color: Ink #1A1A1A
- Letter-spacing: -0.01em
- Position: horizontal center, y = 540 (baseline, text vertical center slightly below this)

**[ANIM]**

- 01.50s · cursor block opacity 0 → 1 (200ms)
- 01.50-01.85s · cursor blink first (off 200ms / on 200ms)
- 01.85-02.20s · cursor blink second
- 02.20-02.85s · 13 characters staggered, each 50ms apart (total 650ms), each character fades + 1px slide-down (180ms expoOut)
- 02.85-03.00s · cursor blinks once more at the end (final, marking input complete)

**[AUDIO]**

- BGM: piano first note strikes at 01.50s (-22dB)
- SFX: keyboard click × 13 (one per character, -18dB, 30ms each)
- SFX: 200ms silence after final cursor blink (making room for next shot's morph)

**[CHROME]** Still hidden.

**[ANTI-SLOP]**

- ✅ Cursor is not sci-fi blinking (not 0.1s hyper-fast blink), it's a realistic simulation of macOS terminal cursor rhythm
- ✅ Typing is not "all characters appear at once," it's truly rhythmic typing
- ✅ Font is JetBrains Mono, not Courier or Menlo (system default mono)
- ✅ Pause-and-look signature: cursor's 3px width (not 2px or 4px) — a very precise detail that those in the know will recognize as "real terminal design"

**[WHY]**

This shot is the core of the setup: **markdown is not a noun, it's an action** — it's the act of "striking keys to turn characters into structure" itself.

The cursor is the smallest unit of writing. Starting from a cursor is the birth of "source code."

The next shot's morph builds on the premise that the audience already accepts "we are writing markdown."

---

## SHOT 03 · "THE TRANSFORMATION"

**[TIMECODE]** 03.00 — 05.00s (2.0s) `|` **FUNCTION** Reveal hero. `# markdown.md` morphs into hero `md.`

**[VISUAL]**

At second 03.00: `# markdown.md` (56px mono) begins converging to the center, enlarging, and deforming.

**Morph process** (detailed breakdown):

- 03.00-03.30s (300ms): The `#` and `arkdown` parts of `# markdown.md` fade out (opacity 1 → 0), while the `m` and `md` part of `d.md` remain.
- 03.30-04.10s (800ms): The remaining `md` morphs from mono font to Newsreader serif, scales from 56px to 480px, stays Ink (no color change), position unchanged (still at frame center).
- 04.10-04.80s (700ms): At the lower-right of the `md` characters, a Terracotta period `.` emerges (fade-in + scale 0.6 → 1 + overshoot easing).
- 04.80-05.00s (200ms): Period officially settles, hero complete. 30px below, a 320px wide terracotta fine line (terracotta accent rule, 2px thick) expands from center outward.

**End frame**: `md.` (Newsreader 600 weight, 480px, Ink with Terracotta dot) + a terracotta fine line below. Frame otherwise completely empty.

**[TYPE]**

- Text: `md.` (`md` Ink, `.` Terracotta)
- Font: Newsreader 600 weight
- Size: 480px (display L)
- Letter-spacing: -0.04em
- Color: `m`+`d` Ink #1A1A1A, `.` Terracotta #C2410C
- Horizontally and vertically centered on hero midline (y = 540)
- Accent rule 30px below, width 320px (grows from 0)

**[ANIM]**

- 03.00-03.30s · `#` `arkdown` `md` (middle part) fade out (opacity 1 → 0, expoOut)
- 03.30-04.10s · `md` morph: fontFamily switch, fontSize 56 → 480, weight 500 → 600 (800ms expoOut, note morph is not abrupt switch, but ghost overlay + scale up + opacity transition)
- 04.10-04.80s · `.` enters (700ms overshoot, scale 0.6 → 1)
- 04.80-05.00s · accent rule width 0 → 320px (300ms expoOut)

**[AUDIO]**

- BGM: piano second note at 03.00s (-20dB), third note at 04.20s (-18dB) — piano accumulation
- SFX: 03.00-03.20s soft whoosh (morph begins, -16dB)
- SFX: 04.10s subtle bloom (period appears, -20dB)
- SFX: 04.80s short paper rustle (accent rule expands, -22dB)

**[CHROME]**

- 04.50s · Chrome B (version chip top-right) begins to emerge (fade-in 600ms)
  - Form: `● HUASHU-MD-HTML · v2.0`
  - terracotta dot, mono text, Ink color
  - Entry position: top: 78px, right: 80px
- Still hidden: Chrome A, C, E (visible only ≥ 06s)

**[ANTI-SLOP]**

- ✅ Morph is not a cheap "fade-out + fade-in" transition, it's true character deformation (including ghost overlay)
- ✅ The period is the hero's "signature detail" (the 120% thing): Terracotta period as small as a fingernail, yet it's the visual anchor of this film, **in all subsequent shots this period remains as hero identifier**
- ✅ Accent rule is not decoration, it's the hero's baseline — it will reappear at Shot 11's slogan, creating a bookend
- ✅ Pause-and-look signature: 480px Newsreader 'md' letter-spacing -0.04em makes m and d almost touch but not quite — this is Newsreader's signature texture at large sizes

**[WHY]**

This is the hero shot. The "protagonist" (`md.`) of the entire remaining 25 seconds is born here.

The design philosophy of the morph: **from mono to serif is a metaphor from "I am typing" to "I am writing."** Mono is typewriter, serif is publishing. md is both — it's struck on a keyboard, but it's the source code of publishing.

Next shot enters ACT II. The hero is established — it will be pushed to the upper part of the frame, making room for "materialized products."

---

## SHOT 04 · "GATHERING" (any → md)

**[TIMECODE]** 05.00 — 08.50s (3.5s) `|` **FUNCTION** CAPABILITY 01 reveal. Everything → md. Establish the worldview that "md is source."

**[VISUAL]**

At 05.00s: hero `md.` slides from frame center (y=540) upward to y=280 (i.e. 1/4 height position), while shrinking to 220px.

Then, in the lower half of the frame (y=520 ~ y=900 area), 6 file cards appear, flying in from outside the frame (bottom y=1140) in sequence, converging toward the md hero along an invisible parabolic trajectory.

6 card designs (**each is a mini demo of a real file type, not fake bar lines**):

```
.pdf   │ Two-column layout + header "doc.pdf" + page number "— 12 —" + several lines of real typeset small text
.docx  │ heading "On Markdown" + subtitle italic + 6 lines of paragraph ascii
.pptx  │ title "MD AS SOURCE" + a simplified bar chart placeholder
.xlsx  │ 6×4 spreadsheet grid + some numbers
.epub  │ Apple Books style page + chapter title "Chapter 01"
.html  │ a browser chrome (three dots + URL bar "example.com") + title + paragraph
```

Each card size 130×180px, white background + Mica border + 24° top-right corner fold.

**Flight trajectory**: Launch from bottom y=1140, converge along a parabola toward the md hero's "." position (approx x=960+50, y=280+90). Midway (when at frame center), 6 cards form a fan shape, each adjacent pair 220px apart. Finally all 6 are "absorbed" by md (scale 1 → 0.5 + opacity 1 → 0, while position converges to a single point).

Absorption timing: starting from 05.60s, one card launches every 0.18s. Each flies for 1.1s before being absorbed. Last absorb completes at approximately 07.60s.

After absorption completes (07.60-08.20s), tagline appears 60px below: 「万物 → md」(Chinese serif, 36px, Ink, italic)

08.20-08.50s · overall hold, ready to enter Shot 05.

**[TYPE]**

- hero `md.`: shrunk to 220px (same font spec as SHOT 03)
- 6 cards internal typography: JetBrains Mono 12-14px for labels, Newsreader 12-16px for content
- tagline「万物 → md」: Noto Serif SC 36px italic + the → is Newsreader italic + Terracotta
- Top Chrome A text: JetBrains Mono 12px

**[ANIM]**

- 05.00-05.30s · hero md scale + shift up (300ms expoOut)
- 05.30s · Chrome A capability counter enters (CAPABILITY · 01 display, first dot filled)
- 05.60-07.60s · 6 cards launch in sequence (each launch delay = 5.60 + i × 0.18s, fly 1.1s, absorb at launch+1.1)
- 07.60-08.20s · tagline「万物 → md」enters (fade-in 400ms + slight y slide 12px → 0)
- 08.20-08.50s · hold

**[AUDIO]**

- BGM: piano arpeggio L2 enters at 05.00s (-26dB → -20dB fade in)
- SFX: file card whoosh × 6 (once per card launch, each 200ms, -20dB)
- SFX: absorb / ink drop (when last card is absorbed, -16dB)
- SFX: paper rustle (when tagline enters, -22dB)

**[CHROME]**

- A (top-left capability counter): ON, displays `CAPABILITY · 01`, first dot filled
- B (version chip): ON, remains displayed
- C (timeline ticker): OFF (will enter in SHOT 05)
- D (watermark): ON, always ON
- E (paper texture): ON

**[ANTI-SLOP]**

- ✅ 6 cards are not emoji or icons, they are **mini demos with internal content** — each is readable
- ✅ Flight trajectory is parabolic (gravity feel), not linear (computer feel)
- ✅ Convergence is "absorption" (scale + position simultaneously), not "stacking"
- ✅ No glow or particle effects on md characters (no need to explain "md is absorbing," audience understands on their own)
- ✅ Pause-and-look signature: pausing any card mid-flight, you can read "this is a PDF / this is a DOCX" — that's the 120% detail
- ✅ Tagline uses "→" instead of "to" or "至", it's markdown's own character

**[WHY]**

This is the opening shot of ACT II. If the audience doesn't realize "oh, md is the source" after this 3.5 seconds, the remaining shots are wasted.

3.5 seconds contain 3 micro-narrative beats:
1. Hero yields (md moves up) — implies "I make room for my products"
2. 6 products appear — reveals "what I can absorb"
3. All return to md — "but they are ultimately all md"

Next shot enters the forward flow of md → html — the audience already accepts "md is source," now ready to see "how md transforms."

---

## SHOT 05 · "FIRST FLOWER · HTML" (md → html)

**[TIMECODE]** 08.50 — 11.50s (3.0s) `|` **FUNCTION** CAPABILITY 02. First forward output. Establishes ScenePipeline pattern (shared by subsequent 5 shots).

**[VISUAL]**

At 08.50s: hero `md.` slides from center-top to the left side of the frame (x=480, y=540), size remains 220px.

Simultaneously on the right side of the frame (x=1400, y=540), a destination card appears: simulating a "Tufte CSS style essay html."

Destination card design (**real readable content, not bar lines**):

```
┌─────────────────────────────────┐
│                                  │
│  On Markdown                     │  ← Newsreader 600, 32px, Ink
│  AN ESSAY · 2026                 │  ← Mono 11px, 0.18em, Smoke
│  ▬▬▬                             │  ← Terracotta rule 60×3px
│                                  │
│  md is the source of truth.      │  ← Newsreader 400, 18px, line-height 1.7
│  Anything else is product.       │
│  We write once. Publish six      │
│  ways. The river forks; the      │
│  spring stays the same.          │
│                                  │
│  ─ huashu, 2026.05.11            │  ← italic 14px, Smoke
│                                  │
│  article.html · TUFTE THEME      │  ← Mono 10px, 0.18em, Smoke (bottom)
└─────────────────────────────────┘
    480px wide × 560px high
    White background + Mica border + 24° corner fold
```

A terracotta fine line connects the md characters and the destination card, starting from md's dot, growing rightward 380px, arrow head reaching the card's left edge. 30px above the line, label「md → html」(JetBrains Mono 14px Terracotta, letter-spacing 0.14em).

At 09.80s: Chrome C (timeline ticker) enters for the first time, fixed at y=1000.

**[TYPE]**

- See visual description inline
- label「md → html」font size 14px, Mono Bold, Terracotta, letter-spacing 0.14em
- Destination card top chapter title is Newsreader 600, 32px, Ink
- Destination card bottom small imprint mono 10px Smoke 0.18em

**[ANIM]**

- 08.50-08.80s · hero md slides from center-top to left-mid (300ms expoOut)
- 08.80-09.10s · arrow line grows rightward from md.dot origin (300ms expoOut, 0 → 380px)
- 09.10s · arrow head emerges (200ms overshoot)
- 09.20-09.40s · label「md → html」enters (fade-in + 8px y slide-down, 300ms expoOut)
- 09.40-10.10s · destination card enters as whole (700ms expoOut, scale 0.85 → 1 + opacity 0 → 1)
- 10.10-10.80s · destination card internal staggered entry: title (400ms delay 0) → subtitle metadata (delay 200ms) → terracotta rule (delay 400ms) → 6 body lines (each delay 60ms cascade) → signature (delay 1000ms) → bottom mono (delay 1100ms)
- 10.80-11.50s · hold + micro breathing (overall scale 1 → 1.005 → 1, 600ms ease-in-out infinite, but this shot only plays half a cycle)

**[AUDIO]**

- BGM: cello drone L3 enters at 09.00s (-30dB → -24dB)
- SFX: chime: capability 02 at 09.00s (-18dB)
- SFX: paper rustle (card enters, -22dB)
- SFX: micro ticks (each line staggered entry, -26dB each)

**[CHROME]**

- A: advances to `CAPABILITY · 02`, second dot filled
- B: ON
- **C: First entry** at 09.80s, `any→md  ━━━━●━━━━━  md→html  ─  html→md  ─  md→docx  ─  md→pdf  ─  md→epub`, progress dot ● above second slot
- D: ON
- E: ON

**[ANTI-SLOP]**

- ✅ Destination card's "On Markdown" essay content is real readable English philosophy snippet, not Lorem ipsum
- ✅ 「article.html · TUFTE THEME」this small imprint is a "pause and read detail signature"
- ✅ No glow or particle effects used to "emphasize" the md → html conversion — typography and composition speak for themselves
- ✅ Arrow line is not dashed or dotted (avoiding "web tutorial" feel), it's 1.5px solid Terracotta
- ✅ Pause-and-look signature: destination card top "AN ESSAY · 2026" subtitle uses Newsreader's small caps OpenType feature, 0.18em letter-spacing — this shot's 120% detail

**[WHY]**

This is the first establishment of the ScenePipeline pattern. Subsequent 5 capability shots will all follow this structure:
1. md on the left, destination on the right
2. Arrow + label in the middle
3. Destination card internal staggered entry (each card has 6-8 text layers)
4. Card content is real readable text, not fake bar lines

Audience will understand this pattern by the second time (SHOT 06), and by the sixth time (SHOT 09) will feel "ah, here it comes again, but this time it's NEW" — this is precisely ACT II's rhythm design.

---

## SHOT 06 · "REVERSE FLOW · MD" (html → md)

**[TIMECODE]** 11.50 — 14.50s (3.0s) `|` **FUNCTION** CAPABILITY 03. Reverse archive: html → md. Establishes "bidirectional flow" concept.

**[VISUAL]**

Cross-dissolve in. Previous shot's destination card shrinks and exits to bottom-right at 11.50-11.80s, new destination card (this time showing markdown source code) enters from the right.

New destination card design: **Dark background markdown source view** (visual contrast with SHOT 05's light background html).

```
┌─────────────────────────────────┐
│  │  ← Background Charred #2A2620
│  # On Markdown                   │  ← Terracotta, mono 14px
│                                  │
│  An essay · 2026                 │  ← Smoke, mono 14px
│                                  │
│  > md is the source.             │  ← italic Smoke, mono 14px
│  > Anything else is **product**.   │     `**product**` highlighted mica + bold
│                                  │
│  - 1 source                      │  ← mono 14px Smoke
│  - 6 forms                       │
│  - ∞ outputs                     │
│                                  │
│  essay.md · CLEAN MARKDOWN       │  ← bottom Mono 10px Smoke
└─────────────────────────────────┘
    480×560px, Charred background, top 24° corner fold is Cinder
```

Arrow direction reversed: from right side destination card toward md characters on the left (short Terracotta line + arrow head pointing left). Label changes to「html → md」.

**Key differences** (forming visual rhyme with SHOT 05):
- Destination on the right, md on the left (same as SHOT 05)
- But arrow direction reversed (visual: we are archiving/pulling back)
- Card is dark background (visual contrast, emphasizing this is source)

**[TYPE]**

- Entire card interior is JetBrains Mono 14px
- Markdown syntax element colors: `#` heading Terracotta, `>` quote italic Smoke, `**bold**` Mica + bold, list dash Smoke
- Bottom mono 10px Smoke

**[ANIM]**

- 11.50-11.80s · previous shot card exits (shrink → bottom-right, fade out) + md characters remain
- 11.80-12.10s · arrow line grows in reverse direction (this time right-to-left, 300ms expoOut)
- 12.10s · arrow head (pointing left) emerges
- 12.20-12.40s · label「html → md」enters
- 12.40-13.10s · new destination card enters (same entry logic as SHOT 05)
- 13.10-13.80s · markdown internal 6 lines staggered entry (each 100ms delay)
  - Special micro-detail: each line simulates typewriter upon entry — character-by-character cascade reveal (making the audience feel "this is markdown being 'written out'")
- 13.80-14.50s · hold

**[AUDIO]**

- BGM: layers L1+L2+L3 continue
- SFX: chime: capability 03 at 12.00s (-18dB)
- SFX: paper rustle (12.40s)
- SFX: very subtle keyboard click ticker for each line entry (-26dB each, 100ms apart)

**[CHROME]**

- A: advances to `CAPABILITY · 03`, third dot filled
- B: ON
- C: progress dot ● slides to「html→md」position
- D: ON
- E: ON

**[ANTI-SLOP]**

- ✅ This is the only "dark background" shot in the entire film — deliberately creating visual contrast, letting the audience know "this is source code," not "another destination"
- ✅ Syntax highlighting colors inside markdown are not cyber palette (not VS Code Dark+ style), they're publishing house palette (Terracotta + Smoke + Mica)
- ✅ 「essay.md · CLEAN MARKDOWN」bottom small imprint → pause-and-look signature
- ✅ Reverse arrow is not a "U-turn curve," it's a straight line + reversed arrowhead — maintaining structural consistency

**[WHY]**

This shot's real purpose is not "showing off capability 03," it's **telling the audience that this pipeline is bidirectional**.

If all 6 capabilities radiate outward from md, the audience would think "md only goes out." The 3rd capability reverses the flow, establishing the worldview that "md is the center of everything."

This is why I chose the capability order 02 (md→html) → 03 (html→md) → 04 (md→docx) — deliberately placing the reverse capability in the 3rd slot to maximize the cognitive surprise of "bidirectional flow."

---

## SHOT 07 · "PUBLISHER GRADE · DOCX" (md → docx)

**[TIMECODE]** 14.50 — 17.50s (3.0s) `|` **FUNCTION** CAPABILITY 04. Publisher-grade docx. Establishes the argument that "md isn't just for programmers."

**[VISUAL]**

Return to light background, return to "md on the left, destination on the right."

Destination card design: **Publisher-grade docx chapter opening page** (high density information, but completely restrained).

```
┌─────────────────────────────────┐
│                       ON MARKDOWN│  ← page header, right-aligned, Smoke italic mono 9px
│  CHAPTER · 01                    │  ← Terracotta mono 11px bold 0.22em
│                                  │
│  On Markdown                     │  ← Newsreader 700, 36px, Ink, lh 1.1
│  A short essay on source-of-truth│  ← Newsreader italic 14px, Smoke
│  thinking                        │
│                                  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━     │  ← Terracotta full-width rule 3px
│                                  │
│  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬       │  ← 10 lines of mica bar paragraphs
│  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬           │     (varied widths 76-95%)
│  ...                             │
│                                  │
│                — 1 —             │  ← page number, centered, mono 10px Smoke
└─────────────────────────────────┘
   480×580px, white card, Mica border, 24° corner fold
```

**Special details**:
- Top-right "page header" (book title italic gray mono) is a real publisher docx detail signature
- 「CHAPTER · 01」prefix makes the audience instantly realize "this is a page from a book, not an article"
- Terracotta full-width rule (not a thin line, but 3px thick rule) is the hallmark of publisher chapter opening pages
- The em-dashes around the bottom page number「— 1 —」are Newsreader's em-dash, not hyphen

**[TYPE]**

- page header: Newsreader italic 9px, Smoke, letter-spacing 0.14em
- CHAPTER · 01: JetBrains Mono Bold 11px, Terracotta, letter-spacing 0.22em
- main title: Newsreader 700, 36px, Ink, line-height 1.05
- subtitle: Newsreader italic 14px, Smoke
- terracotta rule: 3px thick, full card width
- bar paragraphs: Mica color #E6E1D6, height 6px
- page number: JetBrains Mono 10px, Smoke, letter-spacing 0.18em

**[ANIM]**

- 14.50-14.80s · previous shot card exits + md remains
- 14.80-15.10s · arrow line grows forward
- 15.10s · arrow head, label「md → docx」enters
- 15.30-16.10s · destination card enters as whole
- 16.10-17.00s · internal stagger: page header (delay 0) → CHAPTER label (delay 100ms) → title (delay 300ms) → subtitle (delay 500ms) → rule (delay 700ms) → 10 paragraph lines cascade (delay 850ms + 60ms cascade) → page number (delay 1600ms)
- 17.00-17.50s · hold

**[AUDIO]**

- BGM: continues; at 15.00s BGM overall swell +2dB (implying we're building toward climax)
- SFX: chime: capability 04 at 15.00s (-18dB)
- SFX: paper rustle (15.30s)

**[CHROME]**

- A: `CAPABILITY · 04`, fourth dot filled
- B/C/D/E: ON

**[ANTI-SLOP]**

- ✅ No explanatory text saying "this is a book interior mockup" (let the typography speak for itself)
- ✅ Bar paragraphs use Mica (#E6E1D6), an extremely light gray, not black — an honest signal that "this is a typography style preview, not real content"
- ✅ Pause-and-look signature: top right-aligned page header italic mono — 99% of viewers won't notice, but the 1% of designers who do will know "this team did their homework"
- ✅ This shot is the most color-saturated of the 6 capabilities (Terracotta occupies page rule + chapter label + top-right chrome counter) — right in the middle of the story arc, fitting the "build-up toward climax" curve

**[WHY]**

CAPABILITY 04 is a key transitional shot:
- It confirms that "md isn't just for the web" — it can produce publisher-grade docx
- It establishes the "print" visual context, preparing for SHOT 08 (pdf) and SHOT 09 (epub)

After this shot, the audience is ready for the "md → print" chain. The next two shots' NEW labels have their setup.

---

## SHOT 08 · "★ NEW · PRINT" (md → pdf)

**[TIMECODE]** 17.50 — 20.50s (3.0s) `|` **FUNCTION** CAPABILITY 05. **NEW**. md → publication-grade PDF. First "upgrade" indicator lights up.

**[VISUAL]**

Cross-dissolve in. This shot's visual intensity is **significantly higher** than SHOT 05-07 — because this is "something new" that needs to be remembered.

Visual differences:
1. **NEW label**: top-left, a Terracotta rectangular box lights up next to capability counter, containing「★ NEW」(JetBrains Mono Bold 13px, Terracotta, letter-spacing 0.22em, 4px Terracotta border, 6px×12px padding)
2. **Destination is not a single card, but two PDFs fanned out**: A4 at the back (slight +5° rotation), large 32mo (176×240mm, domestic print book spec) at the front (slight -3° rotation), creating "both page sizes supported" visual
3. **Each PDF has "printer's crop marks"** — L-shaped small lines at each corner, 2px thick, Smoke color — this is real print shop PDF detail
4. Arrow + label colors all use Terracotta (not Ink), overall palette warmer

**Two PDFs content**:

PDF A (A4, back):

```
┌──────────────────────────┐
│ ┌                      ┐ │  ← crop marks
│  A4 · 210×297mm           │  ← Mono Bold 10px Terracotta
│  ─── (Terracotta rule)    │
│  On Markdown              │  ← Newsreader 22px
│  ──────────────────       │
│  ▬▬▬▬▬▬▬▬▬▬▬             │  ← 7 lines mica bars
│  ▬▬▬▬▬▬▬▬▬▬▬▬            │
│  ...                      │
│                           │
│ └                      ┘ │  ← crop marks
└──────────────────────────┘
   360×460px, white card, +5° rotation
```

PDF B (large 32mo, front):

```
┌────────────────────┐
│ ┌                ┐ │  ← crop marks
│  大32开 · 176×240mm│  ← Mono Bold 10px Terracotta
│  ───                │
│  On Markdown        │  ← Newsreader 19px
│  ──────────         │
│  ▬▬▬▬▬▬▬▬▬▬        │  ← 6 lines mica bars
│  ...                │
│ └                ┘ │
└────────────────────┘
   290×410px, white card, -3° rotation
```

**[TYPE]**

- NEW label: Mono Bold 13px Terracotta, 0.22em letter-spacing, 1.5px Terracotta border
- Arrow label「md → pdf」: Mono Bold 14px Terracotta, 0.14em
- PDF spec labels (A4 · 210×297mm etc.): Mono Bold 10px Terracotta, 0.2em
- Chapter titles inside PDFs: Newsreader 600 weight, 19-22px, Ink

**[ANIM]**

- 17.50-17.80s · previous shot card exits + md remains
- 17.70s · **NEW label lights up** (special treatment: scale 0.8 → 1.1 → 1.0 over 400ms with overshoot easing; simultaneously a very subtle terracotta glow briefly pulses then disappears)
- 17.80-18.10s · arrow + label enter (this time using Terracotta accent, emphasizing "this is NEW")
- 18.20-18.60s · PDF B (front one) enters (400ms expoOut, scale 0.85 → 1 + clockwise -8° → -3°)
- 18.50-18.90s · PDF A (back one) follows closely (400ms expoOut, scale 0.85 → 1 + clockwise 0° → +5°, stagger delay 300ms)
- 18.90-19.70s · two PDFs internal cascade staggered entry
- 19.70s · 4 crop marks (PDF B's) appear sequentially (80ms cascade, giving "print shop craftsmanship" detail signature)
- 19.70-20.50s · hold

**[AUDIO]**

- BGM: percussion pulse L4 joins at 18.00s (-32dB) (very subtle sub-kick 4/4 rhythm established)
- **SFX: chime: NEW (05) at 17.70s (double chime + soft glow + reverb tail, -14dB)** ← this is one of the most important SFX cues in the entire film
- SFX: paper rustle × 2 (one per PDF entry, -22dB each)
- SFX: subtle "ink stamp" at 19.70s (when crop marks appear, -22dB)

**[CHROME]**

- A: `CAPABILITY · 05`, fifth dot filled
- NEW label added next to A
- B: ON, at this time orange dot next to version chip pulses in sync (emphasizing "v2.0 new")
- C: progress dot ● slides to「md→pdf」position, text at this position enlarged by 0.5px for emphasis
- D: ON
- E: ON

**[ANTI-SLOP]**

- ✅ NEW label is not emoji or sticker — it's a typographic mark (mono + 0.22em + ★ + border)
- ✅ Two PDFs are not cheap "stacked together" stacking, but fan + rotation (suggesting the physical action of "opening to look")
- ✅ Crop marks are visual expression of real print shop terminology, pausing reveals "ah, this is print-ready"
- ✅ No glow or particle effects used to emphasize "NEW" — typography and SFX speak for themselves
- ✅ Pause-and-look signature: PDF B top「大32开 · 176×240mm」Chinese-English mixed typesetting, shows Huashu ecology's respect for domestic print book specifications

**[WHY]**

This is one of ACT II's climactic shots. Two things must happen simultaneously:
1. The audience must immediately realize "this is a new feature"
2. Visual details must demonstrate "this is not a thrown-together wkhtmltopdf wrapper, but truly publication-grade"

NEW label + crop marks + two PDFs fanned + complete A4 / large 32mo spec descriptions — four things together achieve the above two.

The next shot's epub is the second of the dual NEW shots; its rhythm and emotional intensity must step up another notch from this one.

---

## SHOT 09 · "★ NEW · EBOOK" (md → epub)

**[TIMECODE]** 20.50 — 22.50s (2.0s) `|` **FUNCTION** CAPABILITY 06. **NEW**. md → standard EPUB3. Second new feature. Last capability.

**[VISUAL]**

Cross-dissolve in. This shot's duration is **shorter than the previous ones** (only 2.0s instead of 3.0s) — because we've already established the "NEW + destination" pattern, the audience understands instantly the second time, so the rhythm can accelerate.

Destination card design: **Apple Books style EPUB reader frame** (emphasizing the realism of "this book is already in a reader").

```
   ╔════════════════════════════════════╗
   ║ ● ● ●                              ║  ← window chrome (Apple Books)
   ╠════════════════════════════════════╣
   ║                                    ║
   ║  HUASHU · ORANGE BOOK              ║  ← Mono Bold 10px Terracotta 0.22em
   ║                                    ║
   ║                                    ║
   ║  On                                ║  ← Newsreader 700, 30px, Ivory paper
   ║  Markdown                          ║     (on Charred bg)
   ║                                    ║
   ║  ───                               ║  ← Terracotta rule 40×2px
   ║                                    ║
   ║  an essay · 花叔                   ║  ← italic 14px Smoke on Charred
   ║                                    ║
   ╠════════════════════════════════════╣
   ║ Apple Books · 1 of 24    EPUB 3   ║  ← Mono 10px Smoke 0.14em
   ╚════════════════════════════════════╝
   460×470px, ivory paper outer + Charred inner book cover area
   2px Ink border, 22px border-radius (modern app frame)
```

**Key visual differences**:
- Overall frame is "macOS app window" feel (three dots + 22px border-radius)
- Middle is "open ebook" cover area (Charred background + publishing house taste typography)
- Bottom is "Apple Books · 1 of 24" reader chrome
- Entire card gives the feeling of "I'm reading this book in Apple Books"

**[TYPE]**

- HUASHU · ORANGE BOOK: Mono Bold 10px, Terracotta, 0.22em
- Book title (On Markdown): Newsreader 700, 30px, Ivory (on Charred bg), line-height 1.0
- Terracotta rule: 40×2px
- Author italic: Noto Serif SC italic 14px, Smoke
- Apple Books chrome: Mono 10px, Smoke, 0.14em

**[ANIM]**

- 20.50-20.80s · previous shot PDF exits + md remains
- 20.70s · NEW label **stays lit** (doesn't re-pop this time, because already established in SHOT 08 — just display「★ NEW」directly)
- 20.80-21.10s · arrow + label「md → epub」enters (Terracotta accent, same as SHOT 08)
- 21.20-21.80s · EPUB destination card enters as whole (600ms expoOut, scale 0.88 → 1)
- 21.30-22.00s · internal staggered: window chrome dots (delay 0) → top brand label (delay 200ms) → book title「On」(delay 400ms) →「Markdown」(delay 480ms) → rule (delay 700ms) → author italic (delay 850ms) → bottom chrome (delay 1000ms)
- 22.00-22.50s · hold + ready transition to ACT III

**[AUDIO]**

- BGM: percussion continues, but at 22.00s overall BGM swell +3dB (build-up for SHOT 10's convergence)
- **SFX: chime: NEW (06) at 20.70s (double chime + soft glow, a semitone higher than SHOT 08, -14dB)** — the semitone difference makes the two NEW shots form a musical relationship
- SFX: window chrome subtle "click" at 21.20s (macOS window appearance feel, -24dB)
- SFX: page turn rustle at 21.40s

**[CHROME]**

- A: `CAPABILITY · 06`, sixth dot filled (**all filled — 6/6**)
- NEW label continues next to A
- B: version chip's orange dot pulse intensifies (amplitude × 1.5)
- C: progress dot ● reaches the far right「md→epub」position
- D: ON
- E: ON

**[ANTI-SLOP]**

- ✅ Don't draw the actual logo of Kindle or Apple Books (avoid IP risk); using macOS window chrome to imply "reader" is sufficient
- ✅ No e-ink gray filter applied (avoiding Kindle slop)
- ✅ 「Apple Books · 1 of 24」chrome gives a sense of real publishing data (24 chapters, chapter 1)
- ✅ Pause-and-look signature: book title 「On / Markdown」**line break** — Newsreader's line-breaking design at 30px large size, pays homage to Penguin Classics cover typography

**[WHY]**

This shot closes ACT II. Two things must be accomplished:
1. All 6 capabilities displayed (counter 6/6 filled)
2. Emotion begins to build-up toward ACT III's climax

The shot length going from 3.0 → 2.0s is deliberate — the rhythm is accelerating, the audience senses "we're approaching the peak."

---

## SHOT 10 · "THE CONVERGENCE"

**[TIMECODE]** 22.50 — 24.00s (1.5s) `|` **FUNCTION** Transition from ACT II → ACT III. All elements return to position. Prepare for slogan.

**[VISUAL]**

22.50s: All previous destination cards have exited. Chrome A/C begin to fade out (capability counter already 6/6 complete, mission accomplished).

At frame center, the md character slides from the left position (x=480) back to center (x=960), simultaneously scaling from 220px → 300px.

The 6 capability labels around md (any→md / md→html / html→md / md→docx / md→pdf / md→epub) emerge one by one from a distance (circumference r=380px), forming a circle around the md character, one every 60°, arranged clockwise (starting from the top with「any→md」). These labels are a mix of Mono Bold 14px Smoke (non-active) + Terracotta (active new).

Overall effect: **the md character is the sun, and the 6 capabilities are planets.**

But this shot doesn't need the audience to dwell too long — it's a transition shot.

23.50-24.00s: The 6 capability labels slowly fade out (200ms each, inverse cascade), the md character remains at center, shrinking to 180px, ready to make room for the slogan.

**[TYPE]**

- 6 capability labels: JetBrains Mono Bold 14px, letter-spacing 0.16em
  - First 4 (any→md / md→html / html→md / md→docx): Smoke
  - Last 2 (md→pdf / md→epub): Terracotta

**[ANIM]**

- 22.50-22.80s · previous shot EPUB card exits, Chrome A/C fade out (300ms linear)
- 22.50-23.00s · md character slides back to center + enlarges (500ms expoOut)
- 22.80-23.40s · 6 capability labels emerge around md (each at 60° position, r=380px, stagger 80ms each, fade-in 300ms + slight outward slide 20px)
- 23.40-23.80s · hold (6 labels settle around md)
- 23.80-24.00s · 6 labels simultaneously fade out (200ms linear), md character shrinks to 180px (200ms expoOut)

**[AUDIO]**

- BGM: at 23.00s, all-layer swell begins (L1+L2+L3+L4 → +4dB)
- BGM: at 23.50s, percussion pauses briefly for 1 beat (giving tension from sudden silence)
- SFX: extremely faint「click」when 6 capability labels enter (-30dB each, staggered)
- SFX: ascending sweep begins at 23.50s (build-up to 24.00s)

**[CHROME]**

- A: fade out at 22.50s (counter already 6/6, mission accomplished)
- B: ON, but beginning to prepare transition for ACT III (position unchanged, but internal spacing slightly tightened)
- C: fade out at 22.50s
- D: ON
- E: ON

**[ANTI-SLOP]**

- ✅ The 6 capability labels don't "orbit around md in a circle" (avoiding the "planetary spinner" cyber slop); they "settle in fixed positions, then fade out together" (more restrained)
- ✅ Chrome A/C exit gracefully after their mission is complete (not "on screen forever"), this is a good habit of "making room for the next act"
- ✅ Pause-and-look signature: at 23.40s, all 6 labels are simultaneously on screen, read clockwise — this is the film's only "full capability panorama" frame. If viewers pause here, they can see all 6 pipelines in full — this is the best frame for marketing screenshots

**[WHY]**

This is a bridge.

ACT II ends at 22.50s (NEW (06) just finished), but the slogan doesn't enter until 24.00s — this 1.5s in between can't be "blank waiting," it must have narrative motion.

The concept of "convergence": after all 6 pipelines are done, all capabilities converge back to md as the source. This is precisely the essence of this film's entire story — **all flows ultimately return to the source**.

Next shot, make way for the slogan. The md character shrinks to 180px, ready to become the slogan's "brand stamp."

---

## SHOT 11 · "ONE SOURCE."

**[TIMECODE]** 24.00 — 26.50s (2.5s) `|` **FUNCTION** ACT III peak first half. Slogan enters from above. Emotional climax.

**[VISUAL]**

The md character has already shrunk to 180px, remaining at frame center (y=540).

24.00s: The md character **continues sliding toward the top-left of the frame** to (x=128, y=88), shrinking to 56px — becoming the "brand stamp" fixed at the top-left corner. This is the brand's final position.

24.20s: Near the upper center of the frame (y=460), the hero slogan top line begins to emerge:

```
ONE SOURCE.
```

Font: Newsreader 700, **168px**, letter-spacing -0.03em, line-height 0.95, Ink #1A1A1A
Position: horizontally centered (x=960), y=460 (character baseline)

Entry method: **staggered letter reveal** — 10 characters (O-N-E-space-S-O-U-R-C-E-.) enter sequentially at 30ms stagger, each character fade + 12px y slide-down + scale 0.92 → 1.0 (260ms expoOut each).

26.00s: A short Terracotta rule (320×3px) appears 30px below the slogan, expanding from center outward (300ms expoOut).

26.50s: Enter next shot.

**[TYPE]**

- ONE SOURCE.：Newsreader 700, 168px, Ink, letter-spacing -0.03em, line-height 0.95
- terracotta rule: 320×3px, centered, accent

**[ANIM]**

- 24.00-24.30s · md character slides to top-left (300ms expoOut, size 180 → 56)
- 24.20s · ONE SOURCE. first character 'O' enters (260ms expoOut)
- 24.23s · 'N' enters
- 24.26s · 'E' enters
- 24.29s · space (no visual, but layout placeholder)
- 24.32s · 'S'
- 24.35s · 'O'
- 24.38s · 'U'
- 24.41s · 'R'
- 24.44s · 'C'
- 24.47s · 'E'
- 24.50s · '.'
- 24.20-25.00s · entire ONE SOURCE. completes (10 characters × 30ms stagger + 260ms each = total ~560ms)
- 25.00-26.00s · hold (let the audience read「ONE SOURCE.」)
- 26.00-26.30s · Terracotta rule appears (300ms expoOut from 0 → 320px)
- 26.30-26.50s · hold

**[AUDIO]**

- BGM: the swell that began at 22.00s reaches its peak at 24.50s (loudest -6dB)
- BGM: full string section enters (L5), cello + violin + viola three layers stacked
- **SFX: impact (slogan ONE) at 24.20s — deep bass impact + short reverb tail (-8dB)** ← this is the strongest SFX cue in the entire film
- SFX: very light pen-on-paper stroke at 26.00s (when rule appears, -22dB)

**[CHROME]**

- A: OFF (already exited)
- B: ON, but **important change**: version chip at this time cross-dissolves into a new form — at the same position top-right, but the chip is slightly larger, font size 18px (previously 16px), more prominent. Simultaneously the Terracotta dot's pulse amplitude × 2 (emphasizing the "v2.0 upgrade moment")
- C: OFF (already exited)
- D: ON
- E: ON

**New chrome**:
- md character (top-left, 56px, Newsreader 600 + Terracotta dot) officially takes up residence in the corner, becoming the brand stamp

**[ANTI-SLOP]**

- ✅ Slogan is not "whole-word fade-in" (cheap), it's letter-by-letter stagger (cinematic)
- ✅ Single character stagger time of 30ms is calculated — enough to see the cascade, but won't slow down the rhythm (if 60ms it would feel slow)
- ✅ Font size 168px has been verified through layout — any larger would collide with SIX FORMS. (SHOT 12), any smaller would lack impact
- ✅ Pause-and-look signature: the「.」at the end of「ONE SOURCE.」is Terracotta (not Ink), echoing the hero md character's Terracotta dot — consistent brand signature from start to finish

**[WHY]**

This is the first half of the emotional climax.

「ONE SOURCE.」is the thesis of this film. If the audience remembers only one sentence after watching the whole film, this is it.

Having the md character retreat to the top-left at this moment is strategic — the slogan is the protagonist, md is the brand stamp. The two don't compete for attention.

Next shot, SIX FORMS. lands, completing the thesis.

---

## SHOT 12 · "SIX FORMS."

**[TIMECODE]** 26.50 — 29.00s (2.5s) `|` **FUNCTION** ACT III peak second half. Slogan bottom line + capability map fully presented. The emotional resolution of the entire film.

**[VISUAL]**

26.50s: ONE SOURCE. still at the upper position (y=460).

The lower half of the frame (y=720) begins to receive the hero slogan bottom line:

```
SIX FORMS.
```

Font: Newsreader 700, 168px, letter-spacing -0.03em, line-height 0.95, **Terracotta #C2410C**
Position: horizontally centered (x=960), y=720 (character baseline)

Entry method: mirrored from SHOT 11 — staggered letter reveal, 9 characters + 1 period (10 total), each at 30ms stagger (slightly slower stagger because this is the climax).

Entry detail: each character fades + 12px y **slide-up** (instead of SHOT 11's slide-down, symmetrical direction) + scale 0.92 → 1.0 (260ms expoOut each).

27.20s: SIX FORMS. completes, the entire slogan two-line typography is now complete.

27.20-27.80s: 30px below SIX FORMS., 6 capability pills appear, entering sequentially:

```
[any→md] [md→html] [html→md] [md→docx] [md→pdf ★NEW] [md→epub ★NEW]
```

Each pill:
- Font: JetBrains Mono Bold 14px, letter-spacing 0.16em
- Size: 10px×18px padding, 1.5px border
- First 4: Ink text + Ink border + transparent background
- Last 2 (NEW): Terracotta text + Terracotta border + Mist (#FFF7F0) background + Terra Hot「NEW」mini badge at top-right -8/-10px offset

Each pill spaced 14px apart. Entire group horizontally centered (x=960), y=820.

Entry: staggered from left to right, each 80ms delay, fade-in + 4px y slide-up (300ms expoOut).

27.80-28.30s: Subtitle line enters (y=890):

```
md 是源代码，万物是产物。
```

Font: Noto Serif SC italic 26px, Ink, letter-spacing 0.04em
Horizontally centered.

Entry: fade-in + 8px y slide-up (400ms expoOut).

28.30-29.00s: Overall hold. This is the most static frame of the entire film — all elements in place, letting the audience "read it."

**[TYPE]**

- SIX FORMS.：Newsreader 700, 168px, Terracotta, letter-spacing -0.03em, line-height 0.95
- pills：JetBrains Mono Bold 14px, letter-spacing 0.16em, 1.5px border
- subtitle: Noto Serif SC italic 26px, Ink, letter-spacing 0.04em

**[ANIM]**

- 26.50-27.20s · SIX FORMS. character stagger (mirrored from SHOT 11)
- 27.20-27.30s · short hold
- 27.30-27.80s · 6 pills cascade (80ms stagger each × 6 = 480ms total + 300ms each pill duration)
- 27.80-28.30s · subtitle enters (400ms)
- 28.30-29.00s · overall hold

**[AUDIO]**

- BGM: 26.50s peak swell continues, reaching the film's loudest point at 27.20s (-4dB)
- BGM: after 27.20s, BGM begins to sustain (no longer increasing, but maintaining peak intensity)
- **SFX: impact (slogan SIX) at 26.50s — deep bass impact, a semitone heavier than the ONE shot impact (-7dB)**
- SFX: staggered metallic clicks when 6 pills enter (each -24dB, 50ms)
- SFX: very light pen flourish at 27.80s (subtitle enters)

**[CHROME]**

- B: ON, version chip continues
- D: ON, watermark continues
- E: ON
- md stamp (top-left): ON

**[ANTI-SLOP]**

- ✅ ONE SOURCE. is Ink, SIX FORMS. is Terracotta — the color contrast between "source" and "forms" respectively, not decorative coloring
- ✅ The NEW pills' background is #FFF7F0 (extremely light mist tint), not "orange fill" — restrained
- ✅ NEW mini badge is at the top-right -8/-10px prominent position of the pill, but only 9px font size — a standard position for detail signatures
- ✅ Subtitle uses Chinese comma「，」and period「。」— a mark of respect for Chinese typography
- ✅ This frame (28.30s) is the film's "most complete marketing frame" — can be captured as thumbnail / X poster / WeChat public account cover image, all information is in a single frame: slogan + 6 capability + subtitle + brand stamp + version

**[WHY]**

This is the resolution shot.

If SHOT 11 is the thesis (ONE SOURCE.), then SHOT 12 is the antithesis + synthesis (SIX FORMS. plus the complete capability map).

At 27.50s of this frame, the audience should simultaneously hear the string peak and be visually fully absorbed by typography — this is the 5 seconds most worth watching in this film.

The next shot is the outro, letting the strings decay, letting the md stamp shine alone.

---

## SHOT 13 · "SIGN-OFF"

**[TIMECODE]** 29.00 — 30.00s (1.0s) `|` **FUNCTION** Ending. Let all slogan elements exit, leaving only the md stamp shining alone. Brand imprint.

**[VISUAL]**

29.00s: SIX FORMS. + 6 pills + subtitle begin to hold in place.

29.20-29.60s: ONE SOURCE. + SIX FORMS. + 6 pills + subtitle slowly fade out (each 400ms linear, **no stagger**, simultaneous fade-out — creating a sense of "the frame is settling").

29.40s: The md stamp character in the top-left slowly enlarges from 56px to 88px, while simultaneously sliding from position (128, 88) toward frame center (960, 540) — this is md's "final return."

29.40-29.80s: md character settles at frame center, size 88px, color Ink + Terracotta dot.

29.80-30.00s: A short Terracotta rule (120×2px, shorter than SHOT 03, more refined) appears 30px below the md character, growing from 0.

30.00s: All elements in place. The final frame is:

```
                                                                  ● HUASHU-MD-HTML · v2.0
                                                                                              (top-right chrome)


                                            md.                   ← Newsreader 600, 88px, Ink + Terracotta dot
                                          ───                     ← Terracotta rule, 120×2px

                                                                                CREATED BY HUASHU-DESIGN
                                                                                              (bottom-right watermark)
```

The entire frame has only 4 elements: md stamp, accent rule, top-right chrome, bottom-right watermark. Everything else completely empty.

**[TYPE]**

- md.：Newsreader 600, 88px, Ink + Terracotta dot
- accent rule: 120×2px Terracotta

**[ANIM]**

- 29.00-29.20s · previous shot hold (letting the audience fully absorb)
- 29.20-29.60s · ONE SOURCE. + SIX FORMS. + 6 pills + subtitle simultaneously fade out (400ms linear, simultaneous)
- 29.40-29.80s · md stamp enlarges + slides to center (400ms expoOut, size 56 → 88, position (128,88) → (960,540))
- 29.80-30.00s · accent rule expands (200ms expoOut, 0 → 120px)
- 30.00s · final hold (if looping, loop back to 00.00s)

**[AUDIO]**

- BGM: at 29.00s decay begins entering L6 (all layers gradually soften)
- BGM: at 29.40s strings fade, leaving piano + reverb tail
- BGM: at 30.00s, everything falls to silence + room tone
- **SFX: final stamp / sign-off at 29.40s (ink stamp + soft reverb, -14dB)** — when md lands at center
- SFX: very light paper rustle at 29.80s (accent rule enters)

**[CHROME]**

- B: ON, continues
- D: ON, continues
- E: ON, continues
- All others OFF

**[ANTI-SLOP]**

- ✅ No「Thank you」「Made with love」type sign-off text (cheap)
- ✅ No logo blown up large (unnecessary)
- ✅ The md stamp is the true protagonist of this film's entire story; letting it remain alone at frame center in the end is the simplest form of resolution
- ✅ Pause-and-look signature: In the final frame, md. at 88px Newsreader, the Terracotta dot is the visual focal point of the entire frame — the viewer's eyes will naturally rest on this dot, then move to the accent rule below, then to the version chip top-right. This "visual motion path" is the success of visual hierarchy design
- ✅ Silence in the final 0.2s gives the frame breathing room

**[WHY]**

The entire film begins with a blank page, ends with an md stamp + a touch of terracotta orange.

This is a bookend (visual rhyme):
- 0.0s: blank ivory page (empty)
- 30.0s: ivory page + md (full)

The audience moves from "empty" to "full," but "full" is actually just a single `md.` character — this is the visual declaration of "source-of-truth": **everything begins with a simple md.**

If the entire film lets the audience remember one frame, I hope it is this one.

---

# Part V · Production Manifest

## 5.1 Font List & Loading Method

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500;700&family=Noto+Serif+SC:wght@400;500;700;900&display=swap" rel="stylesheet">
```

**Actual measured load time**: approximately 800-1500ms depending on CDN status. Must wait for `document.fonts.ready` to return true before starting the Stage timer (Stage already implements this).

## 5.2 Color Palette CSS Variables

```css
:root {
  --paper:       #FAFAF6;
  --mist:        #F2EDE4;
  --mica:        #E6E1D6;
  --smoke:       #6B6B6B;
  --cinder:      #3D3530;
  --ink:         #1A1A1A;
  --charred:     #2A2620;
  --terracotta:  #C2410C;
  --terra-hot:   #E55D21;
  --terra-deep:  #8B2D08;
}
```

## 5.3 BGM Source Selection Criteria

**First choice**: Generate a 30-second cinematic minimal piece using Suno v6.0 / Udio v1.5, with prompt keywords:

```
minimal cinematic piano, slow tempo 60bpm, single piano notes,
sparse arpeggio, low cello drone, subtle sub-kick percussion,
swelling strings at climax, decay to silence,
in the style of Max Richter on the nature of daylight,
no vocals, 30 seconds duration, ivory paper mood
```

**Backup**: Search royalty-free libraries
- artlist.io: "minimal cinematic"
- bensound.com: "cinematic"
- musicbed.com: "Jóhann Jóhannsson style"

**Minimum standard**: BGM 30 seconds length, 44.1kHz sample rate, aim for -16 LUFS integrated loudness.

## 5.4 SFX Sources

**First choice**: Use the 37 pre-built assets from huashu-design skill's `assets/sfx/<category>/*.mp3`:

```
Event                          Recommended SFX File
─────────────────────────────────────────────────────
keyboard clicks            sfx/ui/keyboard-click-*.mp3
cursor blink               sfx/ui/tick-soft.mp3
md morph swell             sfx/cinematic/whoosh-bloom.mp3
file card whoosh           sfx/cinematic/whoosh-short-*.mp3
absorb / ink drop          sfx/foley/ink-drop.mp3
paper rustle               sfx/foley/paper-turn.mp3
chime capability           sfx/melodic/chime-single-*.mp3
chime NEW (double)         sfx/melodic/chime-double-warm.mp3
build sweep                sfx/cinematic/ascending-sweep.mp3
impact (slogan)            sfx/cinematic/deep-impact-*.mp3
pen flourish               sfx/foley/pen-stroke.mp3
final stamp                sfx/foley/ink-stamp.mp3
```

## 5.5 Screenshot Verification Plan

After implementing the HTML, the following key frames must be verified (using Playwright + `?t=NN` URL parameter):

```
t=0.5    ← SHOT 01 mid: blank ivory page (verify paper texture doesn't compete)
t=2.5    ← SHOT 02 mid: typing in progress (verify cursor blink + JetBrains Mono)
t=3.8    ← SHOT 03 mid: md morphing (verify ghost residual + scale curve)
t=5.0    ← SHOT 03 end: hero md settled (verify 480px + Terracotta dot)
t=7.0    ← SHOT 04 mid: cards in flight (verify parabolic curve + card content readable)
t=8.4    ← SHOT 04 tagline (verify「万物 → md」Chinese italic)
t=10.5   ← SHOT 05 mid: html card complete (verify essay content readable)
t=13.5   ← SHOT 06 mid: md source visible (verify syntax highlighting)
t=16.5   ← SHOT 07 mid: docx page complete (verify chapter title + page number)
t=19.0   ← SHOT 08 mid: PDFs fanned out (verify crop marks visible)
t=21.5   ← SHOT 09 mid: EPUB frame complete (verify Apple Books chrome)
t=23.4   ← SHOT 10 mid: 6 capability orbit (verify complete capability panorama)
t=25.0   ← SHOT 11 mid: ONE SOURCE. complete (verify letter-spacing + Terracotta period)
t=27.5   ← SHOT 12 mid: SIX FORMS. + pills (verify complete slogan two-line)
t=28.5   ← SHOT 12 marketing frame (verify overall marketing-ready frame)
t=29.9   ← SHOT 13 final hold (verify md stamp + accent rule)
```

Each frame must satisfy:
- No elements overflow the 1920×1080 canvas
- Letter-spacing and line-height are visually correct
- Anti-AI slop checklist passed
- Key typography details (such as Terracotta dot, page number em-dash, chapter title small caps) are recognizable

## 5.6 Recording Parameters

```bash
node scripts/render-video.js \
  --file file:///path/to/v5-six-forms.html \
  --duration 30 \
  --fps 25 \
  --width 1920 \
  --height 1080 \
  --out v5-final-silent.mp4
```

**Key codec parameters**:
- video codec: libx264
- pixel format: yuv420p (compatibility)
- bitrate: 12 Mbps (high quality, 30s file approx 45MB)
- profile: high
- preset: slow (quality > speed)

**Post-processing frame interpolation** (optional, 60fps smooth version):

```bash
bash scripts/convert-formats.sh v5-final-silent.mp4 --fps 60
```

## 5.7 Audio Mixing

```bash
# Step 1: Add BGM
bash scripts/add-music.sh v5-final-silent.mp4 \
  --bgm assets/bgm/cinematic-minimal-30s.mp3 \
  --bgm-volume -18dB \
  --out v5-with-bgm.mp4

# Step 2: Add SFX cues (following Part II.6 SFX Dictionary cue by cue)
# Use ffmpeg's -filter_complex amix for multi-track mixing
ffmpeg -i v5-with-bgm.mp4 \
  -i assets/sfx/ui/keyboard-click-1.mp3 \
  -i assets/sfx/ui/keyboard-click-2.mp3 \
  ... \
  -filter_complex "[1]adelay=500|500[s1];[2]adelay=550|550[s2];...;[0][s1][s2]...amix=inputs=N:duration=longest:dropout_transition=0[out]" \
  -map 0:v -map "[out]" \
  -c:v copy -c:a aac -b:a 192k \
  v5-final.mp4

# Step 3: Verify audio stream
ffprobe -i v5-final.mp4 -show_streams -select_streams a 2>&1 | grep -E "(codec_type|sample_rate|channels|duration)"
```

**Expected output**:
- audio codec: aac
- sample rate: 44100Hz or 48000Hz
- channels: 2 (stereo)
- duration: 30.0s

## 5.8 Deliverables Checklist

```
v5-final.mp4              Main deliverable (30s, 1920×1080, 25fps, with audio, ~50MB)
v5-final-60fps.mp4        High frame rate version (60fps interpolated, ~80MB, for X / YouTube)
v5-final.gif              Social media version (30s, palette optimized, < 8MB, for WeChat public account embed)
v5-final-silent.mp4       Silent version (backup, convenient for later re-dubbing / BGM swap)
v5-poster.png             Poster version (capture t=28.5s frame, for X card / WeChat public account cover)
v5-director-notes.md      This document (director's notes)
v5-six-forms.html         Source file (HTML animation)
v5-shot-list.csv          Shot timecode + key parameter reference table (pause verification aid)
```

## 5.9 Full Pipeline Time Estimate

| Step | Estimated Time |
|-----|----------|
| Director's notes writing | Already complete |
| HTML animation implementation | 4-6 hours |
| Key frame screenshots + visual verification | 1 hour |
| Record silent MP4 | 5-10 min (includes Playwright startup) |
| BGM generation / selection | 30 min |
| SFX cue matching + mixing | 2-3 hours |
| GIF generation | 5 min |
| Poster screenshot + naming | 10 min |
| Final delivery + git commit | 10 min |
| **Total** | **8-11 hours** |

---

# Appendix · This Film's First Principle

If I as director could keep only one sentence from this film, it would be:

> **A typographic film about "source," whose protagonist is an `md.` character.**

All other design decisions — palette, typography, rhythm, SFX, chrome, anti-slop checklist — are derived from this single sentence.

If a specific decision cannot be traced back to this sentence, don't do it.

---

*Director's notes — end of document*
*Total word count: approx 11500 characters*
*Next: after user review passes, enter HTML implementation phase*
