<script lang="ts">
    import type { InputProps } from "../types/Input.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { getSizeStyleClass } from "../styles/size.ts";
    import { type Component } from "svelte";
    import Button from "./Button.svelte";

    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import Phone from "@lucide/svelte/icons/phone";
    import Eye from "@lucide/svelte/icons/eye";
    import EyeOff from "@lucide/svelte/icons/eye-off";
    import X from "@lucide/svelte/icons/x";
    import Check from "@lucide/svelte/icons/check";
    import { slide } from "svelte/transition";
    import BaseInput from "./helper/BaseInput.svelte";
    import NumberInput from "./helper/NumberInput.svelte";

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

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    let isFocused = $state(false);
    let touched = $state(false);

    let canSeePassword = $state(false);

    const Icon = $derived(icon ?? ({
        email: Mail, password: Lock, tel: Phone
    }[restProps.type as string] as Component ?? null));

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-none";
    let iconContainerClass = "h-5 aspect-square px-1 py-0!";
    let iconClass = "h-full aspect-square text-sub-text";

    let invalidClass = "border border-red-500 focus:ring-red-500 bg-[#2E1F1F]";

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        touched = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        isFocused = false;
        onblur?.(e);
    }

    let inputClassIcon = $derived(Icon !== null ? "pl-0 pr-1" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, inputClassIcon, className));
    let combinedDivClass = $derived(twMerge(divClass, (!isValidInput() && touched) && invalidClass));

    let EyeComponent = $derived(canSeePassword ? Eye : EyeOff);

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

<BaseInput
    {children}
    {className}
    {label}
    {labelClass}
    divClass={combinedDivClass}
    {outerDivClass}
    {value}
    {required}
    {disabled}
    {variant}
    {size}
    {radius}
    {isFocused}
    {id}
    icon={Icon}
    bind:isHovered
    {...restProps}>
    {#snippet outerDivElementAfter()}
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
    {/snippet}

    {#snippet innerDivElement()}
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
            <NumberInput {max} {min} {step} bind:value {isHovered} {size}/>
        {/if}
    {/snippet}
</BaseInput>

