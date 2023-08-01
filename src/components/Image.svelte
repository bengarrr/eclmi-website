<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div class="image">
    {#if blok.image}
        <img src={blok.image.filename} alt={blok.image.description} />
    {/if}
</div>