<script lang="ts">
    import type { SkeletonGroupProps } from "./types";
    import { Skeleton } from "..";
    import { twMerge } from "tailwind-merge";

    let { 
        variant = "text", 
        count = 3, 
        element = $bindable(),
        class: className
    }: SkeletonGroupProps = $props();

    const combinedClass = $derived(twMerge(
        "flex flex-col gap-4 w-full",
        className
    ));
</script>

<div class={combinedClass} bind:this={element} aria-hidden="true">
    {#each Array(count) as _, i (i)}
        <Skeleton variant={variant}/>
    {/each}
</div>