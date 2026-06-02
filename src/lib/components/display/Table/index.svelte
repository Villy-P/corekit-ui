<script lang="ts">
    import { defaultTableClass } from "../table";
    import type { TableProps } from "./types";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        size = "md",
        radius = "md",
        ...restProps
    }: TableProps = $props();

    const combinedTableClass = $derived(twMerge(
        defaultTableClass,
        className
    ));
</script>

<div class="overflow-auto w-full" bind:this={element}>
    <table {...restProps} class={combinedTableClass}>
        {@render children()}
    </table>
</div>