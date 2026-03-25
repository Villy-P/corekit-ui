<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        ...restProps
    } = $props();

    let defaultClass = "text-main-text shadow-xl rounded-lg transition-colors bg-sub-background hover:bg-sub-background-hover p-4";    
    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<div class={combinedClass}>
    {@render children?.()}
</div>