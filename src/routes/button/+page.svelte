<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Select from "$lib/components/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import Tooltip from "$lib/components/Tooltip.svelte";
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
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let variant: ColorStyleType = $state("full");
    let color: ColorStyle = $state("blue");
    let size: SizeStyle = $state("md");
    let radius: SizeStyle = $state("md");
    let href: string = $state("");
    let external: boolean = $state(false);
    let disabled: boolean = $state(false);
    let pill: boolean = $state(false);
    let icon: boolean = $state(false);
    let square: boolean = $state(false);
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex">
        <Tooltip text="This is a tooltip wow thats super cool i love it when that happens to people" position="top">
            <Button color={color} {variant} {size} {radius} {href} {external} {disabled} {pill} {icon} {square}>
                {#if icon}
                    <img src="/favicon.svg" alt="Icon"/>
                {:else}
                    Customizable Button
                {/if}
            </Button>
        </Tooltip>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <Text tag="label">Color</Text>
        <div class="w-full flex flex-wrap">
            {#each Object.keys(colorStyleParts) as colorKey}
                <Button square color={colorKey as ColorStyle} onclick={() => color = colorKey as ColorStyle}></Button>
            {/each}
        </div>
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Input divClass="w-full" bind:value={href} label="href" required/>
        <Checkbox bind:checked={external} label="External"/>
        <Checkbox bind:checked={disabled} label="Disabled"/>
        <Checkbox bind:checked={pill} label="Pill"/>
        <Checkbox bind:checked={icon} label="Icon"/>
        <Checkbox bind:checked={square} label="Square"/>
    </div>
</div>