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
        element = $bindable<HTMLDialogElement>(),
        open = $bindable(false), 
        position = "center",
        size = "md",
        ...restProps
    }: ModalProps = $props();

    $effect(() => {
        if (!element) return;
        if (open) {
            (element as HTMLDialogElement).showModal();
        } else {
            (element as HTMLDialogElement).close();
        }
    });

    function onclose() {
        open = false;
    }

    const outerClass = $derived(twMerge(
        "inset-0 flex flex-col w-[calc(100%-1rem)] h-[calc(100%-1rem)] p-4",
        modalPositionParts[position]
    ));

    const cardClass = $derived(twMerge(
        "max-h-[95vh] overflow-y-auto",
        getSizeStyleClass(size, "card"),
        className
    ));
</script>

<dialog
    bind:this={element}
    class="w-full h-screen bg-black/50 z-300 fixed top-0 left-0 p-0 m-0 max-w-none max-h-none"
    transition:fade={{ duration: 200 }}
    onclick={() => open = false}
    onclose={onclose}
    {...restProps}
>
    {#if open}
        <div class={outerClass} transition:fly={{ y: -20, duration: 200 }}>
            <Card class={cardClass} onclick={(e: MouseEvent) => e.stopPropagation()}>
                {@render children?.()}
            </Card>
        </div>
    {/if}
</dialog>