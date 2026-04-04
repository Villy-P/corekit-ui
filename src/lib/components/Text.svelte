<script lang="ts">
    import type { TextProps } from "$lib/types/Text.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        tag = "p",
        shrink = false,
        ...restProps
    }: TextProps = $props();

    const tagStyles = {
        "p": { class: "text-base", size: "1rem" },
        "div": { class: "text-base", size: "1rem" },
        "span": { class: "text-base", size: "1rem" },
        "label": { class: "text-sm", size: "0.875rem" },
        "strong": { class: "text-base font-bold", size: "1rem" },
        "em": { class: "text-base italic", size: "1rem" },
        "small": { class: "text-sm", size: "0.875rem" },
        "blockquote": { class: "border-l-4 border-gray-500 pl-2 opacity-70", size: "1rem" },
        "pre": { class: "font-mono bg-sub-background px-3 py-2 radius overflow-x-auto whitespace-pre", size: "1rem" },
        "code": { class: "font-mono bg-sub-background px-3 py-2 radius inline-block", size: "1rem" },
        "a": { class: "text-blue-400 hover:text-blue-500 hover:underline transition-colors cursor-pointer", size: "1rem" },
        "li": { class: "text-base list-disc list-inside", size: "1rem" },
        "h1": { class: "text-6xl font-extrabold", size: "3.5rem" },
        "h2": { class: "text-5xl font-bold", size: "3rem" },
        "h3": { class: "text-4xl font-semibold", size: "2.5rem" },
        "h4": { class: "text-3xl font-medium", size: "2rem" },
        "h5": { class: "text-2xl font-medium", size: "1.5rem" },
        "h6": { class: "text-xl font-medium", size: "1.25rem" }
    };

    let shrinkStyle = $derived(shrink 
        ? `font-size: clamp(8px, 12cqi, ${tagStyles[tag]?.size || "1rem"}); white-space: nowrap; display: block; width: fit-content;` 
        : ""
    );

    let defaultClass = "text-main-text";    
    let combinedClass = $derived(twMerge(defaultClass, tagStyles[tag]?.class || "", className));
</script>

<svelte:element this={tag} style={shrinkStyle} class={combinedClass} {...restProps}>
    {@render children?.()}
</svelte:element>