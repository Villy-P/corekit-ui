<script lang="ts">
    import type { TooltipComponent } from "$lib/types/Tooltip.js";
    import { type Snippet } from "svelte";
    import { fly } from "svelte/transition";

    let {
        text,
        position = "top",
        delay = 150,
        children
    }: TooltipComponent = $props();

    const DEFAULT_OFFSET = 0;

    let visible = $state(false);
    let resolvedPosition: string | null = $state(null);
    let offsetX = $state(DEFAULT_OFFSET);
    let trigger: HTMLDivElement;
    let tooltip: HTMLDivElement | null = $state(null);
    let timeout: ReturnType<typeof setTimeout>;
    let overflowing = $state(false);

    function calculatePosition() {
        resolvedPosition = position;
        if (!trigger) return;

        const rect = trigger.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        if (position === "top" && rect.top < 40) resolvedPosition = "bottom";
        else if (position === "bottom" && rect.bottom > vh - 40) resolvedPosition = "top";
        else if (position === "left" && rect.left < 120) resolvedPosition = "right";
        else if (position === "right" && rect.right > vw - 120) resolvedPosition = "left";
        else resolvedPosition = position;
    }

    function calculateOverflow() {
        if (!tooltip || !trigger) return;

        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const vw = window.innerWidth;

        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        const tooltipLeft = triggerCenter - tooltipRect.width / 2;
        const tooltipRight = triggerCenter + tooltipRect.width / 2;
        const padding = 8;

        if (tooltipRight > vw - padding || tooltipLeft < padding) {
            overflowing = true;
            offsetX = tooltipRight > vw - padding
                ? -(tooltipRight - (vw - padding))
                : padding - tooltipLeft;
        } else {
            overflowing = false;
            offsetX = DEFAULT_OFFSET;
        }
    }

    function show() {
        calculatePosition();
        timeout = setTimeout(() => {
            visible = true;
            requestAnimationFrame(calculateOverflow);
        }, delay);
    }

    function hide() {
        clearTimeout(timeout);
        visible = false;
    }

    const positionClasses: Record<string, string> = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };

    const arrowClasses: Record<string, string> = {
        top: "top-full left-1/2 -translate-x-1/2 border-t-form-background",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-form-background",
        left: "left-full top-1/2 -translate-y-1/2 border-l-form-background",
        right: "right-full top-1/2 -translate-y-1/2 border-r-form-background"
    };

    const flyParams = $derived.by(() => {
        const pos = resolvedPosition || position;

        const duration = 100;
        const distance = 8;
        if (pos == "top")
            return { y: distance, duration };
        else if (pos == "bottom")
            return { y: -distance, duration };
        const x = pos == "right" ? -distance : distance;
        return { x, duration };
    });
</script>

{#snippet arrow(pos: string)}
    {@const points = {
        top: "0,0 8,0 4,4",
        bottom: "0,4 4,0 8,4",
        right: "4,0 4,8 0,4",
        left: "0,0 0,8 4,4"
    }[pos]}
    <svg
        width={pos === "left" || pos === "right" ? 4 : 8}
        height={pos === "left" || pos === "right" ? 8 : 4}
        viewBox={pos === "left" || pos === "right" ? "0 0 4 8" : "0 0 8 4"}>
        <polygon {points} fill="currentColor" class="text-form-background" />
    </svg>
{/snippet}

<div
    bind:this={trigger}
    class="relative inline-flex w-fit h-fit"
    onmouseenter={show}
    onmouseleave={hide}
    role="tooltip">
    {@render children()}

    {#if visible}
        <div
            bind:this={tooltip}
            style={position === "top" || position === "bottom" ? `transform: translateX(calc(-50% + ${offsetX}px));` : ""}
            class="absolute z-999999 {positionClasses[resolvedPosition || position]} translate-x-0! pointer-events-none">

            <div class="absolute {arrowClasses[resolvedPosition || position]}">
                {@render arrow(resolvedPosition || position)}
            </div>

            <div 
                transition:fly={flyParams}
                class="px-2 py-1 text-xs text-main-text bg-form-background rounded whitespace-nowrap border border-white/10">
                {text}
            </div>
        </div>
    {/if}
</div>