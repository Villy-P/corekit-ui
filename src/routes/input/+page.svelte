<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import FloatingInput from "$lib/components/FloatingInput.svelte";
    import FloatingSelect from "$lib/components/FloatingSelect.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyle } from "$lib/styles/size.js";
    import type { CardVariant } from "$lib/types/Card.js";
    import type { InputVariant } from "$lib/types/FloatingInput.js";

    const typeOptions = [
        { value: "text", label: "Text" },
        { value: "mail", label: "Mail" },
        { value: "password", label: "Password" },
        { value: "tel", label: "Phone Number" },
        { value: "number", label: "Number" },
        { value: "search", label: "Search" }
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
    const variantOptions = [
        { value: "default", label: "Default" },
        { value: "floating", label: "Floating" }
    ]

    let size: SizeStyle = $state("md");
    let variant: InputVariant = $state("default");
    let radius: SizeStyle = $state("md");
    let label: string = $state("Label");
    let disabled: boolean = $state(false);
    let required: boolean = $state(false);
    let type: string = $state("text");
    let placeholder: string = $state("Placeholder");
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <FloatingInput {size} {radius} {label} {disabled} {required} {type} {variant} {placeholder}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <FloatingSelect divClass="w-full" options={typeOptions} bind:value={type} label="Type"/>
        <FloatingSelect divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <FloatingInput size="full" bind:value={label} label="Label"/>
        <FloatingInput size="full" bind:value={placeholder} label="Placeholder"/>
        <Checkbox label="Disabled" bind:checked={disabled}/>
        <Checkbox label="Required" bind:checked={required}/>
    </div>
</div>