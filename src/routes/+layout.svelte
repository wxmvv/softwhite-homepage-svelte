<script>
	import '../app.css';
	import NavBar from './components/NavBar.svelte';
	import Footer from './components/Footer.svelte';
	import { setLang ,currentLang } from '@lib/i18n.js';
	function toggleLang(){
		// console.log($currentLang)
		if ($currentLang == 'en'){
			setLang('cn')
		}else{
			setLang('en')
		}
	}
	// import { onMount } from 'svelte';
	// import { t, setLanguage, currentLanguage,translations } from '@lib/i18n.js';
	// onMount(async () => {
	// 	await setLanguage('cn');
	// });
	//TODO: 淡入淡出效果
	//https://svelte.dev/repl/daa482983cd84a199f34895cdd3a08f6?version=3.38.2
</script>

<NavBar {toggleLang}/>
<slot />
<Footer />
