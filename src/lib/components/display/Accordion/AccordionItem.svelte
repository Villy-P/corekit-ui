<script module>
    let counter = 0;
</script>

<script lang="ts">
    import { getContext } from "svelte";
    import type { AccordionItemProps, AccordionContext } from "./types.ts";
    import { Button } from "$components/inputs";
    import { slide } from "svelte/transition";
    import ChevronRight from "@lucide/svelte/icons/chevron-right";

    let { 
        children = undefined, 
        class: className = "",
        title = "",
        open = $bindable(false),
        static: isStatic = false,
        disabled = false,
        ontoggle = undefined,
        id = "accordion-item-" + counter++,
        ...restProps
    }: AccordionItemProps = $props();

    const ctx = getContext<AccordionContext | undefined>('accordion');

    const isOpen = $derived(ctx ? ctx.activeIds.has(id) : open);

    function toggle() {
        if (disabled || isStatic) return;
        if (ctx)
            ctx.setActive(id);
        else
            open = !open;
        ontoggle?.(!isOpen);
    }

    const combinedClass = $derived([
        "w-full bg-sub-background rounded-none",
        className
    ].filter(Boolean).join(" "));

    const buttonClass = $derived([
        "justify-start p-2 w-full gap-1 rounded-none",
        disabled ? "cursor-not-allowed opacity-50" : "",
        isStatic ? "cursor-default" : "",
        isOpen ? "border-b border-b-sub-background-border" : "",
    ].filter(Boolean).join(" "));
</script>

<div class={combinedClass} {...restProps}>
    {#if !isStatic}
        <Button class={buttonClass} size="full" color="sub" onclick={toggle} aria-expanded={isOpen}>
            <ChevronRight size={18} class="transition-transform duration-200 {isOpen ? 'rotate-90' : ''}"/>
            {title}
        </Button>
    {/if}

    {#if isOpen || isStatic}
        <div class="content p-2" transition:slide={{ duration: 200 }}>
            {@render children?.()}
        </div>
    {/if}
</div>