<script module>
    let count = 0;
</script>

<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import type { CheckboxProps } from "./types";
    import { multiAction } from "../../../utils/multiAction";
	import { colorStyleParts, getColorClasses, getGradientStyle } from "$lib/styles/color";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        use = [],
        style = "",
        color = "primary",
        indeterminate = false,
        label = "",
        labelClass = "",
        divClass = "", 
        checked = $bindable(),
        id = `checkbox-${count++}`,
        ...restProps
    }: CheckboxProps = $props();

    let defaultClass = "w-4 h-4 z-20 bg-form-background text-main-text rounded outline-none transition-all";
    let defaultLabelClass = "block text-sub-text font-medium";
    let defaultDivClass = "relative flex items-center gap-2";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, labelClass));
    let combinedClass = $derived(twMerge(
        getColorClasses(color, "", true, (color, _variant) => colorStyleParts[color]?.baseChecked),
        defaultClass, 
        className
    ));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));

    let combinedStyle = $derived([
        checked && getGradientStyle(color),
        style,
    ].filter(Boolean).join("; "));

    $effect(() => {
        if (element) {
            (element as HTMLInputElement).indeterminate = indeterminate;
        }
    });
</script>

<Text tag="label" for={id} class={combinedDivClass}>
    <span class="relative inline-flex w-4 h-4 shrink-0">
        <input
            type="checkbox"
            id={id}
            bind:checked={checked}
            class={combinedClass}
            style={combinedStyle}
            {...restProps}
            bind:this={element}
            use:multiAction={use}
            />
        <svg
            class="checkbox-check-svg absolute inset-0 w-4 h-4 pointer-events-none z-20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            {#if indeterminate}
                <path
                    d="M6 12H18"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            {:else}
                <path
                    d="M6 12.5L10 16.5L18 8"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            {/if}
        </svg>
    </span>
    {label}
</Text>

<style>
    input[type="checkbox"] {
        appearance: none;
    }

    .checkbox-check-svg path {
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        transition: stroke-dashoffset 250ms cubic-bezier(0.65, 0, 0.35, 1);
        transition-delay: 150ms;
    }

    input[type="checkbox"]:checked ~ .checkbox-check-svg path {
        stroke-dashoffset: 0;
    }
</style>