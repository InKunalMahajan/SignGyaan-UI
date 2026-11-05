---
title: Avatar
description: Display a learner or user identifier.
---

## Usage

```html
<span class="sg-avatar" role="img" aria-label="Learner avatar">SG</span>
```

## Accessibility

Use descriptive alternate text for an image avatar, or label a meaningful initials avatar.

## Design and behavior

Represent a user or fallback initials.

| Topic | Guidance |
| --- | --- |
| Common usage | Profile, learner cards. |
| Accessibility | Use descriptive alt on photos and hide decorative imagery. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
