<script lang="ts">
    import { colorStyles } from "$lib/styles/color.js";
    import type { ButtonProps } from "$lib/types/Button.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        pill = false,
        icon = false,
        href = undefined,
        color = undefined,
        ...restProps
    }: ButtonProps = $props();

    let pillClass = "rounded-full";
    let iconClass = "rounded-full p-2 flex-center";
    let defaultClass = $derived(twMerge(
        "text-white cursor-pointer px-2 py-1 transition-colors duration-300 rounded-md", 
        (pill ? pillClass : ""), (icon ? iconClass : ""), colorStyles[color] || ""));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

{#if href}
    <a class={combinedClass} {href} {...restProps}>
        {@render children?.()}
    </a>
{:else}
    <button class={combinedClass} {...restProps}>
        {@render children?.()} 
    </button>
{/if}