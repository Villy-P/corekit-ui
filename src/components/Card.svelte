<script lang="ts">
    import { cardVariantStyles, type CardProps } from "../types/Card.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        href = undefined,
        external = false,
        variant = "bordered",
        ...restProps
    }: CardProps = $props();

    let defaultClass = "text-main-text rounded-lg transition-colors bg-sub-background p-4";
    let linkClass = "hover:bg-sub-background-hover cursor-pointer";
    let combinedClass = $derived(twMerge(
        defaultClass, 
        href ? linkClass : "",
        cardVariantStyles[variant],
        className
    ));

    const anchorProps = $derived(href ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    } : {});
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    {...anchorProps}
    {...restProps}
>
    {@render children?.()}
</svelte:element>