<script lang="ts">
    import type { ComboboxProps } from "./types";
    import { twMerge } from "tailwind-merge";
    import { getSizeStyleClass } from "$styles/size";
    import { computePosition, flip, shift, offset, autoUpdate } from "@floating-ui/dom";

    import BaseInput from "../helper/BaseInput.svelte";
    import Text from "../../typography/Text/index.svelte";
    import { fly } from "svelte/transition";
    import { debounce } from "$lib/utils/debounce.js";
    import { tick } from "svelte";

    let { 
        children = undefined, 
        class: className = "",
        label = "",
        labelClass = "",
        divClass = "", 
        outerDivClass = "",
        icon = undefined,
        variant = "default",
        placeholder = "",
        value = $bindable(),
        onfocus = undefined,
        onblur = undefined,
        required = false,
        disabled = false,
        size = "md",
        radius = "md",
        options = [],
        limit = 10,
        id = crypto.randomUUID(),
        ...restProps
    }: ComboboxProps = $props();

    let isFocused = $state(false);
    let activeIndex = $state(0);

    let dropdownX = $state(0);
    let dropdownY = $state(0);
    let referenceEl = $state<HTMLElement>();
    let floatingEl = $state<HTMLDivElement>();

    let debouncedSearch = $state("");

    const updateSearch = debounce((v: string) => {
        debouncedSearch = v;
    }, 150);

    $effect(() => {
        updateSearch(value ?? "");
    });

    const sizeClasses = $derived(getSizeStyleClass(size, "form"));
    const labelSizeClass = $derived(getSizeStyleClass(size, "formLabel"));

    let inputElement = $state<HTMLInputElement>();

    const customStyle = $derived.by(() => {
        const styles: string[] = [];

        if (typeof size === "number")
            styles.push(`width: ${size}px`);

        if (typeof radius === "number")
            styles.push(`border-radius: ${radius}px`);

        return styles.join("; ");
    });

    function handleFocus(e: FocusEvent) {
        isFocused = true;
        onfocus?.(e);
    }

    function handleBlur(e: FocusEvent) {
        const match = options.find(o => o.toLowerCase() === (value ?? "").toString().toLowerCase());
        if (!match) value = "";
        isFocused = false;
        onblur?.(e);
    }

    async function updateDropdownPosition() {
        if (!referenceEl || !floatingEl) return;

        referenceWidth = referenceEl.offsetWidth;

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

    let defaultClass = "text-main-text w-full outline-none px-1.5 w-full bg-inherit border-0 focus:ring-0 focus-visible:ring-0 rounded-none";

    let defaultInputClassCheck = $derived(variant !== "floating" ? "py-0" : "");
    let combinedClass = $derived(twMerge(defaultClass, sizeClasses, defaultInputClassCheck, labelSizeClass, className));
    let combinedDivClass = $derived(twMerge(divClass));

    let referenceWidth = $state(0);

    function onClickItem(event: MouseEvent, option: string) {
        event.preventDefault();
        value = option;
        isFocused = false;
        inputElement?.blur();
    }

    function highlight(label: string, search: string) {
        const index = label.toLowerCase().indexOf(search.toLowerCase());
        if (index === -1) return escapeHtml(label);

        return [
            label.slice(0, index),
            `<span class="font-bold">${escapeHtml(label.slice(index, index + search.length))}</span>`,
            label.slice(index + search.length)
        ].join("");
    }

    function escapeHtml(str: string) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    let filteredOptions = $derived(
        options.filter(option =>
            option.toLowerCase().includes(debouncedSearch.toLowerCase()))
    );

    let validOptions = $derived(filteredOptions.slice(0, limit));
    let totalMatches = $derived(filteredOptions.length);

    function onKeyDown(event: KeyboardEvent) {
        if (!isFocused) return;

        if (event.key === "ArrowDown") {
            event.preventDefault();
            activeIndex = (activeIndex + 1) % validOptions.length;
            scrollToActiveElement();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            activeIndex = (activeIndex - 1 + validOptions.length) % validOptions.length;
            scrollToActiveElement();
        } else if (event.key === "Enter" || event.key === "Tab") {
            event.preventDefault();
            const option = validOptions[activeIndex];
            if (option) {
                value = option;
                isFocused = false;
                inputElement?.blur();
            }
            activeIndex = 0;
        } else if (event.key === "Escape") {
            event.preventDefault();
            isFocused = false;
            inputElement?.blur();
        } else {
            activeIndex = 0;
        }
    }

    function scrollToActiveElement() {
        const optionElement = optionsContainerElement?.children[activeIndex] as HTMLElement;
        optionElement?.scrollIntoView({ block: "nearest" });
    }

    let optionsContainerElement = $state<HTMLDivElement>();

    $effect(() => {
        if (isFocused && referenceEl && floatingEl) {
            const cleanup = autoUpdate(
                referenceEl,
                floatingEl,
                updateDropdownPosition
            );
            return () => cleanup();
        }
    });

    function handleMouseDown(e: MouseEvent) {
        if (
            isFocused &&
            referenceEl && !referenceEl.contains(e.target as Node) &&
            floatingEl && !floatingEl.contains(e.target as Node)
        ) {
            isFocused = false;
            return;
        }
    }
</script>

<svelte:window onmousedown={handleMouseDown}/>

<BaseInput
    {children}
    {className}
    {label}
    {labelClass}
    divClass={combinedDivClass}
    {outerDivClass}
    {value}
    {required}
    {disabled}
    {variant}
    {size}
    {radius}
    {id}
    {isFocused}
    {icon}
    bind:wrapper={referenceEl}>

    {#snippet innerDivElement()}
        <input
            {id}
            bind:value={value}
            bind:this={inputElement}
            class={combinedClass}
            {required}
            {disabled}
            onfocus={handleFocus}
            onblur={handleBlur}
            onkeydown={onKeyDown}
            placeholder={variant === "floating" ? "" : placeholder}
            aria-disabled={disabled}
            style={customStyle}
            {...restProps}
        />
    {/snippet}

    {#snippet outerDivElementAfter()}        
        {#if isFocused}
            <div
                bind:this={floatingEl}
                transition:fly={{ y: -10, duration: 200 }}
                style="position: fixed; top: {dropdownY}px; left: {dropdownX}px; width: {referenceWidth}px;"
                class="z-999999 border-2 overflow-hidden border-blue-500 bg-sub-background {getSizeStyleClass(radius, 'radius')}"
            >
                {#if totalMatches > 0 && options.length > limit}
                    <Text class="text-xs py-0.5 px-1 text-sub-text italic sticky top-0 bg-sub-background w-full">
                        Showing {limit} of {totalMatches} results for "{value}"
                    </Text>
                {/if}
                {#if totalMatches === 0}
                    <Text class="text-xs py-0.5 px-1 text-sub-text italic sticky top-0 bg-sub-background w-full">
                        No results found for "{value}"
                    </Text>
                {/if}
                <div bind:this={optionsContainerElement} class="overflow-auto max-h-40">
                    {#each validOptions as option, index}
                        <Text class="text-sm py-0.5 px-1 cursor-pointer hover:bg-sub-background-hover transition-colors {activeIndex === index ? 'bg-sub-background-hover' : ''}" onmousedown={(e: MouseEvent) => onClickItem(e, option)}>
                            {@html highlight(option, value ?? "")}
                        </Text>
                    {/each}
                </div>
            </div>
        {/if}
    {/snippet}
</BaseInput>
