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

	//https://github.com/dimsemenov/photoswipe
	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();

		// const gallery = new Viewer(document.getElementById('images'),{
		// 	navbar:true,//关闭下方预览
		// 	title:false,//关闭标题
		// 	// toolbar:false,//关闭工具栏
		// 	toolbar:{
		// 		zoomIn: 4,
		// 		zoomOut: 4,
		// 		prev: 2,
		// 		next: 2,
		// 	},
		// 	backdrop:true,//关闭背景
		// 	button:true,//关闭右上关闭按钮
		// 	initialCoverage:1,//初始缩放比例
		// 	loop:true,//循环
		// 	loading:true,//加载
		// 	movable:false,//移动
		// 	rotatable:false,//旋转
		// 	scalable:true,//缩放
		// 	zoomable:false,//缩放
		// 	toggleOnDblclick:true,//双击切换
		// 	transition:true,//过渡
		// 	//https://github.com/fengyuanchen/viewerjs
		// });
	});
</script>

<!-- about page -->
<svelte:head>
	<title>Paint</title>
</svelte:head>

<div class="bg-base-100">
	<div class=" mx-auto max-w-2xl px-16 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16">
		<article class="prose prose-stone">
			<h1>绘画</h1>
			<div />
		</article>
		<div
			id={galleryID}
			class="pswp-gallery grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{#each paints as paint}
				<div class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<a
							href={paint.largeherf}
							data-pswp-width={paint.width}
							data-pswp-height={paint.height}
							target="_blank"
						>
							<img
								src={paint.smallsrc}
								alt={paint.alt}
								class="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
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
