---
title: Architecture
---

## One core, multiple frameworks

The core is shared CSS, not a framework runtime.

- `packages/core/src/tokens.css`: colors, themes, spacing and radius
- `packages/core/src/components.css`: prefixed, reusable CSS classes
- `examples/blade`: Laravel Blade component wrappers
- `examples/react`: React wrappers
- `examples/vue`: Vue wrappers
- `src`: custom Astro documentation

HTML behavior and business logic stay inside the consuming application. The CSS build intentionally omits Tailwind Preflight so it won't reset application defaults.
