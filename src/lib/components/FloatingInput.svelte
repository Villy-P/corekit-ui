<script lang="ts">
    import type { FloatingInputProps } from "$lib/types/FloatingInput.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        labelClass = "",
        divClass = "", 
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        isTextArea = false,
        validInputRegex = undefined,
        id = crypto.randomUUID(),
        ...restProps
    }: FloatingInputProps = $props();

    let isFocused = $state(false);
    let touched = $state(false);

    let hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    let isValid = $derived(!touched || !validInputRegex || validInputRegex.test(value || ""));

    let defaultClass = "z-20 bg-form-input-background text-main-text w-full rounded px-2 pt-4 pb-1 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let defaultLabelClass = "block text-sub-text rounded-md text-sm font-medium mb-1 absolute transition-all duration-100 pointer-events-none";
    let defaultDivClass = "relative";

    let originalLabelClass = "left-2 z-0";
    let originalLabelClassInput = "top-1/2 transform -translate-y-1/2";
    let originalLabelClassTextArea = "top-2";
    let selectedLabelClass = "left-2 z-30 top-0.5 text-[10px]";

    let invalidClass = "border border-red-500 focus:ring-red-500";

    let labelClassFull = $derived(twMerge(isTextArea ? originalLabelClassTextArea : originalLabelClassInput, originalLabelClass));

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, isFocused || hasContent ? selectedLabelClass : labelClassFull, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, className, isValid ? "" : invalidClass));
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
    <label for={id} class={combinedLabelClass}>
        {@render children?.()}
    </label>
    {#if isTextArea}
        <textarea
            {id}
            bind:value={value}
            onfocus={handleFocus}
            onblur={handleBlur}
            class={combinedClass}
            {...restProps}
        ></textarea>
    {:else}
        <input
            {id}
            bind:value={value}
            onfocus={handleFocus}
            onblur={handleBlur}
            class={combinedClass}
            {...restProps}
        />
    {/if}
</div>