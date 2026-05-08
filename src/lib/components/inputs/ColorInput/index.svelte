<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "$lib/styles/size.js";
    import type { ColorInputProps } from "./types";
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import bytes from "bytes";
    import { computePosition, flip, shift, offset, autoUpdate } from "@floating-ui/dom";

    import Upload from "@lucide/svelte/icons/upload";
    import File from "@lucide/svelte/icons/file";
    import Button from "../Button/index.svelte";
    import { fly } from "svelte/transition";
    import { onMount, tick } from "svelte";
    import { hexToHsl, hexToHsv, hexToRgb, hslToHex } from "$lib/utils/color";
    import { Input } from "..";

    import Pipette from "@lucide/svelte/icons/pipette";

    let { 
        children = undefined, 
        class: className = "",
        label = undefined,
        labelClass = "",
        divClass = "",
        outerDivClass = "",
        value = $bindable("#ffffffff"),
        required = false,
        disabled = false,
        size = "md",
        radius = "md",
        variant = "full",
        id = crypto.randomUUID(),
        ...restProps
    }: ColorInputProps = $props();

    let inputElement: HTMLInputElement;
    let dropdownX = $state(0);
    let dropdownY = $state(0);
    let referenceEl = $state<HTMLElement>();
    let floatingEl = $state<HTMLDivElement>();
    let canvasEl = $state<HTMLDivElement>();
    let hueEl = $state<HTMLDivElement>();
    let isOpen = $state(false);

    let thumbX = $state(0);
    let thumbY = $state(0);

    let hue = $state(0);

    const defaultClass = "text-main-text w-full flex items-center gap-1 rounded-full outline-none px-1.5 w-full bg-inherit border-0 py-0";
    const defaultLabelClass = "block text-sub-text font-medium mb-1 pointer-events-none truncate w-fit";
    const defaultDivClass = "relative flex-center gap-0 bg-form-background p-0";

    const divFullClass = $derived(size === "full" ? "w-full" : "");
    const disabledClass = $derived(disabled ? "opacity-50 pointer-events-none" : "");

    const combinedOuterDivClass = $derived(twMerge(
        "flex flex-col bg-transparent border-0 p-0",
        divFullClass,
        outerDivClass,
        disabledClass
    ));
    const combinedLabelClass = $derived(twMerge(
        defaultLabelClass, 
        getSizeStyleClass(size, "formLabel"),
        labelClass
    ));
    const combinedDivClass = $derived(twMerge(
        defaultDivClass, 
        getSizeStyleClass(radius, "radius"), 
        divFullClass, 
        divClass, 
    ));
    let combinedClass = $derived(twMerge(
        getSizeStyleClass(size, "form"),
        defaultClass, 
        className, 
    ));

    async function updateDropdownPosition() {
        if (!referenceEl || !floatingEl) return;

        const { x, y } = await computePosition(referenceEl, floatingEl, {
            placement: "bottom-start",
            middleware: [
                offset(8),
                flip(),
                shift({ padding: 8 })
            ]
        });

        dropdownX = x;
        dropdownY = y;
    }

    async function handleClick() {
        if (isOpen) {
            isOpen = false;
        } else {
            isOpen = true;
            await tick();
            updateDropdownPosition();
        }
    }

    async function handleMouseDown(e: MouseEvent) {
        if (canvasEl && canvasEl.contains(e.target as Node)) {
            handleMouseMoveCanvas(e);
            const onMove = (e: MouseEvent) => handleMouseMoveCanvas(e);
            const onUp = () => {
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
        }
        if (hueEl && hueEl.contains(e.target as Node)) {
            handleMouseMoveHue(e);
            const onMove = (e: MouseEvent) => handleMouseMoveHue(e);
            const onUp = () => {
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
        }
    }

    async function handleMouseMoveHue(e: MouseEvent) {
        if (!hueEl) return;

        const rect = hueEl.getBoundingClientRect();
        const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
        hue = (y / rect.height) * 360;

        const s = thumbX / canvasEl!.offsetWidth;
        const v = 1 - thumbY / canvasEl!.offsetHeight;

        const l = v * (1 - s / 2);
        const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);

        value = hslToHex(hue, sl * 100, l * 100);
    }

    async function handleMouseMoveCanvas(e: MouseEvent) {
        if (!canvasEl) return;

        const rect = canvasEl.getBoundingClientRect();
        thumbX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        thumbY = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);

        const s = thumbX / rect.width;
        const v = 1 - thumbY / rect.height;

        const l = v * (1 - s / 2);
        const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);

        value = hslToHex(hue, sl * 100, l * 100);
    }

    onMount(() => {
        const cleanup = autoUpdate(referenceEl!, floatingEl!, updateDropdownPosition);
        
        return () => cleanup();
    });
</script>

<svelte:window onmousedown={handleMouseDown}/>

<div class={combinedOuterDivClass} bind:this={referenceEl}>
    <Text tag="label" for={id} class={combinedLabelClass} style={getSizeStyle(size, "formLabel")}>
        {label}
        {#if required}
            <span class="text-[#E05555]">*</span>
        {/if}
    </Text>
    <Button color="none" class={combinedDivClass} onclick={handleClick} {disabled}>
        <input
            {id}
            bind:value={value}
            bind:this={inputElement}
            class="hidden"
            {required}
            {disabled}
            aria-disabled={disabled}
            {...restProps}
            type="color"
        />

        <div class="rounded-full border border-form-hover ml-2 w-6 h-6" style={`background-color: ${value || 'transparent'}`}></div>

        <Text class={combinedClass}>
            {value ? value : "Select color"}
        </Text>
    </Button>

    {#if isOpen}
        {@const rgb = hexToRgb(value || "#000000")}
        {@const hsl = hexToHsl(value || "#000000")}
        {@const hsv = hexToHsv(value || "#000000")}
        <div
            bind:this={floatingEl}
            transition:fly={{ y: -10, duration: 200 }}
            class="fixed z-999999 bg-sub-background rounded-md p-4 flex gap-2.5"
            style="top: {dropdownY}px; left: {dropdownX}px; width: {referenceEl?.offsetWidth}px;"
        >
            <div class="color-canvas relative rounded h-36 cursor-crosshair" style="background-color: hsl({hue}, 100%, 50%);" bind:this={canvasEl}>
                <div 
                    class="absolute w-3 h-3 rounded-full border border-white shadow thumb pointer-events-none"
                    style="background-color: {value || 'transparent'}; left: {thumbX}px; top: {thumbY}px;"
                ></div>
            </div>

            <div class="h-36 w-4 hue-slider relative" bind:this={hueEl}>
                <div class="slider absolute w-5 h-1 border border-white shadow" style="top: {(hue / 360) * 100}%"></div>
            </div>

            <div class="grow flex flex-col gap-2">
                <Input
                    type="text"
                    variant="floating"
                    label="Hex"
                    size="sm"
                    value={value}
                    on:input={(e) => value = (e.target as HTMLInputElement).value}
                    placeholder="#ffffffff"
                />

                <Input
                    type="text"
                    variant="floating"
                    label="RGB"
                    size="sm"
                    value="{rgb.r}, {rgb.g}, {rgb.b}"
                    on:input={(e) => value = (e.target as HTMLInputElement).value}
                    placeholder="0, 0, 0"
                />

                <Input
                    type="text"
                    variant="floating"
                    label="HSV"
                    size="sm"
                    value="{hue.toFixed(2)}°, {hsv.s.toFixed(2)}%, {hsv.v.toFixed(2)}%"
                    on:input={(e) => value = (e.target as HTMLInputElement).value}
                    placeholder="0, 0, 0"
                />

                <Input
                    type="text"
                    variant="floating"
                    label="HSL"
                    size="sm"
                    value="{hue.toFixed(2)}°, {hsl.s.toFixed(2)}%, {hsl.l.toFixed(2)}%"
                    on:input={(e) => value = (e.target as HTMLInputElement).value}
                    placeholder="0, 0, 0"
                />
            </div>
        </div>
    {/if}
</div>

<style>
    .color-canvas {
        aspect-ratio: 1 / 0.75;
        padding: 10;
        background-color: hsl(0, 100%, 50%);
        background-image:
            linear-gradient(to bottom, transparent, #000),
            linear-gradient(to right, #fff, transparent);
        cursor: crosshair;
    }

    .hue-slider {
        background: linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red);
    }

    .thumb {
        transform: translate(-50%, -50%);
    }

    .slider {
        transform: translate(-10%, -50%);
    }
</style>