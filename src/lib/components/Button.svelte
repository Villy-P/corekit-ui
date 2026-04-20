<script lang="ts">
    import { generateColorStyle } from "../styles/color.ts";
    import { getSizeStyle, getSizeStyleClass, sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";
    import type { ButtonProps } from "../types/Button.ts";
    import { twMerge } from "tailwind-merge";
    import { getLinkProps } from "../utils/link.ts";
  import Loader from "./Loader.svelte";

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
        loading = false,
        ...restProps
    }: ButtonProps = $props();

    const defaultClass = "inline-flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out text-white whitespace-nowrap";
    const disabledClass = $derived(disabled || loading ? "opacity-50 pointer-events-none" : "cursor-pointer");
    const iconClass = $derived(icon ? "p-0 flex-none" : "h-fit");
    const pillClass = $derived((pill || icon) && "rounded-full");
    const squareClass = $derived(square && "aspect-square rounded-none");

    const mergedClass = $derived(twMerge(
        defaultClass, 
        generateColorStyle(color, variant),
        disabledClass,
        getSizeStyleClass(size, icon ? "buttonIcon" : "button"),
        getSizeStyleClass(radius, "radius"),
        iconClass,
        pillClass,
        squareClass,
        className
    ));

    const mergedStyle = $derived([
        getSizeStyle(size, icon ? "buttonIcon" : "button"), 
        getSizeStyle(radius, "radius"), 
        restProps.style
    ].filter(Boolean).join("; "));

    const anchorProps = $derived(getLinkProps(href, external, disabled || loading));
</script>

<svelte:element 
    this={href ? "a" : "button"} 
    class={mergedClass} 
    disabled={disabled || loading}
    aria-disabled={disabled || loading}
    type={href ? undefined : (restProps.type || "button")}
    style={mergedStyle}
    {...anchorProps}
    {...restProps}>
    {#if loading}
        <Loader color="white" class="border-2 border-loader-btn-color {getSizeStyleClass(size, "buttonLoader")}"/>
    {/if}
    {@render children?.()}
</svelte:element>
