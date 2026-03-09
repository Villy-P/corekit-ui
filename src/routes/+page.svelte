<script>
    import { fbmBackground } from "../lib/actions/fbm.ts";
    import Button from "$lib/components/Button.svelte";
</script>

<canvas use:fbmBackground={{octaves: 10, warps: 2}} class="w-screen h-screen"></canvas>