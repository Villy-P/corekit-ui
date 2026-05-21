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

    import ChevronUp from "@lucide/svelte/icons/chevron-up";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";

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

    function toggle() {
        open = !open;
    }

    function handleClickOutside(event: MouseEvent) {
        const target = event.target as Node;
        if (element && !element.contains(target))
            open = false;
    }
</script>

<svelte:window onclick={handleClickOutside} />

<NavbarElement
    onclick={toggle}
    class="{className} relative {wrapperClass}"
    bind:element
    {...restProps}
    aria-haspopup="true"
    aria-expanded={open}
>
    {label}
    {#if navelement}
        {@render navelement()}
    {/if}
    <span class="sr-only">{open ? 'Close' : 'Open'} dropdown</span>
    <ChevronDown
        class="mt-0.5 transition-transform ease-out duration-150 {open ? 'rotate-180' : 'rotate-0'}"
        size="16"/>
</NavbarElement>

{#if open}
    <div
        use:initDropdown
        role="menu"
        style="position: fixed; top: {y}px; left: {x}px;"
        class="z-100 shadow-lg"
        style:visibility={ready ? "visible" : "hidden"}
    >
        <menu
            transition:fly={flyParams}
            class="bg-sub-background p-2 min-w-max flex flex-col rounded border border-white/10 shadow-xl shadow-black/40"
        >
            <button onclick={() => (open = false)} class="contents *:w-full [&_button]:justify-start [&_a]:justify-start *:mx-0 [&_a]:pr-5">
                {@render children?.()}
            </button>
        </menu>
    </div>
{/if}