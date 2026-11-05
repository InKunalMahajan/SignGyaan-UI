---
title: Spinner
---

```html
<span class="sg-spinner" role="status" aria-label="Loading"></span>
```

Respect reduced motion preferences when adding animated loading indicators.

## Design and behavior

Show activity while content is loading.

| Topic | Guidance |
| --- | --- |
| Common usage | Inline or section loading. |
| Accessibility | Include accessible loading text and respect reduced-motion preferences. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
