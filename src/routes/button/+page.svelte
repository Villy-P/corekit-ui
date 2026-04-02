<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import type { ColorStyleType } from "$lib/styles/color.js";

    const variantOptions = [
        { value: "full", label: "Full" },
        { value: "light", label: "Light" },
        { value: "outline", label: "Outline" },
        { value: "ghost", label: "Ghost" }
    ];

    let variant: ColorStyleType = $state("full");
</script>

<div class="w-full h-screen flex mt-20">
    <div class="w-3/4 flex-center">
        <Button color="blue" {variant}>Button</Button>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-4">
        <FloatingSelect divClass="w-full" options={variantOptions} bind:value={variant}>
            Variant
        </FloatingSelect>
    </div>
</div>