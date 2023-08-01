<script lang="ts">
    import ContactForm from "../../components/ContactForm.svelte";

    export let pageTitle = "Contact";
</script>

<div>
    <div class="text-center text-7xl">
        {pageTitle}
    </div>
    <ContactForm></ContactForm>
</div>