# Motion Photo Export for TikTok Live Slides
## What Is a Motion Photo?
A Motion Photo (or Live Photo) is a specialized image container (`.jpg` or `.heic`) that embeds a short, high-quality video clip directly inside a single photo file. 
TikTok reads these embedded image files natively within its mobile file picker, displaying them with a Live Photo icon. When a viewer swipes to that slide, the embedded video layer plays automatically.
## Two Creative Formats
### Format 1: Flipbook Animation
**How it works:** Each slide is a single frame of ABIDEMI mid-action. When the viewer swipes fast, the frames play in sequence like a paper flipbook.

| Slides | Effect |
| :--- | :--- |
| 8-12 frames | Smooth motion (walking, pushing, building, breaking) |
| 4-5 frames | Snappy movement (pointing, turning, jumping) |

**Example use case:** ABIDEMI pushing a heavy "Quick Share" block across 10 slides. Slide 1: block on left, ABIDEMI touching it. Slide 10: block on right, ABIDEMI wiping forehead.
### Format 2: Progressive Reveal
**How it works:** Each slide adds one new element to the illustration. By slide 5-6, the full picture is revealed.

| Slide | Content |
| :--- | :--- |
| 1 | ABIDEMI only |
| 2 | + Problem icon (e.g., "No Quick Share" crossed out) |
| 3 | + Solution object (e.g., "Bada" key) |
| 4 | + Connection lines or arrows |
| 5 | + Completion mark (checkmark, green glow) |

## How to Create a Motion Photo from ABIDEMI Output
### Step 1: Generate PNG frames
Use the ABIDEMI skill to output sequential PNGs (e.g., `frame-01.png` to `frame-10.png`).
For **flipbook:** Each frame is a distinct pose – ABIDEMI moves across the canvas.
For **progressive reveal:** Each frame adds one layer – ABIDEMI stays in same position.
### Step 2: Generate MP4 video
Use the `html-canvas.md` output format to create a short video (2-3 seconds) of the exact same animation or reveal.
### Step 3: Combine into a Live Container
On your device, use a dedicated utility app (like MotionPhoto Maker or LivePhoto Camera on Google Play) to embed the files:
1. Select your target static PNG/JPEG frame to act as the visual cover image.
2. Select the exported MP4 video clip to embed as the motion data.
3. Export the file. The app will compile them into a unified `.jpg` or `.heic` file.
### Step 4: Upload to TikTok
1. Transfer the compiled image files back to your mobile device's camera roll.
2. Open TikTok and select create a new Carousel post.
3. Use the TikTok file picker to select the compiled files (they will appear with the native Live Photo badge).
4. TikTok will process the container and play the embedded motion layer automatically when users swipe to that slide.
## Important Notes
- Live/Motion Photos are handled as specialized image files by the Android filesystem, not as MP4 files. 
- The motion effect works **only in the TikTok mobile app** carousel mode, not on desktop web browsers.
- Keep embedded motion clips short (2-3 seconds is optimal) to maintain fast carousel performance.
## Agent Instructions
When the user requests a flipbook or progressive reveal for TikTok:
1. Generate the individual PNG frames (8-12 frames for flipbook, 4-6 for progressive reveal).
2. Generate an MP4 of the same animation using the canvas method.
3. Instruct the user to compile the image and video assets into a single Live Photo container using a mobile builder app.
Do NOT attempt to code or output raw binary `.jpg` motion containers directly – the agent cannot produce native system container formats. Only provide the frame assets, the MP4 layer, and compilation steps.