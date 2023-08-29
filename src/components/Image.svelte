<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;

    export let wrapperClasses;
    export let imgClasses;

    const srcset = `
        
    `
</script>

<div class="image-wrapper {wrapperClasses ? wrapperClasses : null}">
    {#if blok.image}
        <img 
            src="{blok.image.filename}/m/500x0 500w"
            srcset="{blok.image.filename}/m/500x0 500w,
            {blok.image.filename}/m/800x0 800w"
            sizes="100vw" 
            class={imgClasses} 
            alt={blok.image.description} 
        />
    {/if}
</div>