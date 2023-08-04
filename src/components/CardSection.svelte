<script>
    import { storyblokEditable } from "@storyblok/svelte";

    import ServiceCard from "./ServiceCard.svelte";

    export let blok;

    console.log(blok)
</script>

<div
    use:storyblokEditable={blok}
    class="card-section mb-[30px] lg:mb-[60px]"
>
    <div class="header-title pt-[30px] pb-[45px] lg:pt-[60px] lg:pb-[90px] text-center">
        <h2 class="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:5px] text-[#0d743b]">
            {blok.title ? blok.title : ''}
        </h2>
    </div>
    <div class="cards flex flex-row flex-wrap xl:flex-nowrap justify-center xl:justify-around gap-[10px] xl:gap-3 2xl:gap-6 px-[10px] xl:px-[23px] 2xl:px-0">
        {#if blok.cards.length>0}
        {#each blok.cards as card}
            {#if card.image }
                <ServiceCard
                    image_url={card.image.filename}
                    title={card.title}
                    description={card.description}
                    _button={card.button.length>0 ? card.button[0] : null}
                >
                </ServiceCard>
            {/if}
        {/each}
        {/if}
    </div>
    <div class="flex flex-row items-center justify-center">
        <a href="/services" class="button-secondary text-[#0d743b] my-[40px]">See More</a>
    </div>
</div>