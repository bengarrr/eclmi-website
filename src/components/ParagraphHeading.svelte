<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div
    use:storyblokEditable={blok}
    class="text-center lg:text-left paragraph-heading [-webkit-text-stroke-width:3px] lg:[-webkit-text-stroke-width:5px] 2xl:text-6xl lg:text-5xl text-3xl mb-[20px] mb-[40px]"
>
    {blok.text}
</div>