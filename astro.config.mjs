import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), icon()],
  adapter: cloudflare(),
});