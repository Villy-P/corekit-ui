<script lang="ts">
    import { setContext } from "svelte";
    import type { TreeProps, TreeContext } from "./types.ts";
	import { twMerge } from "tailwind-merge";

    let {
        children,
        class: className = "",
        ...restProps
    }: TreeProps = $props();

    setContext<TreeContext>('tree', {
        depth: 0
    });

    const combinedClass = $derived(twMerge(
        "w-full",
        className
    ));
</script>

<ul class={combinedClass} role="tree" {...restProps}>
    {@render children?.()}
</ul>