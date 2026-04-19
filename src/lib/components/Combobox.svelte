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
        limit = 10,
        id = crypto.randomUUID(),
        ...restProps
    }: ComboboxProps = $props();

    const sizeClasses = $derived(getSizeStyleClass(size, "form"));
    const labelSizeClass = $derived(getSizeStyleClass(size, "formLabel"));

    let inputElement = $state<HTMLInputElement>();

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
        const match = options.find(o => o.label.toLowerCase() === (value ?? "").toString().toLowerCase());
        if (!match) value = "";
        isFocused = false;
        onblur?.(e);
    }

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-none";

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(divClass));

    function onClickItem(event: MouseEvent, option: { value: any; label: string }) {
        event.preventDefault();
        value = option.label;
        isFocused = false;
        inputElement?.blur();
    }

    function highlight(label: string, search: string) {
        const index = label.toLowerCase().indexOf(search.toLowerCase());
        if (index === -1) return escapeHtml(label);

        return [
            label.slice(0, index),
            `<span class="font-bold">${escapeHtml(label.slice(index, index + search.length))}</span>`,
            label.slice(index + search.length)
        ].join("");
    }

    function escapeHtml(str: string) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    let filteredOptions = $derived(
        options.filter(option => 
            option.label.toLowerCase().includes((value ?? "").toString().toLowerCase())
        )
    );

    let validOptions = $derived(filteredOptions.slice(0, limit));
    let totalMatches = $derived(filteredOptions.length);
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
    {icon}>

    {#snippet innerDivElement()}
        <input
            {id}
            bind:value={value}
            bind:this={inputElement}
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
            <div transition:fly={{ y: -10, duration: 200 }} class="absolute top-full left-0 right-0 max-h-40 mt-2 border-2 border-blue-500 bg-sub-background overflow-auto {getSizeStyleClass(radius, "radius")}">
                {#if totalMatches > limit}
                    <Text class="text-xs py-0.5 px-1 text-sub-text italic sticky top-0 bg-sub-background w-full">
                        Showing {limit} of {totalMatches} results for "{value}"
                    </Text>
                {/if}
                {#if totalMatches === 0}
                    <Text class="text-xs py-0.5 px-1 text-sub-text italic sticky top-0 bg-sub-background w-full">
                        No results found for "{value}"
                    </Text>
                {/if}
                {#each validOptions as option}
                    <Text class="text-sm py-0.5 px-1 cursor-pointer hover:bg-sub-background-hover transition-colors" onmousedown={(e: MouseEvent) => onClickItem(e, option)}>
                        {@html highlight(option.label, value ?? "")}
                    </Text>
                {/each}
            </div>
        {/if}
    {/snippet}
</BaseInput>
