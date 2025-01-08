import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Ensures a static site is generated
  base: '/',        // No subdirectory since you're using a custom domain
});