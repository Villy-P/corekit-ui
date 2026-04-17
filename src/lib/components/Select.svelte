<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { getSizeStyleClass } from "../styles/size.ts";

    import type { SelectProps } from "$lib/types/Select.js";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        labelClass = "",
        divClass = "", 
        outerDivClass = "",
        options = [],
        variant = "default",
        value = $bindable(),
        required = false,
        disabled = false,
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        ...restProps
    }: SelectProps = $props();


    const sizeClasses = $derived(getSizeStyleClass(size, "form"));
    const labelSizeClass = $derived(getSizeStyleClass(size, "formLabel"));
    const divSizeClass = $derived(getSizeStyleClass(radius, "radius"));
    const selectedLabelSizeClass = $derived(getSizeStyleClass(size, "formLabelSelected"));

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    const customLabelStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`font-size: ${size / 4}px`);

        return styles.join("; ");
    });

    let isFocused = $state(false);

    const hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);

    let defaultClass = "text-main-text w-full outline-none px-0.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-full";
    let defaultLabelClass = "block text-sub-text font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    let defaultDivClass = "relative *:transition-all transition-colors flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500";
    let floatingLabelClass = "absolute w-full px-1.5";

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalSelectedLabelClass = "z-30";

    let floatingLabelClassFull = $derived(twMerge(originalLabelClassInput, originalLabelClass, floatingLabelClass));
    let divFullClass = $derived(size === "full" ? "w-full" : "");
    let disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let floatingLabelClassCheck = $derived(variant === "floating" ? floatingLabelClassFull : "");
    let defaultLabelClassCheck = $derived(variant !== "floating" ? "px-0" : "");
    let selectedLabelClass = $derived(twMerge((isFocused || hasContent) && variant === "floating" ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : ""));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, floatingLabelClassCheck, labelSizeClass, selectedLabelClass, defaultLabelClassCheck, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass));
    let combinedOuterDivClass = $derived(twMerge("flex flex-col bg-transparent border-0 p-0", divSizeClass, divFullClass, outerDivClass, disabledClass));
</script>

{#snippet labelElement()}
    <Text tag="label" for={id} class={combinedLabelClass} style={customLabelStyle}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
{/snippet}

{#snippet innerDivElement()}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={combinedDivClass}>
        {#if variant === "floating"}
            {@render labelElement()}
        {/if}
        <select 
            id={id} 
            class={combinedClass} 
            disabled={disabled} 
            bind:value={value}
            {...restProps}>
            {#each options as option}
                <option value={option.value}>{option.label}</option>
            {/each}
        </select>
    </div>
{/snippet}

<div class={combinedOuterDivClass}>
    {#if variant !== "floating"}
        {@render labelElement()}
        {@render innerDivElement()}
    {:else}
        {@render innerDivElement()}
    {/if}
</div>