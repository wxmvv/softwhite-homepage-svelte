<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		gsap.to('#logo', { duration: 2, opacity: 1 });
	});
</script>

<!-- index page -->
<svelte:head>
	<title>softwhite</title>
</svelte:head>

<main class="flex flex-col items-center bg-base-100">
	<div id="logo" class="opacity-0 flex flex-col justify-center h-screen">
		<div class="logo_cn self-center relative top-12 right-1 text-7xl text-white">舒白</div>
		<div class="logo_cn self-center relative bottom-6 text-7xl text-main">舒白</div>
		<div class="self-center relative bottom-6 text-3xl text-main">Soft White</div>
	</div>
</main>

<style>
	.logo_cn {
		font-family: 'PingFang';
	}
</style>
