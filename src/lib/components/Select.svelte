<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";
    import { getSizeStyleClass } from "../styles/size.ts";

    import type { SelectProps } from "$lib/types/Input.js";
    import BaseInput from "./helper/BaseInput.svelte";

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
    const divSizeClass = $derived(getSizeStyleClass(radius, "radius"));
    const labelSizeClass = $derived(getSizeStyleClass(size, "formLabel"));

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    let isFocused = $state(true);

    let defaultClass = "text-main-text w-full outline-none px-0.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-full";
    let defaultDivClass = "relative *:transition-all transition-colors flex-center bg-form-background border-[1px] border-form-border focus-within:ring-1 focus-within:ring-blue-500";

    let divFullClass = $derived(size === "full" ? "w-full" : "");
    let disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divSizeClass, divFullClass, divClass, disabledClass));
    let combinedOuterDivClass = $derived(twMerge("flex flex-col bg-transparent border-0 p-0", divSizeClass, divFullClass, outerDivClass, disabledClass));
</script>

{#snippet labelElement()}
<BaseInput
    {children}
    {className}
    {label}
    {labelClass}
    {divClass}
    {outerDivClass}
    {value}
    {required}
    {disabled}
    {variant}
    {size}
    {radius}
    {isFocused}
    {id}
    {...restProps}>
    
</BaseInput>
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