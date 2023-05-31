<script>
	import Viewer from 'viewerjs';
	import 'viewerjs/dist/viewer.css';


	import { onMount } from 'svelte';

	onMount(() => {
			// @ts-ignore
		// const viewer = new Viewer(document.getElementById('image'), {
		// 	inline: true,
		// 	viewed() {
		// 		viewer.zoomTo(1);
		// 	}
		// });
		const gallery = new Viewer(document.getElementById('images'),{
			navbar:true,//关闭下方预览
			title:false,//关闭标题
			// toolbar:false,//关闭工具栏
			toolbar:{
				zoomIn: 4,
    			zoomOut: 4,
   				prev: 2,
   				next: 2,
			},
			backdrop:true,//关闭背景
			button:true,//关闭右上关闭按钮
			initialCoverage:1,//初始缩放比例
			loop:true,//循环
			loading:true,//加载
			movable:false,//移动
			rotatable:false,//旋转
			scalable:true,//缩放
			zoomable:false,//缩放
			toggleOnDblclick:true,//双击切换
			transition:true,//过渡
			//https://github.com/fengyuanchen/viewerjs
		});
	});
</script>

<!-- about page -->
<svelte:head>
	<title>Paint</title>
</svelte:head>

<div class="bg-base-100">
	<div class="mx-auto max-w-2xl px-16 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16">
		<article class="prose prose-stone">
			<h1>绘画</h1>
			<div />
		</article>

		<div
			id="images"
			class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/1_20221201.jpg"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">1_20221201</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$48</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/2_20221201.jpg"
						alt="Olive drab green insulated bottle with flared screw lid and flat top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">2_20221201</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/3.jpg"
						alt="Person using a pen to cross a task off a productivity paper card."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">3</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$89</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/4_20220926.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">4_20220926</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/5_20220923.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">5_20220923</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/6_20220923.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">6_20220923</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/7_20221205.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">7_20221205</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/8_20221205.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">8_20221205</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/9_20221203.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">9_20221203</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/10_20221205.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">10_20221205</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>
			<div class="group">
				<div
					class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
				>
					<img
						src="./diary_sketching/11_20221202.jpg"
						alt="Hand holding black machined steel mechanical pencil with brass tip and top."
						class="h-full w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 class="mt-4 text-sm text-gray-700">11_20221202</h3>
				<!-- <p class="mt-1 text-lg font-medium text-gray-900">$35</p> -->
			</div>

			<!-- More products... -->
		</div>
	</div>
</div>
