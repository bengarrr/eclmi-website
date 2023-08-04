<script>
    let drawerOpen = false;

    function toggleDrawer() {
        drawerOpen = !drawerOpen
        console.log(drawerOpen)
    }
</script>

<!-- Desktop Navigation -->
<div class="desktop-nav hidden fixed top-0 w-full z-10 lg:flex flex-row h-[100px] bg-[#11743b] px-[40px] items-center text-[#f4f4f5]">
    <div class="logo-wrapper">
        <img src="/assets/logo.png" alt="Environmental Concepts logo"/>
    </div>
    <div class="nav-links flex flex-row ml-auto gap-[45px] xl:gap-[115px]">
        <a href="/" class="uppercase hover:text-zinc-300">Home</a>
        <a href="/about" class="uppercase hover:text-zinc-300">About</a>
        <a href="/services" class="uppercase hover:text-zinc-300">Services</a>
        <a href="/contact" class="uppercase hover:text-zinc-300">Contact Us</a>
    </div>
</div>

<!--Mobile Navigation-->

<div class="mobile-nav flex flex-row lg:hidden fixed top-0 w-full z-10 h-[60px] bg-[#11743b] text-zinc-100">
    <button class="menu-button absolute right-[20px] hover:cursor-pointer z-20" on:click={toggleDrawer}>
        <div class="w-[20px] h-[60px] flex flex-row justify-center items-center">
            <div class="hamburger-icon w-[20px] h-[14px] {drawerOpen?"hidden":""}">
                <img src="/assets/menu-button.svg" />
            </div>
            <div class="close-icon w-[20px] h-[20px] text-[#f4f4f5] {drawerOpen?"":"hidden"}">
                <img text="text-[#f4f4f5]" src="/assets/close-button.svg" />
            </div>
        </div>
    </button>
    <div class="nav-links flex flex-col text-center absolute right-0 top-[60px] h-[calc(100vh-60px)] w-full max-w-[550px] {drawerOpen?"open":""} z-20 bg-[#11743b]">
        <a href="/" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25] pr-5" on:click={toggleDrawer}>Home</a>
        <a href="/about" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25] pr-5" on:click={toggleDrawer}>About</a>
        <a href="/services" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25] pr-5" on:click={toggleDrawer}>Services</a>
        <a href="/contact" class="uppercase w-full py-[20px] text-right hover:bg-[#0b4a25] pr-5" on:click={toggleDrawer}>Contact Us</a>
        <div class="self-end justify-self-end px-5 w-full h-auto">
            <img class="w-full h-full object-contain" src="/assets/logo.png" />
        </div>
    </div>
</div>

<style>
    .mobile-nav .nav-links {
        transform: translate(100%,0);
    }

    .mobile-nav .nav-links.open {
        transform: translate(0,0);
    }
</style>