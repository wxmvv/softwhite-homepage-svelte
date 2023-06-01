<!-- about page -->
<svelte:head>
	<title>Program</title>
	
</svelte:head>

<script>

import { base } from '$app/paths'

</script>


<div class="min-h-screen relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
	<main class="flex flex-row p-16 justify-start">
		<article class="prose prose-stone">
			<h1>程序开发</h1>
			<p>
				承接企业版、个人版 PC、可视化、APP、小程序、H5等 UI设计或前端开发
				支持政府行业、医疗行业、大型企业、教育行业、 交通行业、金融行业、能源行业、电信运营商行业等
			</p>
			<ul>
				<li><p>App</p></li>
				<li><p>小程序</p></li>
				<li><p>web H5</p></li>
				<li><p>UI设计&前端开发</p></li>
			</ul>
			<a class="btn btn-secondary" href="{base}/contact">联系我们</a>

		</article>
	</main>
	<!--  aria-hidden="true" -->
	<div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-xl">
		<div
			class="aspect-[1100/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
			style="clip-path: polygon(74% 44%, 100% 61.6%, 130% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
</div>
