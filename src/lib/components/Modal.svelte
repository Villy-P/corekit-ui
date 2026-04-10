<script lang="ts">
    import type { ModalProps } from "$lib/types/Modal.js";
    import { fade, fly } from "svelte/transition";
    import Card from "./Card.svelte";
    import { positionParts } from "$lib/styles/posititon.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        open = $bindable(), 
        position = "center",
        ...restProps
    }: ModalProps = $props();

    const defaultOuterDivClass = "w-full h-screen fixed bg-black/50 z-200 flex items-center justify-center top-0 left-0 p-4";
    const combinedOuterDivClass = $derived(twMerge(defaultOuterDivClass));

    const defaultInnerDivClass = "z-300 max-h-full absolute";
    const positionInnerDivClass = $derived(positionParts[position] || "");
    const combinedInnerDivClass = $derived(twMerge(defaultInnerDivClass, positionInnerDivClass));

    const defaultCardClass = "overflow-y-auto max-h-[95vh]";
    const combinedCardClass = $derived(twMerge(defaultCardClass, className));
</script>

{#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class={combinedOuterDivClass} transition:fade={{ duration: 200 }} onclick={() => open = false}>
        <div class={combinedInnerDivClass} transition:fly={{ y: -20, duration: 200 }} onclick={(e) => e.stopPropagation()}>
            <Card class={combinedCardClass} {...restProps}>
                {@render children()}
            </Card>
        </div>
    </div>
{/if}