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

### 📱 Social Media Suite — SMS Skills
* **Skill Name:** `social-media-context-sms`
  * **Location:** `.agents/skills/social-media-context-sms/`
  * **Core Purpose:** Creates/updates the persistent context file defining the user's voice, audience, content pillars, and platform preferences — the single source of truth all other SMS skills reference.
* **Skill Name:** `post-writer-sms`
  * **Location:** `.agents/skills/post-writer-sms/`
  * **Core Purpose:** Drafts standalone social media posts across all text-first and visual-first platforms (LinkedIn, Twitter/X, Threads, Bluesky, Facebook, Instagram, TikTok, Pinterest, YouTube).
* **Skill Name:** `caption-writer-sms`
  * **Location:** `.agents/skills/caption-writer-sms/`
  * **Core Purpose:** Writes platform-native captions for visual-first platforms (Instagram, TikTok, Pinterest, Facebook, YouTube) where the image or video is the primary content.
* **Skill Name:** `thread-writer-sms`
  * **Location:** `.agents/skills/thread-writer-sms/`
  * **Core Purpose:** Writes multi-part thread/content series for Twitter/X, LinkedIn, Threads, Instagram, TikTok, YouTube, and Facebook.
* **Skill Name:** `carousel-writer-sms`
  * **Location:** `.agents/skills/carousel-writer-sms/`
  * **Core Purpose:** Writes slide-by-slide text content for multi-slide swipeable formats (LinkedIn/Instagram carousels, TikTok photo carousels, Pinterest Idea Pins).
* **Skill Name:** `hook-writer-sms`
  * **Location:** `.agents/skills/hook-writer-sms/`
  * **Core Purpose:** Generates high-converting opening lines across nine proven hook patterns for any platform, usable standalone or invoked by other creation skills.
* **Skill Name:** `content-strategy-sms`
  * **Location:** `.agents/skills/content-strategy-sms/`
  * **Core Purpose:** Defines the "what and why" of posting — topic clusters, content pillars, content mix, and niche positioning.
* **Skill Name:** `content-calendar-sms`
  * **Location:** `.agents/skills/content-calendar-sms/`
  * **Core Purpose:** Builds practical posting schedules mapping content pillars to specific days, platforms, and formats.
* **Skill Name:** `content-repurposer-sms`
  * **Location:** `.agents/skills/content-repurposer-sms/`
  * **Core Purpose:** Adapts one piece of content into multiple platform-native derivatives (blog-to-social, video-to-posts, newsletter-to-threads).
* **Skill Name:** `performance-analyzer-sms`
  * **Location:** `.agents/skills/performance-analyzer-sms/`
  * **Core Purpose:** Analyzes post-level analytics (impressions, engagement, saves) from BlackTwist or user-provided data.
* **Skill Name:** `audience-growth-tracker-sms`
  * **Location:** `.agents/skills/audience-growth-tracker-sms/`
  * **Core Purpose:** Analyzes follower growth trends, correlates content with follower spikes/stalls, and generates audience development recommendations.
* **Skill Name:** `content-pattern-analyzer-sms`
  * **Location:** `.agents/skills/content-pattern-analyzer-sms/`
  * **Core Purpose:** Finds patterns in content performance data, surfacing which topics, formats, hooks, and timing consistently work or underperform.
* **Skill Name:** `optimization-advisor-sms`
  * **Location:** `.agents/skills/optimization-advisor-sms/`
  * **Core Purpose:** Synthesizes performance, audience, and pattern analysis into a prioritized, evidence-backed improvement action plan.
* **Skill Name:** `platform-strategy-sms`
  * **Location:** `.agents/skills/platform-strategy-sms/`
  * **Core Purpose:** Provides platform-specific tactical guidance for LinkedIn, Twitter/X, Threads, and Bluesky algorithms and culture.

---

## 3. Design Presets / Templates Compilation

### 📦 designdotmd Registry (v0.4.1)
* **Name:** `designdotmd`
* **Location:** Global npm — `C:\Users\DELL\AppData\Roaming\npm\node_modules\designdotmd\`
* **Registry:** https://designdotmd.directory
* **Purpose:** CLI that downloads `design.md` preset/template files from a public registry into the project. Acts as a curated template library of design briefs, style guidelines, and layout specs.
* **57 Categories available:**
  Architecture (4), Audio (2), Automotive (8), Beauty (2), Bold (58), Brutalist (2), Calm (2), Cinema (3), Climate (2), Cool (26), Corporate (5), Craft (1), Culture (1), Dark (54), Dating (1), Editorial (17), Education (3), Esoteric (1), Fashion (8), Finance (12), Fitness (2), Food (10), Gameplay (14), Geometric (1), Government (2), Gradient-free (1), Healthcare (5), High-contrast (1), Hospitality (4), Kids (3), Known Brand (60), Lifestyle (2), Media (1), Minimal (47), Mono (25), Museum (1), Music (8), Nature (5), News (7), Nonprofit (1), Organic (10), Pet (1), Photography (1), Playful (29), Portfolio (3), Primary (1), Print (1), Reading (1), Retail (4), Retro (7), Sans (33), Serif (64), Social (6), Soft (24), Spiritual (1), Sports (3), Technical (40), Travel (6), Warm (57), Weather (1), Wellness (2)
* **Commands:** `designdotmd category` (list categories), `designdotmd category <name>` (list designs in category), `designdotmd list` (list all), `designdotmd add <id>` (download a design.md)

---

## 4. Invocation Blueprint for the AI Agent

When generating the new slide layout or rewriting phone summaries, the agent must coordinate these tools simultaneously:
1. **Layout Strategy:** Initialize `tiktok-slides` and `huashu-design` to construct the pixel-perfect 1080×1920 viewport container.
2. **Visual Polishing:** Apply structural design guidelines from `frontend-design` and `oiloil-ui-ux-guide` to make the borders, spacing, and text layout feel premium.
3. **Script Audit:** Run all final oneliners through the global `~\.agents\skills\humanizer\` rule set. Erase any marketing fluff, repetitive triplets, or robotic vocabulary before outputting the code.
