deepsek speaking.

Below is the complete execution prompt for your agent. It will clone the repository, translate all Chinese content to English, rebrand from "Xiaohei" to "ABIDEMI", add HTML/Canvas/React output capabilities, and push everything back to your new repository.

No installation step is included – that is for you to do manually when you return.

---

PROMPT: Fork, Translate, Rebrand, and Enhance Xiaohei Illustrations Skill

OBJECTIVE

Clone the original ian-xiaohei-illustrations repository, transform it into a new skill called ABIDEMI Illustrations, and push it to the user's existing GitHub repository.

The user has already created:

· A local folder (path to be provided)
· A matching GitHub repository (remote URL to be provided)

Your job is to populate that local folder with the translated, rebranded, and enhanced skill, then push.

---

INPUT (User Will Provide – Replace Placeholders)

```
LOCAL_PATH = "C:\Users\DELL\Documents\abidemi-illustrations"
REMOTE_URL = "https://github.com/Bigdrops/abidemi-illustrations.git"
```

Before starting, ask the user for these two values if not provided.

---

STEP 1 – Clone Original Repository

```bash
git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git temp-xiaohei
cd temp-xiaohei
```

---

STEP 2 – Copy Contents to User's Local Folder

```bash
# Assuming LOCAL_PATH already exists (empty or not)
cp -R ./* "C:\Users\DELL\Documents\abidemi-illustrations\"
cd "C:\Users\DELL\Documents\abidemi-illustrations"
```

---

STEP 3 – Delete Unnecessary Original Files

Delete the following (not needed for the new skill):

· README.md (will create new one)
· NOTICE.md (irrelevant after rebrand)
· assets/ian-wechat-qr.jpg (personal to original author)
· Any other personal files not related to the skill itself

Keep:

· ian-xiaohei-illustrations/ → this is the skill folder. Rename it to abidemi-illustrations/
· examples/ (will translate later)
· LICENSE (keep MIT)

---

STEP 4 – Rebrand from Xiaohei to ABIDEMI

For every file in the repository, replace:

Original Replacement
Xiaohei ABIDEMI
Xiao Hei ABIDEMI
小黑 (Chinese) ABIDEMI
ian-xiaohei-illustrations abidemi-illustrations
Ian Xiaohei ABIDEMI
小黑怪诞 ABIDEMI (or "ABIDEMI quirky" if translation needed)

Priority files to translate (Chinese → English):

1. abidemi-illustrations/SKILL.md
2. abidemi-illustrations/references/style-dna.md
3. abidemi-illustrations/references/xiaohei-ip.md → rename to abidemi-ip.md
4. abidemi-illustrations/references/composition-patterns.md
5. abidemi-illustrations/references/prompt-template.md
6. abidemi-illustrations/references/qa-checklist.md
7. examples/prompts.md (translate example prompts to English)

Translation guidelines:

· Keep all markdown structure (headings, lists, code blocks).
· Translate technical terms accurately but simply.
· Do not translate the character's visual description into pidgin – keep it natural English.
· Remove any Chinese-only cultural references unless they are universal.

---

STEP 5 – Add New Output Formats (HTML/Canvas/React)

Create a new folder: abidemi-illustrations/output-formats/

File 1: abidemi-illustrations/output-formats/html-canvas.md

```markdown
# HTML Canvas Animation Output Format

## When to Use
Use this format when the user requests: "as HTML", "as canvas animation", "as interactive illustration", or "as a moving diagram".

## Output Rules

### Canvas Size
- Default: 800px width × 450px height (16:9 ratio)
- Add `width="800" height="450"` attributes to `<canvas>`

### ABIDEMI Representation in Canvas
```javascript
function drawAbidemi(ctx, x, y, size = 30) {
  // Body (solid black circle)
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  
  // Eyes (two white dots)
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(x - size*0.3, y - size*0.2, size*0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + size*0.3, y - size*0.2, size*0.1, 0, Math.PI * 2);
  ctx.fill();
  
  // Legs (thin lines)
  ctx.beginPath();
  ctx.moveTo(x - size*0.2, y + size*0.6);
  ctx.lineTo(x - size*0.4, y + size*0.9);
  ctx.moveTo(x + size*0.2, y + size*0.6);
  ctx.lineTo(x + size*0.4, y + size*0.9);
  ctx.stroke();
}
```

Animation Guidelines

· Use requestAnimationFrame for smooth motion.
· Keep animations simple: walking, pointing, pushing objects, transforming.
· Add one interactive element if requested (e.g., button to restart animation).
· Include a short caption below the canvas (English, no em dashes).

Full HTML Template

The agent must output a complete, self-contained HTML file with <canvas>, <script>, and minimal styling (white background, black lines, optional red/orange/blue accents).

Example Prompt Response

User: "Show ABIDEMI pushing a heavy 'Xiaomi' block, then a key labeled 'Bada' unlocks a gate."

Agent outputs: abidemi-quick-share-demo.html (complete file).

```

#### File 2: `abidemi-illustrations/output-formats/react-component.md`

```markdown
# React Component Output Format

## When to Use
Use this format when the user requests: "as React", "as a React component", or "for a web app".

## Output Rules

### Component Structure
- Functional component with optional props: `width`, `height`, `animation`, `step`
- Use inline styles or a separate CSS object (no external CSS files)
- If animation is needed, use `useState` + `useEffect` with `requestAnimationFrame` (not external libraries)

### Props API
```typescript
interface AbidemiIllustrationProps {
  width?: number;   // default 800
  height?: number;  // default 450
  animation?: "idle" | "walk" | "point" | "push";
  caption?: string; // short text below canvas
}
```

Example Component Output

The agent must output a single .jsx or .tsx file that can be dropped into any React project. Include comments explaining how to use it.

Canvas vs. SVG in React

· Prefer <canvas> for animations (performance).
· Prefer inline <svg> for static illustrations (easier to style).

```

#### File 3: `abidemi-illustrations/output-formats/svg-static.md`

```markdown
# Static SVG Output Format

## When to Use
Use this format when the user requests: "as SVG", "as vector", or "download as SVG".

## Output Rules
- 16:9 viewBox: `viewBox="0 0 800 450"`
- White background: `<rect width="800" height="450" fill="white"/>`
- ABIDEMI drawn with `<circle>`, `<path>`, `<line>`
- Minimal color accents: red `#E63946`, orange `#FFB703`, blue `#1D3557`
- Output as `.svg` file, ready to open in browser or import into design tools.
```

---

STEP 6 – Update SKILL.md (New Master File)

Replace the content of abidemi-illustrations/SKILL.md with:

```markdown
# ABIDEMI Illustrations

> Turn any article, concept, or workflow into a white-background, hand-drawn, quirky explanatory illustration.
> 
> 16:9 landscape | ABIDEMI character | Pure white background | Black line art | Minimal red/orange/blue annotations | Multiple output formats: PNG, SVG, HTML Canvas, React Component

## What This Skill Does

ABIDEMI Illustrations transforms your text (articles, tweets, documentation, or ideas) into a single, memorable visual explanation. The character ABIDEMI – a solid black figure with white dot eyes, thin limbs, and an empty expression – must **participate in the core action** of each illustration.

**One image = one cognitive anchor.** Not a complex infographic. Not a comic strip. One clear idea, visualized.

## Output Formats (Choose One)

| Format | When to Use | File Extension |
|--------|-------------|----------------|
| PNG image | Social posts, presentations, static use | `.png` |
| SVG vector | Scalable graphics, editing, print | `.svg` |
| HTML canvas animation | Interactive explanations, demos | `.html` |
| React component | Web apps, embeddable illustrations | `.jsx` / `.tsx` |

## Visual Style (All Formats)

- **Background:** Pure white (`#FFFFFF`). No paper texture, no gradient, no shadow.
- **Line art:** Black (`#000000`), hand‑drawn feel (slight curve variations if vector).
- **Negative space:** Subject occupies 40%–60% of frame.
- **Accent colors:** Use sparingly – red (`#E63946`), orange (`#FFB703`), blue (`#1D3557`). For short annotations only (1–4 characters or one short word).
- **ABIDEMI:** Must perform the core action. If removing ABIDEMI leaves the image unchanged, it's wrong.

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

## Installation (User Manual Step)

Copy the `abidemi-illustrations/` folder to your Codex skills directory:

```bash
cp -R ./abidemi-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Then invoke:

```
Use $abidemi-illustrations to illustrate [concept] as [format].
```

```

---

### STEP 7 – Update QA Checklist (English, Nigerian Informal Ready)

Replace `abidemi-illustrations/references/qa-checklist.md`:

```markdown
# ABIDEMI Illustrations – QA Checklist

Before finalizing any output, verify:

## Visual (All Formats)
- [ ] Background is pure white (`#FFFFFF`), no texture/shadow.
- [ ] Subject occupies 40–60% of frame (not cramped, not tiny).
- [ ] ABIDEMI is present and performing the core action.
- [ ] Removing ABIDEMI would break the image – it's not decorative.
- [ ] Accent colors (red/orange/blue) only on short annotations or small highlights.
- [ ] No emojis, no gradients, no drop shadows.

## Text Annotations (if any)
- [ ] English, short (1–4 words maximum).
- [ ] No em dashes.
- [ ] No fake pidgin ("am", "wey", "abeg").
- [ ] No American blog filler ("Let's dive in", "Works like a charm").
- [ ] Natural conversational tone – "Step 1" not "Firstly,".

## Code Outputs (HTML/Canvas/React)
- [ ] Self‑contained (no external CDNs unless necessary).
- [ ] Canvas animations use `requestAnimationFrame`.
- [ ] React component uses functional syntax with clear props.
- [ ] File size reasonable (no bloated libraries).

## Originality
- [ ] Metaphor/invention is fresh – not copied from old examples.
- [ ] Composition is unique to this concept.

## Final Delivery
- [ ] Files saved to `assets/<concept-slug>/`.
- [ ] PNG exported at 16:9, 800×450 minimum.
```

---

STEP 8 – Create New README.md (For GitHub)

At the root of C:\Users\DELL\Documents\abidemi-illustrations\, create:

```markdown
# ABIDEMI Illustrations

A Codex skill for generating white‑background, hand‑drawn explanatory illustrations with a consistent character (ABIDEMI).

## Features

- **Multiple output formats:** PNG, SVG, HTML Canvas animation, React component
- **One idea per image** – perfect for explaining tradeoffs, workflows, and metaphors
- **Nigerian informal tone ready** – no American blog filler, no fake pidgin, no em dashes
- **Forked from** `ian-xiaohei-illustrations` (MIT license)

## Installation

```bash
git clone https://github.com/Bigdrops/abidemi-illustrations.git
cd abidemi-illustrations
cp -R ./abidemi-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Usage

```
Use $abidemi-illustrations to illustrate "Bada fixes Quick Share on Chinese phones" as an HTML canvas animation.
```

Requirements

· Codex (or any agent that reads Codex skills)
· For PNG output: image generation model access (DALL‑E, Midjourney, etc.)
· For HTML/React output: code generation only (no external API needed)

License

MIT – original by helloianneo, rebranded and extended by Bigdrops.

```

---

### STEP 9 – Remove Original Skill Folder and Rename

```bash
# Inside C:\Users\DELL\Documents\abidemi-illustrations
rm -rf ian-xiaohei-illustrations   # delete the old folder
mv abidemi-illustrations abidemi-illustrations   # already named correctly
```

---

STEP 10 – Commit and Push to User's Repository

```bash
cd C:\Users\DELL\Documents\abidemi-illustrations
git init
git remote add origin https://github.com/Bigdrops/abidemi-illustrations.git
git add .
git commit -m "feat: initial commit – ABIDEMI Illustrations (fork + translation + HTML/React output)"
git branch -M main
git push -u origin main
```

---

FINAL OUTPUT – WHAT THE AGENT REPORTS

After completing all steps, the agent must output:

1. Confirmation that the original repo was cloned and copied.
2. List of files translated (all Chinese → English).
3. New files created (html-canvas.md, react-component.md, svg-static.md, new README.md, etc.).
4. Git commit hash and a message that the push succeeded.
5. Any warnings (e.g., if a translation step was ambiguous).

Do not attempt to install the skill – that is for the user to do manually after returning.

---

VERIFICATION CHECKLIST (Agent Self-Verify)

· All .md files in abidemi-illustrations/ are now in English.
· All references to "Xiaohei" / "小黑" replaced with "ABIDEMI".
· New output-formats/ folder exists with 3 files.
· SKILL.md updated with multiple output formats.
· README.md created at root.
· No em dashes, no fake pidgin, no American blog filler in any English text.
· Git push to https://github.com/Bigdrops/abidemi-illustrations.git succeeded.

---

Execute now. The user is leaving for work – complete everything and push before they return.