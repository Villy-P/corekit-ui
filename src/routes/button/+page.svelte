<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import FloatingInput from "$lib/components/FloatingInput.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle, type ColorStyleType } from "$lib/styles/color.js";
    import type { SizeStyle } from "$lib/styles/size.js";

    const variantOptions = [
        { value: "full", label: "Full" },
        { value: "light", label: "Light" },
        { value: "outline", label: "Outline" },
        { value: "ghost", label: "Ghost" }
    ];
    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let variant: ColorStyleType = $state("full");
    let color: ColorStyle = $state("blue");
    let size: SizeStyle = $state("md");
    let radius: SizeStyle = $state("md");
    let href: string = $state("");
</script>

<div class="w-full h-screen flex mt-20">
    <div class="w-3/4 flex-center">
        <Button color={color} {variant} {size} {radius} {href}>Button</Button>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingSelect divClass="w-full" options={variantOptions} bind:value={variant}>Variant</FloatingSelect>
        <Text tag="label">Color</Text>
        <div class="w-full flex flex-wrap">
            {#each Object.keys(colorStyleParts) as colorKey}
                <Button size={40} radius="none" color={colorKey as ColorStyle} onclick={() => color = colorKey as ColorStyle}></Button>
            {/each}
        </div>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={size}>Size</FloatingSelect>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={radius}>radius</FloatingSelect>
        <FloatingInput divClass="w-full" bind:value={href}>href</FloatingInput>
    </div>
</div>