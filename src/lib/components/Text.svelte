<script lang="ts">
    import type { TextProps } from "$lib/types/Text.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        tag = "p",
        ...restProps
    }: TextProps = $props();

    const tagStyles = {
        "p": "text-base",
        "div": "text-base",
        "span": "text-base",
        "label": "text-sm",
        "strong": "text-base font-bold",
        "em": "text-base italic",
        "small": "text-sm",
        "blockquote": "border-l-4 border-gray-500 pl-2 opacity-70",
        "pre": "font-mono bg-sub-background px-3 py-2 rounded overflow-x-auto whitespace-pre",
        "code": "font-mono bg-sub-background px-3 py-2 rounded inline-block",
        "a": "text-blue-400 hover:text-blue-500 hover:underline",
        "li": "text-base list-disc list-inside",
        "h1": "text-6xl font-extrabold",
        "h2": "text-5xl font-bold",
        "h3": "text-4xl font-semibold",
        "h4": "text-3xl font-medium",
        "h5": "text-2xl font-medium",
        "h6": "text-xl font-medium"
    };

    let defaultClass = "text-main-text";    
    let combinedClass = $derived(twMerge(defaultClass, className, tagStyles[tag] || ""));
</script>

<svelte:element this={tag} class={combinedClass} {...restProps}>
    {@render children?.()}
</svelte:element>