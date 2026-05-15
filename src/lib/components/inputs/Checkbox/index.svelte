<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import type { CheckboxProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        label = "",
        labelClass = "",
        divClass = "", 
        checked = $bindable(),
        id = crypto.randomUUID(),
        ...restProps
    }: CheckboxProps = $props();

    let defaultClass = "z-20 bg-form-input-background text-main-text rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all";
    let defaultLabelClass = "block text-sub-text font-medium";
    let defaultDivClass = "relative flex items-center gap-2";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));
</script>

<div class={combinedDivClass}>
    <input
        type="checkbox"
        id={id}
        bind:checked={checked}
        class={combinedClass}
        {...restProps}
        bind:this={element}/>
    <Text tag="label" for={id} class={combinedLabelClass}>
        {label}
    </Text>
</div>