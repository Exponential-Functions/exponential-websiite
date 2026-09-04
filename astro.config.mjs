// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inlines CSS directly into <head> to guarantee 100% load reliability across all deployment subpaths & hosts
    inlineStylesheets: 'always'
  }
});
