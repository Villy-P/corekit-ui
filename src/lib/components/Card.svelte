<script lang="ts">
    import { sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";
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

    const sizeClasses = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        const radiusParts = typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null;

        return twMerge(
            parts?.card,
            radiusParts?.radius,
        );
    });

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    let defaultClass = "text-main-text rounded-lg transition-colors ease-in-out bg-sub-background p-4";
    let linkClass = "hover:bg-sub-background-hover cursor-pointer";
    let combinedClass = $derived(twMerge(
        defaultClass, 
        href ? linkClass : "",
        cardVariantStyles[variant],
        sizeClasses,
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
    style={customStyle}
    {...anchorProps}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
