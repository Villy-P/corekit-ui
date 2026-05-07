<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { BreadcrumbProps } from "./types";

    let {
        children = undefined, 
        class: className = "",
        ...restProps
    }: BreadcrumbProps = $props();

    const combinedClass = $derived(twMerge(
        "vpcui-breadcrumb",
        className
    ));
</script>

<nav aria-label="Breadcrumb" class={combinedClass} {...restProps}>
    <ol class="flex flex-wrap items-center">
        {@render children?.()}
    </ol>
</nav>