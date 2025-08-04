import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrewwashuta.github.io',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    quality: 85,
    formats: ['webp', 'avif'],
    sharp: {
      removeMetadata: true,
      progressive: true
    }
  },
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
  