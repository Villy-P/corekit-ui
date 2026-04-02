<script lang="ts">
    import { generateColorStyle } from "$lib/styles/color.js";
    import { sizeStyleParts, type SizeStyle } from "$lib/styles/size.js";
    import type { ButtonProps, ButtonType } from "$lib/types/Button.js";
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
        ...restProps
    }: ButtonProps = $props();

    const sizeClasses = $derived.by(() => {
        if (typeof size === "string") {
            const parts = sizeStyleParts[size as SizeStyle];
            return icon ? parts.buttonIcon : parts.button;
        }
        return icon ? "p-0 flex-none" : "h-fit";
    });

    const customStyle = $derived(
        typeof size === "number" 
            ? `width: ${size}px; height: ${size}px; flex: none;` 
            : ""
    );

    const defaultClass = $derived(twMerge(
        "inline-flex items-center justify-center transition-colors duration-300",
        "text-white whitespace-nowrap",
        pill || icon ? "rounded-full" : "rounded-md",
        disabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        generateColorStyle(color, variant), 
        sizeClasses
    ));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element 
    this={href ? "a" : "button"} 
    class={combinedClass} 
    {disabled}
    aria-disabled={disabled}
    type={href ? undefined : (restProps.type || "button")}
    style={customStyle + (restProps.style || "")}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    {...(href ? { href } : {})}
    {...restProps}>
    {@render children?.()}
</svelte:element>