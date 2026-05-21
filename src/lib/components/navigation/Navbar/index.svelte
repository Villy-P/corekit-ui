<script lang="ts">
    import type { NavbarProps } from "./types.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "", 
        classTop = "",
        threshold = 10,
        element = $bindable(),
        ...restProps
    }: NavbarProps = $props();

    let defaultClass = "transition-colors duration-300 fixed top-0 left-0 w-full h-14 z-[100] flex items-center bg-sub-background/99 border-b border-box border-b-sub-background-hover px-4 md:px-6 lg:px-8";

    let scrollY = $state(0);
    let isAtTop = $derived(scrollY <= threshold);

    const combinedClass = $derived(twMerge(
        defaultClass,
        className,
        isAtTop ? classTop : ""
    ));
</script>

<svelte:window bind:scrollY={scrollY}/>

<nav class={combinedClass} {...restProps} bind:this={element}>
    {@render children?.()}
</nav>
