<script>
    import { fbmBackground } from "../lib/actions/fbm.ts";
    import Button from "$lib/components/Button.svelte";
    import { onMount } from "svelte";

    let octaves = $state(1);

    onMount(() => {
        setInterval(() => {
            octaves = (octaves % 10) + 1;
        }, 1000);
    })
</script>

<!-- <canvas use:fbmBackground={{octaves: octaves, warps: 2, scale: 3}} class="w-screen h-screen"></canvas> -->
<br><br>
<div class="flex w-full items-center justify-center gap-4">
    <Button class="bg-blue-500">Hello</Button>
    <Button class="bg-green-500" pill>World</Button>
</div>