<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    export let blok;

    // const background_color = blok.background 
    //     ?
    //     blok.background.includes('#') ? `bg-[${blok.background}]` : `bg-[#${blok.background}]` 
    //     :
    //     'bg-white';

    // const title_color = blok.title_color
    //     ?
    //     blok.title_color.includes('#') ? `text-[${blok.title_color}]` : `text-[#${blok.title_color}]`
    //     :
    //     'text-black';
</script>

<div
    use:storyblokEditable={blok}
    class="section bg-[{blok.background}]"
>
    <div class="section-title pt-[30px] pb-[45px] lg:pt-[60px] lg:pb-[90px] text-center">
        <h2 class="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:5px] text-[{blok.title_color}]">{blok.title}</h2>
    </div>
    <div class="section-content">
        {#if blok.content.length>0 }
        {#each blok.content as blok}
            <StoryblokComponent {blok}></StoryblokComponent>
        {/each}
        {/if}
    </div>
</div>