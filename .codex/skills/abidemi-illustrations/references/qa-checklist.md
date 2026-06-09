# QA Checklist

Before outputting any illustration (any format), verify:

## Visual (All Formats)

- [ ] Background is pure white (`#FFFFFF`).
- [ ] Subject occupies 40–60% of frame (not cramped, not tiny).
- [ ] ABIDEMI is present and performing the core action.
- [ ] Removing ABIDEMI would break the image – it's not decorative.
- [ ] Accent colors (red/orange/blue) only on short annotations or small highlights.
- [ ] No emojis, no gradients, no drop shadows, no 3D.

## Text Annotations (if any)

- [ ] English or minimal numbers (1–4 characters maximum).
- [ ] No em dashes (`—`).
- [ ] No fake pidgin ("am", "wey", "abeg").
- [ ] Natural Nigerian informal tone – e.g., "Step 1" not "Firstly,".

## Code Outputs (HTML/Canvas/MP4)

- [ ] Self‑contained (no external CDNs unless necessary – prefer inline).
- [ ] Canvas animations use `requestAnimationFrame`.
- [ ] Export MP4 button is visible and functional in Chrome.
- [ ] MediaRecorder checks `video/mp4` first, `video/webm` as fallback.
- [ ] Animation has defined end frame (TOTAL_FRAMES) for clean stop.
- [ ] Exported file name is meaningful.

## Originality

- [ ] Metaphor/invention is fresh – not copied from old examples.
- [ ] Composition is unique to this concept.

## Fallback (No API)

- [ ] If image generation API not available, output a clear prompt for Gemini/Midjourney/DALL‑E.
- [ ] Include exact folder path where the user should save the generated PNG.
