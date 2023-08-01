<script>
    import { storyblokEditable } from "@storyblok/svelte";

    import ServiceCard from "./ServiceCard.svelte";

    export let blok;
</script>

<div
    use:storyblokEditable={blok}
    class="card-section mb-[60px]"
>
    <div class="header-title pt-[60px] pb-[90px] text-center">
        <h2 class="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl [-webkit-text-stroke-width:5px] text-[#0d743b]">
            {blok.title ? blok.title : ''}
        </h2>
    </div>
    <div class="cards flex flex-row flex-wrap xl:flex-nowrap justify-center xl:justify-around xl:gap-3 2xl:gap-6 xl:px-[23px] 2xl:px-0">
        {#if blok.cards.length>0}
        {#each blok.cards as card}
            {#if card.image }
                <ServiceCard
                    image_url={card.image.filename}
                    title={card.title}
                    description={card.description}
                    _button={card.button[0].length>0 ? card.button[0] : null}
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