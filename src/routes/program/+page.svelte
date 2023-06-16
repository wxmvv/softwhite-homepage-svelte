<script>
	import { base } from '$app/paths';
	import { t } from '@lib/i18n.js';
</script>

<!-- about page -->
<svelte:head>
	<title>Program</title>
</svelte:head>

<div class="min-h-screen relative isolate overflow-hidden pt-16 sm:pt-24 lg:pt-32">
	<main class="flex flex-row p-16 justify-start">
		<article class="prose prose-stone">
			<h1>{$t("program")}</h1>
			<p>{$t("business include")}</p>
			<ul>
				<li><p>{$t("App")}</p></li>
				<li><p>{$t("miniprogram")}</p></li>
				<li><p>{$t("web H5")}</p></li>
				<li><p>{$t("UI Design & Front-end Development")}</p></li>
			</ul>
			<a class="btn btn-secondary" href="{base}/contact">{$t("contact us")}</a>
		</article>
	</main>
	<!--  aria-hidden="true" -->
	<div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-xl">
		<div class="aspect-[1100/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40" style="clip-path: polygon(74% 44%, 100% 61.6%, 130% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
	</div>
</div>
