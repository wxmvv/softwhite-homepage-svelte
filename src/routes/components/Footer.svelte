<script>
    import { base } from '$app/paths';
  	import { t } from '@lib/i18n.js';
</script>
<footer class="footer footer-center p-8 text-base-content rounded">
	<div>
		<div class="flex flex-row gap-6">
			<a class="link link-hover" href="{base}/about">{$t("about us")}</a>
			<a class="link link-hover" href="{base}/contact">{$t("contact")}</a>
		</div>
		<p>Copyright © 2023 - All right reserved by 舒白文化</p>
	</div>
</footer>
