<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children, 
        class: className, 
        pill = false,
    } = $props();

    let pillClass = "rounded-full";
    let defaultClass = $derived("text-white cursor-pointer px-2 py-1" + (pill ? pillClass : ""));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<button class={combinedClass}> {@render children?.()} </button>