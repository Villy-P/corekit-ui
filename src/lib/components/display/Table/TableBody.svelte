<script lang="ts">
  import { twMerge } from "tailwind-merge";


    import type { TableBodyProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: TableBodyProps = $props();

    const combinedTableBodyClass = $derived(twMerge(
        "[&_tr]:even:bg-sub-background [&_tr]:odd:bg-sub-background-hover",
        className
    ));
</script>

<tbody class={combinedTableBodyClass} bind:this={element} {...restProps}>
    {@render children?.()}
</tbody>