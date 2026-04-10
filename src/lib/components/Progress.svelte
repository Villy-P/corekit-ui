<script lang="ts">
    import { onMount } from "svelte";
    import type { ProgressProps } from "../types/Progress.ts";
    import { twMerge } from "tailwind-merge";
    import { colorStyleParts } from "../styles/color.ts";
    import { sizeStyleParts, type SizeStyleTheme } from "../styles/size.ts";

    let { 
        children = undefined, 
        class: className = "",
        divClass = "",
        progress = 100,
        animate = undefined,
        color = "blue",
        size = "md",
        radius = "full",
        ...restProps
    }: ProgressProps = $props();

    let mounted = $state(false);

    let defaultDivClass = "w-full bg-sub-background overflow-hidden";

    const sizeClasses = $derived.by(() => {
        const parts = typeof size === "string" ? sizeStyleParts[size as SizeStyleTheme] : null;
        const radiusParts = typeof radius === "string" ? sizeStyleParts[radius as SizeStyleTheme] : null;

        return twMerge(
            parts?.progress,
            radiusParts?.radius
        );
    });

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`height: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });


    let combinedDivClass = $derived(twMerge(
        defaultDivClass,
        sizeClasses,
        divClass
    ));

    let combinedInnerClass = $derived(twMerge(
        "h-full",
        sizeClasses,
        colorStyleParts[color]?.base,
        className
    ))

    onMount(() => {
        if (!animate) return;
        requestAnimationFrame(() => mounted = true);
        if (animate.onend) setTimeout(animate.onend, animate.duration);
    });
</script>

<div class={combinedDivClass} {...restProps} style="--duration: {animate?.duration}ms; {customStyle}">
    <div class={combinedInnerClass} style="width: {animate ? (mounted ? animate?.to : animate?.from) : progress}%; transition: width var(--duration) linear;"></div>
</div>