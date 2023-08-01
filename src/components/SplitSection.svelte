<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    export let blok;
</script>

<div class="bg-[#9cb498] hidden"></div>
<div 
    use:storyblokEditable={blok}
    class="split-section"
>
    <div class="flex flex-row px-[60px] pt-[120px] pb-[30px] bg-[{blok.background}] text-[{blok.text_color}]">
        <div class="left-section w-1/2">
            {#if blok.left.length>0 }
            {#each blok.left as blok}
                <StoryblokComponent {blok}></StoryblokComponent>
            {/each}
            {/if}
        </div>
        <div class="right-section w-1/2">
            {#if blok.right.length>0 }
            {#each blok.right as blok}
                <StoryblokComponent {blok}></StoryblokComponent>
            {/each}
            {/if}
        </div>
    </div>
</div>