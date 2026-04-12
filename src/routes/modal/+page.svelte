<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import Select from "$lib/components/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { PositionStyle } from "$lib/styles/posititon.js";
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
    const positionOptions = [
        { value: "center", label: "Center" },
        { value: "top", label: "Top" },
        { value: "bottom", label: "Bottom" },
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
        { value: "top-left", label: "Top Left" },
        { value: "top-right", label: "Top Right" },
        { value: "bottom-left", label: "Bottom Left" },
        { value: "bottom-right", label: "Bottom Right" }
    ];

    let modalOpen: boolean = $state(false);

    let variant: CardVariant = $state("bordered");
    let size: SizeStyle = $state("md");
    let radius: SizeStyle = $state("md");
    let href: string = $state("");
    let external: boolean = $state(false);
    let position: PositionStyle = $state("center");
</script>

{#snippet modalOptions(width: string)}
<div class="{width} p-4 flex flex-col gap-2">
    <Select divClass="w-full" options={positionOptions} bind:value={position} label="Position"/>
    <Select divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
    <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
    <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
    <Input divClass="w-full" bind:value={href} label="href"/>
    <Checkbox bind:checked={external} label="External"/>
</div>
{/snippet}

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center">
        <Button color="blue" onclick={() => modalOpen = true}>Open Modal</Button>
    </div>

    {@render modalOptions("w-1/4")}
</div>

<Modal {variant} {size} {radius} {href} {external} {position} bind:open={modalOpen}>
    {@render modalOptions("w-full")}
</Modal>