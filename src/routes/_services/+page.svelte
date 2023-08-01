<script lang="ts">
    import Hero from "../../components/Hero.svelte";
    import TagLine from "../../components/TagLine.svelte";
    import ServiceSection from "../../components/ServiceSection.svelte";
    import FooterSection from "../../components/FooterSection.svelte";

    export let services = [
        {
            title: "",
            description: "",
            services: [""],
            headingImage: "",
            galleryImages: [""]
        }
    ]
</script>

<div>
    <div class="relative">
        <Hero></Hero>
        <TagLine
            tag="Our Services"
            subTag="Focused on Quality. Focused on Sustainability."
            button={null}
            position="center"
        >
        </TagLine>
    </div>
    <div>
        {#each services as service}
            <ServiceSection
                title={service.title}
                description={service.description}
                headingImage={service.headingImage}
                galleryImages={service.galleryImages}
            ></ServiceSection>
        {/each}
    </div>
    <FooterSection
        heading="Have a Project? Let's Grow It"
        text="We love hearing about new projects and helping to solve interesting problems. Look forward to partnering with you."
        button={{
            text: "Contact Us",
            url: "/contact"
        }}
    ></FooterSection>
</div>