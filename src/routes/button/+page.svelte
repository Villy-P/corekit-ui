<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle, type ColorStyleType } from "$lib/styles/color.js";

    const variantOptions = [
        { value: "full", label: "Full" },
        { value: "light", label: "Light" },
        { value: "outline", label: "Outline" },
        { value: "ghost", label: "Ghost" }
    ];

    let variant: ColorStyleType = $state("full");
    let color: ColorStyle = $state("blue");
</script>

<div class="w-full h-screen flex mt-20">
    <div class="w-3/4 flex-center">
        <Button color={color} {variant}>Button</Button>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingSelect divClass="w-full" options={variantOptions} bind:value={variant}>
            Variant
        </FloatingSelect>
        <Text tag="label">Color</Text>
        <div class="w-full flex flex-wrap">
            {#each Object.keys(colorStyleParts) as colorKey}
                <Button size={40} rounded={0} color={colorKey as ColorStyle} onclick={() => color = colorKey as ColorStyle}></Button>
            {/each}
        </div>
    </div>
</div>