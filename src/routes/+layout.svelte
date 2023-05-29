<script>
	import '../app.css';
	// export const prerender = true;
    import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
  		themeChange(false)
  	// 👆 false parameter is required for svelte
	})

</script>
<nav class="navbar fixed z-10">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="./">Soft White</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-bottom dropdown-end">
            <label class="btn btn-square btn-ghost" tabindex="1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                     </label>
            <ul class="dropdown-content menu p-2 bg-base-100" tabindex="1">
                <li><button class="btn w-48 btn-ghost" data-set-theme="softmilk">softmilk</button></li>
                <li><button class="btn w-48 btn-ghost" data-set-theme="business">business</button></li>
                <li><button class="btn w-48 btn-ghost" data-set-theme="dark">dark</button></li>
                <li><button class="btn w-48 btn-ghost" data-set-theme="light">light</button></li>

            </ul>
        </div>

        <div class="hidden md:flex">
            <a class="btn btn-ghost normal-case text-lg font-normal" href="./paint">Paint</a>
            <a class="btn btn-ghost normal-case font-normal text-lg" href="./program">Program</a>
            <a class="btn btn-ghost normal-case font-normal text-lg" href="./about">About us</a>
            <a class="btn btn-ghost normal-case font-normal text-lg" href="./contact">Contact</a>
        </div>
        <div class="md:hidden dropdown dropdown-bottom dropdown-end">
            <label class="btn btn-square btn-ghost" tabindex="0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul class="dropdown-content menu p-2 bg-base-100" tabindex="0">
                <li><a class="btn w-48 btn-ghost" href="./paint">Paint</a></li>
                <li><a class="btn w-48 btn-ghost" href="./program">Program</a></li>
                <li><a class="btn w-48 btn-ghost" href="./about">About us</a></li>
                <li><a class="btn w-48 btn-ghost" href="./contact">Contact</a></li>
            </ul>
            <!-- <button class="btn btn-ghost" data-set-theme="dark">dark</button> -->
        </div>
    </div>
</nav>

<slot />

<footer class="footer footer-center p-8 text-base-content rounded">
    <div>
        <div class="flex flex-row gap-6">
            <a class="link link-hover" href="./about">About us</a>
            <a class="link link-hover" href="./contact">Contact</a>
        </div>
        <p>Copyright © 2023 - All right reserved by 舒白文化</p>
    </div>
</footer>
