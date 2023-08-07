<script>
    export let tag;
    export let subTag;
    export let _button;
    export let position;

    const _position = position[0] === "center" ? 
        "[left:50%] [bottom:50%] [transform:translate(-50%,50%)] align-center justify-center text-center w-full" : 
        "[bottom:0] align-start pl-[20px] pb-[20px] lg:pl-[60px] lg:pb-[60px]";

</script>

<div class="absolute {_position} z-[2] flex flex-row  text-zinc-100">
    <div class="flex flex-col w-full max-w-[500px] lg:max-w-[770px] 2xl:max-w-[850px]">
        <div class="tag-text 2xl:text-7xl lg:text-6xl md:text-4xl text-3xl lg:[-webkit-text-stroke-width:3px] [-webkit-text-stroke-width:2px]">
            {tag}
        </div>
        {#if subTag}
        <div class="subtag-text 2xl:text-4xl xl:text-3xl">
            {subTag}
        </div>
        {/if}
        {#if _button}
        <div class="tag-button mt-[20px] lg:mt-[40px]">
            {#if _button}
            <a href="/{_button[0].url.cached_url}" class="button-primary flex flex-row items-center">
                {_button[0].text}
                <img src="/assets/button-arrow.svg" />
            </a>
            {/if}
        </div>
        {/if}
    </div>
</div>

