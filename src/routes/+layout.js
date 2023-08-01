import Page from "../components/Page.svelte";
import HeroBlok from "../components/HeroBlok.svelte";
import Heading from "../components/Heading.svelte";
import CardSection from "../components/CardSection.svelte";
import Section from "../components/Section.svelte";
import ImageGrid from "../components/ImageGrid.svelte";
import Image from "../components/Image.svelte";
import SplitSection from "../components/SplitSection.svelte";
import Paragraph from "../components/Paragraph.svelte";
import ParagraphHeading from "../components/ParagraphHeading.svelte";
import ServiceSection from "../components/ServiceSection.svelte";
import FooterSection from "../components/FooterSection.svelte";
import ContactForm from "../components/ContactForm.svelte";
import ContactInformation from "../components/ContactInformation.svelte";

import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

export const prerender = true;

export async function load() {
    storyblokInit({
        accessToken: "y0b3rDuby0qmtM5HCCuuagtt",
        use: [apiPlugin],
        apiOptions: {
            region: "us"
        },
        components: {
            page: Page,
            hero: HeroBlok,
            heading: Heading,
            cards: CardSection,
            section: Section,
            image_grid: ImageGrid,
            image: Image,
            split_section: SplitSection,
            paragraph: Paragraph,
            paragraph_heading: ParagraphHeading,
            footer_section: FooterSection,
            service_section: ServiceSection,
            contact_form: ContactForm,
            contact_information: ContactInformation
        }
    });

    let storyblokApi = await useStoryblokApi();

    return {
        storyblokApi
    }
}