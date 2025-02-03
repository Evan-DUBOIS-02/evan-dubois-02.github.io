import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://evan-dubois-02.github.io/',
  base: 'src/pages/index.astro',
  integrations: [mdx(), sitemap(), tailwind()]
});