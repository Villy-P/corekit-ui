<script lang="ts">
    import type { TableProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: TableProps = $props();
</script>

<tr class={className} bind:this={element} {...restProps}>
    {@render children?.()}
</tr>