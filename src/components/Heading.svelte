<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;

    //console.log(blok)
</script>

<div
    use:storyblokEditable={blok}
    class="heading-section even:bg-[#9db599] even:text-zinc-100 flex flex-col items-center text-center py-[90px]"
>
    <div class="heading">
        <h2 class="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl [-webkit-text-stroke-width:5px]">
            {blok.heading ? blok.heading : ''}
        </h2>
    </div>
    <div class="heading-text text-xl mt-[75px] w-[850px]">
        <p>
            {blok.text ? blok.text : ''}
        </p>
    </div>
    {#if blok.button.length > 0}
        <div class="heading-button mt-[75px]">
            <a href={`/${blok.button[0].url.cached_url}`} class="button-secondary">
                {blok.button[0].text}
            </a>
        </div>
    {/if}
</div>