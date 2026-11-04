import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			// Fully static output for GitHub Pages; strict fails the build on an unprerendered route.
			adapter: adapter({ pages: 'build', assets: 'build', strict: true })
		})
	]
});
