# ABIDEMI Illustrations
> Turn any article, concept, or workflow into a white-background, hand-drawn, quirky explanatory illustration.
> 
> 16:9 landscape | ABIDEMI character | Pure white background | Black line art | Minimal red/orange/blue accents | Multiple output formats: PNG, SVG, HTML Canvas, MP4
## What This Skill Does
ABIDEMI Illustrations transforms your text (articles, tweets, documentation, or ideas) into a single, memorable visual explanation. The character ABIDEMI – a solid black figure with white dot eyes, thin limbs, and an empty expression – must **participate in the core action** of each illustration.
**One image = one cognitive anchor.** Not a complex infographic. Not a comic strip. One clear idea, visualized.
## Output Formats (Choose One)

| Format | When to Use | File Extension |
| :--- | :--- | :--- |
| PNG image | Social posts, presentations, static use | `.png` |
| SVG vector | Scalable graphics, editing, print | `.svg` |
| HTML canvas animation | Interactive explanations, demos | `.html` |
| MP4 video | TikTok carousel slides, Instagram Reels | `.mp4` (via browser export) |

## Motion Photo Export (TikTok Live Slides)
For animated carousel slides on TikTok, combine PNG + MP4 into an Android Motion Photo using MotionPhoto Maker app.
TikTok reads Motion Photos natively and plays them as live slides in a carousel post.
**Creative formats this enables:**
- **Flipbook:** each slide = one animation frame, viewer swipes fast to see motion
- **Progressive reveal:** each slide adds one layer until full illustration is complete
## Visual Style (All Formats)
- **Background:** Pure white (`#FFFFFF`). No paper texture, no gradient, no shadow.
- **Line art:** Black (`#000000`), hand-drawn feel (slight curve variations if vector).
- **Negative space:** Subject occupies 40%–60% of frame.
- **Accent colors:** Use sparingly – red (`#E63946`), orange (`#FFB703`), blue (`#1D3557`). For short annotations only (1–4 characters or one short word).
- **ABIDEMI:** Must perform the core action. If removing ABIDEMI leaves the image unchanged, it's wrong.
## Image Generation Fallback
If the agent cannot call an image generation API, it MUST:
1. Output a clear, copy-ready prompt using the template in `references/prompt-template.md`.
2. Tell the user exactly where to save the resulting PNG.
3. Provide the git commands to add, commit, and push the image.
The agent must NOT fail silently or pretend to generate an image.
## MP4 Export for TikTok / Instagram
When the user requests animation or video output:
1. Generate a self-contained HTML Canvas animation file per the spec in `output-formats/html-canvas.md`.
2. Include the Export MP4 button in the HTML.
3. Inform the user: open in Chrome, click Export MP4, upload the downloaded file to TikTok or Instagram Reels.
4. Keep animation duration under 5 seconds unless the user specifies otherwise.
5. Animation loop must have a defined end frame (TOTAL_FRAMES) so MediaRecorder stops cleanly.
## Workflow
1. Read the user's article / prompt / concept.
2. Identify 3–8 cognitive anchors (judgments, tradeoffs, steps, metaphors).
3. Output a shot list (unless user only requested one image).
4. For each image, invent a **fresh physical metaphor** – do not copy from examples.
5. Choose output format based on user request (default = PNG).
6. Generate the image or code file.
7. Run QA checklist (white background, ABIDEMI action central, short annotations, no copycat composition).
8. Save to `assets/<concept-slug>/` and report path.
## Prohibited
- Cute expressions (ABIDEMI must be blank).
- Fake pidgin or American blog filler in annotations.
- Em dashes in any text output.
- Complex diagrams with more than one main idea.
- Copying old compositions from examples.
