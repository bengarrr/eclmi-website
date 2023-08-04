<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div>
    <div class="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center w-full py-[60px] lg:py-[180px] px-[10px]">
        <div class="w-full lg:w-1/2 [color:#0d743b]">
            <div class="text-3xl lg:text-6xl max-w-[492px] [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:5px]">{blok.heading ? blok.heading : ''}</div>
            <div class="lg:text-lg max-w-[534px] mt-[18px] lg:mt-[36px] mb-[20px] lg:mb-0">{blok.text ? blok.text : ''}</div>
        </div>
        <div class="w-full lg:w-[300px]">
            <div>
                {#if blok.button.length > 0}
                    <a href={blok.button[0].url ? `/${blok.button[0].url.cached_url}` : ''} class="button-primary">
                        {blok.button[0].text ? blok.button[0].text : ''}
                        <img src="/assets/button-arrow.svg" />
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>