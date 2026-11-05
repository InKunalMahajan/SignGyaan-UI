---
title: Radio
description: Choose one option from a group of choices.
---

## Usage

```html
<fieldset><legend>Difficulty</legend><label><input class="sg-radio" type="radio" name="level" checked /> Beginner</label><label><input class="sg-radio" type="radio" name="level" /> Advanced</label></fieldset>
```

## Accessibility

Use a fieldset and legend to describe the group. Radio inputs with the same name behave as a single selection group.

## Design and behavior

Select a single option from a related group.

| Topic | Guidance |
| --- | --- |
| Common usage | Learning level, delivery format. |
| Accessibility | Group radios with fieldset/legend; inputs share a name. |

## Framework integration

Use shared `sg-*` CSS classes in HTML, Laravel Blade, React and Vue. Interactive behavior must be provided by the selected framework. See [Blade](../blade/), [React](../react/), and [Vue](../vue/) documentation.

## Testing checklist

- Verify relevant keyboard controls and visible focus.
- Inspect at 320px mobile and 1440px desktop widths.
- Verify light/dark mode, correct labels, and state changes.
