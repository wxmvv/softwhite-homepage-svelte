// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

// module.exports = {
// 	publicPath:"./"
// }
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
	publicPath:"./",
	kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
    }
};
// module.exports = {
// 	publicPath: process.env.NODE_ENV === 'production'
// 	  ? '/production-sub-path/'
// 	  : '/'
//   }


export default config;
