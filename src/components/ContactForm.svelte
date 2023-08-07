<script>
    import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

    export let blok;
</script>

<div class="contact-form mb-[100px] lg:mb-[165px] px-[10px]">
    <div class="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-[60px] lg:gap-[100px] 2xl:gap-[180px]">
        <div class="w-full lg:w-1/2 xl:max-w-[600px] 2xl:max-w-[800px]">
            <form>
                <label for="name" class="text-[#0d743b]">Name</label>
                <input type="text" id="name" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <label for="company" class="text-[#0d743b]">Company</label>
                <input type="text" id="company" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <label for="email" class="text-[#0d743b]">Email</label>
                <input type="email" id="email" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" placeholder="your.email@example.com" />
                <label for="phone" class="text-[#0d743b]">Phone</label>
                <input type="tel" id="phone" class="border-[#0d743b] border-[2px] rounded-[5px] w-full md:w-1/2 block"/>
                <label for="message" class="text-[#0d743b]">Tell us about your project</label>
                <textarea id="message" class="border-[#0d743b] border-[2px] rounded-[5px] w-full" />
                <button type="submit" class="button-primary">
                    Submit
                    <img src="/assets/button-arrow.svg" />
                </button>
            </form>
        </div>
        <div class="w-full lg:w-1/2 lg:max-w-[705px]">
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
        margin-bottom: 30px;
        margin-top: 12px;
        height: 35px;
        padding-left: 20px;
    }
    form>textarea {
        margin-bottom: 30px;
        margin-top: 12px;
        height: 180px;
        padding-left: 20px;
        max-width: 675px;;
    }

    @media (min-width: 1024px) {
        form>input {
            margin-bottom: 60px;
            margin-top: 24px;
        }
        form>textarea {
            margin-bottom: 60px;
            margin-top: 24px;
        }
    }
</style>