<script lang="ts">
    import { twMerge } from "tailwind-merge";
    import type { ToastProps } from "../types/Toast.ts";
    import Text from "./Text.svelte";
    import Progress from "./Progress.svelte";
    import type { Component } from "svelte";

    import CircleCheck from "@lucide/svelte/icons/circle-check";
    import CircleX from "@lucide/svelte/icons/circle-x";
    import X from "@lucide/svelte/icons/x";
    import Info from "@lucide/svelte/icons/info";
    import TriangleAlert from "@lucide/svelte/icons/triangle-alert";
    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import Button from "./Button.svelte";


    let { 
        message = "", 
        duration = 3000, 
        type = "info", 
        position = "top-right",
        class: className = "",
        ...restProps
    }: ToastProps = $props();

    const defaultToastClass = "px-4 py-3 rounded shadow text-white flex flex-center gap-2 relative bg-sub-background border-[1px]";
    const defaultProgressClass = "absolute bottom-0 left-0 bg-transparent";
    const defualtIconClass = $derived(colorStyleParts[type as ColorStyle]?.text);

    const Icon = $derived({
        success: CircleCheck,
        error: CircleX,
        warning: TriangleAlert,
        info: Info
    }[type] as Component ?? null);

    const combinedToastClass = $derived(twMerge(
        defaultToastClass,
        colorStyleParts[type as ColorStyle]?.text,
        className,
    ));
</script>

<div class={combinedToastClass}>
    <Icon class={defualtIconClass}/>
    <Text>{message}</Text>
    <Button variant="ghost" class="hover:bg-form-background" icon><X size={16}/></Button>
    <Progress size="xs" divClass={defaultProgressClass} color={type} animate={{ duration: duration, from: 100, to: 0 }}/>
</div>