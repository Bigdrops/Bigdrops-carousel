

PROMPT: Generate Three Content Variations for Bada App (All Platforms)

OBJECTIVE

Read the inspiration file for the Bada app topic. Then, for each social media platform listed below, generate three (3) different content variations (different tones, angles, or approaches).

The Runner must:

1. Discover which skills to use by reading the index file (relevant-skills-inventory.md).
2. Reference the existing platform guidelines (TikTok, Twitter).
3. For platforms without existing guidelines (Facebook, WhatsApp), the Runner must infer best practices from the existing guidelines and the nature of the platform.
4. Save all output to the correct folders.

The user will choose the best variation later. Do not delete any variations.

---

INPUT: Inspiration File (Do Not Print URL in Output)

Location (Windows style – do not print the URL):

```
Bigdrops-carousel\Contents\Inspiration\Bada.md
```

The Runner must read this file completely. It contains the raw transcript and context for the Bada app (Quick Share replacement for Chinese phones / Huawei devices, open-source, works without Google Play Services, interoperates with NearDrop on macOS and Quick Share on Windows).

---

OUTPUT FOLDERS (Create if Missing)

Platform Base Path (Windows style)
TikTok Bigdrops-carousel\Contents\Tiktok slides\bada-quick-share-fix\
Twitter/X Bigdrops-carousel\Contents\Twitter posts\bada-quick-share-fix\
Facebook Bigdrops-carousel\Contents\Facebook posts\bada-quick-share-fix\
WhatsApp Bigdrops-carousel\Contents\WhatsApp messages\bada-quick-share-fix\

For WhatsApp, treat the output as a short broadcast/channel message (2–4 sentences, direct, actionable). Save as .txt or .md.

---

PER-PLATFORM: Three Variations Required

The Runner must produce three distinct content variations per platform. Variations can differ in:

· Tone (e.g., urgent vs. calm, hype vs. technical, funny vs. serious)
· Angle (e.g., "Huawei users finally saved" vs. "Open-source hero" vs. "Step-by-step tutorial")
· Structure (e.g., long-form vs. short, question-first vs. statement-first)

The Runner must decide the three variations based on its reading of the inspiration content and its understanding of each platform's culture.

---

SKILL DISCOVERY (Mandatory Step)

Before generating any content, the Runner MUST:

1. Open and read the index file:
   ```
   Bigdrops-carousel\relevant-skills-inventory.md
   ```
2. From the index, identify which SMS skills are relevant for each platform. At minimum:
   · For Twitter: thread-writer-sms, hook-writer-sms
   · For Facebook: post-writer-sms
   · For WhatsApp: caption-writer-sms
   · For TikTok: use the Runner's HTML generation capability (no HTML is required – but the Runner may generate text-only post descriptions; if HTML is generated, follow TikTok guidelines)
3. Invoke humanizer on ALL generated text (all platforms) to remove AI slop, em dashes, and robotic patterns.
4. Reference the existing guidelines for TikTok and Twitter:
   · Bigdrops-carousel\GUIDELINES\tiktok-slides-guidelines.md
   · Bigdrops-carousel\GUIDELINES\twitter-content-guidelines.md

For Facebook and WhatsApp, the Runner may create simple .md or .txt files with no strict formatting.

---

FILE NAMING CONVENTION

For each platform folder, name the files as:

Variation Filename
Variation 1 (first approach) bada-v1.md (or .txt for WhatsApp)
Variation 2 bada-v2.md
Variation 3 bada-v3.md

For TikTok: if generating HTML, use bada-v1.html, bada-v2.html, bada-v3.html.

If a platform does not require an image, omit image references.

---

PLATFORM-SPECIFIC NOTES

TikTok

· Keep slides minimal: 1–2 slides maximum.
· If HTML is generated, follow the safe-zone guidelines (top 280px, left 80px, right 180px, bottom 680px empty). No carousel, no animations.
· The user can pick which variation to use for actual posting.

Twitter/X

· Follow the character limit: 280 max per tweet.
· If a thread is needed, keep tweets under 8 total.
· Use --- separators between tweets in the markdown file.

Facebook

· Single post (not thread).
· Can be longer than Twitter: 1–3 paragraphs.
· Can include a call-to-action ("Share this with someone who uses Huawei").

WhatsApp

· Very short: 2–4 sentences.
· Direct, actionable, no fluff.
· Example structure: Problem → Solution → Call to action (e.g., "Download here: [link]").

---

GIT WORKFLOW (Mandatory After Generation)

After all files are written, the Runner must run:

```bash
cd /path/to/Bigdrops-carousel
git status
git add Contents/Tiktok\ slides/bada-quick-share-fix/
git add Contents/Twitter\ posts/bada-quick-share-fix/
git add Contents/Facebook\ posts/bada-quick-share-fix/
git add Contents/WhatsApp\ messages/bada-quick-share-fix/
git commit -m "content: generate three variations for Bada app (all platforms)"
git push origin main
```

Output the commit hash and a summary of created files.

---

VERIFICATION CHECKLIST (Runner Self-Verify)

· Inspiration file read successfully.
· Index file read successfully; skills identified.
· Three distinct variations exist for each of the four platforms (total 12 output files, unless TikTok is text-only – then 12 text files).
· All text passed through humanizer (no AI slop, no em dashes).
· TikTok guidelines (if HTML) or TikTok text post structure is respected.
· Twitter guidelines respected.
· Facebook and WhatsApp outputs are appropriate for their platforms.
· Git commit and push succeeded.

---

Execute now. The Runner must output the commit hash and confirm all files are pushed.