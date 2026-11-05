---
title: Select
description: Accessible native dropdown for choosing options.
---

```html
<label for="course">Choose a course</label>
<select id="course" name="course" class="sg-select">
  <option value="basic-computer">Basic Computer</option>
  <option value="mathematics">Mathematics</option>
</select>
```

Prefer native selects until you need advanced searching or multi-select behavior.

## Design and behavior

Choose a value from a predefined list.

| Topic | Guidance |
| --- | --- |
| Common usage | Courses, subjects, levels. |
| Accessibility | Pair native select with a descriptive label and keyboard-test options. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
