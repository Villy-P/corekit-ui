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
        validInputRegex = undefined,
        id = crypto.randomUUID(),
        ...restProps
    }: FloatingInputProps = $props();

    let isFocused = $state(false);
    let touched = $state(false);

    let hasContent = $derived(value !== undefined && value !== null && value.toString().length > 0);
    let isValid = $derived(!touched || !validInputRegex || validInputRegex.test(value || ""));

    let defaultClass = "z-20 w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let defaultLabelClass = "block text-sm font-medium text-gray-700 mb-1 absolute transition-all duration-100 pointer-events-none";
    let defaultDivClass = "relative";

    let originalLabelClass = "left-3 top-1/2 transform -translate-y-1/2 z-0";
    let selectedLabelClass = "left-2 z-30 bg-white px-1 top-0 transform -translate-y-1/2 text-xs";

    let invalidClass = "border-red-500 focus:ring-red-500";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, isFocused || hasContent ? selectedLabelClass : originalLabelClass, labelClass));
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
    <input 
        {id}
        bind:value={value}
        onfocus={handleFocus}
        onblur={handleBlur}
        class={combinedClass} 
        {...restProps}
    />
</div>