<script lang="ts">
    import type { AccordionItemProps } from "./types.ts";
	import { Button } from "$components/inputs";
	import { slide } from "svelte/transition";

    import ChevronRight from "@lucide/svelte/icons/chevron-right";

	let { 
        children = undefined, 
        class: className = "",
        title = "",
        open = false,
        disabled = false,
        ontoggle = undefined,
        ...restProps
    }: AccordionItemProps = $props();

    function toggle() {
        if (disabled) return;
        open = !open;
        ontoggle?.(open);
    }

    const combinedClass = $derived([
        "w-full bg-sub-background rounded",
        className
    ].filter(Boolean).join(" "));

    const buttonClass = $derived([
        "justify-start p-2 w-full gap-1",
        disabled ? "cursor-not-allowed opacity-50" : "",
        open ? "rounded-b-none" : "rounded"
    ].filter(Boolean).join(" "));
</script>

<div class={combinedClass} {...restProps}>
	<Button class={buttonClass} size="full" color="sub" onclick={toggle} aria-expanded={open}>
        <ChevronRight size={18} class="transition-transform duration-200 {open ? "rotate-90" : ""}"/>
		{title}
	</Button>

	{#if open}
		<div class="content p-2 border-t border-t-sub-background-border" transition:slide={{ duration: 200 }}>
			{@render children()}
		</div>
	{/if}
</div>
