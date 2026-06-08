# twitter-content-guidelines.md

## 1. Core Platform Rules

### Character Limit
- **Standard limit:** 280 characters per tweet (free account tier). URLs count as 23 characters.
- **Image handling:** Each tweet can have up to 4 images. When an image is attached, the available character space is slightly reduced.
- **Posting strategy:** For maximum readability and engagement on mobile, keep tweets between 220–240 characters. This ensures the full message is visible without truncation on preview cards[reference:0].

### Prohibited AI Slop (Humanizer Enforcement)
- **Banned words/phrases:** No "delve," "pivotal," "testament," "underscore," "landscape," "realm," or similar AI‑generated filler.
- **Em‑dashes:** Zero em dashes (`—`) allowed. Use spaced en dashes (` – `), colons, commas, or split into separate sentences.
- **Adjective stacking:** No three‑adjective clusters ("stunning, gorgeous, breathtaking").
- **Passive voice:** Use active voice wherever possible.

---

## 2. Thread Structure

### Length
- Keep threads focused: **4–8 tweets ideal**. Longer threads risk drop‑off unless every tweet delivers dense value[reference:1].

### Hook Tweet (Tweet #1)
- Must work as a standalone tweet that creates a curiosity gap.
- Use numbers, bold statements, or borrowed credibility ("I analyzed 18 phones. Here are the 3 worth your ₦400K.").

### Body Tweets (#2–#n-1)
- **One idea per tweet.** If you find yourself using "and" or "also" repeatedly, split the content[reference:2].
- Use short lines, specific numbers, real examples.
- No filler like "to be continued" or "here's the thing"[reference:3].

### Closing Tweet
- Drive engagement: ask a question, invite replies, tease next topic.
- Example: "Drop your pick in the comments. Wrong answers only."

---

## 3. Image Attachment Rules

### Sourcing Images
- All images MUST be sourced from the corresponding TikTok slides folder:
  `Contents/Tiktok slides/[topic]/`
- Example: For a Twitter post about `300k-400k phones`, images come from `Contents/Tiktok slides/300k-400k phones/`

### Markdown Syntax
- Place image markdown on a new line immediately AFTER the tweet text.
- Format: `![Image description](filename.jpg)`

### Best Practices
- Do not place critical information (prices, dates, links) exclusively inside images. Screen readers cannot access them, and images may not load.
- Add alt text descriptions for accessibility where possible.

---

## 4. Folder Structure

### Base Path
`Contents/Twitter posts/[topic]/`

### File Naming
- One post = one file.
- `.md` (Markdown) format for plain text, version control, and line‑by‑line diffs.
- Topic folders mirror TikTok structure exactly.

### Example