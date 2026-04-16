<script lang="ts">
    import { fly } from "svelte/transition";
    import NavbarElement from "./NavbarElement.svelte";
    import { tick } from "svelte";

    let {
        children = undefined, 
        class: className = "", 
        label = "",
        element = undefined,
        ...restProps
    } = $props();

    let open = $state(false);
    let dropdownRef: HTMLButtonElement | null = $state(null);
    let timeout: ReturnType<typeof setTimeout>;
    let offsetX = $state(0);
    let flipUp = $state(false);

    function calculateOverflow() {
        if (!dropdownRef) return;

        offsetX = 0;

        const menuRect = dropdownRef.getBoundingClientRect();
        const vw = window.innerWidth;
        const padding = 8;

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
</script>

<div class="relative">
    <NavbarElement onclick={toggle} class={className} {...restProps} aria-haspopup="true" aria-expanded={open}>
        {label}
        {@render element?.()}
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