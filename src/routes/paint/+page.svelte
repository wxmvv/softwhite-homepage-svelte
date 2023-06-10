<script>
	import { onMount } from 'svelte';

	//MARK:photoswipe图片预览1

	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { paints } from '@lib/data.js';
	export let galleryID = 'gallery';
	const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';

	// import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';

	//MARK:siteloder加载相关1
	import SiteLoader from 'siteloader';
	let progress_num = 0;
	let progress_num_css = '';
	/**
	 * @type {HTMLDivElement | null}
	 */
	let progress = null;
	let hide_progress = () => {
		if (progress !== null) {
			progress.classList.add('hidden');
		}
	};
	function isPhonePortrait() {
		return window.matchMedia('(max-width: 600px) and (orientation: portrait)').matches;
	}
	onMount(() => {
		//MARK:photoswipe图片预览2
		//https://github.com/dimsemenov/photoswipe
		const options = {
			// arrowPrevSVG: leftArrowSVGString,
			// arrowNextSVG: leftArrowSVGString,
			bgOpacity: 0.6,
			showHideAnimationType: 'fade',
			// initialZoomLevel: 'fill',
			secondaryZoomLevel: 1.5,
			// zoom: false,
			// close: false,
			// counter: false,
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		};
		const lightbox = new PhotoSwipeLightbox(options);
		lightbox.init();

		//MARK:siteloder加载相关2
		//https://github.com/Yinglinhan/siteloader
		const sl = new SiteLoader([
			{
				// @ts-ignore
				sources: [
					{
						sourceType: 'image',
						selectors: ['.selected']
					}
				]
			}
		]);
		sl.setTargetTextDom('.radial-progress');
		sl.addEventListener('progress', (e) => {
			if (e === undefined) {
				console.log('undefined+' + e);
				// progress_num = 100;
				hide_progress();
			} else {
				console.log(e);
				// @ts-ignore
				progress_num = e.progress;
				// @ts-ignore
				progress_num_css = '--value:' + e.progress;
			}
		});
		// sl.addEventListener('trueLoadFinish',()=>{
		// progress_num = 100;
		// })
		sl.addEventListener('countComplete', () => {
			console.log('complete');
			hide_progress();
		});
		sl.progressSpeed = 50;
		sl.needSpeedUp = true;
		sl.startLoad();
	});
</script>

<!-- about page -->
<svelte:head>
	<title>Paint</title>
</svelte:head>

<div class="bg-base-100 min-h-screen">
	<div bind:this={progress} class="radial-progress text-xs fixed z-20 top-16 left-0 md:left-6" style="{progress_num_css};--size:3rem;--thickness:1px;">{progress_num}</div>
	<div class=" mx-auto max-w-2xl px-16 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16">
		<article class="prose prose-stone">
			<h1>绘画</h1>
			<div />
		</article>
		<div id={galleryID} class="pswp-gallery grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
			{#each paints as paint}
				<div class="group">
					<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
						<!-- data-pswp-width={paint.width} data-pswp-height={paint.height} -->
						<a href={paint.largeherf} data-pswp-width={paint.width} data-pswp-height={paint.height} target="_blank">
							<img src={paint.smallsrc} alt={paint.alt} class="selected h-full w-full object-cover object-center group-hover:opacity-75" />
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
