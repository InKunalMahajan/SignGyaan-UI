---
title: Installation
description: Run the Astro docs and compile the shared UI CSS.
---

## Requirements

Node.js 20.19+ or a currently supported newer Node.js release.

## Run documentation

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

## Build static docs

```bash
npm run build
npm run preview
```

## Build distributable CSS

```bash
npm run build:css
```

Use `packages/core/dist/signgyaan.css` inside Blade, React, Vue or plain HTML. For additional Tailwind utilities, configure each app's Tailwind build separately.
