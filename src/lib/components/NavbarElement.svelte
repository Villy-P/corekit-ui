<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Button from "./Button.svelte";
    import { onMount } from "svelte";
    import type { NavbarElementProps } from "$lib/types/Navbar.js";

    let {
        children = undefined, 
        class: className = "", 
        classTop = "",
        href = undefined,
        ...restProps
    }: NavbarElementProps = $props();

    let defaultClass = "navbar-element w-fit h-full flex items-center px-5 py-0";

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

<Button {href} class={combinedClass} {...restProps}>
    {@render children?.()}
</Button>