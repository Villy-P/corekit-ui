<script lang="ts">
    import { NavbarSeparatorClasses, type NavbarSeparatorProps } from "./types.js";

    let {
        variant = "dynamic",
        class: className = "",
        ...restProps
    }: NavbarSeparatorProps = $props();
</script>

<div class={NavbarSeparatorClasses[variant]} {...restProps}></div>