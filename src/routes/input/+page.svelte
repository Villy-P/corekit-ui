<script lang="ts">
    import Button from "../../components/Button.svelte";
    import Card from "../../components/Card.svelte";
    import Checkbox from "../../components/Checkbox.svelte";
    import FloatingInput from "../../components/FloatingInput.svelte";
    import FloatingSelect from "../../components/FloatingSelect.svelte";
    import Text from "../../components/Text.svelte";
    import { colorStyleParts, type ColorStyle } from "../../styles/color.ts";
    import type { SizeStyle } from "../../styles/size.ts";
    import type { CardVariant } from "../../types/Card.ts";

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

    let size: SizeStyle = $state("md");
    let radius: SizeStyle = $state("md");
    let label: string = $state("Label");
    let disabled: boolean = $state(false);
    let isTextArea: boolean = $state(false);
    let required: boolean = $state(false);
    let type: string = $state("text");
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <FloatingInput {size} {radius} {label} {disabled} {isTextArea} {required} {type}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <FloatingSelect divClass="w-full" options={typeOptions} bind:value={type} label="Type"/>
        <FloatingInput divClass="w-full" bind:value={label} label="Label"/>
        <Checkbox label="Disabled" bind:checked={disabled}/>
        <Checkbox label="Text Area" bind:checked={isTextArea}/>
        <Checkbox label="Required" bind:checked={required}/>
    </div>
</div>