// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://exponential-functions.com',
  build: {
    assets: 'assets',
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
});
