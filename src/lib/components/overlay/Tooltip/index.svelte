<script lang="ts">
    import type { TooltipPosition } from "$styles/posititon.js";
    import type { TooltipProps } from "./types.js";
    import { tick, type Snippet } from "svelte";
    import { fly } from "svelte/transition";

    import {
        computePosition,
        flip,
        shift,
        offset,
        arrow as arrowMiddleware,
        type Placement
    } from "@floating-ui/dom";

    let {
        text,
        position = "top",
        delay = 150,
        children
    }: TooltipProps = $props();

    let visible = $state(false);
    let x = $state(0);
    let y = $state(0);
    // svelte-ignore state_referenced_locally
    let resolvedPosition: Placement = $state(position);
    let arrowX: number | undefined = $state(undefined);
    let arrowY: number | undefined = $state(undefined);

    let trigger: HTMLDivElement | null = $state(null);
    let tooltipEl: HTMLDivElement | null = $state(null);
    let arrowEl: HTMLDivElement | null = $state(null);
    let timeout: ReturnType<typeof setTimeout>;

    async function updatePosition() {
        if (!trigger || !tooltipEl) return;

        const { x: fx, y: fy, placement, middlewareData } = await computePosition(trigger, tooltipEl, {
            placement: position,
            middleware: [
                offset(8),
                flip(),
                shift({ padding: 8 }),
                arrowMiddleware({ element: arrowEl! })
            ]
        });

        x = fx;
        y = fy;
        resolvedPosition = placement;

        if (middlewareData.arrow) {
            arrowX = middlewareData.arrow.x;
            arrowY = middlewareData.arrow.y;
        }
    }

    function show() {
        timeout = setTimeout(async () => {
            visible = true;
            await tick();
            await updatePosition();
        }, delay);
    }

    function hide() {
        clearTimeout(timeout);
        visible = false;
    }

    const flyParams = $derived.by(() => {
        const duration = 100;
        const distance = 8;
        if (resolvedPosition === "top") return { y: distance, duration };
        if (resolvedPosition === "bottom") return { y: -distance, duration };
        return { x: resolvedPosition === "right" ? -distance : distance, duration };
    });

    const arrowSide = $derived(({
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    } as Record<string, string>)[resolvedPosition.split("-")[0]] ?? "bottom");

    const arrowPoints = $derived(({
        top: "0,0 8,0 4,4",
        bottom: "0,4 4,0 8,4",
        right: "4,0 4,8 0,4",
        left: "0,0 0,8 4,4"
    } as Record<string, string>)[resolvedPosition.split("-")[0]]);

    const isVertical = $derived(
        resolvedPosition.startsWith("top") || resolvedPosition.startsWith("bottom")
    );
</script>

<div
    role="presentation"
    bind:this={trigger}
    class="inline-flex w-fit h-fit"
    onmouseenter={show}
    onmouseleave={hide}
>
    {@render children()}
</div>

{#if visible}
    <div
        bind:this={tooltipEl}
        role="tooltip"
        style="position: fixed; top: {y}px; left: {x}px;"
        class="z-999999 pointer-events-none"
    >
        <div
            bind:this={arrowEl}
            style="
                position: absolute;
                {arrowSide}: -4px;
                {arrowX != null ? `left: ${arrowX}px` : ''};
                {arrowY != null ? `top: ${arrowY}px` : ''};
            "
        >
            <svg
                width={isVertical ? 8 : 4}
                height={isVertical ? 4 : 8}
                viewBox={isVertical ? "0 0 8 4" : "0 0 4 8"}
            >
                <polygon points={arrowPoints} fill="currentColor" class="text-form-background" />
            </svg>
        </div>

        <div
            transition:fly={flyParams}
            class="px-2 py-1 text-xs text-main-text bg-form-background rounded whitespace-nowrap border border-white/10"
        >
            {text}
        </div>
    </div>
{/if}