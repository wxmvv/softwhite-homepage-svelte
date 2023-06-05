// import adapter from '@sveltejs/adapter-auto';
// import { base } from '$service-worker';
import adapter from '@sveltejs/adapter-static';
import path from "path"
// import {BASE_PATH} from "process.env"
// import  PATH_BASE  from ' meta.env.PATH_BASE '
// const github = process.argv.includes('github');
// console.log("gggenv")
// console.log(github)
// console.log(process.env.BASE_PATH)
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
//MARK:修改build路径为docs
//https://kit.svelte.dev/docs/configuration
//https://juejin.cn/post/7074763535472918565
	kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false,
            strict: true
        }),
		alias:	{
          "@lib": path.resolve("./src/lib"),
		  "@components": path.resolve("./src/components"),
		},
		paths:{
			base: ""
		},
		appDir: 'why'
		//默认_app github page无法识别
    }
};



export default config;
