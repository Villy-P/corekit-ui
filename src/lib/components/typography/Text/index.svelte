<script lang="ts">
    import { sizeStyleParts, textStyle, type SizeStyleTheme } from "../../../styles/size";
    import type { TextProps } from "./types.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(), 
        tag = "p",
        shrink = undefined,
        size = "none",
        ...restProps
    }: TextProps = $props();

    const tagStyles: Record<string, { class: string; size: keyof typeof textStyle }> = {
        "p": { class: "", size: "text-base" },
        "div": { class: "", size: "text-base" },
        "span": { class: "", size: "text-base" },
        "label": { class: "text-sub-text font-semibold", size: "text-xs" },
        "strong": { class: "font-bold", size: "text-base" },
        "b": { class: "font-bold", size: "text-base" },
        "em": { class: "italic", size: "text-base" },
        "i": { class: "italic", size: "text-base" },
        "u": { class: "underline", size: "text-base" },
        "small": { class: "", size: "text-sm" },
        "blockquote": { class: "border-l-4 border-gray-500 pl-2 opacity-70", size: "text-base" },
        "pre": { class: "font-mono bg-sub-background px-3 py-2 rounded overflow-x-auto whitespace-pre", size: "text-base" },
        "code": { class: "font-mono bg-sub-background px-1 rounded inline-block", size: "text-base" },
        "a": { class: "text-blue-400 decoration-blue-400/0 underline underline-offset-2 transition-all cursor-pointer duration-150 hover:decoration-blue-400 ", size: "text-base" },
        "li": { class: "text-base list-disc list-inside", size: "text-base" },
        "h1": { class: "font-bold font-display", size: "text-4xl" },
        "h2": { class: "font-bold font-display", size: "text-3xl" },
        "h3": { class: "font-semibold font-display", size: "text-2xl" },
        "h4": { class: "font-semibold font-display", size: "text-xl" },
        "h5": { class: "font-medium font-display", size: "text-lg" },
        "h6": { class: "font-normal font-display", size: "text-base" }
    };

    function getTextSizeInRem(): string {
        if (size !== "none") {
            const sizeKey = (sizeStyleParts[size as SizeStyleTheme]?.text ?? "text-base") as keyof typeof textStyle;
            return textStyle[sizeKey] ?? textStyle["text-base"];
        }

        return textStyle[tagStyles[tag]?.size || "text-base"] ?? textStyle["text-base"];
    }

    let shrinkStyle = $derived(shrink 
        ? `font-size: clamp(8px, ${shrink}cqi, ${getTextSizeInRem()}); white-space: nowrap; display: block; width: fit-content;` 
        : ""
    );

    let defaultClass = "text-main-text font-body";    
    let combinedClass = $derived(twMerge(
        defaultClass, 
        tagStyles[tag]?.class || "", 
        tagStyles[tag]?.size || "",
        sizeStyleParts[size as SizeStyleTheme]?.text || "",
        className
    ));
</script>

<svelte:element bind:this={element} this={tag} style={shrinkStyle} class={combinedClass} {...restProps}>
    {@render children?.()}
</svelte:element>