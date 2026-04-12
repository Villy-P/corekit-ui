<script lang="ts">
    import type { SideNavbarProps } from "../types/Navbar.ts";
    import { twMerge } from "tailwind-merge";
    import Button from "./Button.svelte";
    import Text from "./Text.svelte";
    import { page } from '$app/state';

    let { 
        children = undefined, 
        class: className = "", 
        items = [],
        ...restProps
    }: SideNavbarProps = $props();

    let expanded = $state(false);

    const defaultClass = "transition-[width] duration-300 overflow-hidden fixed left-0 h-full mt-14 z-[100] py-2 flex flex-col items-center gap-1 bg-sub-background/99 border-r border-box border-r-sub-background-hover";
    const expandedClass = $derived(expanded ? "w-48" : "w-12");

    const combinedClass = $derived(twMerge(
        defaultClass,
        expandedClass,
        className,
    ));
</script>

<nav class={combinedClass} {...restProps} onmouseenter={() => expanded = true} onmouseleave={() => expanded = false}>
    {#each items as item}
        {@const isActive = page.url.pathname === item.href}
        <Button size="xs" class="{isActive ? 'bg-form-background text-main-text' : 'text-sub-text'} hover:text-main-text py-1 text-nowrap flex justify-start gap-2 overflow-hidden mx-1 w-[calc(100%-16px)] transition-[padding] duration-300 hover:bg-form-background {expanded ? 'px-1.5' : 'px-1.5'}" href={item.href}>
            <item.icon class="w-5.5 h-5.5 shrink-0 flex-center pr-0.5"/>
            <Text tag="span" class="transition-opacity duration-200 text-sm text-inherit {expanded ? 'w-auto opacity-100 pr-3' : 'w-0 opacity-0'}">
                {item.label}
            </Text>
        </Button>
    {/each}
</nav>
