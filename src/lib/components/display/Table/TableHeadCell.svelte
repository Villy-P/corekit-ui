<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import { defaultTableCellClass, defaultTableHeaderClass } from "../table";
    import type { TableHeadCellProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        size = "md",
        radius = "md",
        ...restProps
    }: TableHeadCellProps = $props();

    const combinedTableHeaderClass = $derived(twMerge(
        defaultTableHeaderClass,
        defaultTableCellClass,
        className
    ));
</script>

<th class={combinedTableHeaderClass} bind:this={element} {...restProps}>
    {@render children()}
</th>