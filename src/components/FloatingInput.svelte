<script lang="ts">
    import type { FloatingInputProps } from "../types/FloatingInput.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        labelClass = "",
        divClass = "", 
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        isTextArea = false,
        required = false,
        validInputRegex = undefined,
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        ...restProps
    }: FloatingInputProps = $props();

    const sizeClasses = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        const radiusParts = typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null;

        return twMerge(
            parts?.form,
            radiusParts?.radius,
        );
    });

    const labelSizeClass = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        return parts?.formLabel || "";
    });

    const selectedLabelSizeClass = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        return parts?.formLabelSelected || "";
    });

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    const customLabelStyle = $derived(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`font-size: ${size / 4}px`);

        return styles.join("; ");
    });

    let isFocused = $state(false);
    let touched = $state(false);

    let hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    let isValid = $derived(!touched || !validInputRegex || validInputRegex.test(value || ""));

    let defaultClass = "bg-form-background border-[1px] border-form-border text-main-text w-full rounded outline-none focus:ring-2 focus:ring-blue-500 transition-all px-2";
    let defaultLabelClass = "block text-sub-text rounded-md font-medium mb-1 absolute transition-all duration-100 pointer-events-none px-2";
    let defaultDivClass = "relative";

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalLabelClassTextArea = "top-2";
    let originalSelectedLabelClass = "z-30 top-0.5";

    let invalidClass = "border border-red-500 focus:ring-red-500 bg-[#2E1F1F]";

    let labelClassFull = $derived(twMerge(isTextArea ? originalLabelClassTextArea : originalLabelClassInput, originalLabelClass));

    let selectedLabelClass = $derived(twMerge(isFocused || hasContent ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : labelClassFull));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, labelSizeClass, selectedLabelClass, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, labelSizeClass, className, isValid ? "" : invalidClass));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        isFocused = false;
        touched = true;
        onblur?.(e);
    }
</script>

<div class={combinedDivClass}>
    <Text tag="label" for={id} class={combinedLabelClass} style={customLabelStyle}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
    {#if isTextArea}
        <textarea
            {id}
            bind:value={value}
            onfocus={handleFocus}
            onblur={handleBlur}
            class={combinedClass}
            {required}
            style={customStyle}
            {...restProps}
        ></textarea>
    {:else}
        <input
            {id}
            bind:value={value}
            onfocus={handleFocus}
            onblur={handleBlur}
            class={combinedClass}
            {required}
            style={customStyle}
            {...restProps}
        />
    {/if}
</div>