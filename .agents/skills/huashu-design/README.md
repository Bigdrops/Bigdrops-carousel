<sub>🌐 <b>Chinese</b> · <a href="README.en.md">English</a></sub>

<div align="center">

# Huashu Design

> *"Type. Hit enter. A finished design lands in your lap."*
> *"Type. Hit enter. A finished design lands in your lap."*

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Agent-Agnostic](https://img.shields.io/badge/Agent-Agnostic-blueviolet)](https://skills.sh)
[![Skills](https://img.shields.io/badge/skills.sh-Compatible-green)](https://skills.sh)

<br>

**Type one sentence into your agent, get back a shippable design.**

<br>

In 3 to 30 minutes, you can ship a **product launch animation**, a clickable App prototype, an editable PPT, or a print-grade infographic.

Not at the "pretty good for AI" level — it looks like it was made by a top-tier design team. Give the skill your brand assets (logo, color palette, UI screenshots), and it will understand your brand's character; give it nothing, and **the 3-track advisor + 40 HTML-native style library** will still guard against AI slop.

**Every animation you see in this README was made by huashu-design itself.** Not Figma, not After Effects — just a one-sentence prompt + the skill. Next time you need a product launch video? Now you can make one too.

```
npx skills add alchaincyf/huashu-design
```

Works across agents — Claude Code, Cursor, Codex, OpenClaw, Hermes — all compatible.

> &#x1f4e3; **Now under MIT License.** As of 2026-05-14, this skill is fully open source ([MIT License](LICENSE)), free for both personal and **commercial use**, no prior authorization required. The previous terms of "free for personal use, commercial requires license" are void. ([See changes](#license))

[See demos](#demo-gallery) · [Installation](#install-and-go) · [Capabilities](#capabilities) · [Core Mechanics](#core-mechanics) · [Relationship with Claude Design](#relationship-with-claude-design)

</div>

---

<p align="center">
  <img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.gif" alt="huashu-design Hero · Type → Pick direction → Gallery expands → Focus → Brand reveals" width="100%">
</p>

<p align="center"><sub>
  ▲ 25 sec · Terminal → 4 directions → Gallery ripple → 4x Focus → Brand reveal<br>
  👉 <a href="https://www.huasheng.ai/huashu-design-hero/">Visit the interactive HTML version with sound</a> ·
  <a href="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.mp4">Download MP4 (with BGM+SFX · 10MB)</a>
</sub></p>

---

## 📺 Beginner Tutorial (Recorded by Huashu)

Not sure how to use it? Watch Huashu's getting-started tutorial for huashu-design:

<p align="center">
  <a href="https://www.youtube.com/watch?v=m-_BlUdcIvw"><img src="https://img.youtube.com/vi/m-_BlUdcIvw/maxresdefault.jpg" alt="huashu-design Tutorial" width="70%"></a>
</p>

<p align="center"><sub>👉 <a href="https://www.youtube.com/watch?v=m-_BlUdcIvw">Watch the full tutorial on YouTube</a></sub></p>

---

## Install and Go

```bash
npx skills add alchaincyf/huashu-design
```

Then just talk to Claude Code directly:

```
"Create a presentation PPT on AI psychology, recommend 3 style directions for me to choose from"
"Make an AI Pomodoro iOS prototype, 4 core screens that are actually clickable"
"Turn this logic into a 60-second animation, export MP4 and GIF"
"Give this design a 5-dimension expert critique"
```

No buttons, no panels, no Figma plugin.

---

## Star History

<p align="center">
  <a href="https://star-history.com/#alchaincyf/huashu-design&Date">
    <img src="https://api.star-history.com/svg?repos=alchaincyf/huashu-design&type=Date" alt="huashu-design Star History" width="80%">
  </a>
</p>

---

## Capabilities

| Capability | Deliverable | Typical Time |
|------|--------|----------|
| Interactive Prototype (App / Web) | Single-file HTML · Real iPhone bezel · Clickable · Playwright-verified | 10–15 min |
| Presentation Slides | HTML deck (browser presentation) + Editable PPTX (text boxes preserved) | 15–25 min |
| Timeline Animation | MP4 (25fps / 60fps interpolated) + GIF (palette-optimized) + BGM | 8–12 min |
| Design Variations | 3+ side-by-side comparison · Tweaks real-time parameter tuning · Cross-dimension exploration | 10 min |
| Infographic / Visualization | Print-grade layout · Exportable PDF/PNG/SVG | 10 min |
| Design Direction Consulting | **3 parallel logic tracks** (second roulette + real-world award-winning reference + best designer) · outputs 3 real visual versions directly | 5 min |
| 5-Dimension Expert Critique | Radar chart + Keep/Fix/Quick Wins · Actionable fix checklist | 3 min |

---

## Demo Gallery

### Design Direction Consulting

Fallback for vague requirements: **3 complementary logic tracks in parallel** — second roulette (20-pick-1 to break inertia) + real-world reference (world-class award-winning site migration) + best designer (top studio philosophy), directly outputs 3 **real visual versions** for you to choose from, never making you blindly pick a style from text. Backed by a **40-style HTML-native library** (20 web + 20 PPT, pure CSS, no image generation needed).

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w3-fallback-advisor.gif" width="100%"></p>

### iOS App Prototype

iPhone 15 Pro precision frame (Dynamic Island / Status Bar / Home Indicator) · State-driven multi-screen switching · Real images from Wikimedia/Met/Unsplash · Playwright automated click testing.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c1-ios-prototype.gif" width="100%"></p>

### Motion Design Engine

Stage + Sprite time-slice model · `useTime` / `useSprite` / `interpolate` / `Easing` 4 APIs cover all animation needs · Single command export MP4 / GIF / 60fps interpolated / finished video with BGM.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c3-motion-design.gif" width="100%"></p>

### HTML Slides → Editable PPTX

HTML deck browser presentation · `html2pptx.js` reads DOM computedStyle and translates each element into PowerPoint objects · Exports **real text boxes** that can be double-clicked to edit in PPT.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c2-slides-pptx.gif" width="100%"></p>

### Tweaks · Real-Time Variation Switching

Parameterized color/typography/information density · Side panel toggle · Pure frontend + `localStorage` persistence · Survives refresh.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c4-tweaks.gif" width="100%"></p>

### Infographic / Data Visualization

Magazine-grade layout · CSS Grid precision columns · `text-wrap: pretty` typographic detail · Real data-driven · Exportable PDF vector / PNG 300dpi / SVG.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c5-infographic.gif" width="100%"></p>

### 5-Dimension Expert Critique

Philosophical consistency · Visual hierarchy · Execution detail · Functionality · Innovation — each 0–10 · Radar chart visualization · Outputs Keep / Fix / Quick Wins checklist.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c6-expert-review.gif" width="100%"></p>

### Junior Designer Workflow

Don't go heads-down building a masterpiece: first write assumptions + placeholders + reasoning, show them to you early, then iterate. Getting it wrong early is 100x cheaper than getting it wrong late.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w2-junior-designer.gif" width="100%"></p>

### Brand Asset Protocol — 5-Step Hard Flow

Enforced when specific brands are involved: Ask → Search → Download (3 fallback paths) → grep color values → Write `brand-spec.md`.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w1-brand-protocol.gif" width="100%"></p>

---

## Showcase · Real-World Case Studies

### Parrot Evolution Website · Design Direction Consulting 3-Track Practice (v2.0)

> **Live demo · [https://www.huasheng.ai/parrots/](https://www.huasheng.ai/parrots/)**

One sentence "Create a website about parrot evolution history," zero additional requirements — the skill automatically runs the full v2.0 consulting workflow: first determines images are content-essential → fetches public domain natural history illustrations (Edward Lear / John Gould parrot plates) → **3 parallel logic tracks** (second roulette + real-world award-winning reference + Kenya Hara's "White" philosophy) each produce a real visual version. **Assets ready before design, not placeholder color blocks during design.**

### "Talk About Skills" · PM After-Party Presentation Deck

> **Live demo · [https://skill-huasheng.vercel.app](https://skill-huasheng.vercel.app)**

13-page HTML deck, **all created with huashu-design**:

- Black minimalist serif visual system (cover / about / hook / what / why / closing)
- 2 cinematic 22-second demos with BGM + SFX (Nuwa skill workflow + Darwin skill workflow), each with **completely independent visual languages**:
  - **Nuwa**: 3D knowledge orbit + Pentagon distillation + SKILL.md typewriter + "21 minutes" hero reveal
  - **Darwin**: autoresearch loop spin + v1/v5 side-by-side diff + Hill-Climb fullscreen curve + Ratchet gear lock
- Each cinematic defaults to showing the **complete static workflow dashboard** (audience can see how the skill works at any time), click ▶ to trigger animation, auto fades back to dashboard when done
- Embedded huasheng.ai 25s hero animation (iframe with local fallback)
- Real data: 14,495 stargazers real curve (fetched via gh API) + DeepSeek V4 real specs (WebSearch verified)
- Real AI assets: ran `huashu-gpt-image` for 4x2 grid full images, `extract_grid.py` extracted 8 individual transparent PNGs for 3D orbit floating

**Pages worth referencing**:
- `/slides/slide-04b-nuwa-flow.html` · Static dashboard + cinematic overlay dual-layer architecture
- `/slides/slide-06b-darwin-flow.html` · Completely independent visual language comparison case
- `/slides/slide-03b-deepseek-cover.html` · AI slop vs real designer perspective comparison page

Detailed cinematic patterns in `references/cinematic-patterns.md`.

---

## Core Mechanics

### Brand Asset Protocol

The hardest rule in the skill. Enforced 5-step when specific brands are involved (Stripe, Linear, Anthropic, your own company, etc.):

| Step | Action | Purpose |
|------|------|------|
| 1 · Ask | Does the user have brand guidelines? | Respect existing resources |
| 2 · Search official brand page | `<brand>.com/brand` · `brand.<brand>.com` · `<brand>.com/press` | Capture authoritative color values |
| 3 · Download assets | SVG files → full HTML of official site → product screenshots for color extraction | 3 fallback paths, move to next on failure |
| 4 · grep extract color values | Grab all `#xxxxxx` from assets, sort by frequency, filter out black/white/gray | **Never guess brand colors from memory** |
| 5 · Solidify spec | Write `brand-spec.md` + CSS variables, all HTML references `var(--brand-*)` | If not solidified, it gets forgotten |

A/B test (v1 vs v2, 6 agents each): **v2's stability variance is 5x lower than v1**. Stability of stability — this is the skill's true moat.

### Design Direction Consulting (Fallback)

Triggered when user requirements are too vague to act on (redone in v2.0):

- First clarify through conversation + proactively ask for references (name / logo / brand colors / favorite reference sites)
- Gather all content-essential real images (public domain / royalty-free, one-click script), then start work
- **3 complementary logic tracks run subagents in parallel**, each producing one **real visual version**: (1) Second roulette (`date +%S` to pick second, 20-choose-1, breaks model's inertia toward safe minimalism) (2) Real-world reference (world-class award-winning site / PPT / iOS prototype migration) (3) Best designer (the studio philosophy that best fits if budget were unlimited)
- **Never make you blindly pick a style without seeing visuals** — three versions laid out, choose by looking
- After selection, enter the main Junior Designer workflow
- Underpinned by a **40-style HTML-native library** (20 web + 20 PPT, graded by bold/neutral/quiet, pure CSS no image generation) as ammunition, not dogma

### Junior Designer Workflow

Default working mode, runs through all tasks:

- Before starting, send the question list to the user in one message, wait for batch answers before proceeding
- In HTML, first write assumptions + placeholders + reasoning comments
- Show the user as early as possible (even if just gray boxes)
- Fill actual content → variations → Tweaks — show again at each of these 3 steps
- Before delivery, visually inspect in browser with Playwright

### Anti-AI Slop Rules

Avoid the visually average output that screams "AI made this" (purple gradients / emoji icons / rounded cards with left border accent / SVG-drawn faces / Inter as display font). Use `text-wrap: pretty` + CSS Grid + carefully chosen serif display and oklch colors.

---

## Relationship with Claude Design

I'll be honest: the philosophy behind the Brand Asset Protocol was learned from the system prompts circulating from Claude Design. That prompt repeatedly emphasizes that **good high-fidelity design doesn't start from a blank page — it grows from existing design context**. This principle is the dividing line between a 65-point and a 90-point work.

Positioning differences:

| | Claude Design | huashu-design |
|---|---|---|
| Form | Web product (use in browser) | Skill (use in Claude Code) |
| Quota | Subscription quota | API consumption · parallel agent running not limited by quota |
| Deliverable | In-canvas + exportable to Figma | HTML / MP4 / GIF / Editable PPTX / PDF |
| Interaction | GUI (click, drag, edit) | Conversation (speak, wait for agent to finish) |
| Complex Animation | Limited | Stage + Sprite timeline · 60fps export |
| Cross-Agent | Claude.ai exclusive | Any skill-compatible agent |

Claude Design is a **better graphical tool**; huashu-design **makes the graphical tool layer disappear**. Two paths, different audiences.

---

## Limitations

- **No layer-editable PPTX or Figma export**. Outputs HTML, which can be screenshotted, screen-recorded, or exported as images — but can't be dragged into Keynote to edit text position.
- **No Framer Motion-level complex animation**. 3D, physics simulation, particle systems are beyond the skill's scope.
- **Completely blank brand from scratch will drop quality to 60–65**. Designing hi-fi from a blank page is always a last resort.

This is an 80-point skill, not a 100-point product. For people who don't want to open a graphical interface, an 80-point skill is more useful than a 100-point product.

---

## Repository Structure

```
huashu-design/
├── SKILL.md                 # Main document (for agent to read)
├── README.md                # Chinese README (default, this file)
├── README.en.md             # English README
├── assets/                  # Starter Components
│   ├── animations.jsx       # Stage + Sprite + Easing + interpolate
│   ├── ios_frame.jsx        # iPhone 15 Pro bezel
│   ├── android_frame.jsx
│   ├── macos_window.jsx
│   ├── browser_window.jsx
│   ├── deck_stage.js        # HTML slide engine
│   ├── deck_index.html      # Multi-file deck assembler
│   ├── design_canvas.jsx    # Side-by-side variation display
│   ├── showcases/           # 24 preset examples (8 scenarios x 3 styles)
│   └── bgm-*.mp3            # 6 scene-based background music tracks
├── references/              # Sub-documents to read per task
│   ├── animation-pitfalls.md
│   ├── design-styles.md     # 40 HTML-native style library (20 web + 20 PPT)
│   ├── slide-decks.md
│   ├── editable-pptx.md
│   ├── critique-guide.md
│   ├── video-export.md
│   └── ...
├── scripts/                 # Export toolchain
│   ├── render-video.js      # HTML → MP4
│   ├── convert-formats.sh   # MP4 → 60fps + GIF
│   ├── add-music.sh         # MP4 + BGM
│   ├── export_deck_pdf.mjs
│   ├── export_deck_pptx.mjs
│   ├── html2pptx.js
│   └── verify.py
└── demos/                   # 9 capability demos (c*/w*), Chinese/English dual-version GIF/MP4/HTML + hero v10
```

---

## Origin

The day Anthropic released Claude Design, I played with it until 4 AM. A few days later, I realized I hadn't opened it again — not because it's not good (it's the most mature product in this space) — but because I'd rather have my agent do the work in the terminal than open any graphical interface.

So I had my agent deconstruct Claude Design itself (including the community-circulated system prompts, brand asset protocol, component mechanics), distilled it into a structured spec, then wrote it as a skill and installed it in my own Claude Code.

Thanks to Anthropic for writing Claude Design's prompts so clearly. This kind of derivative creation based on inspiration from other products is a new form of open-source culture in the AI era.

---

## License

**Changed to MIT License as of 2026-05-14.** Previous versions used a Personal Use License ("free for personal use, commercial requires authorization") that placed restrictions on commercial use — those restrictions are now fully removed.

Under the [MIT License](LICENSE), you are **free to use, modify, and distribute** this skill, **including for commercial purposes** — internal company use, client projects, even selling as a paid product. No prior authorization needed, no fees, no notice required. Attribution is not required but is appreciated.

---

## Connect · Huasheng (Huashu)

Huasheng is an AI Native Coder, indie developer, and AI content creator. Notable works: Kitten Fill Light (AppStore Paid Chart #1), "DeepSeek in One Book", Nuwa .skill (GitHub 12000+ stars). 300K+ followers across all platforms.

| Platform | Account | Link |
|---|---|---|
| X / Twitter | @AlchainHust | https://x.com/AlchainHust |
| WeChat | Huashu | https://www.huasheng.ai/ |

| Bilibili | Huashu | https://space.bilibili.com/14097567 |

| YouTube | Huashu | https://www.youtube.com/@Alchain |

| Xiaohongshu (RED) | Huashu | https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf |
| Website | huasheng.ai | https://www.huasheng.ai/ |
| Dev Homepage | bookai.top | https://bookai.top |

For collaboration inquiries, content partnerships → DM Huasheng on any platform above.
