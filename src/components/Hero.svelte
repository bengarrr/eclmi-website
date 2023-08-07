<script>
    import { onMount } from "svelte";
    export let images;

    let _images;

    const sizes = {
        width: 1920,
        height: 1080
    }

    const transitionTime = 1000;

    let index = 0;

    function transition(timeout) {
        const prev = index;
        index = (index + 1) % images.length;
        _images.children[prev].classList.remove("hero-current");
        _images.children[prev].classList.add("hidden");
        
        _images.children[index].classList.remove("hidden");
        const reflow = _images.children[index].offsetHeight;

        _images.children[index].classList.add("hero-current");

        setTimeout(transition, timeout, timeout)
    }

    onMount(() => {
        if(images.length > 1) {
            setTimeout(transition, 6000, 5200+transitionTime);
        }
    })
</script>

<div class="hero-wrapper relative">
    <div class="absolute top-0 left-0 w-[100vw] h-[calc(100vh-100px)] bg-black opacity-20 z-[1]"></div>
    <div class="hero-images relative" bind:this={_images}>
        {#if images.length>0}
        {#each images as { filename, alt }, i }
            {#if i === 0}
                <div class="hero-image hero-current transition-all duration-1000 ease-in-out w-[100vw] h-[calc(100vh-100px)]">
                    <img
                        class="w-full h-full object-cover" 
                        src="{filename}" 
                        alt="{alt}"
                    />
                </div>
            {:else}
                <div class="hero-image hidden transition-all duration-1000 ease-in-out w-[100vw] h-[calc(100vh-100px)]">
                    <img
                        class="w-full h-full object-cover"  
                        src="{filename}"
                        alt="{alt}"
                    />
                </div>
            {/if}
        {/each}
        {/if}
    </div>
</div>