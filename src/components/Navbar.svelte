<script lang="ts">
    import type { NavbarProps } from "../types/Navbar.ts";
    import { onMount } from "svelte";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        classTop = "",
        threshold = 10,
        ...restProps
    }: NavbarProps = $props();

    let defaultClass = "transition-colors duration-300 fixed top-0 left-0 w-full h-14 z-[100] flex items-center bg-main-background/99 border-b-sub-background border-box border-b";

    let scrollY = $state(0);
    let isAtTop = $derived(scrollY <= threshold);

    const combinedClass = $derived(twMerge(
        defaultClass,
        className,
        isAtTop ? classTop : ""
    ));
</script>

<svelte:window bind:scrollY={scrollY}/>

<nav class={combinedClass} {...restProps}>
    {@render children?.()}
</nav>