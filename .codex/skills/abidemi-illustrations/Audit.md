# Audit Reference — Ground Truth

## TikTok Facts
- Photo slides (carousel) = static PNG/JPG. Viewer swipes manually. No motion.
- Motion Photo carousel = Android Motion Photo format. Plays 2-3 sec clip per slide.
- MP4 upload = standalone video post. Not a carousel slide.
- "35 seconds" = total auto-advance time across all slides. Not per-slide duration.

## MediaRecorder Facts
- Chrome/Edge support video/mp4 natively via MediaRecorder.
- Firefox does not reliably support canvas.captureStream() for export.
- mimeType check must prefer video/mp4 first, webm as fallback.

## ABIDEMI Character Rules
- Always black. No color on the character itself.
- No facial expressions. No speech bubbles. No gender markers.
- Must perform the core action. Decorative = failure.

## Output Formats
- PNG: static only
- SVG: scalable static or CSS-animated
- HTML Canvas + MP4: animation + video export
- React: REMOVED in v1.0.0. Must not appear anywhere as a current output.
- Motion Photo: requires MotionPhoto Maker app to combine PNG + MP4