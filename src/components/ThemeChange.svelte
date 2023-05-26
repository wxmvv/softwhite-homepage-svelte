<script>
  import { onMount } from "svelte"
  import { themeChange } from "theme-change"
  onMount(() => {
    themeChange(false)
  })
</script>
<button class="btn btn-secondary" data-set-theme="business" data-act-class="text-xl">更换bussiness</button>