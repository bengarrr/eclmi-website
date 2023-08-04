<script>
    import { storyblokEditable } from "@storyblok/svelte";

    export let blok;
</script>

<div
    use:storyblokEditable={blok}
    class="contact-information text-[#0d743b]"
>
    <div class="text-2xl lg:text-5xl [-webkit-text-stroke-width:2px]">{blok.heading}</div>
    <div class="[-webkit-text-stroke-width:1px] mt-[65px]">Mailing Address:</div>
    <div class="my-[32px]">{blok.mailing_address}</div>
    <div class="[-webkit-text-stroke-width:1px]">Business Office: <span class="[-webkit-text-stroke-width:0px]">{blok.business_phone}</span></div>
    <div class="[-webkit-text-stroke-width:1px]">Sales & Service: <span class="[-webkit-text-stroke-width:0px]">{blok.sales_phone}</span></div>
    <div class="[-webkit-text-stroke-width:1px] my-[32px]">Fax: <span class="[-webkit-text-stroke-width:0px]">{blok.fax_number}</span></div>
    
    <div class="[-webkit-text-stroke-width:1px] mt-[32px]">{blok.business_email}</div>
</div>