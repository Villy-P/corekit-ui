<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "../styles/size.ts";
    import { cardVariantStyles, type CardProps } from "../types/Card.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        href = undefined,
        external = false,
        variant = "bordered",
        size = "md",
        radius = "md",
        ...restProps
    }: CardProps = $props();

    let defaultClass = "text-main-text rounded-lg transition-colors ease-in-out bg-sub-background p-4";
    let linkClass = "block hover:bg-sub-background-hover cursor-pointer";
    let combinedClass = $derived(twMerge(
        defaultClass, 
        href && linkClass,
        cardVariantStyles[variant],
        getSizeStyleClass(size, "card"),
        getSizeStyleClass(radius, "radius"),
        className
    ));

    const mergedStyle = $derived([
        getSizeStyle(size, "card"), 
        getSizeStyle(radius, "radius"), 
        restProps.style
    ].filter(Boolean).join("; "));

    const anchorProps = $derived(href ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    } : {});
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    style={mergedStyle}
    {...anchorProps}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
