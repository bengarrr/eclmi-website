<script>
    import { storyblokEditable } from "@storyblok/svelte";
    
    export let blok;
</script>

<div class="image-grid flex flex-row flex-wrap items-center justify-center px-[30px] gap-[30px] pb-[60px] max-w-[1670px] mx-auto">
    {#if blok.images.length>0}
    {#each blok.images as image}
        <div class="image">
            <img class="h-auto w-[250px]" src="{image.filename}" alt={image.description} />
        </div>
    {/each}
    {/if}
</div>