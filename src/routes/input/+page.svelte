<script lang="ts">
    import Button from "$lib/components/inputs/Button/index.svelte";
    import Card from "$components/display/Card/index.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$components/inputs/Input/index.svelte";
    import Select from "$components/inputs/Select/index.svelte";
    import Text from "$components/typography/Text/index.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyle } from "$lib/styles/size.js";
    import type { CardVariant } from "$components/display/Card/types.js";
    import type { InputVariant } from "$lib/types/Input.js";

    const typeOptions = [
        { value: "text", label: "Text" },
        { value: "email", label: "Mail" },
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

    let requirements = [
        { label: "Must be at least 8 characters", requirements: (value: string) => value.length >= 8 },
        { label: "Must contain a number", requirements: /\d/ },
        { label: "Must contain an uppercase letter", requirements: /[A-Z]/ }
    ];
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Input {size} {radius} {label} {disabled} {required} {type} {variant} {placeholder} {requirements}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Select divClass="w-full" options={typeOptions} bind:value={type} label="Type"/>
        <Select divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <Input size="full" bind:value={label} label="Label"/>
        <Input size="full" bind:value={placeholder} label="Placeholder"/>
        <Checkbox label="Disabled" bind:checked={disabled}/>
        <Checkbox label="Required" bind:checked={required}/>
    </div>
</div>