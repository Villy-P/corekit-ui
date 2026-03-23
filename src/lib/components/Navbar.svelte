<script lang="ts">
    import { onMount } from "svelte";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        classTop = "",
        ...restProps
    } = $props();

    let defaultClass = "transition-colors duration-300 fixed top-0 left-0 w-full z-50 flex items-center";

    let combinedClass = $derived(twMerge(defaultClass, className));

    function onScroll() {
        combinedClass = window.scrollY === 0 
            ? twMerge(defaultClass, className, classTop)
            : twMerge(defaultClass, className);
    }

    onMount(() => {
        window.addEventListener('scroll', onScroll);
        onScroll(); 

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    });
</script>

<nav class={combinedClass} {...restProps}>
    {@render children?.()}
</nav>