<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;

    //console.log(blok)
</script>

<div
    use:storyblokEditable={blok}
    class="heading-section even:bg-[#9db599] even:text-zinc-100 flex flex-col items-center text-center py-[45px] lg:py-[90px]"
>
    <div class="heading">
        <h2 class="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:5px]">
            {blok.heading ? blok.heading : ''}
        </h2>
    </div>
    <div class="heading-text md:text-xl mt-[35px] lg:mt-[75px] w-full lg:max-w-[850px] px-[10px]">
        <p>
            {blok.text ? blok.text : ''}
        </p>
    </div>
    {#if blok.button.length > 0}
        <div class="heading-button mt-[35px] lg:mt-[75px]">
            <a href={`/${blok.button[0].url.cached_url}`} class="button-secondary">
                {blok.button[0].text}
            </a>
        </div>
    {/if}
</div>