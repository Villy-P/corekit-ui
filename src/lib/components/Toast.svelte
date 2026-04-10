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
    import { getSizeStyleClass } from "$lib/styles/size.js";


    let { 
        message = "", 
        duration = 3000, 
        type = "info", 
        position = "top-right",
        class: className = "",
        size = "md",
        radius = "md",
        onclose = undefined,
        ...restProps
    }: ToastProps = $props();

    const defaultToastClass = "px-4 py-4 overflow-hidden rounded shadow text-white flex justify-center items-start gap-2 relative bg-sub-background border-[1px]";
    const defaultProgressClass = "absolute bottom-1 left-1 right-1 w-[calc(100%-8px)]";
    const defualtIconClass = $derived(`${colorStyleParts[type as ColorStyle]?.text} w-5 h-5`);

    const Icon = $derived({
        success: CircleCheck,
        error: CircleX,
        warning: TriangleAlert,
        info: Info
    }[type] as Component ?? null);

    const combinedToastClass = $derived(twMerge(
        defaultToastClass,
        colorStyleParts[type as ColorStyle]?.text,
        getSizeStyleClass(size, "card"),
        getSizeStyleClass(radius, "radius"),
        className,
    ));
</script>

<div class={combinedToastClass} {...restProps}>
    <div class="w-8 h-8 flex-center">
        <Icon class={defualtIconClass}/>
    </div>
    <Text class="px-1">{message}</Text>
    <Button onclick={onclose} variant="ghost" class="hover:bg-form-background" icon><X size={16}/></Button>
    <Progress 
        size="sm" 
        divClass={defaultProgressClass} 
        color={type} 
        animate={{ duration: duration, from: 100, to: 0, onend: onclose }}/>
</div>