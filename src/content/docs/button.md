---
title: Button
---

## Variants

Use `sg-button` plus `sg-button-primary`, `sg-button-secondary`, or `sg-button-outline`.

```html
<button type="button" class="sg-button sg-button-primary">Continue Learning</button>
<button type="button" class="sg-button sg-button-outline">Cancel</button>
```

## Sizes

Add `sg-button-sm` or `sg-button-lg`. Use the native `disabled` attribute for disabled state.

## Design and behavior

Choose native buttons for actions and links for navigation.

| Topic | Guidance |
| --- | --- |
| Common usage | Primary, secondary, outline, sizes, disabled state. |
| Accessibility | Always expose an action label; verify focus-visible and disabled behavior. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
