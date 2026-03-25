<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        options = [],
        id = crypto.randomUUID(),
        ...restProps
    } = $props();

    let defaultSelectClass = "cursor-pointer bg-form-input-background text-main-text z-20 w-full rounded px-1 pt-4 pb-1 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let defaultLabelClass = "block text-sub-text rounded-md text-sm font-medium mb-1 absolute transition-all duration-100 pointer-events-none";
    let defaultDivClass = "relative w-fit";

    let originalLabelClass = "left-2 top-1/2 transform -translate-y-1/2 z-0";
    let selectedLabelClass = "left-2 z-30 top-0.5 text-[10px]";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, selectedLabelClass, className));
    let combinedSelectClass = $derived(twMerge(defaultSelectClass, className));
</script>

<div class={defaultDivClass}>
    <label for={id} class={combinedLabelClass}>
        {@render children?.()}
    </label>
    <select {id} class={combinedSelectClass} {...restProps}>
        {#each options as option}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>
</div>