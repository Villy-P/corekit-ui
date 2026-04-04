export type SizeStyle = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full" | "none" | number;
export type SizeStyleType = "button" | "buttonIcon" | "radius";

export const sizeStyleParts: Record<SizeStyle, Record<SizeStyleType, string>> = {
    xs: {
        button: "text-xs h-4 px-1 py-0.5",
        buttonIcon: "text-xs h-4 w-4 p-0.5",
        radius: "rounded-xs"
    },
    sm: {
        button: "text-sm h-6 px-2 py-1",
        buttonIcon: "text-sm h-6 w-6 p-1",
        radius: "rounded-sm"
    },
    md: {
        button: "text-base h-8 px-3 py-1.5",
        buttonIcon: "text-base h-8 w-8 p-1.5",
        radius: "rounded-md"
    },
    lg: {
        button: "text-lg h-10 px-4 py-2",
        buttonIcon: "text-lg h-10 w-10 p-2",
        radius: "rounded-lg"
    },
    xl: {
        button: "text-xl h-12 px-5 py-2.5",
        buttonIcon: "text-xl h-12 w-12 p-2.5",
        radius: "rounded-xl"
    },
    "2xl": {
        button: "text-2xl h-14 px-6 py-3",
        buttonIcon: "text-2xl h-14 w-14 p-3",
        radius: "rounded-2xl"
    },
    "3xl": {
        button: "text-3xl h-16 px-7 py-3.5",
        buttonIcon: "text-3xl h-16 w-16 p-3.5",
        radius: "rounded-3xl"
    },
    "4xl": {
        button: "text-4xl h-18 px-8 py-4",
        buttonIcon: "text-4xl h-18 w-18 p-4",
        radius: "rounded-4xl"
    },
    full: {
        button: "w-full text-base h-8 px-3 py-1",
        buttonIcon: "w-full aspect-square text-base p-1",
        radius: "rounded-full"
    },
    none: {
        button: "p-0 h-auto text-base",
        buttonIcon: "p-0 h-auto w-auto text-base",
        radius: "rounded-none"
    },
    0: {
        button: "",
        buttonIcon: "",
        radius: "rounded-none"
    }
}