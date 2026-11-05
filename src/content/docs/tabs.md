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

## Design and behavior

Switch between related sections without page navigation.

| Topic | Guidance |
| --- | --- |
| Common usage | Overview, lessons, resources. |
| Accessibility | Implement arrows, Home/End, roving tabindex, and correctly linked tabpanels. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
