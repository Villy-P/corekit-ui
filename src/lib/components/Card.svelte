<script lang="ts">
    import type { CardProps } from "$lib/types/Card.js";
    import type { SvelteComponent } from "svelte";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        href = undefined,
        external = false,
        ...restProps
    }: CardProps = $props();

    let defaultClass = "text-main-text rounded-lg transition-colors bg-sub-background border-[1px] border-sub-background-hover p-4";
    let linkClass = "hover:bg-sub-background-hover cursor-pointer";
    let combinedClass = $derived(twMerge(
        defaultClass, 
        href ? linkClass : "",
        className
    ));

    const anchorProps = $derived(href ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    } : {});
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    {...anchorProps}
    {...restProps}
>
    {@render children?.()}
</svelte:element>