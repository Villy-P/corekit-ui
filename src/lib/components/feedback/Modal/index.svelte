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

    const outerClass = $derived(twMerge(
        "fixed inset-0 z-300 flex flex-col bg-black/50 p-4",
        modalPositionParts[position]
    ));

    const cardClass = $derived(twMerge(
        "w-full max-h-[95vh] overflow-y-auto",
        getSizeStyleClass(size, "card"),
        className
    ));
</script>

{#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class={outerClass}
        transition:fade={{ duration: 200 }}
        onclick={() => open = false}
        bind:this={element}>
        <div
            transition:fly={{ y: -20, duration: 200 }}
            onclick={(e) => e.stopPropagation()}>
            <Card class={cardClass} {...restProps}>
                {@render children()}
            </Card>
        </div>
    </div>
{/if}