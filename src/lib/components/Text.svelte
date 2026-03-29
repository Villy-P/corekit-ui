<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        tag = "p",
        ...restProps
    } = $props();

    let defaultClass = "text-main-text";    
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<svelte:element this={tag} class={combinedClass} {...restProps}>
    {@render children?.()}
</svelte:element>