<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BreadcrumbProps } from "./types";

    let {
        children = undefined, 
        class: className = "",
        element = $bindable(),
        ...restProps
    }: BreadcrumbProps = $props();

    const combinedClass = $derived(twMerge(
        "vpcui-breadcrumb",
        className
    ));
</script>

<nav aria-label="Breadcrumb" class={combinedClass} {...restProps} bind:this={element}>
    <ol class="flex flex-wrap items-center">
        {@render children?.()}
    </ol>
</nav>