<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div>
    <div class="flex flex-row items-center justify-center w-full py-[180px]">
        <div class="w-1/2 [color:#0d743b]">
            <div class="text-6xl max-w-[492px] [-webkit-text-stroke-width:5px]">{blok.heading ? blok.heading : ''}</div>
            <div class="text-lg max-w-[534px] mt-[36px]">{blok.text ? blok.text : ''}</div>
        </div>
        <div class="w-[300px]">
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