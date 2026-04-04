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

    let defaultClass = "navbar-element w-fit h-full px-5 py-0 text-main-text";

    let scrollY = $state(0);
    let isAtTop = $derived(scrollY <= threshold);
    let isActive = $derived(page.url.pathname === href);

    const combinedClass = $derived(twMerge(
        defaultClass,
        className,
        isActive ? activeClass : "",
        isAtTop ? classTop : "",
    ));
</script>

<svelte:window bind:scrollY={scrollY}/>

<Button radius={0} {href} color="none" class={combinedClass} {...restProps} aria-current={isActive ? 'page' : undefined}>
    {@render children?.()}
</Button>