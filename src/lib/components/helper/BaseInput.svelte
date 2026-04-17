<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BaseInputProps } from "../../types/Input.js";
    import Text from "../Text.svelte";
    import { getSizeStyleClass } from "$lib/styles/size.js";

    let { 
        children = undefined, 
        class: className = "", 
        label = "",
        labelClass = "",
        divClass = "",
        outerDivClass = "",
        value = $bindable(),
        required = false,
        disabled = false,
        variant = "default",
        size = "md",
        radius = "md",
        isFocused = false,
        id = crypto.randomUUID(),

        isHovered = $bindable(false),

        innerDivElement = undefined,
        outerDivElementAfter = undefined,

        ...restProps
    }: BaseInputProps = $props();

    const hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);

    const customLabelStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`font-size: ${size / 4}px`);

        return styles.join("; ");
    });

    const defaultLabelClass = "block text-sub-text font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    const floatingLabelClass = "absolute w-full z-30 top-1/2 transform -translate-y-1/2 px-1.5";

    const combinedLabelClass = $derived(twMerge(
        defaultLabelClass, 
        (variant === "floating") ? floatingLabelClass : "px-0", 
        getSizeStyleClass(size, "formLabel"), 
        ((isFocused || hasContent) && variant === "floating") && getSizeStyleClass(size, "formLabelSelected"),
        labelClass
    ));

    const combinedOuterDivClass = $derived(twMerge(
        "flex flex-col bg-transparent border-0 p-0",
        getSizeStyleClass(radius, "radius"),
        size === "full" ? "w-full" : "",
        outerDivClass,
        disabled ? "opacity-50 pointer-events-none" : ""
    ));

    const combinedDivClass = $derived(twMerge(
        "relative *:transition-all transition-colors flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500",
        getSizeStyleClass(radius, "radius"),
        size === "full" ? "w-full" : "",
        divClass,
        disabled ? "opacity-50 pointer-events-none" : ""
    ));
</script>

{#snippet labelElement()}
    <Text tag="label" for={id} class={combinedLabelClass} style={customLabelStyle}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
{/snippet}

{#snippet innerDivElementWrapper()}
    <div role="button" tabindex="0" class={combinedDivClass} onmouseenter={() => isHovered = true} onmouseleave={() => isHovered = false}>
        {#if variant === "floating"}
            {@render labelElement()}
        {/if}
        {@render innerDivElement?.()}
    </div>
{/snippet}

<div class={combinedOuterDivClass}>
    {#if variant !== "floating"}
        {@render labelElement()}
    {/if}
    {@render innerDivElementWrapper()}

    {@render outerDivElementAfter?.()}
</div>