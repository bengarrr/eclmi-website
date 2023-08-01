<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;

    function toggleServices() {

    }

    function toggleGalleryModal() {

    }


</script>

<div class="bg-[#9db599] py-[96px] pl-[55px]">
    <div class="flex flex-row">
        <div class="basis-1/2 text-zinc-100">
            <div class="2xl:text-6xl xl:text-5xl [-webkit-text-stroke-width:5px]">{blok.title ? blok.title : ''}</div>
            <div class="text-lg">{blok.description ? blok.description : ''}</div>
            <div class="text-lg">
                {#if blok.services.length>0 }
                {#each blok.services as service}
                    <div>{service}</div>
                {/each}
                {/if}
            </div>
            <div>
                <button on:click={toggleServices} class="button-secondary !w-[210px] !h-[63px] text-zinc-100">Learn More</button>
            </div>
        </div>
        <div class="basis-1/2">
            <div class="2xl:w-[902px] w-[700px] h-auto ml-auto">
                {#if blok.lead_image}
                    <img class="w-full h-full object-cover" src={blok.lead_image.filename} width=902 height=580 alt={`${blok.title} - heading image`}/>
                {/if}
            </div>
        </div>
    </div>
</div>
<div class="image-carousel relative overflow-hidden w-[100vw]">
    <div class="image-carousel--images flex flex-row pl-[40px] py-[40px] gap-8">
        {#if blok.gallery.length>0 }
        {#each blok.gallery as image, i}
            <div class="rounded-[20px] overflow-hidden basis-[547px] shrink-0 h-auto">
                <img class="object-cover w-full h-full" src={image.filename} alt={`${blok.title} - gallery image - ${i}`}/>
            </div>
        {/each}
        {/if}
    </div>
    <div class="carousel-controls absolute bottom-[50%] [transform:translate(0,50%)] flex flex-row items-center w-[100vw] px-[55px]">
        <div class="left-arrow w-[80px] h-[80px] hover:cursor-pointer">
            <img src="/assets/arrow-left.svg" alt="left arrow" />
        </div>
        <div class="right-arrow ml-auto w-[80px] h-[80px] hover:cursor-pointer">
            <img src="/assets/arrow-right.svg" alt="right arrow" />
        </div>
    </div>
</div>

<div class="gallery-modal">

</div>