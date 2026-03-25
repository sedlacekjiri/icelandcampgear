import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sedlacekjiri.github.io',
  base: '/icelandcampgear',
  integrations: [mdx()],
});
