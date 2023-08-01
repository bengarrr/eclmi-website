<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;

    //console.log(blok);
</script>

<div
    use:storyblokEditable={blok}
    class="paragraph"
>
    {#if blok.length>0}
    {#each blok as _blok}
        {#if _blok.text.content.lenght>0}
        {#each _blok.text.content as content}
        <p>
            {content.content[0].text}
        </p>
        {/each}
        {/if}
    {/each}
    {/if}
</div>