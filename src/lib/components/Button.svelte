<script lang="ts">
    import { twMerge } from "tailwind-merge";

    interface ButtonProps {
        children?: any;
        class?: string;
        pill?: boolean;
        href?: string;
        target?: string;
    };

    let { 
        children, 
        class: className, 
        pill = false,
        href = undefined,
        target = undefined
    }: ButtonProps = $props();

    let pillClass = "rounded-full";
    let defaultClass = $derived("text-white cursor-pointer px-2 py-1 " + (pill ? pillClass : ""));

    let combinedClass = $derived(twMerge(defaultClass, className));
</script>

<button class={combinedClass}>
    {#if href}
        <a {href} target={target}>{@render children?.()}</a>
    {:else}
        {@render children?.()} 
    {/if}
</button>