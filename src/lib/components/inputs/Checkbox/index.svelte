<script module>
    let count = 0;
</script>

<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import type { CheckboxProps } from "./types";
    import { multiAction } from "../../../utils/multiAction";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        use = [],
        label = "",
        labelClass = "",
        divClass = "", 
        checked = $bindable(),
        id = `checkbox-${count++}`,
        ...restProps
    }: CheckboxProps = $props();

    let defaultClass = "w-4 h-4 z-20 bg-form-background text-main-text rounded outline-none transition-all checked:bg-blue-500";
    let defaultLabelClass = "block text-sub-text font-medium";
    let defaultDivClass = "relative flex items-center gap-2";

    let combinedLabelClass = $derived(twMerge(defaultLabelClass, labelClass));
    let combinedClass = $derived(twMerge(defaultClass, className));
    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));
</script>

<Text tag="label" for={id} class={combinedDivClass}>
    <input
        type="checkbox"
        id={id}
        bind:checked={checked}
        class={combinedClass}
        {...restProps}
        bind:this={element}
        use:multiAction={use}
        />
    {label}
</Text>

<style>
    input[type="checkbox"] {
        appearance: none;
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    input[type="checkbox"]::before {
        content: "";
        width: 80%;
        height: 80%;
        margin: 1.5px;
        transform: scale(0);
        transform-origin: bottom left;
        transition: 150ms transform ease-in-out;
        display: block;
        background-color: white;
        clip-path: polygon(14% 44%, 0% 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
</style>