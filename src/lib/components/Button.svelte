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
        if (typeof size === "string") {
            const parts = sizeStyleParts[size as SizeStyleTheme];
            return icon ? parts.buttonIcon : parts.button;
        }
        return icon ? "p-0 flex-none" : "h-fit";
    });

    const customStyle = $derived(
        typeof size === "number" 
            ? `width: ${size}px; height: ${size}px; flex: none;` 
            : ""
    );

    const defaultClass = "inline-flex items-center justify-center gap-2 transition-colors duration-300 text-white whitespace-nowrap";
    const radiusClass = $derived(pill || icon ? "rounded-full" : sizeStyleParts[radius as SizeStyleTheme].radius);
    const disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "cursor-pointer");

    const mergedClass = $derived(twMerge(
        defaultClass, 
        generateColorStyle(color, variant),
        disabledClass,
        sizeClasses,
        radiusClass,
        className
    ));

    const mergedStyle = $derived([customStyle, restProps.style].filter(Boolean).join("; "));
</script>

<svelte:element 
    this={href ? "a" : "button"} 
    class={mergedClass} 
    {disabled}
    aria-disabled={disabled}
    type={href ? undefined : (restProps.type || "button")}
    style={mergedStyle}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    {...(href ? { href } : {})}
    {...restProps}>
    {@render children?.()}
</svelte:element>