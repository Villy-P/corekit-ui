<script lang="ts">
    import Checkbox from "../../components/Checkbox.svelte";
    import FloatingInput from "../../components/FloatingInput.svelte";
    import Progress from "../../components/Progress.svelte";
    import Text from "../../components/Text.svelte";
    import Button from "../../components/Button.svelte";
    import FloatingSelect from "../../components/FloatingSelect.svelte";

    import { colorStyleParts, type ColorStyle } from "../../styles/color.ts";
    import type { SizeStyleTheme } from "../../styles/size.ts";

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

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
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
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={size} label="Size"/>
        <FloatingSelect divClass="w-full" options={sizeOptions} bind:value={radius} label="Radius"/>
        <FloatingInput size="full" label="Value" type="number" min="0" max="100" bind:value={progress}/>
        <Checkbox bind:checked={animate} label="Animate"/>
        {#if animate}
            <FloatingInput size="full" label="From" type="number" min="0" max="100" bind:value={animateFrom}/>
            <FloatingInput size="full" label="To" type="number" min="0" max="100" bind:value={animateTo}/>
            <FloatingInput size="full" label="Duration" type="number" min="0" bind:value={animationDuration}/>
            <FloatingInput size="full" label="On End Alert" type="text" placeholder="Alert message on animation end" bind:value={animateOnEndAlert}/>
        {/if}
    </div>
</div>