---
title: Tabs
description: Shared tab styling with an accessible interaction contract.
---

```html
<div class="sg-tabs" role="tablist" aria-label="Course sections">
  <button class="sg-tab" role="tab" id="tab-overview"
    aria-selected="true" aria-controls="panel-overview">Overview</button>
  <button class="sg-tab" role="tab" id="tab-lessons"
    aria-selected="false" aria-controls="panel-lessons" tabindex="-1">Lessons</button>
</div>
<section id="panel-overview" role="tabpanel" aria-labelledby="tab-overview">
  Course overview
</section>
<section id="panel-lessons" role="tabpanel" aria-labelledby="tab-lessons" hidden>
  Lessons
</section>
```

**Interaction required:** connect the buttons with JavaScript, Alpine, Livewire, React, or Vue. When building ARIA tabs, implement Left/Right arrow navigation, focus management, selection state and hide/show panels. Styling alone is not a finished tab widget.
