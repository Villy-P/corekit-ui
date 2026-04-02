<script lang="ts">
    import { generateColorStyle } from "$lib/styles/color.js";
    import type { ButtonProps, ButtonType } from "$lib/types/Button.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        pill = false,
        icon = false,
        href = undefined,
        color = "none",
        type = "full",
        size = undefined,
        ...restProps
    }: ButtonProps = $props();

    function getSizeStyles(size?: number | string) {
        if (typeof size === "number")
            return `w-${size} h-${size}`;
        return "";
    }

    let pillClass = "rounded-full";
    let iconClass = "rounded-full p-2 flex-center";
    let defaultClass = $derived(twMerge(
        "text-white cursor-pointer px-2 py-1 transition-colors duration-300 rounded-md", 
        (pill ? pillClass : ""), (icon ? iconClass : ""), generateColorStyle(color, type), getSizeStyles(size)));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element this={href ? "a" : "button"} class={combinedClass} {href} {...restProps}>
    {@render children?.()}
</svelte:element>