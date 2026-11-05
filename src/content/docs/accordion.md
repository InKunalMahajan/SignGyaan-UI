---
title: Accordion
description: Expand or collapse extra information with native details and summary.
---

## Usage

```html
<details class="sg-accordion"><summary>What is SignGyaan UI?</summary><div class="sg-accordion-content">A free Tailwind CSS component library.</div></details>
```

## Accessibility

Native details elements provide keyboard-accessible disclosure without a JavaScript dependency.

## Design and behavior

Reveal optional details in place.

| Topic | Guidance |
| --- | --- |
| Common usage | FAQ, extra explanations. |
| Accessibility | Prefer native details/summary to retain keyboard semantics. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
