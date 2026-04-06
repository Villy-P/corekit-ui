<script lang="ts">
    import { generateColorStyle } from "$lib/styles/color.js";
    import { sizeStyleParts, type SizeStyleTheme, type SizeStyle } from "$lib/styles/size.js";
    import type { ButtonProps } from "$lib/types/Button.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        pill = false,
        icon = false,
        square = false,
        href = undefined,
        color = "none",
        variant = "full",
        disabled = false,
        external = false,
        size = "md",
        radius = "md",
        ...restProps
    }: ButtonProps = $props();

    const sizeClasses = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        const radiusParts = typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null;

        return twMerge(
            icon ? "p-0 flex-none" : "h-fit",
            parts?.[icon ? "buttonIcon" : "button"],
            radiusParts?.radius,
            pill || icon ? "rounded-full" : "",
            square ? "aspect-square rounded-none" : ""
        );
    });

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number") {
            styles.push(`height: ${size}px`);
            styles.push(icon
                ? `width: ${size}px; padding: ${size / 8}px`
                : `padding: ${size / 4}px ${size / 8}px`
            );
        }

        if (typeof radius === "number") {
            styles.push(`border-radius: ${radius}px`);
        }

        return styles.join("; ");
    });

    const defaultClass = "inline-flex items-center justify-center gap-2 transition-colors duration-300 text-white whitespace-nowrap";
    const disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "cursor-pointer");

    const mergedClass = $derived(twMerge(
        defaultClass, 
        generateColorStyle(color, variant),
        disabledClass,
        sizeClasses,
        className
    ));

    const mergedStyle = $derived([customStyle, restProps.style].filter(Boolean).join("; "));

    const anchorProps = $derived(href ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    } : {});
</script>

<svelte:element 
    this={href ? "a" : "button"} 
    class={mergedClass} 
    {disabled}
    aria-disabled={disabled}
    type={href ? undefined : (restProps.type || "button")}
    style={mergedStyle}
    {...anchorProps}
    {...restProps}>
    {@render children?.()}
</svelte:element>