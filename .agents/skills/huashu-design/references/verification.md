# Verification: Output Verification Process

Some native design-agent environments (like Claude.ai Artifacts) have a built-in `fork_verifier_agent` that launches a subagent to check via iframe screenshots. Most agent environments (Claude Code / Codex / Cursor / Trae / etc.) don't have this built-in capability — using Playwright manually covers the same verification scenarios.

## Verification Checklist

After each HTML output, run through this checklist:

### 1. Browser Render Check (Required)

Most basic: **Can the HTML open?** On macOS:

```bash
open -a "Google Chrome" "/path/to/your/design.html"
```

Or use Playwright screenshot (next section).

### 2. Console Error Check

The most common issue in HTML files is JS errors causing white screen. Run with Playwright:

```bash
python ~/.claude/skills/huashu-design/scripts/verify.py path/to/design.html
```

This script will:
1. Open HTML with headless chromium
2. Save screenshot to project directory
3. Capture console errors
4. Report status

See `scripts/verify.py` for details.

### 3. Multi-viewport Check

For responsive designs, capture multiple viewports:

```bash
python verify.py design.html --viewports 1920x1080,1440x900,768x1024,375x667
```

### 4. Interaction Check

Tweaks, animations, button toggles — default static screenshots can't capture these. **Recommend user opens browser and clicks through**, or use Playwright screen recording:

```python
page.video.record('interaction.mp4')
```

### 5. Slide-by-slide Check

For deck-type HTML, capture each slide:

```bash
python verify.py deck.html --slides 10  # capture first 10 slides
```

Generates `deck-slide-01.png`, `deck-slide-02.png`... for quick browsing.

## Playwright Setup

First-time setup:

```bash
# If not yet installed
npm install -g playwright
npx playwright install chromium

# Or Python version
pip install playwright
playwright install chromium
```

If user already has Playwright installed globally, use it directly.

## Screenshot Best Practices

### Capture Full Page

```python
page.screenshot(path='full.png', full_page=True)
```

### Capture Viewport

```python
page.screenshot(path='viewport.png')  # default only visible area
```

### Capture Specific Element

```python
element = page.query_selector('.hero-section')
element.screenshot(path='hero.png')
```

### Hi-res Screenshot

```python
page = browser.new_page(device_scale_factor=2)  # retina
```

### Wait for Animation Finish

```python
page.wait_for_timeout(2000)  # wait 2 seconds for animation to settle
page.screenshot(...)
```

## Send Screenshots to User

### Open Local Screenshot Directly

```bash
open screenshot.png
```

User can view in their Preview/Figma/VSCode/browser.

### Upload to Image Hosting and Share Link

If need to show a remote collaborator (e.g. Slack/Feishu/WeChat), let user use their own image hosting tool or MCP to upload the screenshot, get a permanent link, and paste it anywhere.

## When Verification Errors Occur

### White Screen

Console will definitely have errors. First check:

1. React+Babel script tag integrity hash correctness (see `react-setup.md`)
2. Is it `const styles = {...}` naming conflict?
3. Are cross-file components exported to `window`?
4. JSX syntax errors (babel.min.js doesn't report errors, switch to non-minified babel.js)

### Animation Stutter

- Use Chrome DevTools Performance tab to record a segment
- Look for layout thrashing (frequent reflows)
- Prefer `transform` and `opacity` for motion effects (GPU accelerated)

### Wrong Fonts

- Check if `@font-face` url is accessible
- Check fallback fonts
- Chinese fonts load slowly: first show fallback, switch after loading

### Layout Misalignment

- Check if `box-sizing: border-box` is applied globally
- Check `* { margin: 0; padding: 0 }` reset
- Open gridlines in Chrome DevTools to see actual layout

## Verification = Designer's Second Set of Eyes

**Always go through it yourself**. When AI writes code, it often produces:

- Looks correct but interaction has bugs
- Static screenshot fine but misaligned on scroll
- Looks good on widescreen but breaks on narrow
- Dark mode forgot to test
- Some components don't respond after Tweaks switch

**1 minute of verification at the end can save 1 hour of rework**.

## Common Verification Script Commands

```bash
# Basic: open + screenshot + error capture
python verify.py design.html

# Multi-viewport
python verify.py design.html --viewports 1920x1080,375x667

# Multi-slide
python verify.py deck.html --slides 10

# Output to specific directory
python verify.py design.html --output ./screenshots/

# headless=false, open real browser for you to see
python verify.py design.html --show
```
