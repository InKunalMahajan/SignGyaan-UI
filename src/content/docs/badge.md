---
title: Badge
---

Use badges for meaningful short statuses.

```html
<span class="sg-badge">Active</span>
```

## Design and behavior

Indicate compact status without replacing explanatory text.

| Topic | Guidance |
| --- | --- |
| Common usage | Active, Draft, Completed. |
| Accessibility | Do not rely on color alone to communicate status. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
