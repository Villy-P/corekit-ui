<script lang="ts">
    import type { InputProps, InputRequirements } from "../types/Input.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { getSizeStyleClass, sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";
    import { type Component } from "svelte";
    import Button from "./Button.svelte";

    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Phone from "@lucide/svelte/icons/phone";
    import Eye from "@lucide/svelte/icons/eye";
    import EyeOff from "@lucide/svelte/icons/eye-off";
    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    import X from "@lucide/svelte/icons/x";
    import Check from "@lucide/svelte/icons/check";
  import { slide } from "svelte/transition";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        labelClass = "",
        divClass = "", 
        outerDivClass = "",
        icon = undefined,
        variant = "default",
        placeholder = "",
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        required = false,
        disabled = false,
        requirements = undefined,
        valid = $bindable(true),
        size = "md",
        radius = "md",
        id = crypto.randomUUID(),
        min = undefined,
        max = undefined,
        step = undefined,
        ...restProps
    }: InputProps = $props();

    let isHovered = $state(false);

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
    let touched = $state(false);

    let canSeePassword = $state(false);

    const isFloating = $derived(variant === "floating");
    const hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    const lifted = $derived(isFloating && (isFocused || hasContent));

    const Icon = $derived(icon ?? ({
        email: Mail, password: Lock, tel: Phone
    }[restProps.type as string] as Component ?? null));

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0";
    let defaultLabelClass = "block text-sub-text font-medium mb-1 duration-100 pointer-events-none truncate w-fit";
    let defaultDivClass = "relative *:transition-all transition-colors flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500";
    let iconContainerClass = "h-5 aspect-square px-1 py-0!";
    let floatingLabelClass = "absolute w-full";
    let iconClass = "h-full aspect-square text-sub-text";

    let inputRadius = $derived.by(() => {
        if (restProps.type === "password") return "rounded-none";
        if (Icon !== null) return "rounded-r-full"
        else return "rounded-full";
    });

    let originalLabelClass = "z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalSelectedLabelClass = "z-30";

    let invalidClass = "border border-red-500 focus:ring-red-500 bg-[#2E1F1F]";

    let floatingLabelClassFull = $derived(twMerge(originalLabelClassInput, originalLabelClass, floatingLabelClass));
    let divFullClass = $derived(size === "full" ? "w-full" : "");
    let disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        touched = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        isFocused = false;
        onblur?.(e);
    }

    let labelClassIcon = $derived(Icon !== null ? "pl-[32px] pr-2" : "px-1.5");
    let inputClassIcon = $derived(Icon !== null ? "pl-0 pr-1" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let floatingLabelClassCheck = $derived(variant === "floating" ? floatingLabelClassFull : "");
    let defaultLabelClassCheck = $derived(variant !== "floating" ? "px-0" : "");
    let selectedLabelClass = $derived(twMerge((isFocused || hasContent) && variant === "floating" ? `${originalSelectedLabelClass} ${selectedLabelSizeClass}` : ""));
    let combinedLabelClass = $derived(twMerge(defaultLabelClass, floatingLabelClassCheck, labelSizeClass, selectedLabelClass, labelClassIcon, defaultLabelClassCheck, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, inputRadius, sizeClasses, defaultInputClassCheck, labelSizeClass, inputClassIcon, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass, !isValidInput() && touched && invalidClass));
    let combinedOuterDivClass = $derived(twMerge("flex flex-col bg-transparent border-0 p-0", divSizeClass, divFullClass, outerDivClass, disabledClass));

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

    function testRequirement(requirement: RegExp | ((value: any) => boolean)) {
        if (typeof requirement === "function")
            return requirement(value || "");
        else if (requirement instanceof RegExp)
            return requirement.test(value || "");
        return true;
    }

    function isValidInput() {
        for (const requirement of requirements || [])
            if (!testRequirement(requirement.requirements))
                return false;
        return true;
    }

    $effect(() => {
        valid = isValidInput();
    });
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

<div class={combinedOuterDivClass}>
    {#if variant !== "floating"}
        {@render labelElement()}
        {@render innerDivElement()}
    {:else}
        {@render innerDivElement()}
    {/if}

    {#if touched && requirements}
        <div class="mt-1 text-xs" transition:slide={{ duration: 300 }}>
            {#each requirements as req}
                {@const isReqMet = testRequirement(req.requirements)}
                {@const reqClass = isReqMet ? "text-green-500" : "text-red-500"}
                <div class="flex w-full items-center gap-1 transition-colors {reqClass}">
                    <div class="relative w-4 h-4">
                        <Check class="w-4 h-4 absolute transition-all duration-150 {isReqMet ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}"/>
                        <X     class="w-4 h-4 absolute transition-all duration-150 {isReqMet ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}"/>
                    </div>
                    <Text tag="span" class="text-xs text-inherit">{req.label}</Text>
                </div>
            {/each}
        </div>
    {/if}
</div>