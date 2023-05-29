<!-- index page -->
<svelte:head>
    <title>softwhite</title>
</svelte:head>
<script>
    let a = 1
    function b () {
        a+=1
    }
</script>


<main class="flex flex-row justify-center bg-base-100">
    <div class="flex flex-col justify-center w-96 h-screen">
        <div class="self-center relative top-8 right-2 text-9xl text-white z-0">舒白</div>
        <div class="self-center relative bottom-24 text-9xl text-main z-10">舒白 </div>
        <div class="self-center relative bottom-24 text-5xl text-main z-10">Soft White</div>
        <!-- <button class="btn btn-primary btn-sm w-24 h-10" on:click={b}> {a}</button> -->
    </div>
</main>

<!-- <div class="self-center h-52 justify-self-center fixed text-9xl text-white z-0">舒白</div> -->