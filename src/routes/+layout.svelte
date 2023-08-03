<script>
    import "../app.css"
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="body">
    <Navbar></Navbar>
    <div class="mt-[60px] lg:mt-[100px]">
        <slot />
    </div>
    <Footer></Footer>
</div>