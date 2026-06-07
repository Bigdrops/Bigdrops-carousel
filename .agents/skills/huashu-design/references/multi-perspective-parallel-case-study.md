# Multi-Perspective Parallel Experiment · Case Study

> huashu-md-html v2.0 launch film project · 2026-05-11
> 6 artist-perspective parallel director's notes + HTML + keyframe experiment

---

## Background

When the user requested "create a 30-second upgrade promotional video for huashu-md-html v2.0," the main thread first produced the v5 baseline (Anthropic / Penguin Classics publishing taste). But the user believed it could be better and gave a critical instruction:

> "Invoke different subagents to generate 6 completely different expression styles and visual design versions. Try enabling different directors and artists. Then, after all are complete, judge and review."

This was the first systematic "multi-perspective parallel director's notes" experiment, validating a reusable workflow.

---

## Logic for Choosing the 6 Perspectives

Don't randomly pick 6 designers — they must have **extremely high visual differentiation** to avoid convergence.

The final 6 perspectives (with selection rationale):

| Perspective | Genre | Aesthetic Anchor | Difference from Other Perspectives |
|------------|-------|-----------------|----------------------------------|
| **v5 Baseline** | Modern Publishing | Anthropic terracotta orange + Penguin Classics serif + Vignelli grid | Safe "tasteful" choice |
| **v5a Wes Anderson** | Film Chapter Aesthetics | The French Dispatch magazine feel + 1960 Olivetti industrial catalog | Symmetrical composition + chapter cards + decorative borders |
| **v5b Saul Bass** | 60s Film Title Art | cut-paper + Trajan caps + flowing geometry | Paper-cut silhouettes + large type + strong diagonals |
| **v5c Wong Kar-wai** | Hong Kong New Wave | In the Mood for Love / 2046 letterboxing + Chinese serif | Slow pace + hazy light halos + Chinese primarily |
| **v5d Massimo Vignelli** | 1970 Modernism | Knoll identity manual + NYC Subway map | Strict grid + 3-color rule + rejection of decoration |
| **v5e Kenya Hara** | Minimalist Japanese | MUJI posters + "White" | Whitespace philosophy + no chrome + ma (interval) |
| **v5f Yayoi Kusama** | Installation Art | Infinity Mirror Rooms + Polka Dot Obsession | Obsessive repetition + single bold color + polka dots |

**Selection Principles**:
1. **3 different geographic cultures** (Western film / Japanese design / Hong Kong Chinese)
2. **3 different eras** (1960s / 1970s / 2010s+)
3. **3 different media** (film / graphic design / installation art)
4. **Each has a visual signature "completely opposite to the generic SaaS aesthetic in training data"**

---

## Implementation Process

### Step 1 · Write Independent Briefs for Each Perspective (~15 minutes)

Each brief contains 8 fixed fields:

```
1. Project background (same across all)
2. Required reading (same v5-director-notes.md as methodology template)
3. What you need to do (4-item deliverable checklist)
4. Artist DNA (core 6 fields):
   - Color palette (specific HEX values)
   - Fonts (specific names + fallback alternatives)
   - Visual language (core principles)
   - Signature elements (identifiable signatures)
   - Rhythm (differentiates from other perspectives)
   - Anti-AI slop enhanced version (taboos in that style's context)
5. 30-second structure reference (4-6 shot draft)
6. Destination cards design requirements (keep real and readable)
7. Key constraints (30s / 1920×1080 / file:// / Google Fonts CDN)
8. Output verification checklist + completion report format
```

**Key**: Each brief must emphasize "**don't repeat v5's aesthetic**" — otherwise subagents would be influenced by the v5 director-notes and converge.

### Step 2 · Launch 6 Subagents in Parallel (6 Agent tool calls in one message)

```js
Agent({ subagent_type: "general-purpose", run_in_background: true, name: "v5a-anderson", ... })
Agent({ subagent_type: "general-purpose", run_in_background: true, name: "v5b-bass", ... })
// ... 6 total
```

Background execution, expected 30-60 minutes.

### Step 3 · Idle Work During Waiting

Don't poll agent status. Subagents automatically send task-notification on completion. During waiting, do:

- Fix bugs in the main thread's v5 baseline
- Write the review framework (scoring dimensions per version / Q&A)
- Distill methodology into the skill (this case study is the result)
- Prepare the final summary document skeleton

### Step 4 · Failure Handling (~16% failure rate, acceptable)

Practical observation: about 1 in 6 subagents fails due to network or token limit issues (Bass had a socket error on first round). Handling:

1. **Immediately check** the agent's output folder upon receiving completion notification
2. Missing key deliverables → restart the agent (same brief, can note "previous attempt failed, please re-execute")
3. Partial completion (e.g., has HTML but no screenshots) → main thread supplements Playwright screenshots, don't restart agent

### Step 5 · Systematic Review After All 6 Versions Complete

Review framework (5 dimensions + 3 top-level questions + use case allocation):

```
5-Dimension Scoring (1-10 each):
- Distinctiveness (visual differentiation)
- Coherence (aesthetic consistency)
- Anti-slop (anti-AI slop execution)
- Story arc (rhythm and narrative arc)
- Pause-and-look (detail density)

3 Top-Level Questions:
- Q1 Screenshot-worthy? (would trigger a pause on social platforms)
- Q2 One-line takeaway? (could leave a proposition-level memory)
- Q3 Timeless? (still doesn't look cheap when viewed 5 years later)

Use Case Allocation (by platform and audience):
- WeChat Official Account / X / Bilibili / Moments / Dribbble / Client demo / Private channels / ...
```

See `assets/director-notes-samples/launch-film-30s-sample.md` in the same directory for REVIEW.md.

---

## Experiment Output (Facts)

### Documentation Volume

- v5 baseline director-notes: 11,500 characters
- 6 perspective director-notes: 4,000-12,000 characters each
- Total documentation: approximately 55,000-70,000 characters
- All 5 parts complete: 6/6 versions

### HTML Implementation

- Each version has independent animation.html, 30 seconds, 1920×1080
- File sizes 28-74KB
- All openable via file:// (no server dependency)

### Keyframes

- Each version: 10-18 PNGs, covering the full 30-second story arc
- Total screenshots: 80+
- Average PNG size: 100-200KB

### Duration

- 6 subagents parallel execution: ~12-15 minutes (duration_ms displayed)
- Main thread parallel idle work (fixing v5 + writing methodology): completed concurrently
- Overall "from launching 6 perspectives to all deliverables in place": ~60 minutes

---

## Key Insights (For Future Users of huashu-design)

### Insight 1 · The "Write 10,000-Character Director's Notes First" Methodology is **Completely Reproducible**

All 6 subagents followed the 5-part structure and produced 4,000-12,000 character complete specs, and the HTML implementations all reached marketing-ready quality. This proves the methodology itself doesn't depend on a single executor's talent — **as long as the brief is clear, multiple independent executors can produce consistently high-quality results**.

### Insight 2 · "Perspective" Must Be Specific to "Work + Year"

Each brief listed specific works for dialogue:
- Anderson → *The French Dispatch* (2021) + *Moonrise Kingdom* (2012) + Penguin Classics dust jackets + 1960s Olivetti catalogues
- WKW → *In the Mood for Love* (2000) + *2046* (2004)
- Vignelli → 1972 NYC Subway map + Knoll identity manual + *The Vignelli Canon*
- Hara → MUJI brand 1995-2023 + "White" + Junya Ishigami transparency
- Kusama → Infinity Mirrored Rooms (2013-2023) + Polka Dot Obsession installation

**Practical result**: All subagents accurately captured the core visual DNA of those specific works, not the "average" of the genre.

### Insight 3 · The "Style-Specific Enhanced Anti-Slop" is Key

Generic anti-slop (purple gradients / emoji / SVG people) applies to all versions. But **each style also needs "dedicated anti-slop"**:

- Bass: Don't use Helvetica (too clean; Bass is rugged)
- Vignelli: Don't use rounded corners (all corners 90°)
- Hara: Don't use any gradients + don't use sans display
- Kusama: Don't use modern SaaS look
- Anderson: Don't use cyber color palette
- WKW: Don't use Inter (WKW uses serif)

After adding these, the 6 versions had extremely high style purity, none converging with another.

### Insight 4 · The Real Value of Multi-Perspective Is Not "Choosing a Winner"

The initial idea was A/B testing to pick the best version. During actual review, we found: **the 6 versions each have clear use cases**:
- v5 Baseline → Product page / WeRead (high information density)
- Anderson → WeChat long-form article cover image (strong magazine feel)
- WKW → Bilibili / Chinese cultural content (nostalgic warmth)
- Vignelli → Design circles / Dribbble (every frame is a print poster)
- Hara → Client demos / static screenshots (minimalist philosophy)
- Kusama → X short video / viral spread (visual impact)

**Conclusion**: Marketing isn't single-shot; it's platform-specific multiplexing. The real value of 6-perspective parallel is **giving one project 6 differentiated weapons**, not having 5 versions that can't be presented.

### Insight 5 · Subagent Failure Rate of ~16% Is Acceptable

1 in 6 failed (Bass first-round socket error). Cost of handling: restart + 5-minute condensed brief, then wait another 12-15 minutes. **Compare vs. waiting for 1 agent to sequentially run 6 versions (90+ minutes)** — parallel + retry is clearly more economical.

### Insight 6 · The Main Thread Must Do Substantive Idle Work While Waiting

Subagents take 12-15 minutes to complete. During this time, the main thread must never be idle:

- **Fix main version bugs** (those already reported by the user)
- **Write the review framework** (to fill in when reviewing)
- **Distill methodology into the skill** (like this case study)
- **Prepare the final summary** (so the user can grasp it at a glance)

This is the "main thread responsibility" of a parallel multi-agent workflow — not a PM waiting for results, but an orchestrator advancing synchronously.

---

## When to Enable "Multi-Perspective Parallel"

| Scenario | Enable? | Reason |
|----------|---------|--------|
| User explicitly says "I want to see different directions" or "make a few more versions" | ✅ Enable immediately | Direct requirement |
| First version delivered, user not satisfied but can't articulate what they want | ✅ Enable | A/B selection beats "I guess what you want" |
| Project preparing for multi-platform distribution (X / WeChat / Bilibili / Moments) | ✅ Enable | One version per platform |
| Client hasn't approved a style but has budget (time + tokens) | ✅ Enable | Repeated revisions cost 5× |
| User already gave clear style reference and only wants 1 version | ❌ Don't enable | Waste |
| Task is simple motion graphic / icon animation | ❌ Don't enable | Over-engineering |
| Tight timeline < 30 minutes | ❌ Don't enable | Subagents can't finish |

---

## Complete Methodology Flow Chart

```
User brief (with quality expectations)
       ↓
[Main thread] Write v5 baseline director's notes (10,000-character 5-part)
       ↓
[Main thread] Implement v5 HTML + capture keyframes (marketing baseline)
       ↓
[Decision point] Enable multi-perspective?
       ↓ YES
[Main thread] Select 6 differentiated perspectives + write 6 independent briefs (8 fields each)
       ↓
[6 subagents in parallel]
   ├── v5a brief → director-notes + html + keyframes + README
   ├── v5b brief → ...
   ├── v5c brief → ...
   ├── v5d brief → ...
   ├── v5e brief → ...
   └── v5f brief → ...
       ↓
[Main thread synchronously] Fix v5 bugs · Write review framework · Distill methodology
       ↓
[All 6 notifications arrive]
       ↓
[Main thread] Failure detection + retry / supplement screenshots
       ↓
[Main thread] 5-dimension scoring + 3 top-level questions + use case allocation
       ↓
[Main thread] Write final REVIEW.md
       ↓
[Delivery] 6 complete versions + review + platform distribution recommendations
```

---

## Related Documents

- Full methodology: `references/launch-film-director-notes.md`
- Single perspective sample: `assets/director-notes-samples/launch-film-30s-sample.md` (v5 baseline)
- Practical project location: author's local demos directory (contains 6 + 1 perspective full files, not distributed with repo)
- Review: author's local REVIEW.md (not distributed with repo)

---

*Last updated: 2026-05-11*
*Real case study: huashu-md-html v2.0 launch film 6-perspective parallel experiment*
