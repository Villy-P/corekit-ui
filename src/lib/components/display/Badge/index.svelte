<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BadgeProps } from "./types";
    import { multiAction } from "$lib/utils/multiAction";
    import { getGradientStyle } from "$lib/styles/color";
    import { getColorClasses } from "$lib/styles/color";
    import { getBadgeColors } from "./color";
    import { getSizeStyle, getSizeStyleClassRecord, getSizeStyleClass } from "$lib/styles/size";
    import { buttonSizeStyles } from "$lib/components/inputs/Button/size";
    
    let {
        class: className = "",
        children = undefined,
        element = $bindable(),
        use = [],
        style = "",

        color = "primary",
        variant = "default",
        size = "md",
        radius = "md",
        pill = false,

        ...restProps
    }: BadgeProps = $props();

    const combinedClass = $derived(twMerge(
        "inline-flex items-center justify-center gap-2 ease-in-out text-white whitespace-nowrap select-none",
        getColorClasses(color, variant, false, getBadgeColors),
        getSizeStyleClassRecord(size, buttonSizeStyles),
        getSizeStyleClass(radius, "radius"),
        pill && "rounded-full",
        className
    ));

    const mergedStyle = $derived([
        typeof size === "number"
            ? `height: ${size}px; padding: ${size / 4}px ${size / 8}px`
            : "",
        getSizeStyle(radius, "radius"),
        getGradientStyle(color),
        style,
    ].filter(Boolean).join("; "));
</script>

<div class={combinedClass} style={mergedStyle} bind:this={element} use:multiAction={use} {...restProps}>
    {@render children?.()}
</div>