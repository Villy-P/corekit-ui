<script lang="ts">
    import type { FloatingSelectProps } from "../types/FloatingSelect.ts";
    import { twMerge } from "tailwind-merge";
    import Text from "./Text.svelte";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        divClass = "",
        optionClass = "", 
        value = $bindable(),
        options = [],
        id = crypto.randomUUID(),
        ...restProps
    }: FloatingSelectProps = $props();

    let defaultSelectClass = "cursor-pointer bg-form-background border-[1px] border-form-border text-main-text z-20 w-full rounded px-1 pt-4 pb-1 text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let defaultLabelClass = "block text-sub-text rounded-md text-sm font-medium mb-1 absolute transition-all duration-100 pointer-events-none";
    let defaultDivClass = "relative w-fit";

    let selectedLabelClass = "left-2 z-30 top-0.5 text-[10px]!";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, selectedLabelClass, className));
    let combinedSelectClass = $derived(twMerge(defaultSelectClass, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));
</script>

<div class={combinedDivClass}>
    <Text tag="label" for={id} class={combinedLabelClass}>
        {label}
    </Text>
    <select {id} class={combinedSelectClass} {...restProps} bind:value={value}>
        {#each options as option}
            <option value={option.value} class={optionClass}>
                {option.label}
            </option>
        {/each}
    </select>
</div>