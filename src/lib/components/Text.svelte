<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        ...restProps
    } = $props();

    let defaultClass = "text-main-text";    
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<p class={combinedClass} {...restProps}>
    {@render children?.()}
</p>