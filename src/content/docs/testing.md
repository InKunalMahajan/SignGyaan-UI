---
title: Testing and review
description: Verify SignGyaan UI on mobile, desktop, keyboard and assistive technology.
---

## Quality gates

Every published build runs `npm test`, `npm run build`, and `npm run build:css`. These automated checks confirm source conventions and compilation; they cannot certify accessibility or visual quality.

## Manual browser review

| Area | Method | What to verify |
| --- | --- | --- |
| Mobile | 320px, 375px and 768px | Sidebar is usable and no page-wide horizontal overflow occurs |
| Desktop | 1024px and 1440px | Sidebar, content and optional on-page TOC do not overlap |
| Keyboard | Tab, Shift+Tab, Enter, Space and Escape | Visible focus, functional menus and dialogs |
| Search | Open with Ctrl+K and type component names | Matching results appear and navigation works |
| Theme | Toggle light and dark | Text and focus states remain legible |
| Reduced motion | Enable OS reduce-motion preference | Animations are minimized |
| Forms | Use labels and invalid data | All controls and errors are understandable |
| Screen reader | NVDA or VoiceOver | Names, roles and states are announced correctly |

## Scope and known gaps

The shared CSS supports all 20 component styles. The Blade, React and Vue folders currently contain only introductory Button and Card wrappers. The Tabs, Modal and Switch examples still require appropriate framework-specific behavior when reused.

## File an issue

Include the affected URL, OS and browser, screen width, reproduction steps, expected behavior and a screenshot when useful.
