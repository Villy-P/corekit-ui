<script lang="ts">
    import type { TextProps } from "$lib/types/Text.js";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        tag = "p",
        ...restProps
    }: TextProps = $props();

    let defaultClass = "text-main-text";    
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element this={tag} class={combinedClass} {...restProps}>
    {@render children?.()}
</svelte:element>