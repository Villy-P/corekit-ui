<script lang="ts">
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        subtext = undefined,
        ...restProps
    }: any = $props();

    const defaultClass = "inline-flex flex-col items-center justify-center rounded bg-sub-background px-1.5 py-0.5 text-xs font-mono text-main-text border-sub-background-hover border-1";

    const combinedClass = $derived(twMerge(defaultClass, className));
</script>

<div class={combinedClass} {...restProps}>
    {@render children?.()}
    <span class="text-sub-text text-[10px] mt-0.5">
        {@render subtext?.()}
    </span>
</div>