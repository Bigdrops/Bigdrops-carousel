# Audio Design Rules · huashu-design

> Audio application recipes for all animation demos. Use with `sfx-library.md` (asset inventory).
> Battle-tested: huashu-design launch hero v1-v9 iterations · Deep deconstruction of three official Anthropic films via Gemini · 8000+ A/B comparisons

---

## Core Principle · Dual-track Audio (Iron Law)

Animation audio **must be designed in two independent layers**, not just one:

| Layer | Role | Time Scale | Relationship with Visual | Frequency Band |
|---|---|---|---|---|
| **SFX (Beat Layer)** | Mark every visual beat | 0.2-2s short bursts | **Tight sync** (frame-level alignment) | **High frequency 800Hz+** |
| **BGM (Atmosphere Base)** | Emotional underpinning, sound field | Continuous 20-60s | Loose sync (paragraph-level) | **Mid-low frequency <4kHz** |

**Animation with only BGM is crippled** — the audience subconsciously perceives "the picture is moving but no sound responds," and this is the root of cheapness.

---

## Gold Standard · Golden Ratio

These values are **engineering hard parameters** measured from comparing the three official Anthropic films + our v9 final version — just apply directly:

### Volume
- **BGM Volume**: `0.40-0.50` (relative to full scale 1.0)
- **SFX Volume**: `1.00`
- **Loudness Difference**: BGM is **-6 to -8 dB** lower than SFX peak (not relying on SFX absolute loudness, relying on loudness difference)
- **amix parameter**: `normalize=0` (never use normalize=1, it flattens dynamic range)

### Frequency Isolation (P1 Hard Optimization)
Anthropic's secret is not "loud SFX volume," it's **frequency layering**:

```bash
[bgm_raw]lowpass=f=4000[bgm]      # BGM limited to <4kHz mid-low frequency
[sfx_raw]highpass=f=800[sfx]      # SFX pushed to 800Hz+ mid-high frequency
[bgm][sfx]amix=inputs=2:duration=first:normalize=0[a]
```

Why: The human ear is most sensitive to the 2-5kHz range (the "presence band"). If SFX is in this range and BGM covers the full spectrum, **SFX gets masked by BGM's high-frequency content**. Use highpass to push SFX higher + lowpass to push BGM lower — each occupies its own frequency territory, SFX clarity jumps up a level.

### Fade
- BGM in: `afade=in:st=0:d=0.3` (0.3s, avoid hard cut)
- BGM out: `afade=out:st=N-1.5:d=1.5` (1.5s long tail, convergence feel)
- SFX has built-in envelope, no extra fade needed

---

## SFX Cue Design Rules

### Density (SFX per 10 seconds)
Measured SFX density in the three Anthropic films has three levels:

| Film | SFX/10s | Product Personality | Scenario |
|---|---|---|---|
| Artifacts (ref-1) | **~9/10s** | Function dense, information rich | Complex tool demonstration |
| Code Desktop (ref-2) | **0** | Pure atmosphere, meditative | Developer tool flow state |
| Word (ref-3) | **~4/10s** | Balanced, office rhythm | Productivity tool |

**Heuristic**:
- Product personality calm/focused → low SFX density (0-3/10s), BGM primary
- Product personality lively/information rich → high SFX density (6-9/10s), SFX drives rhythm
- **Don't fill every visual beat** — whitespace is more refined than density. **Deleting 30-50% of cues makes the remaining ones more dramatic**.

### Cue Selection Priority
Not every visual beat needs SFX. Prioritize this way:

**P0 Required** (omission will feel jarring):
- Typing (terminal/input)
- Click/select (user decision moment)
- Focus switch (visual main element transition)
- Logo reveal (brand convergence)

**P1 Recommended**:
- Element entry/exit (modal / card)
- Completion/success feedback
- AI generation start/end
- Major transition (scene switch)

**P2 Optional** (too many becomes chaotic):
- hover / focus-in
- Progress tick
- Decorative ambient

### Timestamp Alignment Precision
- **Same-frame alignment** (0ms error): click/focus switch/Logo landing
- **Pre-advance 1-2 frames** (-33ms): fast whoosh (give audience psychological expectation)
- **Post-delay 1-2 frames** (+33ms): object landing/impact (matches real physics)

---

## BGM Selection Decision Tree

huashu-design skill includes 6 BGM tracks (`assets/bgm-*.mp3`):

```
What is the animation's personality?
├─ Product launch / Tech demo → bgm-tech.mp3 (minimal synth + piano)
├─ Tutorial / Tool usage → bgm-tutorial.mp3 (warm, instructional)
├─ Educational / Principle explanation → bgm-educational.mp3 (curious, thoughtful)
├─ Marketing ad / Brand promotion → bgm-ad.mp3 (upbeat, promotional)
└─ Same style needs variation → bgm-*-alt.mp3 (respective alternatives)
```

### Scenarios Without BGM (Worth Considering)
Reference Anthropic Code Desktop (ref-2): **0 SFX + pure Lo-fi BGM** can also be premium.

**When to choose no BGM**:
- Animation duration <10s (BGM can't establish itself)
- Product personality is "focused/meditative"
- Scene itself has ambient audio/narration
- SFX density is very high (avoid audio overload)

---

## Scene Recipes (Ready to Use)

### Recipe A · Product Launch Hero (huashu-design v9 equivalent)
```
Duration: 25 seconds
BGM: bgm-tech.mp3 · 45% · Band <4kHz
SFX Density: ~6/10s

Cue:
  Terminal typing → type × 4 (0.6s interval)
  Enter         → enter
  Cards converge → card × 4 (0.2s stagger)
  Select        → click
  Ripple        → whoosh
  4x focus      → focus × 4
  Logo          → thud (1.5s)

Volume: BGM 0.45 / SFX 1.0 · amix normalize=0
```

### Recipe B · Tool Feature Demo (reference Anthropic Code Desktop)
```
Duration: 30-45 seconds
BGM: bgm-tutorial.mp3 · 50%
SFX Density: 0-2/10s (very sparse)

Strategy: Let BGM + voiceover narration drive, SFX only at **decisive moments** (file save/command execution complete)
```

### Recipe C · AI Generation Demo
```
Duration: 15-20 seconds
BGM: bgm-tech.mp3 or no BGM
SFX Density: ~8/10s (high density)

Cue:
  User input → type + enter
  AI starts processing → magic/ai-process (1.2s loop)
  Generation complete → feedback/complete-done
  Result presentation → magic/sparkle

Highlight: ai-process can loop 2-3 times throughout the generation process
```

### Recipe D · Pure Atmosphere Long Shot (reference Artifacts)
```
Duration: 10-15 seconds
BGM: None
SFX: 3-5 carefully designed cues used independently

Strategy: Each SFX is the star, no BGM "mush" issue.
Suitable for: Product slow-mo single shot, close-up display
```

---

## ffmpeg Composition Templates

### Template 1 · Single SFX Overlaid on Video
```bash
ffmpeg -y -i video.mp4 -itsoffset 2.5 -i sfx.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:normalize=0[a]" \
  -map 0:v -map "[a]" output.mp4
```

### Template 2 · Multi-SFX Timeline Composition (aligned by cue time)
```bash
ffmpeg -y \
  -i sfx-type.mp3 -i sfx-enter.mp3 -i sfx-click.mp3 -i sfx-thud.mp3 \
  -filter_complex "\
[0:a]adelay=1100|1100[a0];\
[1:a]adelay=3200|3200[a1];\
[2:a]adelay=7000|7000[a2];\
[3:a]adelay=21800|21800[a3];\
[a0][a1][a2][a3]amix=inputs=4:duration=longest:normalize=0[mixed]" \
  -map "[mixed]" -t 25 sfx-track.mp3
```
**Key parameters**:
- `adelay=N|N`: first is left channel delay (ms), second is right channel, write twice for stereo alignment
- `normalize=0`: preserve dynamic range, critical!
- `-t 25`: trim to specified duration

### Template 3 · Video + SFX Track + BGM (with frequency isolation)
```bash
ffmpeg -y -i video.mp4 -i sfx-track.mp3 -i bgm.mp3 \
  -filter_complex "\
[2:a]atrim=0:25,afade=in:st=0:d=0.3,afade=out:st=23.5:d=1.5,\
     lowpass=f=4000,volume=0.45[bgm];\
[1:a]highpass=f=800,volume=1.0[sfx];\
[bgm][sfx]amix=inputs=2:duration=first:normalize=0[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k final.mp4
```

---

## Failure Mode Quick Reference

| Symptom | Root Cause | Fix |
|---|---|---|
| SFX inaudible | BGM high frequency masking | Add `lowpass=f=4000` to BGM + `highpass=f=800` to SFX |
| SFX too piercing | SFX absolute volume too high | Reduce SFX volume to 0.7, also reduce BGM to 0.3, maintain difference |
| BGM and SFX rhythm clash | Wrong BGM chosen (strong beat music) | Switch to ambient / minimal synth BGM |
| BGM abruptly cuts at animation end | No fade out | `afade=out:st=N-1.5:d=1.5` |
| SFX overlap into mush | Cues too dense + each SFX too long | Keep SFX duration under 0.5s, cue spacing ≥ 0.2s |
| Social media mp4 has no sound | Platforms sometimes mute auto-play | Don't worry, user gets sound on click; GIF has no sound anyway |

---

## Visual Coordination (Advanced)

### SFX Timbre Must Match Visual Style
- Warm beige/paper visual → SFX use **wooden/soft** timbres (Morse, paper snap, soft click)
- Cold black tech visual → SFX use **metallic/digital** timbres (beep, pulse, glitch)
- Hand-drawn/playful visual → SFX use **cartoonish/exaggerated** timbres (boing, pop, zap)

Our current `apple-gallery-showcase.md` warm beige base → pairs with `keyboard/type.mp3` (mechanical) + `container/card-snap.mp3` (soft) + `impact/logo-reveal-v2.mp3` (cinematic bass)

### SFX Can Guide Visual Rhythm
Advanced technique: **Design the SFX timeline first, then adjust visual animation to align with SFX** (not the other way around).
Because each SFX cue is like a "clock tick," visual animation adapting to SFX rhythm is very stable — conversely, SFX chasing visuals often has ±1 frame misalignment that feels jarring.

---

## Quality Checklist (Pre-release Self-check)

- [ ] Loudness difference: SFX peak - BGM peak = -6 to -8 dB?
- [ ] Frequency: BGM lowpass 4kHz + SFX highpass 800Hz?
- [ ] amix normalize=0 (preserve dynamic range)?
- [ ] BGM fade-in 0.3s + fade-out 1.5s?
- [ ] SFX count appropriate (choose density by scene personality)?
- [ ] Each SFX same-frame aligned with visual beat (±1 frame)?
- [ ] Logo reveal sound effect long enough (recommended 1.5s)?
- [ ] Listen with BGM off: is SFX alone rhythmic enough?
- [ ] Listen with SFX off: does BGM alone have emotional arc?

Each layer should be coherent when listened to independently. If only the combination sounds good, it's not done well.

---

## References

- SFX Asset Inventory: `sfx-library.md`
- Visual Style Reference: `apple-gallery-showcase.md`
- Deep audio analysis of three Anthropic films: AUDIO-BEST-PRACTICES.md (author's local material, not distributed with repo)
- huashu-design v9 case study: hero-animation-v9-final.mp4 (author's local sample, not distributed with repo)
