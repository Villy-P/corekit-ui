<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import Button from "../../inputs/Button/index.svelte";
    import type { NavbarElementProps } from "./types";

    let {
        children = undefined, 
        class: className = "", 
        element = $bindable(),
        classTop = "",
        activeClass = "",
        active = false,
        href = undefined,
        threshold = 10,
        ...restProps
    }: NavbarElementProps = $props();

    let defaultClass = "navbar-element w-fit h-fit mx-2 px-2 py-1 rounded text-main-text";

    let scrollY = $state(0);
    let isAtTop = $derived(scrollY <= threshold);

    const combinedClass = $derived(twMerge(
        defaultClass,
        className,
        active ? activeClass : "",
        isAtTop ? classTop : "",
    ));
</script>

<svelte:window bind:scrollY={scrollY}/>

<Button bind:element radius="none" {href} color="sub" class={combinedClass} {...restProps} aria-current={active ? 'page' : undefined}>
    {@render children?.()}
</Button>