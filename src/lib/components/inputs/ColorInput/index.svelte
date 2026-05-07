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
    let isOpen = $state(false);

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
</script>

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
            class="fixed z-999999 bg-sub-background rounded-md"
            style="top: {dropdownY}px; left: {dropdownX}px; width: {referenceEl?.offsetWidth}px;"
        >
            <div class="color-canvas relative rounded h-32 cursor-crosshair m-4">
                <div 
                    class="absolute top-0 right-0 w-4 h-4 rounded-full border border-white shadow thumb pointer-events-none"
                    style="background-color: {value || 'transparent'};"
                ></div>
            </div>
        </div>
    {/if}
</div>

<style>
    .color-canvas {
        aspect-ratio: 1 / 0.75;
        background-color: hsl(1000, 100%, 50%);
        background-image:
            linear-gradient(to right, white, transparent),
            linear-gradient(to top, black, transparent);
        cursor: crosshair;
    }

    .thumb {
        transform: translate(-50%, -50%);
    }
</style>