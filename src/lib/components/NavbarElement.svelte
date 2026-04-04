<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Button from "./Button.svelte";
    import type { NavbarElementProps } from "$lib/types/Navbar.js";
    import { page } from "$app/state";

    let {
        children = undefined, 
        class: className = "", 
        classTop = "",
        activeClass = "",
        href = undefined,
        threshold = 10,
        ...restProps
    }: NavbarElementProps = $props();

    let defaultClass = "navbar-element w-fit h-full px-5 py-0 text-main-text hover:bg-navbar-element-hover-background";
    let defaultActiveClass = "bg-navbar-element-hover-background hover:bg-none";

    let scrollY = $state(0);
    let isAtTop = $derived(scrollY <= threshold);
    let isActive = $derived(page.url.pathname === href);

    let combinedActiveClass = $derived(twMerge(defaultActiveClass, activeClass));

    const combinedClass = $derived(twMerge(
        defaultClass,
        className,
        isActive ? combinedActiveClass : "",
        isAtTop ? classTop : "",
    ));
</script>

<svelte:window bind:scrollY={scrollY}/>

<Button radius={0} {href} class={combinedClass} {...restProps} aria-current={isActive ? 'page' : undefined}>
    {@render children?.()}
</Button>