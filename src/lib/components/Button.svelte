<script lang="ts">
    import { colorStyles, lightColorStyles } from "$lib/styles/color.js";
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

    function getTypeColorStyles(type: ButtonType) {
        switch (type) {
            case "full":
                return colorStyles[color];
            case "light":
                return lightColorStyles[color];
            case "outline":
                return "bg-transparent border border-current text-current hover:bg-current hover:text-white";
            case "ghost":
                return "bg-transparent text-current hover:bg-gray-200";
            default:
                return colorStyles[color];
        }
    }

    let pillClass = "rounded-full";
    let iconClass = "rounded-full p-2 flex-center";
    let defaultClass = $derived(twMerge(
        "text-white cursor-pointer px-2 py-1 transition-colors duration-300 rounded-md", 
        (pill ? pillClass : ""), (icon ? iconClass : ""), getTypeColorStyles(type), getSizeStyles(size)));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element this={href ? "a" : "button"} class={combinedClass} {href} {...restProps}>
    {@render children?.()}
</svelte:element>