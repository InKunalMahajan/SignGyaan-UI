---
title: Table
description: Show tabular information with semantic table elements.
---

## Usage

```html
<div class="sg-table-wrap"><table class="sg-table"><caption class="sr-only">Course list</caption><thead><tr><th scope="col">Course</th><th scope="col">Progress</th></tr></thead><tbody><tr><td>Computer</td><td>65%</td></tr></tbody></table></div>
```

## Accessibility

Provide meaningful header cells, a caption and horizontal scrolling for narrow screens.

## Design and behavior

Present rows and columns of data.

| Topic | Guidance |
| --- | --- |
| Common usage | Scores, course inventory. |
| Accessibility | Use caption and header scope; allow horizontal scrolling on mobile. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
