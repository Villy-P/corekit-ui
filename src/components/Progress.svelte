<script lang="ts">
    import { onMount } from "svelte";
    import type { ProgressProps } from "../types/Progress.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        divClass = "",
        progress = 100,
        animate = undefined,
        ...restProps
    }: ProgressProps = $props();

    let currentProgress = $state(0);

    let defaultDivClass = "w-full h-2 bg-sub-background rounded-full overflow-hidden";

    let combinedDivClass = $derived(twMerge(defaultDivClass, divClass));

    onMount(() => {
        if (!animate) return;
        currentProgress = animate.from;
        requestAnimationFrame(() => currentProgress = animate.to);
        if (animate.onend) setTimeout(animate.onend, animate.duration);
    });
</script>

<div class={combinedDivClass} {...restProps}>
    <div class="h-full bg-blue-500 rounded-full" style="width: {animate ? currentProgress : progress}%; transition: width {animate?.duration ?? progress}ms ease;"></div>
</div>