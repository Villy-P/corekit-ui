export type ColorStyle = "red" | "yellow" | "lightgreen" | "blue" | "pink" | "purple" | "gray" | "sub" | "none";
export type ColorStyleType = "full" | "light" | "outline" | "ghost";

export const colorStyleParts: Record<ColorStyle, Record<ColorStyleType, string>> = {
    red: {
        full: "bg-red-500 hover:bg-red-600",
        light: "bg-red-500/35 hover:bg-red-600/35 text-white/60",
        outline: "border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 hover:bg-red-500/10",
        ghost: "text-red-500 hover:bg-red-500"
    },
    yellow: {
        full: "bg-yellow-500 hover:bg-yellow-600",
        light: "bg-yellow-500/35 hover:bg-yellow-600/35 text-white/60",
        outline: "border border-yellow-500 hover:border-yellow-600 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-500/10",
        ghost: "text-yellow-500 hover:bg-yellow-500"
    },
    lightgreen: {
        full: "bg-green-500 hover:bg-green-600",
        light: "bg-green-500/35 hover:bg-green-600/35 text-white/60",
        outline: "border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600 hover:bg-green-500/10",
        ghost: "text-green-500 hover:bg-green-500"
    },
    blue: {
        full: "bg-blue-500 hover:bg-blue-600",
        light: "bg-blue-500/35 hover:bg-blue-600/35 text-white/60",
        outline: "border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10",
        ghost: "text-blue-500 hover:bg-blue-500"
    },
    pink: {
        full: "bg-pink-500 hover:bg-pink-600",
        light: "bg-pink-500/35 hover:bg-pink-600/35 text-white/60",
        outline: "border border-pink-500 hover:border-pink-600 text-pink-500 hover:text-pink-600 hover:bg-pink-500/10",
        ghost: "text-pink-500 hover:bg-pink-500"
    },
    purple: {
        full: "bg-purple-500 hover:bg-purple-600",
        light: "bg-purple-500/35 hover:bg-purple-600/35 text-white/60",
        outline: "border border-purple-500 hover:border-purple-600 text-purple-500 hover:text-purple-600 hover:bg-purple-500/10",
        ghost: "text-purple-500 hover:bg-purple-500"
    },
    gray: {
        full: "bg-gray-500 hover:bg-gray-600",
        light: "bg-gray-500/35 hover:bg-gray-600/35 text-white/60",
        outline: "border border-gray-500 hover:border-gray-600 text-gray-500 hover:text-gray-600 hover:bg-gray-500/10",
        ghost: "text-gray-500 hover:bg-gray-500"
    },
    sub: {
        full: "bg-sub-background hover:bg-sub-background-hover",
        light: "bg-sub-background hover:bg-sub-background-hover text-white/60",
        outline: "border border-sub-background hover:border-sub-background-hover text-sub-background hover:text-sub-background-hover hover:bg-sub-background/10",
        ghost: "text-sub-background hover:bg-sub-background"
    },
    none: {
        full: "",
        light: "",
        outline: "",
        ghost: ""
    }
}

export function generateColorStyle(color: ColorStyle, variant: ColorStyleType) {
    const styles = colorStyleParts[color];
    if (!styles) return "";
    return styles[variant] || "";
}