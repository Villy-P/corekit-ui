<script lang="ts">
    import { getLinkProps } from "$lib/utils/link.js";
    import { getSizeStyle, getSizeStyleClass } from "../../../styles/size.ts";
    import { type CardProps } from "./types.ts";
    import { twMerge } from "tailwind-merge";
    import { cardVariantStyles } from "./variant.ts";

    let { 
        children = undefined, 
        class: className = "", 
        element = $bindable(),
        href = undefined,
        external = false,
        variant = "bordered",
        size = "md",
        radius = "md",
        ...restProps
    }: CardProps = $props();

    let combinedClass = $derived(twMerge(
        "text-main-text rounded-lg transition-all ease-in-out bg-gradient-to-br from-sub-background to-sub-background-accent p-4 w-full", 
        href && "block hover:bg-sub-background-hover cursor-pointer",
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

    const anchorProps = $derived(getLinkProps(href, external, false));
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    style={mergedStyle}
    {...anchorProps}
    {...restProps}
    bind:this={element}
>
    {@render children?.()}
</svelte:element>
