<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BreadcrumbItemProps } from "./types";
    import { Text } from "$components/typography";

    let {
        children = undefined, 
        class: className = "",
        href = undefined,
        ...restProps
    }: BreadcrumbItemProps = $props();

    const combinedClass = $derived(twMerge(
        "vpcui-breadcrumb-item text-main-text hover:text-sub-text transition-colors",
        className
    ));
</script>

<li class={combinedClass} {...restProps} aria-current={href ? undefined : 'page'}>
    {#if href}
        <a class="hover:underline" href={href}>
            {@render children?.()}
        </a>
    {:else}
        {@render children?.()}
    {/if}
</li>

<style>
    :global(li.vpcui-breadcrumb-item + li.vpcui-breadcrumb-item::before) {
        content: "/";
        margin: 0 0.25rem;
        color: var(--color-main-text);
    }
</style>