export type SizeStyle = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "none" | number;
export type SizeStyleType = "button" | "buttonIcon" | "radius" | "text";

export const sizeStyleParts: Record<SizeStyle, Record<SizeStyleType, string>> = {
    xs: {
        button: "text-xs h-4 px-1 py-0.5",
        buttonIcon: "text-xs h-4 w-4 p-0.5",
        radius: "rounded-xs",
        text: "text-xs"
    },
    sm: {
        button: "text-sm h-6 px-2 py-1",
        buttonIcon: "text-sm h-6 w-6 p-1",
        radius: "rounded-sm",
        text: "text-sm"
    },
    md: {
        button: "text-base h-8 px-3 py-1.5",
        buttonIcon: "text-base h-8 w-8 p-1.5",
        radius: "rounded-md",
        text: "text-base"
    },
    lg: {
        button: "text-lg h-10 px-4 py-2",
        buttonIcon: "text-lg h-10 w-10 p-2",
        radius: "rounded-lg",
        text: "text-lg"
    },
    xl: {
        button: "text-xl h-12 px-5 py-2.5",
        buttonIcon: "text-xl h-12 w-12 p-2.5",
        radius: "rounded-xl",
        text: "text-xl"
    },
    "2xl": {
        button: "text-2xl h-14 px-6 py-3",
        buttonIcon: "text-2xl h-14 w-14 p-3",
        radius: "rounded-2xl",
        text: "text-2xl"
    },
    "3xl": {
        button: "text-3xl h-16 px-7 py-3.5",
        buttonIcon: "text-3xl h-16 w-16 p-3.5",
        radius: "rounded-3xl",
        text: "text-3xl"
    },
    "4xl": {
        button: "text-4xl h-18 px-8 py-4",
        buttonIcon: "text-4xl h-18 w-18 p-4",
        radius: "rounded-4xl",
        text: "text-4xl"
    },
    "5xl": {
        button: "text-5xl h-20 px-9 py-4.5",
        buttonIcon: "text-5xl h-20 w-20 p-4.5",
        radius: "rounded-[2.5rem]",
        text: "text-5xl"
    },
    "6xl": {
        button: "text-6xl h-24 px-10 py-5",
        buttonIcon: "text-6xl h-24 w-24 p-5",
        radius: "rounded-[3rem]",
        text: "text-6xl"
    },
    full: {
        button: "w-full text-base h-8 px-3 py-1",
        buttonIcon: "w-full aspect-square text-base p-1",
        radius: "rounded-full",
        text: "w-full text-base"
    },
    none: {
        button: "p-0 h-auto text-base",
        buttonIcon: "p-0 h-auto w-auto text-base",
        radius: "rounded-none",
        text: ""
    },
    0: {
        button: "",
        buttonIcon: "",
        radius: "rounded-none",
        text: ""
    }
};

export const textStyle = {
    "text-xs": "0.75rem",
    "text-sm": "0.875rem",
    "text-base": "1rem",
    "text-lg": "1.125rem",
    "text-xl": "1.25rem",
    "text-2xl": "1.5rem",
    "text-3xl": "1.875rem",
    "text-4xl": "2.25rem",
    "text-5xl": "3rem",
    "text-6xl": "3.75rem"
};