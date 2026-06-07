# Design Context: Starting from Existing Context

**This is the most important one thing in this skill.**

Good hi-fi design always grows from existing design context. **Making hi-fi from scratch is the last resort and will definitely produce generic work.** So at the start of every design task, first ask: is there anything to reference?

## What is Design Context

By priority from high to low:

### 1. User's Design System/UI Kit
The user's own product's existing component library, color tokens, typography specifications, icon system. **The most ideal scenario.**

### 2. User's Codebase
If the user provided a codebase, there are live component implementations in it. Read those component files:
- `theme.ts` / `colors.ts` / `tokens.css` / `_variables.scss`
- Specific components (Button.tsx, Card.tsx)
- Layout scaffold (App.tsx, MainLayout.tsx)
- Global stylesheets

**Read the code, copy exact values**: hex codes, spacing scale, font stack, border radius. Don't redraw from memory.

### 3. User's Published Product
If the user has a live product but didn't provide code, use Playwright or ask the user for screenshots.

```bash
# Screenshot a public URL with Playwright
npx playwright screenshot https://example.com screenshot.png --viewport-size=1920,1080
```

You can see the real visual vocabulary.

### 4. Brand Guidelines/Logo/Existing Assets
The user may have: Logo files, brand color specifications, marketing materials, slide templates. These are all context.

### 5. Competitor References
The user says "make it like XX website" — ask them for the URL or screenshot. **Don't** rely on vague impressions from your training data.

### 6. Known Design Systems (Fallback)
If none of the above are available, use well-known design systems as a base:
- Apple HIG
- Material Design 3
- Radix Colors (color palette)
- shadcn/ui (components)
- Tailwind default palette

Clearly tell the user what you're using, so they know this is a starting point, not a final version.

## Process for Obtaining Context

### Step 1: Ask the User

The must-ask checklist at the start of a task (from `workflow.md`):

```markdown
1. Do you have an existing design system/UI kit/component library? Where?
2. Do you have brand guidelines, color/font specifications?
3. Can you give me screenshots or URLs of existing products?
4. Is there a codebase I can read?
```

### Step 2: When the User Says "No", Help Them Find

Don't just give up. Try:

```markdown
Let me see if there are clues:
- Do you have previous projects with related designs?
- What colors and typography does your company's marketing website use?
- What style is your product's logo? Can you give me one?
- Is there a product you admire that you can use as a reference?
```

### Step 3: Read All Available Context

If the user provided a codebase path, you read:
1. **List file structure first**: Find style/theme/component-related files
2. **Read theme/token files**: Extract specific hex/px values
3. **Read 2-3 representative components**: See the visual vocabulary (hover state, shadow, border, padding node pattern)
4. **Read global stylesheet**: Base reset, font loading
5. **If there's a Figma link/screenshot**: Look at it, but **trust the code more**

**Important**: **Don't** just glance and work from memory. You need 30+ specific values to have truly lifted the context.

### Step 4: Vocalize the System You'll Use

After reviewing the context, tell the user the system you'll use:

```markdown
Based on your codebase and product screenshots, here's my extracted design system:

**Colors**
- Primary: #C27558 (from tokens.css)
- Background: #FDF9F0
- Text: #1A1A1A
- Muted: #6B6B6B

**Typography**
- Display: Instrument Serif (from global.css's @font-face)
- Body: Geist Sans
- Mono: JetBrains Mono

**Spacing** (from your scale system)
- 4, 8, 12, 16, 24, 32, 48, 64

**Shadow pattern**
- `0 1px 2px rgba(0,0,0,0.04)` (subtle card)
- `0 10px 40px rgba(0,0,0,0.1)` (elevated modal)

**Border-radius**
- Small components 4px, cards 12px, buttons 8px

**Component vocabulary**
- Button: filled primary, outlined secondary, ghost tertiary, all rounded 8px
- Card: white background, subtle shadow, no border

I'll start working with this system. Does this seem right?
```

Wait for user confirmation before proceeding.

## Designing from Scratch (Fallback When No Context)

**Strong warning**: Output quality in this scenario will be significantly reduced. Clearly tell the user.

```markdown
You don't have any design context, so I can only work based on general intuition.
The output will be "looks OK but lacks distinctiveness."
Would you like to proceed, or first provide some reference materials?
```

If the user insists you proceed, make decisions in this order:

### 1. Choose an Aesthetic Direction
Don't give a generic result. Pick a clear direction:
- brutally minimal
- editorial/magazine
- brutalist/raw
- organic/natural
- luxury/refined
- playful/toy
- retro-futuristic
- soft/pastel

Tell the user which one you chose.

### 2. Choose a Known Design System as Skeleton
- Use Radix Colors for coloring (https://www.radix-ui.com/colors)
- Use shadcn/ui for component vocabulary (https://ui.shadcn.com)
- Use Tailwind spacing scale (multiples of 4)

### 3. Choose Distinctive Font Pairings

Don't use Inter/Roboto. Suggested combinations (free from Google Fonts):
- Instrument Serif + Geist Sans
- Cormorant Garamond + Inter Tight
- Bricolage Grotesque + Söhne (paid)
- Fraunces + Work Sans (note: Fraunces is already overused by AI)
- JetBrains Mono + Geist Sans (technical feel)

### 4. Reason About Every Key Decision

Don't make silent choices. Write in HTML comments:

```html
<!--
Design decisions:
- Primary color: warm terracotta (oklch 0.65 0.18 25) — fits the "editorial" direction  
- Display: Instrument Serif for humanist, literary feel
- Body: Geist Sans for cleanness contrast
- No gradients — committed to minimal, no AI slop
- Spacing: 8px base, golden ratio friendly (8/13/21/34)
-->
```

## Import Strategy (When User Gives a Codebase)

If the user says "import this codebase for reference":

### Small (<50 files)
Read all, internalize the context.

### Medium (50-500 files)
Focus on:
- `src/components/` or `components/`
- All styles/tokens/theme-related files
- 2-3 representative full-page components (Home.tsx, Dashboard.tsx)

### Large (>500 files)
Ask the user to specify focus:
- "I'm making a settings page" → Read existing settings-related code
- "I'm making a new feature" → Read the overall shell + closest reference
- Don't aim for completeness, aim for accuracy

## Working with Figma/Design Files

If the user gave a Figma link:

- **Don't** expect to directly "convert Figma to HTML" — that requires additional tools
- Figma links are usually not publicly accessible
- Ask the user to: Export **screenshots** and send them + tell you the specific color/spacing values

If only given Figma screenshots, tell the user:
- I can see the visuals, but I can't extract precise values
- Please tell me the key numbers (hex, px), or export as code (Figma supports this)

## Final Reminder

**The design quality ceiling of a project is determined by the quality of context you obtain.**

10 minutes spent collecting context is more valuable than 1 hour of drawing hi-fi from scratch.

**When there's no context, prioritize asking the user rather than forcing through.**
