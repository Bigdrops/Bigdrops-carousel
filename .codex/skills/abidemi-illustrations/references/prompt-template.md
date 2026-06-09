# Prompt Template for Image Generation (Fallback)

When the agent cannot call an image API directly, output this prompt for the user to run manually.

## Template


```
Create a 16:9 illustration with:
· Pure white background (#FFFFFF)
· Black hand-drawn line art, slight organic wobble
· A black solid character named ABIDEMI (white dot eyes, thin stick limbs, blank expression)
· Subject occupies 40-60% of the frame
· Only use red (#E63946), orange (#FFB703), or blue (#1D3557) for very short annotations (1-5 characters)
The concept to illustrate: [insert concept]
Composition pattern: [before/after | obstacle+key | workflow | ecosystem map | metaphor]
ABIDEMI must perform the core action: [describe what ABIDEMI does]
Annotations (if any): [e.g., "Bada", "Step 1", "Done"]
Do NOT add: shadows, gradients, 3D effects, cute details, backgrounds, speech bubbles, or facial expressions.
Output as PNG, 16:9 (800x450 or 1600x900).
```

## User Instruction

After generating the image, save it to:
`assets/<concept-slug>/illustration-1.png`

Then run:
```bash
git add assets/<concept-slug>/illustration-1.png
git commit -m "add ABIDEMI illustration for <concept>"
git push

```
```

```
