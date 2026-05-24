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
        color = "sub",
        ...restProps
    }: NavbarElementProps = $props();

    let defaultClass = "navbar-element w-fit h-fit mx-2 px-2.5 py-1.5 rounded text-main-text";

    const combinedClass = $derived(twMerge(
        defaultClass,
        (color === "sub") && "bg-transparent",
        className,
        active ? activeClass : "",
    ));
</script>

<Button bind:element radius="none" {href} {color} class={combinedClass} {...restProps} aria-current={active ? 'page' : undefined}>
    {@render children?.()}
</Button>