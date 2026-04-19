<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Card from "$lib/components/Card.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Combobox from "$lib/components/Combobox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Select from "$lib/components/Select.svelte";
    import Text from "$lib/components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyle } from "$lib/styles/size.js";
    import type { CardVariant } from "$lib/types/Card.js";
    import type { InputVariant } from "$lib/types/Input.js";

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

    let size: SizeStyle = $state("md");
    let variant: InputVariant = $state("default");
    let radius: SizeStyle = $state("md");
    let label: string = $state("Label");
    let disabled: boolean = $state(false);
    let required: boolean = $state(false);
    let limit: number = $state(10);
    let placeholder: string = $state("Placeholder");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center">
        <Combobox
            options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
                { value: "option4", label: "Option 4" },
                { value: "option5", label: "Option 5" },
                { value: "option6", label: "Option 6" },
                { value: "option7", label: "Option 7" },
                { value: "option8", label: "Option 8" },
                { value: "option9", label: "Option 9" },
                { value: "option10", label: "Option 10" }
            ]}
            {size} {radius} {label} {disabled} {required} {variant} {placeholder} {limit}
        />
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Select divClass="w-full" options={variantOptions} bind:value={variant} label="Variant"/>
        <Input size="full" bind:value={label} label="Label"/>
        <Input size="full" bind:value={placeholder} label="Placeholder"/>
        <Input size="full" bind:value={limit} label="Limit" type="number"/>
        <Checkbox label="Disabled" bind:checked={disabled}/>
        <Checkbox label="Required" bind:checked={required}/>
    </div>
</div>