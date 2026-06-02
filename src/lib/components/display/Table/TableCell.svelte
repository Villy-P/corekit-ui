<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import { defaultTableCellClass } from "../table";
    import type { TableCellProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: TableCellProps = $props();

    const combinedTableCellClass = $derived(twMerge(
        defaultTableCellClass,
        className
    ));
</script>

<td class={combinedTableCellClass} bind:this={element} {...restProps}>
    {@render children?.()}
</td>