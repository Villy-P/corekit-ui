<script lang="ts">
    import type { CardProps } from "$lib/types/Card.js";
    import type { SvelteComponent } from "svelte";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        href = undefined,
        ...restProps
    }: CardProps = $props();

    let defaultClass = "text-main-text shadow-xl radius-lg transition-colors bg-sub-background hover:bg-sub-background-hover p-4";    
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    {...(href ? { href } : {})}
    {...restProps}
>
    {@render children?.()}
</svelte:element>