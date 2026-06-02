<script lang="ts">
    import type { TableProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        size = "md",
        radius = "md",
        ...restProps
    }: TableProps = $props();
</script>

<thead class={className} bind:this={element} {...restProps}>
    {@render children()}
</thead>