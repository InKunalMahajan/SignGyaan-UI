# SignGyaan UI

Free framework-independent Tailwind CSS v4 component library with a custom Astro documentation site.

- No Starlight or third-party documentation starter/theme.
- Shared CSS tokens and components.
- Blade, React and Vue examples.

## Development

```bash
npm install
npm run dev
npm run build
npm run build:css
```

See the documentation and source files for component usage.

## Publishing the documentation

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. In GitHub, open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.

Once the workflow runs successfully, documentation should be available at:

https://inkunalmahajan.github.io/SignGyaan-UI/

This URL is a planned deployment target and should not be considered live until GitHub Pages completes a successful run.

## Free component inventory

Button, Card, Badge, Input, Alert, Progress, Spinner, Checkbox, Select, Tabs, Modal, Navbar and Sidebar. Advanced widgets such as tabs and modal dialogs need browser/framework behavior in addition to shared CSS.
