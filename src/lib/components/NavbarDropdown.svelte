<script lang="ts">
    import { fly } from "svelte/transition";
    import NavbarElement from "./NavbarElement.svelte";
    import { tick } from "svelte";
    import type { NavbarDropdownProps } from "$lib/types/Navbar.js";

    let {
        children = undefined, 
        class: className = "", 
        wrapperClass = "",
        label = "",
        element = undefined,
        ...restProps
    }: NavbarDropdownProps = $props();

    let open = $state(false);
    let dropdownRef: HTMLButtonElement | null = $state(null);
    let wrapperRef: HTMLDivElement | null = $state(null);
    let offsetX = $state(0);
    let flipUp = $state(false);

    function calculateOverflow() {
        if (!dropdownRef) return;

        offsetX = 0;

        const menuRect = dropdownRef.getBoundingClientRect();
        const vw = window.innerWidth;
        const padding = 12;

        flipUp = menuRect.bottom > window.innerHeight - padding;

        if (menuRect.right > vw - padding)
            offsetX = -(menuRect.right - (vw - padding));
        else if (menuRect.left < padding)
            offsetX = padding - menuRect.left;
        else
            offsetX = 0;
    }

    async function toggle() {
        open = !open;
        if (open) {
            await tick();
            calculateOverflow();
        } else {
            offsetX = 0;
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (dropdownRef && !dropdownRef.contains(event.target as Node) && wrapperRef && !wrapperRef.contains(event.target as Node)) {
            open = false;
            offsetX = 0;
        }
    }
</script>

<svelte:window onclick={handleClickOutside}/>

<div class="relative" bind:this={wrapperRef}>
    <NavbarElement onclick={toggle} class={className} {...restProps} aria-haspopup="true" aria-expanded={open}>
        {label}
        {#if element}
            {@render element()}
        {/if}
    </NavbarElement>

    {#if open}
        <div 
            class="absolute {flipUp ? 'bottom-full' : 'top-full'} left-0 z-100 mt-1 overflow-hidden shadow-lg"
            style="transform: translateX({offsetX}px); visibility: {open ? 'visible' : 'hidden'};">
            <button 
                bind:this={dropdownRef}
                transition:fly={{ y: flipUp ? 5 : -5, duration: 200 }} 
                class="bg-sub-background p-2 min-w-max flex flex-col *:px-0 rounded border-sub-background-hover border"
                onclick={() => open = false}>
                {@render children?.()}
            </button>
        </div>
    {/if}
</div>