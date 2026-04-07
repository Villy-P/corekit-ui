<script lang="ts">
    import type { FloatingInputProps } from "../types/FloatingInput.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";
    import { type Component } from "svelte";

    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Phone from "@lucide/svelte/icons/phone";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        labelClass = "",
        divClass = "", 
        icon = undefined,
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        isTextArea = false,
        required = false,
        disabled = false,
        validInputRegex = undefined,
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        ...restProps
    }: FloatingInputProps = $props();

    const sizeClasses = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;

        return twMerge(
            parts?.form
        );
    });

    const labelSizeClass = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        return parts?.formLabel || "";
    });

    const divSizeClass = $derived.by(() => {
        const radiusParts = typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null;
        return twMerge(
            radiusParts?.radius
        );
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

    const customLabelStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`font-size: ${size / 4}px`);

        return styles.join("; ");
    });

    let isFocused = $state(false);
    let touched = $state(false);

    let hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    let isValid = $derived(!touched || !validInputRegex || validInputRegex.test(value || ""));

    let defaultClass = "text-main-text w-full rounded outline-none px-2 w-full";
    let defaultLabelClass = "block text-sub-text rounded-md font-medium mb-1 absolute duration-100 pointer-events-none truncate w-full";
    let defaultDivClass = "relative *:transition-all flex-center bg-form-background border-[1px] border-form-border focus-within:ring-2 focus-within:ring-blue-500";
    let iconContainerClass = "h-5 aspect-square px-1 py-0!";
    let iconClass = "h-full aspect-square text-sub-text cursor-default";

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalLabelClassTextArea = "top-2";
    let originalSelectedLabelClass = "z-30 top-0.5";

    let invalidClass = "border border-red-500 focus:ring-red-500 bg-[#2E1F1F]";

    let labelClassFull = $derived(twMerge(isTextArea ? originalLabelClassTextArea : originalLabelClassInput, originalLabelClass));
    let divFullClass = $derived(size === "full" ? "w-full" : "");
    let disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "cursor-pointer");

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        isFocused = false;
        touched = true;
        onblur?.(e);
    }

    let Icon = $derived.by(() => {
        if (icon) return icon;

        switch (restProps.type) {
            case "mail":
                return Mail as Component;
            case "password":
                return Lock as Component;
            case "tel":
                return Phone as Component;
            default:
                return null;
        }
    });

    let labelClassIcon = $derived(Icon ? "pl-8 pr-2" : "px-2");
    let inputClassIcon = $derived(Icon ? "pl-0 pr-1" : "");

    let selectedLabelClass = $derived(twMerge(isFocused || hasContent ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : labelClassFull));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, labelSizeClass, selectedLabelClass, labelClassIcon, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, labelSizeClass, inputClassIcon, className, isValid ? "" : invalidClass));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass));
</script>

<div class={combinedDivClass}>
    {#if Icon}
        <div class={iconContainerClass}>
            <Icon class={iconClass}></Icon>
        </div>
    {/if}
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
            {disabled}
            aria-disabled={disabled}
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
            {disabled}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}
        />
    {/if}
</div>