<script lang="ts">
    import { positionParts, type PositionStyle } from "$lib/styles/posititon.js";
    import { flip } from "svelte/animate";
    import { toastState, toast } from "../actions/toast.svelte.js";
    import Toast from "./Toast.svelte";

    const getItems = $derived((pos: PositionStyle) => {
        return toastState.items.filter(i => (i.position ?? 'top-right') === pos);
    });
</script>

{#each Object.keys(positionParts) as pos (pos)}
    <div class="fixed z-9999 flex flex-col gap-2 pointer-events-none {positionParts[pos as PositionStyle]}">
        {#each getItems(pos as PositionStyle) as item (item.id)}
            <div class="pointer-events-auto" animate:flip={{ duration: 300 }}>
                <Toast 
                    {...item} 
                    onclose={() => toast.dismiss(item.id)} 
                />
            </div>
        {/each}
    </div>
{/each}