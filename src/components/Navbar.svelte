<script>
    let drawer;

    let drawerOpen = true;

    function toggleDrawer() {
        drawerOpen = !drawerOpen
    }
</script>

<!-- Desktop Navigation -->
<div class="desktop-nav hidden fixed top-0 w-full z-10 lg:flex flex-row h-[100px] bg-[#11743b] px-[40px] items-center text-[#f4f4f5]">
    <div class="logo-wrapper">
        <img src="/assets/logo.png" width="" height="" alt=""/>
    </div>
    <div class="nav-links flex flex-row ml-auto gap-[45px] xl:gap-[115px]">
        <a href="/" class="uppercase">Home</a>
        <a href="/about" class="uppercase">About</a>
        <a href="/services" class="uppercase">Services</a>
        <a href="/contact" class="uppercase">Contact Us</a>
    </div>
</div>

<!--Mobile Navigation-->

<div class="mobile-nav flex flex-row lg:hidden fixed top-0 w-full z-10 h-[60px] bg-[#11743b] text-zinc-100">
    <button class="menu-button hover:cursor-pointer" on:click={toggleDrawer}>
        <div class="hamburger-icon {drawerOpen?"hidden":""}">
            <img src="/assets/menu-button.svg" />
        </div>
        <div class="close-icon {drawerOpen?"":"hidden"}">
            <img src="/assets/close-button.svg" />
        </div>
    </button>
    <div class="nav-links relative h-[calc(100vh-60px)] w-full" bind:this={drawer}>
        <div class="flex flex-col text-center absolute right-0 top-[60px] h-full w-full max-w-[550px] {drawerOpen?"open":""} z-20">
            <a href="/" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25]">Home</a>
            <a href="/about" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25]">About</a>
            <a href="/services" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25]">Services</a>
            <a href="/contact" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25]">Contact Us</a>
            <div class="self-end w-full h-auto">
                <img class="w-full h-full object-contain" src="/assets/logo.png" />
            </div>
        </div>
    </div>
</div>

<style>
    .mobile-nav .nav-links>div {
        transform: translate(0,0);
    }

    .mobile-nav .nav-links>div.open {
        transform: translate(0,0);
    }
</style>