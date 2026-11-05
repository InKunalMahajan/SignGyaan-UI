---
title: Checkbox
description: Native accessible selection control.
---

Use a real checkbox with a connected label and the shared class.

```html
<label class="flex items-center gap-2">
  <input class="sg-checkbox" type="checkbox" name="agree" />
  <span>I agree to the terms</span>
</label>
```

The browser handles keyboard Space toggling and checked state.

## Design and behavior

Select independent options or accept a condition.

| Topic | Guidance |
| --- | --- |
| Common usage | Preferences and multi-select. |
| Accessibility | Group related choices in fieldset and legend; do not pre-check consent. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
