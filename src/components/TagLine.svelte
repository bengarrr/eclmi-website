<script>
    export let tag;
    export let subTag;
    export let _button;
    export let position;

    const _position = position[0] === "center" ? "[left:50%] [bottom:50%] [transform:translate(-50%,50%)] align-center text-center" : "[bottom:0] align-start pl-[60px] pb-[60px]";
</script>

<div class="flex flex-row {_position} absolute text-zinc-100">
    <div class="flex flex-col w-[770px]">
        <div class="tag-text text-7xl [-webkit-text-stroke-width:3px]">
            {tag}
        </div>
        {#if subTag}
        <div class="subtag-text 2xl:text-4xl xl:text-3xl">
            {subTag}
        </div>
        {/if}
        {#if _button}
        <div class="tag-button mt-[40px]">
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

