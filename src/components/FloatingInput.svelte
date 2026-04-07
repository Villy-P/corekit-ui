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
        variant = "default",
        placeholder = "",
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

    let defaultClass = "text-main-text w-full rounded outline-none px-1.5 w-full";
    let defaultLabelClass = "block text-sub-text rounded-md font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    let defaultDivClass = "relative *:transition-all flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500";
    let iconContainerClass = "h-5 aspect-square px-1 py-0!";
    let floatingLabelClass = "absolute w-full";
    let iconClass = "h-full aspect-square text-sub-text cursor-default";

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalLabelClassTextArea = "top-2";
    let originalSelectedLabelClass = "z-30";

    let invalidClass = "border border-red-500 focus:ring-red-500 bg-[#2E1F1F]";

    let floatingLabelClassFull = $derived(twMerge(originalLabelClassInput, originalLabelClass, floatingLabelClass));
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

    let labelClassIcon = $derived(Icon ? "pl-[32px] pr-2" : "px-1.5");
    let inputClassIcon = $derived(Icon ? "pl-0 pr-1" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let floatingLabelClassCheck = $derived(variant === "floating" ? floatingLabelClassFull : "");
    let defaultLabelClassCheck = $derived(variant !== "floating" ? "px-1.5" : "");
    let selectedLabelClass = $derived(twMerge((isFocused || hasContent) && variant === "floating" ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : ""));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, floatingLabelClassCheck, labelSizeClass, selectedLabelClass, labelClassIcon, defaultLabelClassCheck, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, inputClassIcon, className, isValid ? "" : invalidClass));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass));
    let combinedOuterDivClass = $derived(twMerge("flex flex-col bg-transparent border-0 p-0", divSizeClass, divFullClass, divClass, disabledClass));
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
    <div class={combinedDivClass}>
        {#if Icon}
            <div class={iconContainerClass}>
                <Icon class={iconClass}></Icon>
            </div>
        {/if}
        {#if variant === "floating"}
            {@render labelElement()}
        {/if}
        <input
            {id}
            bind:value={value}
            onfocus={handleFocus}
            onblur={handleBlur}
            class={combinedClass}
            {required}
            {disabled}
            placeholder={variant === "floating" ? "" : placeholder}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}
        />
    </div>
{/snippet}

{#if variant !== "floating"}
    <div class={combinedOuterDivClass}>
        {@render labelElement()}
        {@render innerDivElement()}
    </div>
{:else}
    {@render innerDivElement()}
{/if}