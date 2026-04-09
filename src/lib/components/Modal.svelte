<script lang="ts">
    import type { ModalProps } from "$lib/types/Modal.js";
    import { fade, fly } from "svelte/transition";
    import Card from "./Card.svelte";

    let { 
        children = undefined, 
        class: className = "",
        open = $bindable(), 
        ...restProps
    }: ModalProps = $props();
</script>

{#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="flex-center w-full h-screen absolute top-0 left-0 bg-black/50 z-200" transition:fade={{ duration: 200 }} onclick={() => open = false}>
        <div transition:fly={{ y: -20, duration: 200 }} onclick={(e) => e.stopPropagation()}>
            <Card {className} {...restProps}>
                {@render children()}
            </Card>
        </div>
    </div>
{/if}