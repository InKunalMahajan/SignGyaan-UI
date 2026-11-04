import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inkunalmahajan.github.io',
  base: '/SignGyaan-UI/',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
