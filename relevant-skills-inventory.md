# BIGDROPS Project Skill Inventory & Integration Protocol

This index maps the exact local and global skills authorized for use when designing, writing, or programmatically exporting the BIGDROPS 9:16 carousel slides. Only the skills listed below are relevant to this workflow.

---

## 1. Global System Skills (Located Outside Repo)

These are permanent core tools installed globally on the host machine. They must be referenced by name or path during editing but MUST NOT be moved into the project directory.

### 🎨 Visual & UI/UX Design Engine
* **Skill Name:** `frontend-design`
  * **Location:** Global Agent Workspace
  * **Core Purpose:** Authoring premium, production-grade frontend interfaces (HTML/CSS/JS) with bold, customized visual hierarchies. Used here to enforce ultra-clean, anti-slop mobile aesthetic layouts that reject generic templates.
* **Skill Name:** `oiloil-ui-ux-guide`
  * **Location:** Global Agent Workspace
  * **Core Purpose:** Implements structural task-first UI/UX rules. Used to maintain clear visual hierarchy, screen readability at hyper-fast scrolling speeds, and strict error prevention during rendering. *Enforces the absolute ban on using emojis as icons in section headers.*

### 🎙️ Copywriting & Humanization Engine
* **Skill Name:** `humanizer` (v2.7.0)
  * **Location:** `~\.agents\skills\humanizer\`
  * **Core Purpose:** Scans and eliminates all machine-generated patterns from captions and oneliners. It strips out robotic tells (e.g., *pivotal landscape, delve, underscore, serves as a testament*) and prevents bad formatting like em-dash overuse or bloated rule-of-three adjective stacking. Use it to keep video text 100% conversational and raw.

---

## 2. Project-Level Skills (Located Inside Repo)

These are internal skills built natively for this project workspace and do not require external path mapping.

### 📱 Carousel & Layout Compiler
* **Skill Name:** `tiktok-slides`
  * **Location:** `.agents/skills/tiktok-slides/`
  * **Core Purpose:** The primary engineering core for this workspace. Enforces the strict 1080×1920 vertical canvas bounds and locks down the TikTok safe zone padding (Top: 180px, Bottom: 480px, Left: 80px, Right: 180px) to prevent app interface clipping.
* **Skill Name:** `huashu-design`
  * **Location:** Project Root Configuration
  * **Core Purpose:** Manages high-fidelity prototyping and the execution of the batch slide rendering engine. Controls the background rendering protocols ensuring that `html2canvas` flawlessly exports transparent, individual, or bulk PNG assets with correct image naming structures.

---

## 3. Invocation Blueprint for the AI Agent

When generating the new slide layout or rewriting phone summaries, the agent must coordinate these tools simultaneously:
1. **Layout Strategy:** Initialize `tiktok-slides` and `huashu-design` to construct the pixel-perfect 1080×1920 viewport container.
2. **Visual Polishing:** Apply structural design guidelines from `frontend-design` and `oiloil-ui-ux-guide` to make the borders, spacing, and text layout feel premium.
3. **Script Audit:** Run all final oneliners through the global `~\.agents\skills\humanizer\` rule set. Erase any marketing fluff, repetitive triplets, or robotic vocabulary before outputting the code.
