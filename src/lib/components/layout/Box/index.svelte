<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BoxProps } from "./types";
    
    let {
        center = false,
        fullscreen = false,
        class: className = "",
        children = undefined,
        element = undefined,
        tag = "div",
        ...restProps
    }: BoxProps = $props();

    let combinedClass = $derived(twMerge(
        center ? "flex-center" : "",
        fullscreen ? "w-full h-full" : "",
        className
    ));
</script>

<svelte:element this={tag} class={combinedClass} {...restProps} bind:this={element}>
    {@render children()}
</svelte:element>