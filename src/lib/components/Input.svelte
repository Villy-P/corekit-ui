<script lang="ts">
    import type { InputProps } from "../types/Input.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";
    import { type Component } from "svelte";
    import Button from "./Button.svelte";

    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Phone from "@lucide/svelte/icons/phone";
    import Eye from "@lucide/svelte/icons/eye";
    import EyeOff from "@lucide/svelte/icons/eye-off";
    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";

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
        required = false,
        disabled = false,
        validInputRegex = undefined,
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        min = undefined,
        max = undefined,
        step = undefined,
        ...restProps
    }: InputProps = $props();

    let isHovered = $state(false);

    const sizeParts = $derived(typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null);
    const radiusParts = $derived(typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null);

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

    let canSeePassword = $state(false);

    const isFloating = $derived(variant === "floating");
    const hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    const isValid = $derived(!touched || !validInputRegex || validInputRegex.test(value || ""));
    const lifted = $derived(isFloating && (isFocused || hasContent));

    const Icon = $derived(icon ?? ({
        mail: Mail, password: Lock, tel: Phone
    }[restProps.type as string] as Component ?? null));

    let defaultClass = "text-main-text w-full rounded outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0";
    let defaultLabelClass = "block text-sub-text rounded-md font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    let defaultDivClass = "relative *:transition-all flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500";
    let iconContainerClass = "h-5 aspect-square px-1 py-0!";
    let floatingLabelClass = "absolute w-full";
    let iconClass = "h-full aspect-square text-sub-text";

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
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

    let labelClassIcon = $derived(Icon !== null ? "pl-[32px] pr-2" : "px-1.5");
    let inputClassIcon = $derived(Icon !== null ? "pl-0 pr-1" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let floatingLabelClassCheck = $derived(variant === "floating" ? floatingLabelClassFull : "");
    let defaultLabelClassCheck = $derived(variant !== "floating" ? "px-1.5" : "");
    let selectedLabelClass = $derived(twMerge((isFocused || hasContent) && variant === "floating" ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : ""));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, floatingLabelClassCheck, labelSizeClass, selectedLabelClass, labelClassIcon, defaultLabelClassCheck, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, inputClassIcon, className, isValid ? "" : invalidClass));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass));
    let combinedOuterDivClass = $derived(twMerge("flex flex-col bg-transparent border-0 p-0", divSizeClass, divFullClass, divClass, disabledClass));

    let EyeComponent = $derived(canSeePassword ? Eye : EyeOff);

    let numberIconClass = $derived(twMerge(iconClass, sizeClasses, "text-sub-text/70 w-fit aspect-auto p-0 flex-center flex-col transition-all duration-150"));
    let numberButtonClass = $derived(twMerge(iconContainerClass, "h-1/2 gap-0 px-0.5 hover:bg-form-border aspect-square rounded-none"));

    function increment() {
        if (max === undefined || value < max) value = (value || 0) + (step || 1);
    }

    function decrement() {
        if (min === undefined || value > min) value = (value || 0) - (step || 1);
    }

    let incrementInterval: ReturnType<typeof setInterval> | null = null;
    let decrementInterval: ReturnType<typeof setInterval> | null = null;

    function startIncrement() {
        increment();
        incrementInterval = setInterval(increment, 100);
    }

    function stopIncrement() {
        if (incrementInterval) {
            clearInterval(incrementInterval);
            incrementInterval = null;
        }
    }

    function startDecrement() {
        decrement();
        decrementInterval = setInterval(decrement, 100);
    }

    function stopDecrement() {
        if (decrementInterval) {
            clearInterval(decrementInterval);
            decrementInterval = null;
        }
    }
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
    <div class={combinedDivClass} onmouseenter={() => isHovered = true} onmouseleave={() => isHovered = false}>
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
            {min}
            {max}
            {step}
            placeholder={variant === "floating" ? "" : placeholder}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}
            type={canSeePassword ? "text" : restProps.type}
        />
        {#if restProps.type === "password"}
            <Button class={iconContainerClass} onclick={() => { canSeePassword = !canSeePassword; }}>
                <EyeComponent class={iconClass}></EyeComponent>
            </Button>
        {:else if restProps.type === "number"}
            <div class={twMerge(numberIconClass, isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75")}>
                <Button 
                    size="none" radius="none" 
                    class={numberButtonClass} 
                    onmousedown={startIncrement}
                    onmouseup={stopIncrement}
                    onmouseleave={stopIncrement}
                    disabled={max !== undefined && value >= max}>
                    <ChevronUp class="w-full h-full"/>
                </Button>
                <Button 
                    size="none" radius="none" 
                    class={numberButtonClass} 
                    onmousedown={startDecrement}
                    onmouseup={stopDecrement}
                    onmouseleave={stopDecrement}
                    disabled={min !== undefined && value <= min}>
                    <ChevronDown class="w-full h-full"/>
                </Button>
            </div>
        {/if}
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