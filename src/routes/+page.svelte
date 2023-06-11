<script>
</script>

<!-- index page -->
<svelte:head>
	<title>softwhite</title>
</svelte:head>

<main class="flex flex-col items-center bg-base-100">
	<div class="flex flex-col justify-center h-screen">
		<div class="logo_cn self-center relative top-12 right-1 text-7xl text-white">舒白</div>
		<div class="logo_cn self-center relative bottom-6 text-7xl text-main">舒白</div>
		<div class="logo_en self-center relative bottom-6 text-3xl text-main">Soft White</div>
	</div>
</main>

<style>
	@font-face {
		font-family: 'PingFang';
		src: url('./PingFang.woff');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'SFCompactRounded';
		src: url('./SFCompactRounded.woff');
		font-weight: normal;
		font-style: normal;
	}
	.logo_cn {
		font-family: 'PingFang';
	}
	.logo_en {
		font-family: 'SFCompactRounded';
	}
</style>
