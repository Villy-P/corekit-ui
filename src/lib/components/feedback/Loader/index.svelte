<script lang="ts">
    import { getSizeStyleClass } from "../../../styles/size.js";
    import { twMerge } from "tailwind-merge";
    import type { LoaderProps } from "./types.ts";
    import { generateColorStyle } from "../../../styles/color.js";

    let { 
        class: className = "",
        element = $bindable(),
        size = "md",
        color = "blue",
        ...restProps
    }: LoaderProps = $props();

    let sizeClass = $derived(twMerge(
        "loader rounded-full border-main-text border-4", 
        getSizeStyleClass(size, "loader"), 
        className,
        generateColorStyle(color, "loader"),
    ));
</script>

<span class="sr-only">Loading...</span>
<div class={sizeClass} {...restProps} bind:this={element}></div>

<style>
    .loader {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>