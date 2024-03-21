import { defineConfig } from 'astro/config';

// https://astro.build/config

// Current preferred theme: 'dracula-soft'
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft',
      wrap: true,
    }
  }
});
