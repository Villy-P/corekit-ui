<script lang="ts">
    import { type Snippet } from "svelte";
    import { fly } from "svelte/transition";

    let {
        text,
        position = "top",
        delay = 0,
        children
    }: {
        text: string;
        position?: "top" | "bottom" | "left" | "right";
        delay?: number;
        children: Snippet;
    } = $props();

    let visible = $state(false);
    let resolvedPosition: string | null = $state(null);
    let offsetX = $state(0);
    let trigger: HTMLDivElement;
    let tooltip: HTMLDivElement | null = $state(null);
    let timeout: ReturnType<typeof setTimeout>;
    let arrowX = $derived(-offsetX);

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

        if (tooltipRight > vw - padding)
            offsetX = -(tooltipRight - (vw - padding));
        else if (tooltipLeft < padding)
            offsetX = padding - tooltipLeft;
        else
            offsetX = 0;
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
            style="transform: translateX(calc(-50% + {offsetX}px));"
            class="absolute z-999999 {positionClasses[resolvedPosition || position]} translate-x-0! pointer-events-none">
            <div 
                transition:fly={flyParams}
                class="px-2 py-1 text-xs text-main-text bg-form-background rounded whitespace-nowrap">
                {text}

                <div 
                    class="absolute {arrowClasses[resolvedPosition || position]} border-4 border-transparent w-0 h-0"
                    style="transform: translateX(calc(-50% + {arrowX}px));"
                ></div>
            </div>
        </div>
    {/if}
</div>