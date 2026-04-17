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
        id = crypto.randomUUID(),
        ...restProps
    }: BaseInputProps = $props();

    let isFocused = $state(false);
    let touched = $state(false);
    let isHovered = $state(false);

    const customLabelStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`font-size: ${size / 4}px`);

        return styles.join("; ");
    });

    let defaultLabelClass = "block text-sub-text font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    let floatingLabelClass = "absolute w-full z-30 top-1/2 transform -translate-y-1/2";

    let combinedLabelClass = $derived(twMerge(
        defaultLabelClass, 
        (variant === "floating") ? floatingLabelClass : "px-0", 
        getSizeStyleClass(size, "formLabel"), 
        value != null && getSizeStyleClass(size, "formLabelSelected"), 
        labelClass
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

{@render labelElement?.()}