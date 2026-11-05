---
title: Progress
---

Set accessible value information along with visual width.

```html
<div class="sg-progress" role="progressbar" aria-label="Course completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="65">
  <div class="sg-progress-bar" style="width:65%"></div>
</div>
```

## Design and behavior

Show measured completion against a target.

| Topic | Guidance |
| --- | --- |
| Common usage | Determinate percentage or indeterminate state. |
| Accessibility | Name the progressbar and update aria-valuenow as measured progress changes. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
