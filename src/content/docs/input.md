---
title: Input
---

Always associate inputs with descriptive labels.

```html
<label for="course">Course name</label>
<input id="course" class="sg-input" placeholder="Basic Computer" />
```

## Design and behavior

Capture a single-line value.

| Topic | Guidance |
| --- | --- |
| Common usage | Text, email, numeric, search. |
| Accessibility | Use a visible label, correct input type, and descriptive validation errors. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
