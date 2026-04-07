<script lang="ts">
    import FloatingInput from "../../components/FloatingInput.svelte";
    import Progress from "../../components/Progress.svelte";

    let value: number = $state(100);
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <Progress animate={{ from: 0, to: value, duration: 5000 }}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingInput size="full" label="Value" type="number" min="0" max="100" bind:value={value}/>
    </div>
</div>