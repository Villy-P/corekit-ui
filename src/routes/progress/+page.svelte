<script lang="ts">
    import Checkbox from "../../components/Checkbox.svelte";
    import FloatingInput from "../../components/FloatingInput.svelte";
    import Progress from "../../components/Progress.svelte";

    let value: number = $state(100);
    let animate: boolean = $state(false);
    let animateFrom: number = $state(0);
    let animateTo: number = $state(100);
    let animationDuration: number = $state(1000);
    let animateOnEndAlert: string = $state("");
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        {#key animate}
            <Progress 
                progress={value} 
                animate={animate 
                    ? { 
                        from: animateFrom, 
                        to: animateTo, 
                        duration: animationDuration, 
                        onend: () => {animateOnEndAlert && alert(animateOnEndAlert)} 
                      } 
                    : undefined}
            />
        {/key}
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">
        <FloatingInput size="full" label="Value" type="number" min="0" max="100" bind:value={value}/>
        <Checkbox bind:checked={animate} label="Animate"/>
        {#if animate}
            <FloatingInput size="full" label="From" type="number" min="0" max="100" bind:value={animateFrom}/>
            <FloatingInput size="full" label="To" type="number" min="0" max="100" bind:value={animateTo}/>
            <FloatingInput size="full" label="Duration" type="number" min="0" bind:value={animationDuration}/>
            <FloatingInput size="full" label="On End Alert" type="text" placeholder="Alert message on animation end" bind:value={animateOnEndAlert}/>
        {/if}
    </div>
</div>