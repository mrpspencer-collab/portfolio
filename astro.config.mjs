import { defineConfig } from 'astro/config';

export default defineConfig({
  base: process.env.BASE_PATH ? process.env.BASE_PATH.replace(/\/?$/, '/') : undefined,
});
