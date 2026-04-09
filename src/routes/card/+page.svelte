<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
  import type { SizeStyle } from "$lib/styles/size.js";
    import type { CardVariant } from "$lib/types/Card.js";

    const variantOptions = [
        { value: "bordered", label: "Bordered" },
        { value: "elevated", label: "Elevated" },
    ];
    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let variant: CardVariant = $state("bordered");
    let size: SizeStyle = $state("md");
    let radius: SizeStyle = $state("md");
    let href: string = $state("");
    let external: boolean = $state(false);
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <Card {variant} {size} {radius} {href} {external}>
            <Text tag="h2" class="text-2xl font-bold mb-4">Customizable Card</Text>
            <Text class="mb-4">This is a customizable card component. You can add any content here and style it as needed.</Text>
            <Button color="blue" href="https://example.com" target="_blank">Learn More</Button>
        </Card>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingSelect divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Input divClass="w-full" bind:value={href} label="href"/>
        <Checkbox bind:checked={external} label="External"/>
    </div>
</div>