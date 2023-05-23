<script>
	import '../app.css';
</script>

<nav class="navbar bg-milk fixed">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">Soft White</a>
    </div>
    <div class="flex-none">
        <div class="hidden md:flex">
            <a class="btn btn-ghost normal-case text-xl font-normal text-main" href="/">Paint</a>
            <a class="btn btn-ghost normal-case font-normal text-xl text-main" href="/">Program</a>
            <a class="btn btn-ghost normal-case font-normal text-xl text-main" href="/">About us</a>
            <a class="btn btn-ghost normal-case font-normal text-xl text-main" href="/">Contact</a>
        </div>
        <div class="md:hidden dropdown dropdown-bottom dropdown-end">
            <label tabindex="0" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> -->
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 bg-base-100">
                <li><a class="btn w-48 text-main btn-ghost" href="/paint">Paint</a></li>
                <li><a class="btn w-48 text-main btn-ghost" href="/program">Program</a></li>
                <li><a class="btn w-48 text-main btn-ghost" href="/about">About us</a></li>
                <li><a class="btn w-48 text-main btn-ghost" href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<slot />

<footer class="footer footer-center p-8 bg-milk text-base-content rounded">
    <div>
        <div class="flex flex-row gap-6">
            <a class="link link-hover" href="/about">About us</a>
            <a class="link link-hover" href="/contact">Contact</a>
        </div>
        <p>Copyright © 2023 - All right reserved by 舒白文化</p>
    </div>
</footer>