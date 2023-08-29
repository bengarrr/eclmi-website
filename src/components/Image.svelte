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
            src="{blok.image.filename}/m/"
            srcset="{blok.image.filename}/m/"
            sizes="100vw" 
            class={imgClasses} 
            alt={blok.image.description} 
        />
    {/if}
</div>