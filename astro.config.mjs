import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://morgner.art',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
