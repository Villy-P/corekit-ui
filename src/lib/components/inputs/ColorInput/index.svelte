<script lang="ts">
    import { getSizeStyle, getSizeStyleClass } from "$lib/styles/size.js";
    import type { ColorInputProps } from "./types";
    import { twMerge } from "tailwind-merge";
    import Text from "../../typography/Text/index.svelte";
    import bytes from "bytes";
    import { computePosition, flip, shift, offset } from "@floating-ui/dom";

    import Upload from "@lucide/svelte/icons/upload";
    import File from "@lucide/svelte/icons/file";
    import Button from "../Button/index.svelte";
    import { fly } from "svelte/transition";
    import { tick } from "svelte";
    import { hslToHex } from "$lib/utils/color";

    let { 
        children = undefined, 
        class: className = "",
        label = undefined,
        labelClass = "",
        divClass = "",
        outerDivClass = "",
        value = $bindable(undefined),
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
    let isOpen = $state(false);
    let backgroundColor = $state("hsl(0, 100%, 50%)");

    let thumbX = $state(0);
    let thumbY = $state(0);

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
        if (canvasEl && !canvasEl.contains(e.target as Node))
            return;
        console.log("Mouse down", e);
        handleMouseMove(e);
        const onMove = (e: MouseEvent) => handleMouseMove(e);
        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    }

    async function handleMouseMove(e: MouseEvent) {
        if (!canvasEl) return;

        const rect = canvasEl.getBoundingClientRect();
        thumbX = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
        thumbY = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);

        const s = thumbX / rect.width;
        const v = 1 - thumbY / rect.height;

        const l = v * (1 - s / 2);
        const sl = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);

        value = hslToHex(0, sl * 100, l * 100);
    }
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
        <div
            bind:this={floatingEl}
            transition:fly={{ y: -10, duration: 200 }}
            class="fixed z-999999 bg-sub-background rounded-md m-4"
            style="top: {dropdownY}px; left: {dropdownX}px; width: {referenceEl?.offsetWidth}px;"
        >
            <div class="color-canvas relative rounded h-32 cursor-crosshair" bind:this={canvasEl}>
                <div 
                    class="absolute w-4 h-4 rounded-full border border-white shadow thumb pointer-events-none"
                    style="background-color: {value || 'transparent'}; left: {thumbX}px; top: {thumbY}px;"
                ></div>
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

    .thumb {
        transform: translate(-50%, -50%);
    }
</style>