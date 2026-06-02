<script lang="ts">
    import type { TableRowProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: TableRowProps = $props();
</script>

<tr class={className} bind:this={element} {...restProps}>
    {@render children?.()}
</tr>