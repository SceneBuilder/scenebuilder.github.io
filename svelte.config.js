import { mdsvex } from 'mdsvex';
import adapterStatic from '@sveltejs/adapter-static';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const targetAdapter = process.env.SVELTE_ADAPTER?.toLowerCase();
const adapter =
  targetAdapter === 'cloudflare'
    ? adapterCloudflare()
    : adapterStatic({
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true,
      });

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.svx'],
    }),
  ],
  kit: {
    adapter,
    alias: {
      '$lib/*': './src/lib/*',
    },
  },
  extensions: ['.svelte', '.svx', '.md'],
};

export default config;
