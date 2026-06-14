<script module>
    let count = 0;
</script>

<script lang="ts">
    import type { TextareaProps } from "./types";
    import { twMerge } from "tailwind-merge";
    import { multiAction } from "../../../utils/multiAction";
    import { getSizeStyleClass } from "../../../styles/size.ts";

    import BaseInput from "../helper/BaseInput.svelte";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        use = [],
        label = "",
        labelClass = "",
        divClass = "", 
        outerDivClass = "",
        icon = undefined,
        placeholder = "",
        value = $bindable(),
        required = false,
        disabled = false,
        size = "md",
        radius = "md",
        id = `textarea-${count++}`,
        ...restProps
    }: TextareaProps = $props();

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

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-none py-2.5!";

    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(divClass));
</script>

<BaseInput
    {children}
    class={className}
    {label}
    {labelClass}
    divClass={combinedDivClass}
    {outerDivClass}
    {value}
    {required}
    {disabled}
    {size}
    {radius}
    {id}
    bind:wrapper={element}
    {...restProps}>


    {#snippet innerDivElement()}
        <textarea
            {id}
            bind:value={value}
            use:multiAction={use}
            class={combinedClass}
            {required}
            {disabled}
            placeholder={placeholder}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}></textarea>
    {/snippet}
</BaseInput>

