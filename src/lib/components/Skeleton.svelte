<script lang="ts">
    import Image from "@lucide/svelte/icons/image";
    import Play from "@lucide/svelte/icons/play";

    let { variant = "default" } = $props();
</script>

{#snippet image()}
    <div class="h-48 bg-sub-background rounded w-full flex-center">
        <Image size={48} class="text-form-border"/>
    </div>
{/snippet}

{#snippet text()}
    <div class="pt-4 flex flex-wrap gap-2">            
        {#each [21, 19, 24, 15, 10, 30, 22, 17, 26, 20, 28, 10, 22, 45, 16, 23, 37, 25, 25] as width}
            <div class="h-4 rounded even:bg-sub-background odd:bg-sub-background-hover" 
                    style="width: {width}%;"></div>
        {/each}
    </div>
{/snippet}

<div class="animate-pulse duration-100 w-lg flex flex-col gap-2">
    {#if variant === "default"}
        <div class="h-4 bg-sub-background rounded w-3/4"></div>
        <div class="h-4 bg-sub-background rounded w-full"></div>
        <div class="h-4 bg-sub-background rounded w-5/6"></div>
        <div class="h-4 bg-sub-background rounded w-2/3"></div>
        <div class="h-4 bg-sub-background rounded w-5/6"></div>
        <div class="h-4 bg-sub-background rounded w-11/12"></div>
    {:else if variant === "text"}
        {@render text()}
    {:else if variant === "image"}
        {@render image()}
    {:else if variant === "video"}
        <div class="h-48 bg-sub-background rounded w-full flex-center">
            <Play size={48} class="text-form-border"/>
        </div>
    {:else if variant === "card"}
        <div class="w-full h-full border-sub-background border-2 rounded p-4 gap-2">
            {@render image()}
            {@render text()}
        </div>
    {/if}
</div>