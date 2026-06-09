# Static SVG Output Format

## When to Use
Use this format when the user requests: "as SVG", "as vector", or "download as SVG".

## Output Rules
- 16:9 viewBox: viewBox="0 0 800 450"
- White background: rect width="800" height="450" fill="white"
- ABIDEMI drawn with circle, path, line elements
- Minimal color accents: red #E63946, orange #FFB703, blue #1D3557
- Output as .svg file, ready to open in browser or import into design tools.
