<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children, 
        class: className = "", 
        pill = false,
        icon = false,
        href = undefined,
        ...restProps
    } = $props();

    let pillClass = "rounded-full";
    let iconClass = "rounded-full p-2 flex-center";
    let defaultClass = $derived(twMerge("text-white cursor-pointer px-2 py-1 ", (pill ? pillClass : ""), (icon ? iconClass : "")));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

{#if href}
    <a class={combinedClass} {href} {...restProps}>
        {@render children?.()}
    </a>
{:else}
    <button class={combinedClass} {...restProps}>
        {@render children?.()} 
    </button>
{/if}