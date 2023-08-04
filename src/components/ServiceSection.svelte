<script>
    import { storyblokEditable, renderRichText } from "@storyblok/svelte";
	import ImageGrid from "./ImageGrid.svelte";

    export let blok;

    let modal;
    let modal_image;
    let service_dropdown;

    let carousel_index = 0;

    function toggleServices() {
        if(!service_dropdown.classList.contains("h-auto")) {
            service_dropdown.classList.add("h-auto");
        }
        else {
            service_dropdown.classList.remove("h-auto");
        }
    }

    function toggleGalleryModal(image_path) {
        if(modal.classList.contains("hidden")) {
            let image = document.createElement("img");
            image.src = image_path;
            image.classList.add(["w-full", "h-full", "object-contain"]);
            modal_image.appendChild(image);
            modal.classList.remove("hidden");
        } else if (!modal.classList.contains("hidden")) {
            modal_image.removeChild(modal_image.children()[0]);
            modal.classList.add("hidden");
        }
    }

    function carousel_left() {
        if(carousel_index !== 0) {
            carousel_index -= 1;
        }
    }

    function carousel_right() {
        if(carousel_index < blok.gallery.length) {
            carousel_index += 1;
        }
    }

    $: description = renderRichText(blok.description);
    $: services = renderRichText(blok.services);

</script>

<div
    use:storyblokEditable={blok}
    class="bg-[#9db599] py-[45px] lg:py-[96px] lg:pl-[55px]"
>
    <div class="flex flex-row flex-wrap lg:flex-nowrap">
        <div class="basis-full lg:basis-1/2 text-zinc-100 px-[10px] md:px-[30px] lg:px-0">
            <div class="2xl:text-6xl lg:text-5xl text-3xl [-webkit-text-stroke-width:2px] lg:[-webkit-text-stroke-width:5px] mb-5">{blok.title ? blok.title : ''}</div>
            <div class="lg:text-lg mb-5">{@html description}</div>
            <div class="lg:text-lg duration-700 ease-in-out mb-5" bind:this={service_dropdown}>
                {@html services}
            </div>
            <div class="mb-[20px] lg:mb-0">
                <button on:click={toggleServices} class="button-secondary !w-[210px] !h-[63px] text-zinc-100">Learn More</button>
            </div>
        </div>
        <div class="basis-full lg:basis-1/2">
            <div class="2xl:w-[902px] lg:w-[700px] w-full h-auto lg:ml-auto hidden lg:block">
                {#if blok.lead_image}
                    <img class="w-full h-full object-cover" src={blok.lead_image.filename} alt={`${blok.title} - heading image`}/>
                {/if}
            </div>
        </div>
    </div>
</div>
<div class="image-carousel relative overflow-hidden w-[100vw]">
    <div class="image-carousel--images flex flex-row pl-[10px] lg:pl-[40px] py-[40px] gap-8">
        {#if blok.gallery.length>0 }
        {#each blok.gallery as image, i}
            <div class="rounded-[20px] overflow-hidden basis-[250px] lg:basis-[547px] shrink-0 h-auto hover:cursor-pointer">
                <img class="object-cover w-full h-full" src={image.filename} alt={`${blok.title} - gallery image - ${i}`}/>
            </div>
        {/each}
        {/if}
    </div>
    <div class="carousel-controls absolute bottom-[50%] [transform:translate(0,50%)] flex flex-row items-center w-[100vw] px-[15px] lg:px-[55px]">
        <div class="left-arrow w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:cursor-pointer">
            <img src="/assets/arrow-left.svg" alt="left arrow" />
        </div>
        <div class="right-arrow ml-auto w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:cursor-pointer">
            <img src="/assets/arrow-right.svg" alt="right arrow" />
        </div>
    </div>
</div>

<div class="gallery-modal absolute hidden w-[100vw] h-[100vw]" bind:this={modal}>
    <div class="modal-mask w-full h-full" on:click={toggleGalleryModal()}></div>
    <div class="image-wrapper" bind:this={modal_image}></div>
</div>