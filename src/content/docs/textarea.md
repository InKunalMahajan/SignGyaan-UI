---
title: Textarea
description: Enter longer-form text using a native multiline field.
---

## Usage

```html
<label for="comments">Your notes</label>
<textarea id="comments" class="sg-textarea" placeholder="Write a note"></textarea>
```

## Accessibility

Use a visible label, appropriate max length, and server-side validation.

## Design and behavior

Capture longer learner notes or comments.

| Topic | Guidance |
| --- | --- |
| Common usage | Feedback, descriptions, notes. |
| Accessibility | Use a visible label; do not rely on placeholders as labels. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
