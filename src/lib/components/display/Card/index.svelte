<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "../../../styles/size.ts";
    import { type CardProps } from "./types.ts";
    import { twMerge } from "tailwind-merge";
    import { cardVariantStyles } from "./variant.ts";
    import { getLinkProps } from "../../../utils/link.ts";
    import { multiAction } from "../../../utils/multiAction.ts";

    let { 
        children = undefined, 
        class: className = "", 
        element = $bindable(),
        use = [],
        href = undefined,
        external = false,
        variant = "bordered",
        size = "md",
        radius = "md",
        footer = undefined,
        header = undefined,
        ...restProps
    }: CardProps = $props();

    let combinedClass = $derived(twMerge(
        "text-main-text rounded-lg transition-colors transition-all ease-in-out bg-gradient-to-br from-sub-background to-sub-background-accent p-4 w-full flex flex-col", 
        href && "block hover:from-sub-background-hover hover:to-sub-background-hover cursor-pointer hover:border-sub-background-border-hover hover:-translate-y-0.5",
        cardVariantStyles[variant],
        getSizeStyleClass(size, "card"),
        getSizeStyleClass(radius, "radius"),
        className
    ));

    const mergedStyle = $derived([
        getSizeStyle(size, "card"), 
        getSizeStyle(radius, "radius"), 
        restProps.style
    ].filter(Boolean).join("; "));

    const anchorProps = $derived(getLinkProps(href, external, false));
</script>

<svelte:element
    this={href ? "a" : "div"}
    class={combinedClass}
    style={mergedStyle}
    {...anchorProps}
    {...restProps}
    bind:this={element}
    use:multiAction={use}
>
    {#if header}
        <div class="-mx-4 -mt-4 mb-4 overflow-hidden">
            {@render header()}
        </div>
    {/if}
    
    {@render children?.()}

    {#if footer}
        <div class="flex items-center justify-between border-t border-sub-background-border mt-4 -mx-4 -mb-4 px-4 py-3 text-sm text-sub-text">
            {@render footer()}
        </div>
    {/if}
</svelte:element>
