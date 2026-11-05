---
title: Modal
description: Native dialog with custom visual styling.
---

Use HTML `<dialog>` for native modal focus handling. Open with `showModal()` and close with `close()` from a user interaction.

```html
<button id="open-dialog" class="sg-button sg-button-primary">Open</button>
<dialog id="dialog" class="sg-modal" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirmation</h2>
  <p>Continue to the next lesson?</p>
  <button id="close-dialog" class="sg-button sg-button-outline">Close</button>
</dialog>
<script>
  const dialog = document.querySelector('#dialog');
  document.querySelector('#open-dialog').addEventListener('click', () => dialog.showModal());
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
</script>
```

Test Escape, keyboard focus and long-content overflow.

## Design and behavior

Display a short focused dialog.

| Topic | Guidance |
| --- | --- |
| Common usage | Confirmation, short form. |
| Accessibility | Use showModal(), close handling, Escape, and return focus to the trigger. |

## Framework integration

Use the shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Component behavior and state must be implemented in the chosen framework. See the [Blade](../blade/), [React](../react/), and [Vue](../vue/) guides.

## Testing checklist

- Test keyboard Tab, Shift+Tab, and any relevant control-specific keys.
- Verify layout at 320px and 1440px widths.
- Test dark mode, visible focus, and accessible labels.
