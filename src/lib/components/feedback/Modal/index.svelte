<script lang="ts">
    import type { ModalProps } from "./types";
    import { fade, fly } from "svelte/transition";
    import Card from "../../display/Card/index.svelte";
    import { modalPositionParts } from "$lib/styles/posititon.js";
    import { getSizeStyleClass } from "$lib/styles/size.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        open = $bindable(), 
        position = "center",
        size = "md",
        ...restProps
    }: ModalProps = $props();

    const combinedOuterDivClass = $derived(twMerge(
        "w-full h-screen fixed bg-black/50 z-300 flex top-0 left-0 p-4 flex flex-col",
        modalPositionParts[position]
    ));

    const combinedCardClass = $derived(twMerge(
        "overflow-y-auto max-h-[95vh] w-full",
        className
    ));
</script>

{#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={combinedOuterDivClass} transition:fade={{ duration: 200 }} onclick={() => open = false} bind:this={element}>
        <div transition:fly={{ y: -20, duration: 200 }} onclick={(e) => e.stopPropagation()}>
            <Card class={combinedCardClass} {...restProps}>
                {@render children()}
            </Card>
        </div>
    </div>
{/if}