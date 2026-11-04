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
