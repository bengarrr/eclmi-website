<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    export let blok;
</script>

{#key blok}
    <div use:storyblokEditable={blok}>
        {#if blok.body.length>0}
        {#each blok.body as blok}
            <StoryblokComponent {blok} ></StoryblokComponent>
        {/each}
        {/if}
    </div>
{/key}
