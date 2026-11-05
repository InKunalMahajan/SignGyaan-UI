---
title: Card
---

The card is a reusable surface for content.

```html
<section class="sg-card">
  <h2>Basic Computer</h2>
  <p>Introduction to Computers</p>
</section>
```

## Design and behavior

Group content in a reusable surface.

| Topic | Guidance |
| --- | --- |
| Common usage | Course preview, summaries. |
| Accessibility | Keep heading hierarchy logical; do not nest interactive links. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
