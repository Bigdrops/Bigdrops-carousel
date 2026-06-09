---

A. Update the Humanizer Skill (Nigerian Informal Mode)

Add this as a new section to GUIDELINES/humanizer-nigerian-informal.md (or overwrite if exists):

```markdown
# Humanizer – Nigerian Informal Mode

## Purpose
Strip American blog filler and fake pidgin while keeping natural Nigerian conversational English. No em dashes. No robotic patterns.

## Core Rules

### Keep (These are NOT AI slop in Nigerian context)
- Direct address: "Guys who...", "People with...", "If you buy...", "You get..."
- First‑person plural or passive: "We found", "It has been tested", "People have tried it"
- Relatable brand names: Xiaomi Chinese versions, Oppo, Huawei, Tecno, Infinix, Itel
- Natural fillers: "honestly", "actually", "basically", "see", "listen", "well done"
- Imperfect grammar that is authentic: "This as been tested", "People who want buy"

### Ban (American blog / AI slop)
- "Let's dive in", "Works like a charm", "Here's the thing", "That said", "Having said that"
- "delve", "pivotal", "testament", "underscore", "landscape", "realm"
- Adjective stacking ("stunning, gorgeous, breathtaking")
- Em dashes (`—`) – replace with periods, commas, or spaced en dashes (` – `)

### Ban (Fake pidgin – do not use)
- "am" as object ("tested am" → "tested it")
- "wey" (use "who" or "that")
- "abeg" (use "please" or nothing)
- "na" as copula ("it na good app" → "it is a good app")
- "go" as future ("you go like" → "you will like")

## Examples

| Wrong (American blog) | Right (Nigerian informal) |
|-----------------------|----------------------------|
| Let's dive into how Bada works. | Here is how Bada works. Simple. |
| Works like a charm. | It works well. No issues. |
| That said, it has limitations. | But it has limitations. |

| Wrong (fake pidgin) | Right (Nigerian informal) |
|---------------------|----------------------------|
| I tested am on X17PM. | It has been tested on the X17PM. |
| People wey buy Chinese phone. | People who buy Chinese phones. |
| Abeg, try this app. | Try this app. It works. |

## Enforcement
All generated content for Nigerian audience MUST pass through this humanizer mode before output. Zero exceptions.
```

---

B. Update Platform Guidelines with Tone Examples

Twitter Guidelines – Add to GUIDELINES/twitter-content-guidelines.md (Section 6)

```markdown
## 6. Tone Examples (Nigerian Informal)

### Wrong Tone (Americanized / AI slop)
> Bada is an open-source app that fixes Quick Share on Chinese phones. No Google Play Services needed. Download the APK from GitHub, install, grant permissions, done.

### Right Tone (Nigerian Informal)
> Guys who buy Chinese ROM phones – Xiaomi, Oppo, Huawei. I just found a way you can use Quick Share. People who want to buy Chinese ROM phones, you don't have to worry about Quick Share anymore. It has been tested on the X17PM.
```

Facebook Guidelines – Create GUIDELINES/facebook-content-guidelines.md

```markdown
# Facebook Content Guidelines (Nigerian Informal)

## Tone
Same as Twitter but slightly longer (2–4 paragraphs). Direct address, relatable examples, no fake pidgin, no American blog fillers.

## Wrong Tone (Americanized)
> If you bought a Chinese phone and the file sharing is stuck on some weird brand-specific system instead of Quick Share, there's a fix. The app is called Bada. It's open-source on GitHub.

## Right Tone (Nigerian Informal)
> Guys who bought Chinese ROM phones – Xiaomi Chinese versions, Oppo, Huawei. See this thing. I just found a way you can use Quick Share on all of them. It has been tested on the X17PM. So if you want to buy Chinese ROM phones, you don't have to worry about Quick Share anymore.
```

WhatsApp Guidelines – Create GUIDELINES/whatsapp-content-guidelines.md

```markdown
# WhatsApp Content Guidelines (Nigerian Informal)

## Tone
Very short (2–4 sentences). Direct, actionable, conversational. No links unless necessary. No em dashes.

## Wrong Tone (Americanized)
> Bada is an open-source app that fixes Quick Share on Chinese phones. No Google Play Services needed. Download the APK from GitHub.

## Right Tone (Nigerian Informal)
> Guys with Chinese ROM phones – Xiaomi, Oppo, Huawei. There is a way to use Quick Share now. It has been tested on the X17PM. You don't have to worry about it anymore.
```

---

C. Prompt to Regenerate 3 Variations for Bada (All Platforms)

```markdown
# PROMPT: Regenerate Bada Content – Nigerian Informal Mode (No Pidgin, No American Slop)

## OBJECTIVE
Write three (3) new content variations for the Bada app topic across all four platforms (TikTok, Twitter, Facebook, WhatsApp).

**Ignore the phrasing of the inspiration file completely.** Use only the facts:
- Chinese ROM phones (Xiaomi Chinese versions, Oppo, Huawei) lack Quick Share.
- Bada app (open source, GitHub) fixes this.
- No Google Play Services needed. Works on Huawei too.
- Works with NearDrop (macOS) and Quick Share (Windows).
- It has been tested on the X17PM.

**Do NOT use:** "I tested it", "Let's dive in", "Works like a charm", "Here's the thing", "That said", "Having said that". No em dashes. No fake pidgin ("am", "wey", "abeg", "na", "go" as future).

## STYLE REFERENCE (Nigerian Informal – No Pidgin)

Use this as the benchmark for tone:

> Guys who bought a Chinese ROM phones. You got Xiaomi Chinese versions, Oppo, Huawei etc. I just found a way you can use quick share so people who want to buy Chinese ROM phones, you don't have to worry about quick share anymore. This as been tested on X17PM.

## PER‑PLATFORM REQUIREMENTS

| Platform | Format | Length | File naming (per variation) |
|----------|--------|--------|-----------------------------|
| TikTok | Text post description (no HTML required) | 1–2 short paragraphs | `bada-v1.md`, `bada-v2.md`, `bada-v3.md` |
| Twitter | Thread (3–5 tweets) | 280 chars max per tweet | `bada-v1.md`, `bada-v2.md`, `bada-v3.md` |
| Facebook | Single post | 2–4 paragraphs | `bada-v1.md`, `bada-v2.md`, `bada-v3.md` |
| WhatsApp | Broadcast message | 2–4 sentences | `bada-v1.md`, `bada-v2.md`, `bada-v3.md` |

## OUTPUT FOLDERS (Windows style – create if missing)

```

Bigdrops-carousel\Contents\Tiktok slides\bada-quick-share-fix
Bigdrops-carousel\Contents\Twitter posts\bada-quick-share-fix
Bigdrops-carousel\Contents\Facebook posts\bada-quick-share-fix
Bigdrops-carousel\Contents\WhatsApp messages\bada-quick-share-fix\

```

## THREE VARIATIONS (per platform)

The Runner must produce three distinct variations. Differences can be:
- Opening hook (question vs. statement vs. exclamation)
- Level of detail (step‑by‑step vs. high‑level summary)
- Call to action (comment vs. share vs. try it)

## HUMANIZER ENFORCEMENT

All generated text must pass through the **Nigerian Informal Mode** as defined in `GUIDELINES/humanizer-nigerian-informal.md`.

## GIT WORKFLOW

After writing all files:
```bash
cd /path/to/Bigdrops-carousel
git add Contents/*/bada-quick-share-fix/
git commit -m "content: regenerate Bada content – Nigerian informal mode (3 variations per platform)"
git push origin main
```

Output commit hash and file summary.

VERIFICATION CHECKLIST (Runner self‑verify)

· No fake pidgin ("am", "wey", "abeg", "na", "go" as future)
· No American blog fillers (listed above)
· No em dashes
· No "I tested it" – use passive or third‑person
· Style matches the benchmark (Guys who bought...)
· Three distinct variations per platform
· Git push succeeded

Execute now.

```

---

All three parts are ready. Do you want me to:

1. **Send the updated humanizer guidelines** as a separate file for you to copy‑paste into GitHub?
2. **Send the platform guidelines** (Facebook, WhatsApp) as separate markdown blocks?
3. **Send the regeneration prompt** to your Workspace Runner now?

Reply with **1**, **2**, **3**, or **All** – and I will deliver each in order.