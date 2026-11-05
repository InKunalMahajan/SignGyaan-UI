---
title: Sidebar
description: Application and documentation side navigation.
---

```html
<aside class="sg-sidebar">
  <nav aria-label="Dashboard sections">
    <a href="/dashboard" class="sg-nav-link" aria-current="page">Dashboard</a>
    <a href="/courses" class="sg-nav-link">Courses</a>
    <a href="/settings" class="sg-nav-link">Settings</a>
  </nav>
</aside>
```

Show a hide/collapse control for small screens and maintain keyboard access.

## Design and behavior

Organize secondary destinations.

| Topic | Guidance |
| --- | --- |
| Common usage | Docs and application dashboards. |
| Accessibility | Ensure the mobile drawer can be dismissed by keyboard and has visible focus. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
