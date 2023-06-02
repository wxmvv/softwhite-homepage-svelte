<script>
	// import Viewer from 'viewerjs';
	// import 'viewerjs/dist/viewer.css';

	import { onMount } from 'svelte';
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	import { paints } from '@lib/data.js';

	/**
	 * @type {string}
	 */
	export let galleryID = 'test';
	//MARK:siteloder加载相关1
	import SiteLoader from 'siteloader';
	let progress_num = 0;
	let progress_num_css = '';
	/**
	 * @type {HTMLDivElement}
	 */
	let progress;
	let hide_progress = () => {
		progress.classList.add('hidden');
	};
	onMount(() => {
		//MARK:photoswipe图片预览
		//https://github.com/dimsemenov/photoswipe
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();

		//MARK:siteloder加载相关2
		//https://github.com/Yinglinhan/siteloader
		const sl = new SiteLoader([
			{
				// @ts-ignore
				sources: [
					{
						sourceType: 'image',
						selectors: ['img']
					}
				]
			}
		]);
		sl.setTargetTextDom('.radial-progress');
		sl.addEventListener('progress', (e) => {
			if (e === undefined) {
			} else {
				// @ts-ignore
				progress_num = e;
				// @ts-ignore
				progress_num_css = '--value:' + e.progress + ';' + '--size:4rem;--thickness:2px;';
			}
			console.log(progress_num_css);
		});
		sl.addEventListener('countComplete', () => {
			console.log('complete');
			hide_progress();
		});
		sl.startLoad();
	});
</script>

<!-- about page -->
<svelte:head>
	<title>Paint</title>
</svelte:head>

<div class="bg-base-100">
	<div bind:this={progress} class="radial-progress fixed z-20 top-16 left-0 md:left-6" style={progress_num_css}>{progress_num}</div>
	<div class=" mx-auto max-w-2xl px-16 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16">
		<article class="prose prose-stone">
			<h1>绘画</h1>
			<div />
		</article>
		<div id={galleryID} class="pswp-gallery grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
			{#each paints as paint}
				<div class="group">
					<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
						<a href={paint.largeherf} data-pswp-width={paint.width} data-pswp-height={paint.height} target="_blank">
							<img src={paint.smallsrc} alt={paint.alt} class="h-full w-full object-cover object-center group-hover:opacity-75" />
						</a>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">{paint.alt}</h3>
					<!-- <p class="mt-1 text-lg font-medium text-gray-900">$48</p> -->
				</div>
			{/each}

			<!-- More products... -->
		</div>
	</div>
</div>
