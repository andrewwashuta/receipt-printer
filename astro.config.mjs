import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrewwashuta.github.io',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
            api: 'modern-compiler' // or "modern"
        },
      },
    },
  },
});
  