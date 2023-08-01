<script>
    import { storyblokEditable } from "@storyblok/svelte";

    import Hero from "./Hero.svelte";
    import TagLine from "./TagLine.svelte";

    export let blok;

    //console.log(blok);
</script>

<div
    use:storyblokEditable={blok}
    class="relative"
>
    <Hero 
        images={blok.images}
    ></Hero>
    {#if blok.tag_line.length > 0 }
        <TagLine
            tag={blok.tag_line[0].heading ? blok.tag_line[0].heading : ''}
            subTag={blok.tag_line[0].sub_heading ? blok.tag_line[0].sub_heading : ''}
            position={blok.tag_line[0].position}
            _button={blok.tag_line[0].button.length > 0 ? blok.tag_line[0].button : null}
        ></TagLine>
    {/if}
</div>