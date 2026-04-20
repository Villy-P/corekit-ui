<script lang="ts">
    import { getSizeStyleClass } from "$lib/styles/size.js";
    import { twMerge } from "tailwind-merge";
    import type { LoaderProps } from "../types/Loader.ts";
    import { generateColorStyle } from "$lib/styles/color.js";

    let { 
        class: className = "",
        size = "md",
        color = "blue",
        ...restProps
    }: LoaderProps = $props();

    const defaultClass = "loader rounded-full border-main-text border-4";

    let sizeClass = $derived(twMerge(
        defaultClass, 
        getSizeStyleClass(size, "loader"), 
        className,
        generateColorStyle(color, "loader"),
    ));
</script>

<div class={sizeClass} {...restProps}></div>

<style>
    .loader {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>