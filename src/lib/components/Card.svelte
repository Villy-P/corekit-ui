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

    let defaultClass = "text-main-text shadow-xl rounded-lg transition-colors bg-sub-background hover:bg-sub-background-hover p-4";    
    let combinedClass = $derived(twMerge(defaultClass, className));

    let Tag: keyof HTMLElementTagNameMap = href ? "a" : "div";
</script>

<svelte:element
    this={Tag}
    class={combinedClass}
    {...(href ? { href } : {})}
    {...restProps}
>
    {@render children?.()}
</svelte:element>