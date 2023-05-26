// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter({
		// 		pages: 'build',
		// 		asserts: 'build',
		// 		fallback: null,
		// 		precompress: true,
		// }),
	// 	adapter: adapter(),

	// }
	// publicPath:"/softwhite-homepage-svelte/",
	// publicPath:"./",
	kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        }),
		paths:{
			//github page使用
			base: "/softwhite-homepage-svelte"
			//默认使用
			// base: "./"
		},
		appDir: 'why',
		//默认_app github page无法识别

    }
};



export default config;
