<script>
	import '../app.css';
	import NavBar from './components/NavBar.svelte';
	import Footer from './components/Footer.svelte';
	import { setLang, currentLang } from '@lib/i18n.js';
	function toggleLang() {
		// console.log($currentLang)
		if ($currentLang == 'en') {
			setLang('cn');
		} else {
			setLang('en');
		}
	}
	//MARK:siteloder加载相关2
	//https://github.com/Yinglinhan/siteloader
</script>

<NavBar {toggleLang} />
<slot />
<Footer />
