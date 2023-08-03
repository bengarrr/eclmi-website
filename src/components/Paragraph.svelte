<script>
    import { storyblokEditable, renderRichText } from "@storyblok/svelte";

    export let blok;

    $: paragraph = renderRichText(blok.text)

    console.log(blok);
</script>

<div
    use:storyblokEditable={blok}
    class="paragraph"
>
    {@html paragraph}
    <!-- {#if blok }
        {#if blok.text.content.length>0}
        {#each blok.text.content as content}
            {#if content.content}
                <p>
                    {content.content[0].text}
                </p>
            {:else}
                <br>
            {/if}
        {/each}
        {/if}
    {/if} -->
</div>