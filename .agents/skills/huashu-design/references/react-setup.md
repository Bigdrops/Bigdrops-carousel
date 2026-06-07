# React + Babel Project Standards

Technical standards that must be followed when prototyping with HTML+React+Babel. Not following them will break.

## Pinned Script Tags (Must Use These Versions)

Place these three script tags in the HTML `<head>`, using **fixed versions + integrity hash**:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
```

**Don't** use unpinned versions like `react@18` or `react@latest` — version drift/caching issues will occur.

**Don't** omit `integrity` — it's the line of defense if CDN is hijacked or tampered with.

## File Structure

```
project/
├── index.html               # Main HTML
├── components.jsx           # Component file (loaded via type="text/babel")
├── data.js                  # Data file
└── styles.css               # Additional CSS (optional)
```

Loading in HTML:

```html
<!-- React+Babel first -->
<script src="https://unpkg.com/react@18.3.1/..."></script>
<script src="https://unpkg.com/react-dom@18.3.1/..."></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/..."></script>

<!-- Then your component files -->
<script type="text/babel" src="components.jsx"></script>
<script type="text/babel" src="pages.jsx"></script>

<!-- Finally, main entry -->
<script type="text/babel">
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>
```

**Don't** use `type="module"` — it will conflict with Babel.

## Three Non-negotiable Rules

### Rule 1: Styles Object Must Use Unique Naming

**Wrong** (will break with multiple components):
```jsx
// components.jsx
const styles = { button: {...}, card: {...} };

// pages.jsx  ← same name overrides!
const styles = { container: {...}, header: {...} };
```

**Correct**: Each component file's styles uses a unique prefix.

```jsx
// terminal.jsx
const terminalStyles = { 
  screen: {...}, 
  line: {...} 
};

// sidebar.jsx
const sidebarStyles = { 
  container: {...}, 
  item: {...} 
};
```

**Or use inline styles** (recommended for small components):
```jsx
<div style={{ padding: 16, background: '#111' }}>...</div>
```

This rule is **non-negotiable**. Every time you write `const styles = {...}` you must replace it with a specific naming, otherwise multi-component loading will cause errors across the stack.

### Rule 2: Scopes Don't Share, Must Export Manually

**Key understanding**: Each `<script type="text/babel">` is independently compiled by Babel, and their scopes **do not communicate**. A `Terminal` component defined in `components.jsx` is **undefined by default** in `pages.jsx`.

**Solution**: At the end of each component file, export components/utilities to be shared to `window`:

```jsx
// end of components.jsx
function Terminal(props) { ... }
function Line(props) { ... }
const colors = { green: '#...', red: '#...' };

Object.assign(window, {
  Terminal, Line, colors,
  // List everything you want to use elsewhere here
});
```

Then `pages.jsx` can directly use `<Terminal />`, because JSX will look for it at `window.Terminal`.

### Rule 3: Don't Use scrollIntoView

`scrollIntoView` pushes the entire HTML container upward, breaking the web harness layout. **Never use it**.

Alternative:
```js
// Scroll to a position within the container
container.scrollTop = targetElement.offsetTop;

// Or use element.scrollTo
container.scrollTo({
  top: targetElement.offsetTop - 100,
  behavior: 'smooth'
});
```

## Calling Claude API (Within HTML)

Some native design-agent environments (like Claude.ai Artifacts) have a pre-configured `window.claude.complete`, but most agent environments (Claude Code / Codex / Cursor / Trae / etc.) locally do **not**.

If your HTML prototype needs to call an LLM for demo purposes (e.g. building a chat interface), two options:

### Option A: Don't actually call, use mock

Recommended for demo scenarios. Write a fake helper that returns preset responses:
```jsx
window.claude = {
  async complete(prompt) {
    await new Promise(r => setTimeout(r, 800)); // simulate delay
    return "This is a mock response. Replace with real API when deploying.";
  }
};
```

### Option B: Actually call the Anthropic API

Requires an API key — the user must provide their own key in the HTML to run. **Never hardcode a key in HTML**.

```html
<input id="api-key" placeholder="Paste your Anthropic API key" />
<script>
window.claude = {
  async complete(prompt) {
    const key = document.getElementById('api-key').value;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    return data.content[0].text;
  }
};
</script>
```

**Note**: Calling the Anthropic API directly from the browser may encounter CORS issues. If your preview environment doesn't support CORS bypass, this path won't work. In that case, use Option A mock, or tell the user they need a proxy backend.

### Option C: Use agent-side LLM capability to generate mock data

For local demo only, you can temporarily call the agent's LLM capability (or a multi-model skill the user installed) in the current agent session to generate mock response data, then hardcode it into the HTML. This way the HTML doesn't depend on any API at runtime.

## Typical HTML Starter Template

Copy this template as the skeleton for React prototypes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Prototype Name</title>

  <!-- React + Babel pinned -->
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; width: 100%; }
    body { 
      font-family: -apple-system, 'SF Pro Text', sans-serif;
      background: #FAFAFA;
      color: #1A1A1A;
    }
    #root { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="root"></div>

  <!-- Your component files -->
  <script type="text/babel" src="components.jsx"></script>

  <!-- Main entry -->
  <script type="text/babel">
    const { useState, useEffect } = React;

    function App() {
      return (
        <div style={{padding: 40}}>
          <h1>Hello</h1>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
```

## Common Errors and Solutions

**`styles is not defined` or `Cannot read property 'button' of undefined`**
→ You defined `const styles` in one file, another file overrides it. Change each to a specific naming.

**`Terminal is not defined`**
→ Cross-file references don't share scope. Add `Object.assign(window, {Terminal})` at the end of the file where Terminal is defined.

**Entire page white screen, no console error**
→ Most likely a JSX syntax error that Babel didn't report in the console. Temporarily replace `babel.min.js` with the non-minified `babel.js` for clearer error messages.

**ReactDOM.createRoot is not a function**
→ Wrong version. Confirm you're using react-dom@18.3.1 (not 17 or others).

**`Objects are not valid as a React child`**
→ You rendered an object instead of JSX/string. Usually `{someObj}` written where `{someObj.name}` was intended.

## How to Split Files for Large Projects

**Single files >1000 lines** are hard to maintain. Split approach:

```
project/
├── index.html
├── src/
│   ├── primitives.jsx      # Base elements: Button, Card, Badge...
│   ├── components.jsx      # Business components: UserCard, PostList...
│   ├── pages/
│   │   ├── home.jsx        # Home page
│   │   ├── detail.jsx      # Detail page
│   │   └── settings.jsx    # Settings page
│   ├── router.jsx          # Simple routing (React state switching)
│   └── app.jsx             # Entry component
└── data.js                 # mock data
```

Load in order in HTML:
```html
<script type="text/babel" src="src/primitives.jsx"></script>
<script type="text/babel" src="src/components.jsx"></script>
<script type="text/babel" src="src/pages/home.jsx"></script>
<script type="text/babel" src="src/pages/detail.jsx"></script>
<script type="text/babel" src="src/pages/settings.jsx"></script>
<script type="text/babel" src="src/router.jsx"></script>
<script type="text/babel" src="src/app.jsx"></script>
```

**At the end of each file**, use `Object.assign(window, {...})` to export what needs to be shared.
