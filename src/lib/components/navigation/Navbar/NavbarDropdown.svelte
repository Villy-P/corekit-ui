<script lang="ts">
    import { fly } from "svelte/transition";
    import NavbarElement from "./NavbarElement.svelte";
    import type { NavbarDropdownProps } from "./types.js";
    import {
        computePosition,
        flip,
        shift,
        offset,
        autoUpdate,
        type Placement,
    } from "@floating-ui/dom";
    import { tick } from "svelte";

    let {
        children = undefined,
        class: className = "",
        element = $bindable(),
        wrapperClass = "",
        label = "",
        navelement = undefined,
        ...restProps
    }: NavbarDropdownProps = $props();

    let open = $state(false);
    let x = $state(0);
    let y = $state(0);
    let resolvedPlacement: Placement = $state("bottom-start");
    let ready = $state(false);

    const flyParams = $derived(
        resolvedPlacement.startsWith("top")
            ? { y: 5, duration: 150 }
            : { y: -5, duration: 150 }
    );

    function initDropdown(node: HTMLElement) {
        if (!element) return {};

        let cleanup: (() => void) | null = null;

        async function updatePosition() {
            const { x: fx, y: fy, placement } = await computePosition(element!, node, {
                placement: "bottom-start",
                middleware: [offset(4), flip(), shift({ padding: 12 })],
            });
            x = fx;
            y = fy;
            resolvedPlacement = placement;
            ready = true;
        }

        updatePosition().then(() => {
            cleanup = autoUpdate(element!, node, updatePosition);
        });

        return {
            destroy() {
                cleanup?.();
                ready = false;
            }
        };
    }

    async function toggle() {
        if (open) {
            open = false;
        } else {
            ready = false;
            open = true;
        }
    }

    function handleClickOutside(event: MouseEvent) {
        const target = event.target as Node;
        if (element && !element.contains(target))
            open = false;
    }
</script>

<svelte:window onclick={handleClickOutside} />

<div class="relative h-full {wrapperClass}" bind:this={element}>
    <NavbarElement
        onclick={toggle}
        class={className}
        {...restProps}
        aria-haspopup="true"
        aria-expanded={open}
    >
        {label}
        {#if navelement}
            {@render navelement()}
        {/if}
    </NavbarElement>
</div>

{#if open}
    <div
        use:initDropdown
        style="position: fixed; top: {y}px; left: {x}px;"
        class="z-100 shadow-lg"
        style:visibility={ready ? "visible" : "hidden"}
    >
        <div
            transition:fly={flyParams}
            class="bg-sub-background p-2 min-w-max flex flex-col *:px-0 rounded border-sub-background-hover border"
        >
            <button onclick={() => (open = false)} class="contents *:w-full [&_a]:justify-start [&_a]:py-0.5 [&_a]:px-2.5 [&_a]:rounded">
                {@render children?.()}
            </button>
        </div>
    </div>
{/if}