<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";

    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyleTheme } from "$lib/styles/size.js";

    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let progress: number = $state(100);
    let animate: boolean = $state(false);
    let animateFrom: number = $state(0);
    let animateTo: number = $state(100);
    let animationDuration: number = $state(1000);
    let animateOnEndAlert: string = $state("");
    let color: ColorStyle = $state("blue");
    let size: SizeStyleTheme = $state("md");
    let radius: SizeStyleTheme = $state("full");
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        {#key animate}
            <Progress 
                {progress}
                {color} 
                {size}
                {radius}
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
        <Text tag="label">Color</Text>
        <div class="w-full flex flex-wrap">
            {#each Object.keys(colorStyleParts) as colorKey}
                <Button square color={colorKey as ColorStyle} onclick={() => color = colorKey as ColorStyle}></Button>
            {/each}
        </div>
        <Select divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <Select divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <Input size="full" label="Value" type="number" min={0} max={100} bind:value={progress}/>
        <Checkbox bind:checked={animate} label="Animate"/>
        {#if animate}
            <Input size="full" label="From" type="number" min={0} max={100} bind:value={animateFrom}/>
            <Input size="full" label="To" type="number" min={0} max={100} bind:value={animateTo}/>
            <Input size="full" label="Duration" type="number" min={0} bind:value={animationDuration}/>
            <Input size="full" label="On End Alert" type="text" placeholder="Alert message on animation end" bind:value={animateOnEndAlert}/>
        {/if}
    </div>
</div>