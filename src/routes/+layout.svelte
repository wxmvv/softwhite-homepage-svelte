<script>
	import '../app.css';
	import NavBar from '@components/NavBar.svelte';
	import Footer from '@components/Footer.svelte';
	//TODO: 淡入淡出效果
	//https://svelte.dev/repl/daa482983cd84a199f34895cdd3a08f6?version=3.38.2
	
</script>

<NavBar />
<slot />
<Footer />
