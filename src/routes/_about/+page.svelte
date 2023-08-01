<script>
    import { onMount } from "svelte";
    import { storyblokEditable, StoryblokComponent, useStoryblokBridge } from "@storyblok/svelte";

    export let data;

    onMount(() => {
        useStoryblokBridge(
            data.storyblokEditable.id
        )
    })
</script>

<div 
    use:storyblokEditable={blok}
    class="about-page"
>
    <StoryblokComponent blok={data.story.content}></StoryblokComponent>
</div>