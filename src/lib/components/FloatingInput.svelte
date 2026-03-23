<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        ...restProps
    } = $props();

    let isFocused = $state(false);
    let hasContent = $derived(() => value && value.length > 0);

    let defaultClass = "z-20 w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let labelClass = "block text-sm font-medium text-gray-700 mb-1 absolute transition-all duration-100 pointer-events-none";

    let defaultLabelClass = "left-3 top-1/2 transform -translate-y-1/2 z-0";
    let selectedLabelClass = "left-2 z-30 bg-white px-1 top-0 transform -translate-y-1/2 text-xs";

    let combinedLabelClass = $derived(twMerge(labelClass, isFocused || hasContent() ? selectedLabelClass : defaultLabelClass));
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<div class="relative">
    <label class={combinedLabelClass}>
        {@render children?.()}
    </label>
    <input 
        bind:value={value}
        onfocus={() => { isFocused = true; onfocus() }}
        onblur={() => { isFocused = false; onblur() }}
        class={combinedClass} 
        {...restProps}
    />
</div>