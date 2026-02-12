import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://receipt.andrew.cv',
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
  