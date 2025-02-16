import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import icon from 'astro-icon';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), icon()],

  adapter: node({
    mode: 'standalone',
  }),
});