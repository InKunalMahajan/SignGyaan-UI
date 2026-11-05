---
title: Separator
description: Visually separate related groups of content.
---

## Usage

```html
<hr class="sg-separator" />
```

## Accessibility

A native hr element is appropriate for a thematic break; use a decorative border when no semantic separation is needed.

## Design and behavior

Separate topical groups of content.

| Topic | Guidance |
| --- | --- |
| Common usage | Page sections and panels. |
| Accessibility | Use hr for a semantic thematic break; decorative borders otherwise. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
