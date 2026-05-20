<script lang="ts">
    import { generateColorStyle } from "../../../styles/color";
    import {
        getSizeStyle,
        getSizeStyleClass,
        getSizeStyleClassRecord,
    } from "../../../styles/size";
    import type { ButtonProps } from "./types.ts";
    import { twMerge } from "tailwind-merge";
    import { getLinkProps } from "../../../utils/link.ts";
    import Loader from "../../feedback/Loader/index.svelte";
    import { buttonIconSizeStyles, buttonSizeStyles } from "./size.ts";

    let {
        children = undefined,
        class: className = "",
        element = $bindable(),
        pill = false,
        icon = false,
        square = false,
        href = undefined,
        color = "primary",
        variant = "full",
        disabled = false,
        external = false,
        size = "md",
        radius = "md",
        loading = false,
        ...restProps
    }: ButtonProps = $props();

    const isDisabled = $derived(disabled || loading);

    const mergedClass = $derived(twMerge(
        "inline-flex items-center justify-center gap-2 transition-colors duration-300 ease-in-out text-white whitespace-nowrap",
        generateColorStyle(color, variant),
        isDisabled ? "opacity-50 pointer-events-none" : "cursor-pointer",
        getSizeStyleClassRecord(size, icon ? buttonIconSizeStyles : buttonSizeStyles),
        getSizeStyleClass(radius, "radius"),
        icon ? "p-0 flex-none" : "h-fit",
        (pill || icon) && "rounded-full",
        square && "aspect-square rounded-none",
        className,
    ));

    const mergedStyle = $derived([
        typeof size === "number"
            ? icon
                ? `height: ${size}px; width: ${size}px; padding: ${size / 4}px`
                : `height: ${size}px; padding: ${size / 4}px ${size / 8}px`
            : "",
        getSizeStyle(radius, "radius"),
        restProps.style,
    ].filter(Boolean).join("; "));
</script>

<svelte:element
    this={href ? "a" : "button"}
    class={mergedClass}
    disabled={isDisabled}
    aria-disabled={isDisabled}
    aria-busy={loading}
    type={href ? undefined : restProps.type || "button"}
    style={mergedStyle}
    {...getLinkProps(href, external, isDisabled)}
    {...restProps}
    bind:this={element}
>
    {#if loading}
        <Loader color="white" class="border-2 border-loader-btn-color {getSizeStyleClass(size, 'buttonLoader')}" />
    {/if}
    {@render children?.()}
</svelte:element>
