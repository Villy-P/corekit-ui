<script lang="ts">
    import type { NavbarProps } from "$lib/types/Navbar.js";
    import { onMount } from "svelte";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        classTop = "",
        ...restProps
    }: NavbarProps = $props();

    let defaultClass = "transition-colors duration-300 fixed top-0 left-0 w-full h-14 z-[100] flex items-center bg-main-background border-b-sub-background border-b";

    let scrollY = $state(0);

    let combinedClass = $derived(scrollY === 0 
        ? twMerge(defaultClass, className, classTop)
        : twMerge(defaultClass, className));

    function onScroll() {
        scrollY = window.scrollY;
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