<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "$lib/styles/size.js";
    import type { FileInputProps } from "$lib/types/Input.js";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";

    let { 
        children = undefined, 
        class: className = "",
        label = undefined,
        labelClass = "",
        divClass = "",
        outerDivClass = "",
        files = $bindable(undefined),
        required = false,
        disabled = false,
        placeholder = "",
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        ...restProps
    }: FileInputProps = $props();

    const defaultLabelClass = "block text-sub-text font-medium mb-1 pointer-events-none truncate w-fit";

    const divSizeClass = $derived(getSizeStyleClass(size, "form"));
    const divFullClass = $derived(size === "full" ? "w-full" : "");
    const disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    const combinedOuterDivClass = $derived(twMerge(
        "flex flex-col bg-transparent border-0 p-0",
        divSizeClass,
        divFullClass,
        outerDivClass,
        disabledClass
    ));
    const combinedLabelClass = $derived(twMerge(
        defaultLabelClass, 
        getSizeStyleClass(size, "formLabel"),
        labelClass
    ));
</script>

<div class={combinedOuterDivClass}>
    <Text tag="label" for={id} class={combinedLabelClass} style={getSizeStyle(size, "formLabel")}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
</div>