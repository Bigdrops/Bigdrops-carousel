# HTML Canvas Animation Output Format

## When to Use
Use this format when the user requests: "as HTML", "as canvas animation", "as interactive illustration", or "as a moving diagram".

## Output Rules

### Canvas Size
- Default: 800px width x 450px height (16:9 ratio)
- Add width="800" height="450" attributes to the canvas element

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

## Animation Guidelines

- Use requestAnimationFrame for smooth motion.
- Keep animations simple: walking, pointing, pushing objects, transforming.
- Add one interactive element if requested (e.g., button to restart animation).
- Include a short caption below the canvas (English, no em dashes).

## Full HTML Template

The agent must output a complete, self-contained HTML file with canvas, script, and minimal styling (white background, black lines, optional red/orange/blue accents).

## Example Prompt Response

User: "Show ABIDEMI pushing a heavy 'Xiaomi' block, then a key labeled 'Bada' unlocks a gate."

Agent outputs: abidemi-quick-share-demo.html (complete file).
