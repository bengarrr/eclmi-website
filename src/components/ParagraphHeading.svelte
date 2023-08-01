<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div
    use:storyblokEditable={blok}
    class="paragraph-heading [-webkit-text-stroke-width:5px] 2xl:text-6xl xl:text-5xl"
>
    {blok.text}
</div>