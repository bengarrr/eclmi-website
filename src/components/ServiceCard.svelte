<script>
    export let image_url;
    export let title;
    export let description;
    export let _button;

    console.log(_button)
</script>

<div class="service-card flex flex-col items-center w-full lg:w-1/2 xl:w-1/4 max-w-[437px] pt-[25px] pb-[90px] px-[30px] border-[#9db599] border-[4px] rounded-[20px]">
    <div class="icon-wrapper w-[68.65%] aspect-square rounded-[68.65%] bg-[#0d743b]">
        <div class="icon">
            <img src={image_url} alt="">
        </div>
    </div>
    <div class="title w-full md:text-lg 2xl:text-[28px] [-webkit-text-stroke-width:1px] my-[30px]">
        <h3>{title ? title : ''}</h3>
    </div>
    <div class="text-xs md:text-sm">
        {description ? description : ''}
    </div>
    <div class="flex flex-row w-full items-center mt-[30px] gap-3">
        <a class="2xl:text-lg text-sm [-webkit-text-stroke-width:1px]" href="/{_button ? _button.url.cached_url : ''}">{_button ? _button.text : ''}</a>
        <img width=25 height=16 src="/assets/button-arrow-black.svg" alt="" />
    </div>
</div>