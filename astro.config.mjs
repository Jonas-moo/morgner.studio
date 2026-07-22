import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://morgner.art',
  trailingSlash: 'never',

  build: {
    format: 'directory'
  },

  output: "hybrid",
  adapter: cloudflare()
});