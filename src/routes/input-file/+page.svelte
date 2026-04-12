<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";
    import Table from "$lib/components/Table.svelte";

    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyleTheme } from "$lib/styles/size.js";
    import FileInput from "$lib/components/FileInput.svelte";

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

    let size: SizeStyleTheme = $state("md");
    let radius: SizeStyleTheme = $state("md");
    let label: string = $state("Label");
    let placeholder: string = $state("Placeholder");
    let disabled: boolean = $state(false);
    let required: boolean = $state(false);
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center">
        <FileInput {size} {radius} {label} {placeholder} {disabled} {required}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Input size="full" bind:value={label} label="Label"/>
        <Input size="full" bind:value={placeholder} label="Placeholder"/>
        <Checkbox label="Disabled" bind:checked={disabled}/>
        <Checkbox label="Required" bind:checked={required}/>
    </div>
</div>