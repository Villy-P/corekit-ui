<script lang="ts">
    import type { TableHeaderProps } from "./types";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: TableHeaderProps = $props();
</script>

<thead class={className} bind:this={element} {...restProps}>
    {@render children?.()}
</thead>