import adapter from 'svelte-adapter-deno';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	onwarn: (warning, handler) => {
		if(warning.code === "a11y-click-events-have-key-events"){
			return
		}
		handler(warning)
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
