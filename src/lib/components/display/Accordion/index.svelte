<script lang="ts">
    import { setContext } from "svelte";
    import type { AccordionProps, AccordionContext } from "./types.ts";

    let {
        children,
        class: className = "",
        exclusive = false,
        ...restProps
    }: AccordionProps = $props();

    let activeIds = $state<Set<string>>(new Set());

    function setActive(id: string | null) {
        if (!id) {
            activeIds = new Set();
            return;
        }
        if (exclusive) {
            activeIds = activeIds.has(id) ? new Set() : new Set([id]);
        } else {
            const next = new Set(activeIds);
            next.has(id) ? next.delete(id) : next.add(id);
            activeIds = next;
        }
    }

    setContext<AccordionContext>('accordion', {
        get exclusive() { return exclusive; },
        get activeIds() { return activeIds; },
        setActive
    });

    const combinedClass = $derived([
        "w-full rounded overflow-hidden divide-y divide-sub-background-border",
        className
    ].filter(Boolean).join(" "));
</script>

<div class={combinedClass} {...restProps}>
    {@render children?.()}
</div>