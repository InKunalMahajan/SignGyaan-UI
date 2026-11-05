---
title: Switch
description: Toggle a binary setting using a button with switch semantics.
---

## Usage

```html
<button type="button" class="sg-switch" role="switch" aria-checked="false" aria-label="Enable notifications"><span class="sg-switch-thumb"></span></button>
```

## Accessibility

Switch examples require JavaScript to update aria-checked whenever the state changes. For standard forms, a checkbox may be simpler.

## Design and behavior

Toggle a binary setting.

| Topic | Guidance |
| --- | --- |
| Common usage | Notifications, appearance. |
| Accessibility | Keep role=switch and aria-checked synchronized on each change. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
