<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "$lib/styles/size.js";
    import type { ColorInputProps } from "./types";
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import bytes from "bytes";

    import Upload from "@lucide/svelte/icons/upload";
    import File from "@lucide/svelte/icons/file";
    import Button from "../Button/index.svelte";

    let { 
        children = undefined, 
        class: className = "",
        label = undefined,
        labelClass = "",
        divClass = "",
        outerDivClass = "",
        value = $bindable(undefined),
        required = false,
        disabled = false,
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        ...restProps
    }: ColorInputProps = $props();

    let inputElement: HTMLInputElement;

    const defaultClass = "text-main-text w-full flex items-center gap-1 rounded-full outline-none px-1.5 w-full bg-inherit border-0 py-0";
    const defaultLabelClass = "block text-sub-text font-medium mb-1 pointer-events-none truncate w-fit";
    const defaultDivClass = "relative flex-center gap-0 bg-form-background p-0";

    const divFullClass = $derived(size === "full" ? "w-full" : "");
    const disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    const combinedOuterDivClass = $derived(twMerge(
        "flex flex-col bg-transparent border-0 p-0",
        divFullClass,
        outerDivClass,
        disabledClass
    ));
    const combinedLabelClass = $derived(twMerge(
        defaultLabelClass, 
        getSizeStyleClass(size, "formLabel"),
        labelClass
    ));
    const combinedDivClass = $derived(twMerge(
        defaultDivClass, 
        getSizeStyleClass(radius, "radius"), 
        divFullClass, 
        divClass, 
    ));
    let combinedClass = $derived(twMerge(
        getSizeStyleClass(size, "form"),
        defaultClass, 
        className, 
    ));
    
    function handleClick() {
        if (!value) inputElement.click();
    }
</script>

<div class={combinedOuterDivClass}>
    <Text tag="label" for={id} class={combinedLabelClass} style={getSizeStyle(size, "formLabel")}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
    <Button color="none" class={combinedDivClass} onclick={handleClick} {disabled}>
        <input
            {id}
            bind:value={value}
            bind:this={inputElement}
            class="hidden"
            {required}
            {disabled}
            aria-disabled={disabled}
            {...restProps}
            type="color"
        />

        <div class="rounded-full border border-form-hover ml-2 w-6 h-6" style={`background-color: ${value || 'transparent'}`}></div>

        <Text class={combinedClass}>
            {value ? value : "Select color"}
        </Text>
    </Button>
</div>