<script>
	// import '../app.css';
	// export const prerender = true;
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { themes } from '../lib/data.js';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>
<div class="dropdown dropdown-end">
  <label class="btn btn-square btn-ghost" tabindex="0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="inline-block w-5 h-5 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    </svg>
  </label>
  <div>
    <ul class="menu dropdown-content w-56 h-[60vh] overflow-y-auto shadow-lg bg-base-100 grid grid-cols-1 p-4 gap-1" tabindex="0">
      {#each themes as theme}
        <li class="flex flex-row">
          <button class="btn hover:bg-neutral hover:text-neutral-content w-48 btn-ghost justify-start" data-set-theme={theme.id} data-act-class="[&_svg]:visible">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3 invisible"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
               {theme.name}
             </button>
        </li>
      {/each}
    </ul>
  </div>
</div>