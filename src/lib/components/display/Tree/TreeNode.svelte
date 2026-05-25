<script lang="ts">
    import Text from "../../typography/Text/index.svelte";
    import { getContext, setContext } from "svelte";
    import type { TreeNodeProps, TreeContext } from "./types.ts";
    import { slide } from "svelte/transition";
    import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import { twMerge } from "tailwind-merge";

    let {
        children = undefined,
        class: className = "",
        label = "",
        open = $bindable(false),
        disabled = false,
        ...restProps
    }: TreeNodeProps = $props();

    const ctx = getContext<TreeContext>('tree');

    const depth = ctx.depth;

    setContext<TreeContext>('tree', {
        depth: depth + 1
    });

    function toggle() {
        if (disabled || !children) return;
        open = !open;
    }

    const combinedClass = $derived(twMerge(
        "w-full",
        className
    ));

    const rowClass = $derived(twMerge(
        "flex items-center gap-1 py-1 w-full text-sm",
        disabled ? "opacity-50 cursor-not-allowed" : children ? "cursor-pointer hover:bg-sub-background" : "cursor-default",
    ));
</script>

<li class={combinedClass} role="treeitem" aria-expanded={children ? open : undefined} {...restProps}>
    <Text
        class={rowClass}
        style="padding-left: {depth * 1.25}rem"
        onclick={toggle}
        onkeydown={(e: KeyboardEvent) => e.key === 'Enter' && toggle()}
        tabindex={disabled ? -1 : 0}
        role="button">
        <Text label="span" class="shrink-0 transition-transform duration-200 {open ? 'rotate-90' : ''} {children ? 'visible' : 'invisible'}">
            <ChevronRight size={14} />
        </Text>
        {label}
    </Text>

    {#if open && children}
        <ul class="vpcui-tree-list" role="group" transition:slide={{ duration: 200 }}>
            {@render children()}
        </ul>
    {/if}
</li>

<style>
    :global(.vpcui-tree-list:has(> li[role="treeitem"])) {
        padding-left: 0;
    }

    :global(.vpcui-tree-list:not(:has(> li[role="treeitem"]))) {
        padding-left: 1.25rem;
    }
</style>