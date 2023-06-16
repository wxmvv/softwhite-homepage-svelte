<!-- about page -->
<svelte:head>
	<title>About Us</title>
</svelte:head>
<script>
  import { t } from '@lib/i18n.js';
</script>

<main class="min-h-screen flex flex-row bg-base-100 pt-16 sm:pt-24 lg:pt-32">
	<article class="prose prose-stone p-16 justify-start">
		<h1>{$t("about us")}</h1>
		<p>{$t("Shu Bai Culture was established in Yangzhou in May 2023.")}</p>
    <p>{$t("”Shu“ stands for softness and comfort, and ”white“ stands for purity and flawlessness.")}</p>
    <p>{$t("In this era of stress, mania and anxiety, we hope to bring a moment of peace and comfort.")}</p>
    <!-- <a href="http://baidu.com">baidu</a> -->
		<!-- <h3>小伙伴们：</h3>
    <ul>
      <li>舒舒</li>
      <li>萌萌</li>
      <li>咪咪</li>
      <li>小白</li>
    </ul> -->
	</article>
</main>

