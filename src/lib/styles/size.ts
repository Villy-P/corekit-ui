export type SizeStyleTheme = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "full" | "none";
export type SizeStyleType = "button" | "buttonIcon" | "radius" | "text" | "card" | "form" | "formLabel" | "formLabelSelected" | "progress";
export type SizeStyle = SizeStyleTheme | number;

export const sizeStyleParts: Record<SizeStyleTheme, Record<SizeStyleType, string>> = {
    xs: {
        button: "text-xs h-4 px-1 py-0.5",
        buttonIcon: "text-xs h-4 w-4 p-0.5",
        radius: "rounded-xs",
        text: "text-xs",
        card: "w-xs",
        form: "h-5 pt-1 pb-0.25",
        formLabel: "text-[8px]",
        formLabelSelected: "text-[6px] top-1",
        progress: "h-0.5"
    },
    sm: {
        button: "text-sm h-6 px-2 py-1",
        buttonIcon: "text-sm h-6 w-6 p-1",
        radius: "rounded-sm",
        text: "text-sm",
        card: "w-sm",
        form: "h-7 pt-3 pb-0.5",
        formLabel: "text-[10px]",
        formLabelSelected: "text-[8px] top-1.5",
        progress: "h-1"
    },
    md: {
        button: "text-base h-8 px-3 py-1.5",
        buttonIcon: "text-base h-8 w-8 p-1.5",
        radius: "rounded-md",
        text: "text-base",
        card: "w-md",
        form: "h-9 pt-4 pb-1",
        formLabel: "text-xs",
        formLabelSelected: "text-[10px] top-2",
        progress: "h-2"
    },
    lg: {
        button: "text-lg h-10 px-4 py-2",
        buttonIcon: "text-lg h-10 w-10 p-2",
        radius: "rounded-lg",
        text: "text-lg",
        card: "w-lg",
        form: "h-[44px] pt-5 pb-2",
        formLabel: "text-sm",
        formLabelSelected: "text-xs top-2.5",
        progress: "h-3"
    },
    xl: {
        button: "text-xl h-12 px-5 py-2.5",
        buttonIcon: "text-xl h-12 w-12 p-2.5",
        radius: "rounded-xl",
        text: "text-xl",
        card: "w-xl",
        form: "h-[52px] pt-6 pb-3",
        formLabel: "text-base",
        formLabelSelected: "text-sm top-3",
        progress: "h-4"
    },
    "2xl": {
        button: "text-2xl h-14 px-6 py-3",
        buttonIcon: "text-2xl h-14 w-14 p-3",
        radius: "rounded-2xl",
        text: "text-2xl",
        card: "w-2xl",
        form: "h-[60px] pt-7 pb-4",
        formLabel: "text-lg",
        formLabelSelected: "text-base top-3.5",
        progress: "h-5"
    },
    "3xl": {
        button: "text-3xl h-16 px-7 py-3.5",
        buttonIcon: "text-3xl h-16 w-16 p-3.5",
        radius: "rounded-3xl",
        text: "text-3xl",
        card: "w-3xl",
        form: "h-[68px] pt-8 pb-5",
        formLabel: "text-xl",
        formLabelSelected: "text-lg top-4",
        progress: "h-6"
    },
    "4xl": {
        button: "text-4xl h-18 px-8 py-4",
        buttonIcon: "text-4xl h-18 w-18 p-4",
        radius: "rounded-4xl",
        text: "text-4xl",
        card: "w-4xl",
        form: "h-[76px] pt-9 pb-6",
        formLabel: "text-2xl",
        formLabelSelected: "text-xl top-4.5",
        progress: "h-7"
    },
    "5xl": {
        button: "text-5xl h-20 px-9 py-4.5",
        buttonIcon: "text-5xl h-20 w-20 p-4.5",
        radius: "rounded-[2.5rem]",
        text: "text-5xl",
        card: "w-5xl",
        form: "h-[84px] pt-10 pb-5",
        formLabel: "text-3xl",
        formLabelSelected: "text-2xl top-5",
        progress: "h-8"
    },
    "6xl": {
        button: "text-6xl h-24 px-10 py-5",
        buttonIcon: "text-6xl h-24 w-24 p-5",
        radius: "rounded-[3rem]",
        text: "text-6xl",
        card: "w-6xl",
        form: "h-[92px] pt-12 pb-6",
        formLabel: "text-4xl",
        formLabelSelected: "text-3xl top-[22px]",
        progress: "h-9"
    },
    full: {
        button: "w-full text-base h-8 px-3 py-1",
        buttonIcon: "w-full aspect-square text-base p-1",
        radius: "rounded-full",
        text: "w-full text-base",
        card: "w-full",
        form: "h-9 pt-4 pb-1",
        formLabel: "text-xs",
        formLabelSelected: "text-[10px] top-2",
        progress: "h-2"
    },
    none: {
        button: "p-0 h-auto text-base",
        buttonIcon: "p-0 h-auto w-auto text-base",
        radius: "rounded-none",
        text: "",
        card: "",
        form: "h-auto px-0 py-0",
        formLabel: "",
        formLabelSelected: "",
        progress: ""
    }
};

export function getSizeStyleClass(size: SizeStyle, type: SizeStyleType): string {
    if (typeof size === "string")
        return sizeStyleParts[size][type];
    return "";
}

export function getSizeStyle(size: SizeStyle, type: SizeStyleType): string {
    if (typeof size === "number") {
        switch (type) {
            case "button":
                return `height: ${size}px; padding: ${size / 4}px ${size / 8}px`;
            case "buttonIcon":
                return `height: ${size}px; width: ${size}px; padding: ${size / 4}px`;
            case "card":
                return `width: ${size}px`;
            case "radius":
                return `border-radius: ${size}px`;
        }
    }
    return "";
}


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