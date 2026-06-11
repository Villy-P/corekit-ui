export type ColorStyle = 
    "rose" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "gray" | "sub" | "none" |
    "white" | "black" |
    "primary" | "secondary" | "accent" |
    "error" | "warning" | "success" | "info";
export type ButtonColorStyleType = "full" | "light" | "outline" | "ghost";
export type ColorStyleType = "base" | "baseHover" | "text" | "hover" | "muted" | "subtle" | "mutedHover" | "border" | "borderHover" | "textHover" | "subtleHover";

export const colorStyles = [
    "rose", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "gray", "sub", "none",
    "white", "black",
    "primary", "secondary", "accent",
    "error", "warning", "success", "info"
] as const satisfies ColorStyle[];
export const colorStyleTypes = [
    "base", "baseHover", "text", "hover", "muted", "subtle", "mutedHover", "border", "borderHover", "textHover", "subtleHover"
] as const satisfies ColorStyleType[];

export const colorStyleParts: Record<ColorStyle, Record<ColorStyleType, string>> = {
    rose: {
        base: "bg-rose-600",
        baseHover: "hover:bg-rose-600",
        text: "text-rose-600",
        textHover: "hover:text-rose-700",
        hover: "hover:bg-rose-700",
        muted: "bg-rose-600/35",
        mutedHover: "hover:bg-rose-700/35",
        subtle: "bg-rose-600/10",
        subtleHover: "hover:bg-rose-600/10",
        border: "border-rose-600",
        borderHover: "hover:border-rose-700"
    },
    red: {
        base: "bg-red-600",
        baseHover: "hover:bg-red-600",
        text: "text-red-600",
        textHover: "hover:text-red-700",
        hover: "hover:bg-red-700",
        muted: "bg-red-600/35",
        mutedHover: "hover:bg-red-700/35",
        subtle: "bg-red-600/10",
        subtleHover: "hover:bg-red-600/10",
        border: "border-red-600",
        borderHover: "hover:border-red-700"
    },
    orange: {
        base: "bg-orange-600",
        baseHover: "hover:bg-orange-600",
        text: "text-orange-600",
        textHover: "hover:text-orange-700",
        hover: "hover:bg-orange-700",
        muted: "bg-orange-600/35",
        mutedHover: "hover:bg-orange-700/35",
        subtle: "bg-orange-600/10",
        subtleHover: "hover:bg-orange-600/10",
        border: "border-orange-600",
        borderHover: "hover:border-orange-700"
    },
    amber: {
        base: "bg-amber-600",
        baseHover: "hover:bg-amber-600",
        text: "text-amber-600",
        textHover: "hover:text-amber-700",
        hover: "hover:bg-amber-700",
        muted: "bg-amber-600/35",
        mutedHover: "hover:bg-amber-700/35",
        subtle: "bg-amber-600/10",
        subtleHover: "hover:bg-amber-600/10",
        border: "border-amber-600",
        borderHover: "hover:border-amber-700"

    },
    yellow: {
        base: "bg-yellow-600",
        baseHover: "hover:bg-yellow-600",
        text: "text-yellow-600",
        textHover: "hover:text-yellow-700",
        hover: "hover:bg-yellow-700",
        muted: "bg-yellow-600/35",
        mutedHover: "hover:bg-yellow-700/35",
        subtle: "bg-yellow-600/10",
        subtleHover: "hover:bg-yellow-600/10",
        border: "border-yellow-600",
        borderHover: "hover:border-yellow-700"
    },
    lime: {
        base: "bg-lime-600",
        baseHover: "hover:bg-lime-600",
        text: "text-lime-600",
        textHover: "hover:text-lime-700",
        hover: "hover:bg-lime-700",
        muted: "bg-lime-600/35",
        mutedHover: "hover:bg-lime-700/35",
        subtle: "bg-lime-600/10",
        subtleHover: "hover:bg-lime-600/10",
        border: "border-lime-600",
        borderHover: "hover:border-lime-700"
    },
    green: {
        base: "bg-green-600",
        baseHover: "hover:bg-green-600",
        text: "text-green-600",
        textHover: "hover:text-green-700",
        hover: "hover:bg-green-700",
        muted: "bg-green-600/35",
        mutedHover: "hover:bg-green-700/35",
        subtle: "bg-green-600/10",
        subtleHover: "hover:bg-green-600/10",
        border: "border-green-600",
        borderHover: "hover:border-green-700"
    },
    emerald: {
        base: "bg-emerald-600",
        baseHover: "hover:bg-emerald-600",
        text: "text-emerald-600",
        textHover: "hover:text-emerald-700",
        hover: "hover:bg-emerald-700",
        muted: "bg-emerald-600/35",
        mutedHover: "hover:bg-emerald-700/35",
        subtle: "bg-emerald-600/10",
        subtleHover: "hover:bg-emerald-600/10",
        border: "border-emerald-600",
        borderHover: "hover:border-emerald-700"
    },
    teal: {
        base: "bg-teal-600",
        baseHover: "hover:bg-teal-600",
        text: "text-teal-600",
        textHover: "hover:text-teal-700",
        hover: "hover:bg-teal-700",
        muted: "bg-teal-600/35",
        mutedHover: "hover:bg-teal-700/35",
        subtle: "bg-teal-600/10",
        subtleHover: "hover:bg-teal-600/10",
        border: "border-teal-600",
        borderHover: "hover:border-teal-700"
    },
    cyan: {
        base: "bg-cyan-600",
        baseHover: "hover:bg-cyan-600",
        text: "text-cyan-600",
        textHover: "hover:text-cyan-700",
        hover: "hover:bg-cyan-700",
        muted: "bg-cyan-600/35",
        mutedHover: "hover:bg-cyan-700/35",
        subtle: "bg-cyan-600/10",
        subtleHover: "hover:bg-cyan-600/10",
        border: "border-cyan-600",
        borderHover: "hover:border-cyan-700"
    },
    blue: {
        base: "bg-blue-600",
        baseHover: "hover:bg-blue-600",
        text: "text-blue-600",
        textHover: "hover:text-blue-700",
        hover: "hover:bg-blue-700",
        muted: "bg-blue-600/35",
        mutedHover: "hover:bg-blue-700/35",
        subtle: "bg-blue-600/10",
        subtleHover: "hover:bg-blue-600/10",
        border: "border-blue-600",
        borderHover: "hover:border-blue-700"
    },
    indigo: {
        base: "bg-indigo-600",
        baseHover: "hover:bg-indigo-600",
        text: "text-indigo-600",
        textHover: "hover:text-indigo-700",
        hover: "hover:bg-indigo-700",
        muted: "bg-indigo-600/35",
        mutedHover: "hover:bg-indigo-700/35",
        subtle: "bg-indigo-600/10",
        subtleHover: "hover:bg-indigo-600/10",
        border: "border-indigo-600",
        borderHover: "hover:border-indigo-700"
    },
    violet: {
        base: "bg-violet-600",
        baseHover: "hover:bg-violet-600",
        text: "text-violet-600",
        textHover: "hover:text-violet-700",
        hover: "hover:bg-violet-700",
        muted: "bg-violet-600/35",
        mutedHover: "hover:bg-violet-700/35",
        subtle: "bg-violet-600/10",
        subtleHover: "hover:bg-violet-600/10",
        border: "border-violet-600",
        borderHover: "hover:border-violet-700"
    },
    purple: {
        base: "bg-purple-600",
        baseHover: "hover:bg-purple-600",
        text: "text-purple-600",
        textHover: "hover:text-purple-700",
        hover: "hover:bg-purple-700",
        muted: "bg-purple-600/35",
        mutedHover: "hover:bg-purple-700/35",
        subtle: "bg-purple-600/10",
        subtleHover: "hover:bg-purple-600/10",
        border: "border-purple-600",
        borderHover: "hover:border-purple-700"
    },
    pink: {
        base: "bg-pink-600",
        baseHover: "hover:bg-pink-600",
        text: "text-pink-600",
        textHover: "hover:text-pink-700",
        hover: "hover:bg-pink-700",
        muted: "bg-pink-600/35",
        mutedHover: "hover:bg-pink-700/35",
        subtle: "bg-pink-600/10",
        subtleHover: "hover:bg-pink-600/10",
        border: "border-pink-600",
        borderHover: "hover:border-pink-700"
    },
    fuchsia: {
        base: "bg-fuchsia-600",
        baseHover: "hover:bg-fuchsia-600",
        text: "text-fuchsia-600",
        textHover: "hover:text-fuchsia-700",
        hover: "hover:bg-fuchsia-700",
        muted: "bg-fuchsia-600/35",
        mutedHover: "hover:bg-fuchsia-700/35",
        subtle: "bg-fuchsia-600/10",
        subtleHover: "hover:bg-fuchsia-600/10",
        border: "border-fuchsia-600",
        borderHover: "hover:border-fuchsia-700"
    },
    gray: {
        base: "bg-gray-600",
        baseHover: "hover:bg-gray-600",
        text: "text-gray-600",
        textHover: "hover:text-gray-700",
        hover: "hover:bg-gray-700",
        muted: "bg-gray-600/35",
        mutedHover: "hover:bg-gray-700/35",
        subtle: "bg-gray-600/10",
        subtleHover: "hover:bg-gray-600/10",
        border: "border-gray-600",
        borderHover: "hover:border-gray-700"
    },
    sub: {
        base: "bg-sub-background",
        baseHover: "hover:bg-sub-background-hover",
        text: "text-sub-background",
        textHover: "hover:text-sub-background-hover",
        hover: "hover:bg-sub-background-hover",
        muted: "bg-sub-background/35",
        mutedHover: "hover:bg-sub-background-hover/35",
        subtle: "bg-sub-background/10",
        subtleHover: "hover:bg-sub-background-hover/10",
        border: "border-sub-background",
        borderHover: "hover:border-sub-background-hover"
    },
    none: {
        base: "",
        baseHover: "",
        text: "",
        textHover: "",
        hover: "",
        muted: "",
        mutedHover: "",
        subtle: "",
        subtleHover: "",
        border: "",
        borderHover: ""
    },



    white: {
        base: "bg-white text-contrast-text",
        baseHover: "hover:bg-white",
        textHover: "hover:text-contrast-text",
        hover: "hover:bg-gray-100",
        muted: "bg-gray-100/35",
        mutedHover: "hover:bg-gray-100/35",
        subtle: "bg-gray-100/10",
        subtleHover: "hover:bg-gray-100/10",
        border: "border-gray-100",
        borderHover: "hover:border-gray-300",
        text: "text-white"
    },
    black: {
        base: "bg-black",
        baseHover: "hover:bg-black",
        textHover: "hover:text-gray-300",
        hover: "hover:bg-black",
        muted: "bg-black/35",
        mutedHover: "hover:bg-black/35",
        subtle: "bg-black/10",
        subtleHover: "hover:bg-black/10",
        border: "border-black",
        borderHover: "hover:border-gray-700",
        text: "text-black"
    },


    primary: {
        base: "bg-primary-600",
        baseHover: "hover:bg-primary-600",
        text: "text-primary-600",
        textHover: "hover:text-primary-700",
        hover: "hover:bg-primary-700",
        muted: "bg-primary-600/35",
        mutedHover: "hover:bg-primary-700/35",
        subtle: "bg-primary-600/10",
        subtleHover: "hover:bg-primary-700/10",
        border: "border-primary-600",
        borderHover: "hover:border-primary-700"
    },
    secondary: {
        base: "bg-secondary-600",
        baseHover: "hover:bg-secondary-600",
        text: "text-secondary-600",
        textHover: "hover:text-secondary-700",
        hover: "hover:bg-secondary-700",
        muted: "bg-secondary-600/35",
        mutedHover: "hover:bg-secondary-700/35",
        subtle: "bg-secondary-600/10",
        subtleHover: "hover:bg-secondary-700/10",
        border: "border-secondary-600",
        borderHover: "hover:border-secondary-700"
    },
    accent: {
        base: "bg-accent-600",
        baseHover: "hover:bg-accent-600",
        text: "text-accent-600",
        textHover: "hover:text-accent-700",
        hover: "hover:bg-accent-700",
        muted: "bg-accent-600/35",
        mutedHover: "hover:bg-accent-700/35",
        subtle: "bg-accent-600/10",
        subtleHover: "hover:bg-accent-700/10",
        border: "border-accent-600",
        borderHover: "hover:border-accent-700"
    },


    error: {
        base: "bg-red-600",
        baseHover: "hover:bg-red-600",
        text: "text-red-600",
        textHover: "hover:text-red-700",
        hover: "hover:bg-red-700",
        muted: "bg-red-600/35",
        mutedHover: "hover:bg-red-700/35",
        subtle: "bg-red-600/10",
        subtleHover: "hover:bg-red-600/10",
        border: "border-red-600",
        borderHover: "hover:border-red-700"
    },
    warning: {
        base: "bg-amber-600",
        baseHover: "hover:bg-amber-600",
        text: "text-amber-600",
        textHover: "hover:text-amber-700",
        hover: "hover:bg-amber-700",
        muted: "bg-amber-600/35",
        mutedHover: "hover:bg-amber-700/35",
        subtle: "bg-amber-600/10",
        subtleHover: "hover:bg-amber-600/10",
        border: "border-amber-600",
        borderHover: "hover:border-amber-700"
    },
    success: {
        base: "bg-emerald-600",
        baseHover: "hover:bg-emerald-600",
        textHover: "hover:text-emerald-700",
        hover: "hover:bg-emerald-700",
        muted: "bg-emerald-600/35",
        mutedHover: "hover:bg-emerald-700/35",
        subtle: "bg-emerald-600/10",
        subtleHover: "hover:bg-emerald-600/10",
        border: "border-emerald-600",
        borderHover: "hover:border-emerald-700",
        text: "text-emerald-600"
    },
    info: {
        base: "bg-sky-600",
        baseHover: "hover:bg-sky-600",
        text: "text-sky-600",
        textHover: "hover:text-sky-700",
        hover: "hover:bg-sky-700",
        muted: "bg-sky-600/35",
        mutedHover: "hover:bg-sky-700/35",
        subtle: "bg-sky-600/10",
        subtleHover: "hover:bg-sky-600/10",
        border: "border-sky-600",
        borderHover: "hover:border-sky-700"
    }
}

export function generateColorStyle(color: ColorStyle, variant: ColorStyleType) {
    const styles = colorStyleParts[color];
    if (!styles) return "";
    return styles[variant] || "";
}