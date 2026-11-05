---
title: Alert
---

Use a semantic alert role when content requires immediate attention.

```html
<div class="sg-alert" role="alert">Your changes were saved.</div>
```

## Design and behavior

Provide feedback about an operation or important information.

| Topic | Guidance |
| --- | --- |
| Common usage | Info, success, warning, error. |
| Accessibility | Use role=status for routine updates; role=alert only for urgent announcements. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
