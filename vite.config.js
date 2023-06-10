import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server:{
		port:9988,
	},
	plugins: [sveltekit()],
	// base: "/softwhite-homepage-svelte/"
	// module.exports = {
// }
});
