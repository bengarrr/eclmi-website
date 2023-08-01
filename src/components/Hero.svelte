<script>
    export let images;

    const sizes = {
        width: 1920,
        height: 1080
    }

</script>

<div class="hero-wrapper">
    <div class="hero-images">
        {#if images.length>0}
        {#each images as { filename, alt }, i }
            {#if i === 0}
                <div class="hero-image hero-current">
                    <img 
                        src="{filename}" 
                        width="{sizes.width}" 
                        height="{sizes.height}" 
                        alt="{alt}"
                    />
                </div>
            {/if}
        {/each}
        {/if}
    </div>
</div>