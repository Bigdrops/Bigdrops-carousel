# Launch Film Workflow: Write 10,000-Character Director's Notes First, Then Animate

> Standard workflow for high-spec visual works (≥ 20 seconds, containing brand narrative, including slogan reveal, potentially promoted on X / WeChat Official Account / Bilibili).
>
> Trigger condition: The task is "product upgrade promotional video / brand launch film / launch trailer / superbowl-tier ad / brand campaign / hero animation video," and **the user has clear quality expectations** (e.g., "Super Bowl quality feel," "10x detail," "Apple level").
>
> Anti-trigger: Do NOT use this workflow for "quick animation demo," "simple motion graphic," "single icon animation" — it will over-engineer.

---

## 1. Why Write Director's Notes First

Practical lesson (2026-05-11 huashu-md-html v2.0 project):

First round: jumped directly into writing HTML — produced "programmer's perspective animation": every capability treated equally, uniform rhythm, slogans clashing, missing narrative arc.
Second round: received user instruction to "stop, first write 10,000-character storyboard from an Apple director's perspective," produced v5-director-notes.md (11,500 characters, 13 shots with shot-by-shot spec), then implemented from the script — passed in one go, every pause-frame was visually engaging, rhythm had a climax.

**Core difference**: Writing the script is thinking, writing HTML is executing. Think it through first, then execution is mechanical translation. Execute first, and every shot is an on-the-spot decision, inevitably chaotic.

Writing director's notes isn't "pretentious" — it's about documenting **all visual decisions before touching code** — every shot already visualized, reasoned through, and traced against context in your mind. When implementing HTML, you no longer need to make creative decisions, only faithfully translate.

---

## 2. Trigger Decision (Ask Yourself 3 Questions First)

Before launching the launch film workflow, ask:

1. **Does this piece carry brand narrative?** (has thesis / slogan reveal / upgrade ceremony feel) — Yes → go through director's notes process
2. **Will the audience pause to look?** (might screenshot, make X posters, use as cover, slow-motion review) — Yes → every frame must be visually rewarding
3. **Does the client/user have a reference like "I want it to look like XXX"?** (Apple / Anthropic / Nike / Penguin / a specific director) — Yes → must define visual context clearly

If any is "Yes," go through the process. If all three are "No," skip and use the standard process from [animations.md](animations.md).

---

## 3. Director's Notes: 5-Part Structure

A 10,000-character (10,000-12,000 Chinese characters / equivalent English) director's notes must include these 5 parts. **Missing any part means incomplete, quality will suffer**.

### Part I · Director's Statement (Creative Thesis, ~1,500-2,000 characters)

Answer 5 questions:

1. **What is this piece NOT?** (clear exclusions — e.g., "This is not a feature intro video," "not a demo")
2. **Core thesis in one line** — what's the one sentence the audience remembers after watching?
3. **Whose context is it in dialogue with?** — List 5-8 visual references (director / designer / brand / photographer / work title + year), explain what was learned from each
4. **Three audience profiles + promise to each**: Primary / secondary / peripheral audiences, each with a corresponding paragraph
5. **Rhythm philosophy** — slow beat / acceleration / peak / gentle closing curve + emotional climax at which second (**not necessarily the last second**)

End with an anti-slop checklist: **Things this piece does NOT do** (specific list, not vague).

### Part II · Visual System (Full Spectrum, ~1,500-2,500 characters)

This is the engineered visual spec. When complete, any executor can produce consistent visuals.

Required subsections:

- **Full color palette**: At least 8-10 colors, each with HEX + functional definition + maximum screen coverage percentage
- **Typography system**: At least 6 font size levels, each with font name + weight + size + letter-spacing + usage
- **Grid system**: Canvas size + margins + column grid + baseline grid + key safe zones + golden ratio anchors
- **Animation system**: Easing library (4 or fewer) + duration dictionary + stagger rules + scene transition rules
- **Chrome elements**: Small details throughout the piece (counter / chip / ticker / watermark / texture), each with position + entry/exit timing
- **Audio system**: BGM 30-second direction curve (layered) + SFX dictionary (10+ cues with timecode + volume + frequency band isolation)
- **Anti-AI slop checklist**: Per-shot self-check table (10-15 items)

Iron rule: **All visual decisions derive from the Visual System; don't invent new values on the fly in the shot list**.

### Part III · Story Arc (~500-800 characters)

Three-act structure + emotion curve:

- **Act I · SETUP** (0 → first 1/5 of duration, e.g., 0-6s for 30s): Audience enters, problem is posed
- **Act II · ESCALATION** (middle 2/3): Answer unfolds, theme develops
- **Act III · PAYOFF** (last 1/4): Elevation, slogan reveal, brand stamp

Include ASCII emotion curve chart + emotional climax moment marker.

**Key decision**: Climax doesn't have to be at the end. For a 30s piece, climax is typically at 22-25s (not 29s) — the last few seconds are resolution/decay, not peak. Violating this rule inevitably makes the work "anticlimactic."

### Part IV · Shot-by-Shot Storyboard (~5,000-7,000 characters · 60% of content)

Each shot contains 10 fields (all mandatory):

```
SHOT NN · NAME
[TIMECODE]    Start/end time + duration
[FUNCTION]    This shot's function in the story arc (one sentence)
[VISUAL]      Frame composition + element positions + motion direction
[TYPE]        Typography spec (font / size / tracking / line-height / color / alignment)
[ANIM]        Each element's in/out timing + easing + duration + stagger + delay
[AUDIO]       Music beat + SFX cue (each shot corresponds to BGM rhythm + mandatory SFX schedule)
[CHROME]      Corner element states (which chrome elements are on / which fade in/out / which pulse)
[ANTI-SLOP]   Which self-checks this shot passed + what 120% detail signature it has
[WHY]         Logic connecting from previous shot + hook pushing to next shot
```

**Fields average 30-80 characters → each shot 400-700 characters → 12-15 shots → 5,000-7,000 characters**.

Practical experience: After writing the storyboard, **read it through once yourself** — if any single shot could be deleted and the whole piece still stands, that shot is redundant. Delete it.

### Part V · Production Manifest (~800-1,200 characters)

Engineering delivery checklist:

- Font loading URLs (including preconnect)
- CSS variables (directly pasteable)
- BGM source selection criteria + Suno/Udio prompt keywords + backup libraries
- SFX dictionary (cue by cue with timecode: file path + volume)
- **Keyframe verification plan**: 12-15 pause-and-check keyframe timecodes, verification items per frame (fonts / positions / chrome state)
- Recording parameters (fps / codec / bitrate / preset)
- ffmpeg audio mixing commands (including audio stream verification)
- Deliverables list (mp4 / mp4-60fps / gif / poster.png / silent.mp4 / shot-list.csv)
- Full pipeline time estimate (hour-level precision)

---

## 4. 5 Tips for Writing Director's Notes

**4.1 Use the Director's Voice, Not the PM's Voice**

❌ "This shot displays the product features."
✅ "This is the hero shot — if the audience pauses anywhere, I want it to be here."

Director notes are for the executor to read, but also for your future self. First-person + judgment expression preserves more decision clues than description expression.

**4.2 Reference Specific Works (with Years), Not Just Genre Names**

❌ "Apple-inspired"
✅ "Apple 'Designed by Apple in California' (2013, dir. Mark Romanek) — learning: slow pace + serif + large white background"

Benefits of referencing specific works: (a) any audience can search online for comparison (b) forces you to think clearly about what specific technique you're learning (c) prevents "vague inspiration."

**4.3 Trace Every Decision Back to First Principles**

The whole piece has one first principle (e.g., "Markdown is the new typewriter."). Every specific decision — color scheme / typeface / rhythm / chrome — must trace back to this statement.

Decisions that can't be traced are decoration. Delete them.

**4.4 Writing Anti-Slop is More Important Than Writing Do-This**

The "things this piece does NOT do" list (purple gradients / emoji / Lorem ipsum / Inter display / SVG drawing people / rounded cards + left border accent) protects quality more than the "things this piece does" list.

Positive decisions are infinite; the negative checklist is finite — but once a negative checklist item is violated, it's slop.

**4.5 Don't Implement Immediately After Writing — Wait 30 Minutes and Re-read**

When writing, the brain is in "production mode" and can't see inconsistencies. Waiting 30 minutes to read your own storyboard will reveal:
- Two shots with overlapping functions (delete one)
- A shot with too big a narrative jump (add transition)
- Emotional climax in the wrong position (move it)
- Chrome elements and shot count don't match (realign)

These 30 minutes save 2 hours of rework later.

---

## 5. Director's Notes → HTML Implementation Process

After writing director's notes, the HTML implementation steps:

1. **Reuse starter components** (`assets/animations.jsx`'s Stage/Sprite/Easing/interpolate) — don't reinvent
2. **CSS variables pasted directly from Visual System Part II** — don't change colors on the fly in HTML
3. **Map Sprite start/end timeline against Part IV timecodes** — don't add shots without permission
4. **Extract chrome elements as independent components** (ChromeA/B/C/D), driven by useTime() state switching
5. **Destination cards content must be real and readable** (not fake bar lines) — this is the most frequently mentioned 120% detail signature in the v5 project
6. **Capture keyframes for verification immediately after each shot** (using `?t=NN` URL parameter + Playwright), don't write the entire piece before unified verification

---

## 6. Keyframe Verification Process

URL parameter implementation (must be added in the Stage component):

```js
const urlMatch = window.location.search.match(/[?&]t=([\d.]+)/);
const frozenTime = urlMatch ? parseFloat(urlMatch[1]) : null;
const [time, setTime] = useState(frozenTime != null ? frozenTime : 0);
const [playing, setPlaying] = useState(frozenTime == null);
```

→ This way `file:///path/animation.html?t=14.5` directly freezes at 14.5 seconds.

Batch screenshot:

```bash
for t in 0.5 2.5 4.9 7.0 10.5 13.5 16.5 19.0 21.5 23.4 25.5 28.0 29.9; do
  npx -y playwright screenshot \
    "file://$PWD/animation.html?t=$t" \
    "keyframes/t-$t.png" \
    --viewport-size=1920,1136 \
    --wait-for-timeout=2500
done
```

Each screenshot must verify:
- [ ] Elements don't overflow 1920×1080 canvas
- [ ] Tracking and line height visually correct (not cramped, not loose)
- [ ] Key typography details (period color / em-dash / italic / small caps) identifiable
- [ ] Chrome element positions + states correct
- [ ] Anti-AI slop checklist passed
- [ ] 120% detail worth "pausing to look at" exists

---

## 7. Multi-Perspective Parallel Strategy (Advanced)

For complex projects (e.g., launch film direction unclear / want to see multiple aesthetic differences / client hasn't approved a style) you can **launch multiple subagents in parallel to produce versions from different directorial perspectives**.

Practical configuration (2026-05-11 huashu-md-html project, 6 parallel versions):

```
v5  · Baseline (Anthropic / Penguin Classics publishing taste)
v5a · Wes Anderson (symmetry + retro + chapter cards)
v5b · Saul Bass (cut-paper + 60s large type + geometric cuts)
v5c · Wong Kar-wai (Chinese serif + slow motion + nostalgia)
v5d · Massimo Vignelli (modernist grid + red + black)
v5e · Kenya Hara (minimalist Japanese + whitespace)
v5f · Yayoi Kusama (polka dots + repetition + single bold color)
```

Each subagent receives an independent brief:
- Project background (same across all)
- Required reading (same v5-director-notes.md as methodology template)
- **Assigned artist DNA** (color palette / fonts / visual language / rhythm / signature elements / anti-slop enhanced version, each 30-50 words)
- Unified task list (director-notes.md + animation.html + keyframes/ + README.md)
- Unified constraints (30s / 1920×1080 / file:// / Google Fonts)

Launched in parallel + background execution, about 30-60 minutes to produce 6 complete versions.

After completion, review and compare:
1. Each version's core aesthetic decisions table
2. Side-by-side keyframe comparison (one frame at the same moment from each version)
3. Vote: which best fits the user's real needs

**Key**: Don't let subagents reference each other — they must produce independently or they'll converge on the "average." Each subagent's instructions must explicitly say "don't repeat v5's aesthetic."

---

## 8. Typical Trigger Scenarios

| User Scenario | Trigger? | Notes |
|--------------|----------|-------|
| "Make a SaaS upgrade promotional video" | ✅ Trigger | Default full process |
| "Apple level / Super Bowl quality video" | ✅ Trigger + upgrade | Strongly recommend multi-perspective parallel |
| "30-second brand launch film" | ✅ Trigger | |
| "Write a 10,000-character script first, then animate" | ✅ Trigger | User explicitly specifies |
| "Simple motion graphic, logo spin" | ❌ No trigger | Use animations.md standard process |
| "Make an onboarding animation demo" | ❌ No trigger | Use animations.md |
| "Tutorial video with voiceover" | ❌ No trigger | Use voiceover-pipeline.md |
| "Single hero animation" | ⚠️ Depends on complexity | If high-spec hero, trigger; normal hero use hero-animation-case-study.md |

---

## 9. Reference Samples

Complete director's notes reference sample (self-contained, within this skill):

`assets/director-notes-samples/launch-film-30s-sample.md` (~78KB · 11,500 characters · 13 shots · all 5 parts complete)

Original project locations (with corresponding implementation HTML + keyframes):

- v5-director-notes.md (director's notes, author's local, not distributed with repo)
- v5-six-forms.html (HTML implementation, author's local, not distributed with repo)
- v5-keyframes/ (keyframe verification screenshots, author's local, not distributed with repo)

When starting a new project, it's strongly recommended to **read this sample first** to understand the workload and detail density, then decide whether to go through the full process.

---

## 10. Anti-Patterns (Don't Do This)

❌ **Write a 1,000-character condensed director's notes and start implementing**
→ The condensed version inevitably misses some Visual System subsection, causing the HTML implementation to constantly backtrack to fill specs. Either go full 10,000-character level, or skip entirely.

❌ **Storyboard with only 5-8 shots**
→ A 30-second piece needs at least 12-15 shots (each 2-3 seconds). Fewer shots = uniform rhythm = no climax.

❌ **Deliver director's notes without implementation**
→ The document is not the deliverable; the animation is. Deliver documents + animation together, with the document as a "design rationale" appendix.

❌ **Let subagents see other versions in multi-perspective parallel**
→ Each subagent must be independent, otherwise they converge. Compare only during the review phase.

❌ **Skip keyframe verification and record MP4 directly**
→ Guaranteed rework. Keyframe verification is the cheapest quality gate.

❌ **Postpone animation detail decisions to "I'll figure it out when recording"**
→ The recording phase is mechanical execution; no creative decisions should be made. All decisions must be finalized in the director's notes.

---

*Last revised: 2026-05-11*
*Real case: huashu-md-html v2.0 launch film (v5-director-notes.md)*
