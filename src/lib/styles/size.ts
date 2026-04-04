export type SizeStyle = "xs" | "sm" | "md" | "lg" | "full" | "none" | number;
export type SizeStyleType = "button" | "buttonIcon" | "radius";

export const sizeStyleParts: Record<SizeStyle, Record<SizeStyleType, string>> = {
    xs: {
        button: "text-xs h-4 px-1 py-0.5",
        buttonIcon: "text-xs h-4 w-4 p-0.5",
        radius: "rounded-xs"
    },
    sm: {
        button: "text-sm h-6 px-2 py-0.5",
        buttonIcon: "text-sm h-6 w-6 p-0.5",
        radius: "rounded-sm"
    },
    md: {
        button: "text-base h-8 px-3 py-1",
        buttonIcon: "text-base h-8 w-8 p-1",
        radius: "rounded-md"
    },
    lg: {
        button: "text-lg h-10 px-4 py-2",
        buttonIcon: "text-lg h-10 w-10 p-2",
        radius: "rounded-lg"
    },
    full: {
        button: "w-full text-base h-8 px-3 py-1",
        buttonIcon: "w-full aspect-square text-base p-1",
        radius: "rounded-full"
    },
    none: {
        button: "",
        buttonIcon: "",
        radius: "rounded-none"
    },
    0: {
        button: "",
        buttonIcon: "",
        radius: "rounded-none"
    }
}