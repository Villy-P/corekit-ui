<script lang="ts">
    import type { ComboboxProps, InputProps } from "../types/Input.ts";
    import { twMerge } from "tailwind-merge";
    import { getSizeStyleClass } from "../styles/size.ts";

    import BaseInput from "./helper/BaseInput.svelte";
  import Text from "./Text.svelte";
  import { fly } from "svelte/transition";

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
        size = "md",
        radius = "md",
        options = [],
        id = crypto.randomUUID(),
        ...restProps
    }: ComboboxProps = $props();

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

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        touched = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        isFocused = false;
        onblur?.(e);
    }

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-none";

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(divClass));
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
    {id}
    {icon}
    {...restProps}>

    {#snippet innerDivElement()}
        <input
            {id}
            bind:value={value}
            class={combinedClass}
            {required}
            {disabled}
            onfocus={handleFocus}
            onblur={handleBlur}
            placeholder={variant === "floating" ? "" : placeholder}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}
        />
    {/snippet}

    {#snippet outerDivElementAfter()}        
        {#if isFocused}
            <div transition:fly={{ y: -10, duration: 200 }} class="absolute top-full h-fit mt-2 inset-0 border-2 border-blue-500 bg-sub-background overflow-hidden {getSizeStyleClass(radius, "radius")}">
                {#each options as option}
                    <Text class="text-sm py-0.5 px-1 cursor-pointer hover:bg-sub-background-hover transition-colors">{option.label}</Text>
                {/each}
            </div>
        {/if}
    {/snippet}
</BaseInput>
