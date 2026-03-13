<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        ...restProps
    } = $props();

    let defaultClass = "bg-transparent transition-colors duration-300 backdrop-blur-[3px] fixed top-0 left-0 w-full z-50 flex items-center";

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<nav class={combinedClass} {...restProps}>
    {@render children?.()}
</nav>