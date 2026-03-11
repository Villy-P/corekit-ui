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
    <Button class="bg-blue-500">Normal</Button>
    <Button class="bg-green-500" pill>Pill</Button>
    <Button class="bg-red-500" href="https://www.google.com" target="_blank">Link</Button>
    <Button class="bg-purple-500" pill href="https://www.google.com" target="_blank">Pill Link</Button>
    <Button class="bg-yellow-500" icon><img class="w-6 h-6" src="/favicon.svg" alt="Favicon"/></Button>
</div>