<script>
    import { onMount } from "svelte";
    import { storyblokEditable, renderRichText } from "@storyblok/svelte";
	import ImageGrid from "./ImageGrid.svelte";

    export let blok;

    let modal;
    let modal_image;
    let service_dropdown;
    let carousel;

    let carousel_index = 0;

    let breakpoint = "(max-width: 768px)";

    const carousel_tranform_amount = 547;
    const carousel_tranform_amount_mobile = 250;
    const carousel_gap_amount = 16;

    function getPositionRight(element) {
        const {top, right, width, height} = element.getBoundingClientRect();
        return {
            x: right,
            y: top,
            width,
            height
        };
    }

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
            image.classList.add("w-full", "h-full", "object-contain");
            modal_image.appendChild(image);
            modal.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        } else if (!modal.classList.contains("hidden")) {
            modal_image.removeChild(modal_image.children[0]);
            modal.classList.add("hidden");
            document.body.style.overflow = "auto";
        }
    }

    function carouselLeft() {
        if(carousel_index !== 0) {
            carousel_index -= 1;
            const style = window.getComputedStyle(carousel);
            const currTranslation = new WebKitCSSMatrix(style.transform);
            const currX = Math.abs(currTranslation.m41);

            const { width } = getPositionRight(carousel.children[carousel_index]);

            carousel.style.transform = `translate(-${currX-(width+32)}px, 0px)`;
        } 
        if(carousel_index === 0) {
            carousel.style.transform = `translate(0px, 0px)`;
        }
    }

    function carouselRight() {
        if(carousel_index < blok.gallery.length-1) {
            const style = window.getComputedStyle(carousel);
            const currTranslation = new WebKitCSSMatrix(style.transform);
            const currX = Math.abs(currTranslation.m41);
            const { x } = getPositionRight(carousel.children[carousel_index]);

            // if (breakpoint.matches) {
            //     carousel.style.transform = `translate(-${carousel_tranform_amount_mobile*carousel_index+(carousel_gap_amount*carousel_index)}px,0px)`;
            // } else {
            //     carousel.style.transform = `translate(-${carousel_tranform_amount*carousel_index+(carousel_gap_amount*carousel_index)}px,0px)`;
            // }
            carousel.style.transform = `translate(-${x+currX}px,0px)`;

            carousel_index += 1;
        }
    }

    onMount(() => {
        breakpoint = window.matchMedia(breakpoint);
    })

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
            <div class="2xl:w-[902px] lg:w-[700px] w-full h-auto aspect-video lg:ml-auto hidden lg:block">
                {#if blok.lead_image}
                    <img class="w-full h-full object-cover" 
                        src="{blok.lead_image.filename}/m/320x0/filters:quality(75)"
                        srcset="{blok.lead_image.filename}/m/320x0/filters:quality(100) 320w
                                {blok.lead_image.filename}/m/768x0/filters:quality(100) 699w"
                        size="100vw" 
                        alt={`${blok.title} - heading image`}
                    />
                {/if}
            </div>
        </div>
    </div>
</div>
<div class="image-carousel relative overflow-hidden w-[100vw]">
    <div class="image-carousel--images flex flex-row pl-[10px] lg:pl-[40px] py-[40px] gap-8 transition-all duration-700 ease-in-out" bind:this={carousel}>
        {#if blok.gallery.length>0 }
        {#each blok.gallery as image, i}
            <div class="rounded-[20px] overflow-hidden basis-[250px] lg:basis-[547px] shrink-0 h-auto hover:cursor-pointer" role="button" tabindex=0 on:keydown={(event) => { event.key === "Enter" ? toggleGalleryModal(`${image.filename}/m/`) : null }} on:click={() => { toggleGalleryModal(`${image.filename}/m/`) }}>
                <img class="object-cover w-full h-full" 
                    src="{image.filename}/m/320x0/filters:quality(75)"
                    srcset="{image.filename}/m/320x0/filters:quality(100) 320w
                            {image.filename}/m/768x0/filters:quality(100) 768w
                            {image.filename}/m/1280x0/filters:quality(100) 1280w
                            {image.filename}/m/ 1536w"
                    sizes="100vw" 
                    alt={`${blok.title} - gallery image - ${i}`}
                />
            </div>
        {/each}
        {/if}
    </div>
    <div class="carousel-controls pointer-events-none absolute bottom-[50%] [transform:translate(0,50%)] flex flex-row items-center w-[100vw] px-[15px] lg:px-[55px] hover:cursor-pointer">
        <button class="left-arrow pointer-events-auto w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:cursor-pointer" on:click={carouselLeft}>
            <img src="/assets/arrow-left.svg" alt="left arrow" />
        </button>
        <button class="right-arrow pointer-events-auto ml-auto w-[30px] h-[30px] lg:w-[80px] lg:h-[80px] hover:cursor-pointer" on:click={carouselRight}>
            <img src="/assets/arrow-right.svg" alt="right arrow" />
        </button>
    </div>
</div>

<div class="gallery-modal fixed top-0 left-0 hidden w-[100vw] h-[100vh] z-20" bind:this={modal}>
    <div class="relative">
        <button class="modal-mask absolute w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-70" on:click={toggleGalleryModal}>
        </button>
        <button class="absolute top-[20px] right-[20px] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] z-[21] opacity-100" on:click={toggleGalleryModal}>
            <img class="w-full h-full" src="/assets/close-button.svg" alt="close modal mask">
        </button>
        <div class="absolute top-0 left-0 z-[21] pointer-events-none hover:cursor-pointer">
            <div class="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
                <div class="image-wrapper w-[90vw] lg:w-[75vw] h-[90vh]" bind:this={modal_image}></div>
            </div>
        </div>
    </div>
</div>