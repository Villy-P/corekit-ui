export type SizeStyle = "sm" | "md" | "lg" | number;
export type SizeStyleType = "button" | "buttonIcon";

export const sizeStyleParts: Record<SizeStyle, Record<SizeStyleType, string>> = {
    sm: {
        button: "text-sm h-6 px-2 py-0.5",
        buttonIcon: "text-sm h-6 w-6 p-0.5"
    },
    md: {
        button: "text-base h-8 px-3 py-1",
        buttonIcon: "text-base h-8 w-8 p-1"
    },
    lg: {
        button: "text-lg h-10 px-4 py-2",
        buttonIcon: "text-lg h-10 w-10 p-2"
    }
}