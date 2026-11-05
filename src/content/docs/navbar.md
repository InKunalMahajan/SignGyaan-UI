---
title: Navbar
description: Reusable responsive navigation styling.
---

```html
<header class="sg-navbar">
  <a href="/" aria-label="SignGyaan UI home">SignGyaan UI</a>
  <nav aria-label="Primary">
    <a class="sg-nav-link" href="/docs">Documentation</a>
  </nav>
</header>
```

For narrow screens, decide whether links wrap or use an accessible collapsible menu.

## Design and behavior

Group important top-level destinations.

| Topic | Guidance |
| --- | --- |
| Common usage | Website and product navigation. |
| Accessibility | Use nav with an accessible name and aria-current for the active destination. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
