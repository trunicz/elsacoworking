import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react()],

  adapter: node({
    mode: 'standalone',
  }),
});