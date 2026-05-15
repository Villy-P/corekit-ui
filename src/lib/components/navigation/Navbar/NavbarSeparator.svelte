<script lang="ts">
    import { NavbarSeparatorClasses, type NavbarSeparatorProps } from "./types.js";

    let {
        variant = "dynamic",
        class: className = "",
        element = $bindable(),
        ...restProps
    }: NavbarSeparatorProps = $props();
</script>

<div bind:this={element} class={NavbarSeparatorClasses[variant]} {...restProps}></div>