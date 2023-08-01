<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    export let blok;

    console.log(blok)
</script>

<div class="contact-form mb-[165px]">
    <div class="flex flex-row justify-center gap-[100px] 2xl:gap-[180px]">
        <div class="w-1/2 xl:max-w-[600px] 2xl:max-w-[800px]">
            <form>
                <label for="name" class="text-[#0d743b]">Name</label>
                <input type="text" id="name" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <label for="company" class="text-[#0d743b]">Company</label>
                <input type="text" id="company" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <label for="email" class="text-[#0d743b]">Email</label>
                <input type="email" id="email" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" placeholder="your.email@example.com" />
                <label for="phone" class="text-[#0d743b]">Phone</label>
                <input type="tel" id="phone" class="border-[#0d743b] border-[2px] rounded-[5px] w-1/2 block"/>
                <label for="message" class="text-[#0d743b]">Tell us about your project</label>
                <textarea id="message" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <button type="submit" class="button-primary">
                    Submit
                    <img src="/assets/button-arrow.svg" />
                </button>
            </form>
        </div>
        <div class="w-1/2 max-w-[705px]">
            {#if blok.contact_information.length>0 }
                <StoryblokComponent blok={blok.contact_information[0]}></StoryblokComponent>
            {/if}
        </div>
    </div>
</div>

<style>
    form>label {
        -webkit-text-stroke-width: 1px;
    }
    form>input {
        @apply mb-[60px] mt-[24px] h-[35px] pl-[20px];
    }
    form>textarea {
        @apply mb-[60px] mt-[24px] h-[180px] w-[675px] pl-[20px];
    }
</style>