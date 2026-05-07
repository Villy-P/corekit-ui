export type ColorStyle = 
    "rose" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "gray" | "sub" | "none" |
    "white" | "black" |
    "primary" | "secondary" | "accent" |
    "error" | "warning" | "success" | "info";
export type ColorStyleType = "base" | "text" | "full" | "light" | "outline" | "ghost" | "loader";

export const colorStyles = [
    "rose", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "gray", "sub", "none",
    "white", "black",
    "primary", "secondary", "accent",
    "error", "warning", "success", "info"
] as const satisfies ColorStyle[];

export const colorStyleParts: Record<ColorStyle, Record<ColorStyleType, string>> = {
    rose: {
        base: "bg-rose-600",
        text: "text-rose-600",
        full: "bg-rose-600 hover:bg-rose-700",
        light: "bg-rose-600/35 hover:bg-rose-700/35 text-white/60",
        outline: "border border-rose-600 hover:border-rose-700 text-rose-600 hover:text-rose-700 hover:bg-rose-600/10",
        ghost: "hover:bg-rose-600",
        loader: "border-t-rose-600"
    },
    red: {
        base: "bg-red-600",
        text: "text-red-600",
        full: "bg-red-600 hover:bg-red-700",
        light: "bg-red-600/35 hover:bg-red-700/35 text-white/60",
        outline: "border border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 hover:bg-red-600/10",
        ghost: "hover:bg-red-600",
        loader: "border-t-red-600"
    },
    orange: {
        base: "bg-orange-600",
        text: "text-orange-600",
        full: "bg-orange-600 hover:bg-orange-700",
        light: "bg-orange-600/35 hover:bg-orange-700/35 text-white/60",
        outline: "border border-orange-600 hover:border-orange-700 text-orange-600 hover:text-orange-700 hover:bg-orange-600/10",
        ghost: "hover:bg-orange-600",
        loader: "border-t-orange-600"
    },
    amber: {
        base: "bg-amber-600",
        text: "text-amber-600",
        full: "bg-amber-600 hover:bg-amber-700",
        light: "bg-amber-600/35 hover:bg-amber-700/35 text-white/60",
        outline: "border border-amber-600 hover:border-amber-700 text-amber-600 hover:text-amber-700 hover:bg-amber-600/10",
        ghost: "hover:bg-amber-600",
        loader: "border-t-amber-600"

    },
    yellow: {
        base: "bg-yellow-600",
        text: "text-yellow-600",
        full: "bg-yellow-600 hover:bg-yellow-700",
        light: "bg-yellow-600/35 hover:bg-yellow-700/35 text-white/60",
        outline: "border border-yellow-600 hover:border-yellow-700 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-600/10",
        ghost: "hover:bg-yellow-600",
        loader: "border-t-yellow-600"
    },
    lime: {
        base: "bg-lime-600",
        text: "text-lime-600",
        full: "bg-lime-600 hover:bg-lime-700",
        light: "bg-lime-600/35 hover:bg-lime-700/35 text-white/60",
        outline: "border border-lime-600 hover:border-lime-700 text-lime-600 hover:text-lime-700 hover:bg-lime-600/10",
        ghost: "hover:bg-lime-600",
        loader: "border-t-lime-600"
    },
    green: {
        base: "bg-green-600",
        text: "text-green-600",
        full: "bg-green-600 hover:bg-green-700",
        light: "bg-green-600/35 hover:bg-green-700/35 text-white/60",
        outline: "border border-green-600 hover:border-green-700 text-green-600 hover:text-green-700 hover:bg-green-600/10",
        ghost: "hover:bg-green-600",
        loader: "border-t-green-600"
    },
    emerald: {
        base: "bg-emerald-600",
        text: "text-emerald-600",
        full: "bg-emerald-600 hover:bg-emerald-700",
        light: "bg-emerald-600/35 hover:bg-emerald-700/35 text-white/60",
        outline: "border border-emerald-600 hover:border-emerald-700 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-600/10",
        ghost: "hover:bg-emerald-600",
        loader: "border-t-emerald-600"
    },
    teal: {
        base: "bg-teal-600",
        text: "text-teal-600",
        full: "bg-teal-600 hover:bg-teal-700",
        light: "bg-teal-600/35 hover:bg-teal-700/35 text-white/60",
        outline: "border border-teal-600 hover:border-teal-700 text-teal-600 hover:text-teal-700 hover:bg-teal-600/10",
        ghost: "hover:bg-teal-600",
        loader: "border-t-teal-600"
    },
    cyan: {
        base: "bg-cyan-600",
        text: "text-cyan-600",
        full: "bg-cyan-600 hover:bg-cyan-700",
        light: "bg-cyan-600/35 hover:bg-cyan-700/35 text-white/60",
        outline: "border border-cyan-600 hover:border-cyan-700 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-600/10",
        ghost: "hover:bg-cyan-600",
        loader: "border-t-cyan-600"
    },
    blue: {
        base: "bg-blue-600",
        text: "text-blue-600",
        full: "bg-blue-600 hover:bg-blue-700",
        light: "bg-blue-600/35 hover:bg-blue-700/35 text-white/60",
        outline: "border border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 hover:bg-blue-600/10",
        ghost: "hover:bg-blue-600",
        loader: "border-t-blue-600"
    },
    indigo: {
        base: "bg-indigo-600",
        text: "text-indigo-600",
        full: "bg-indigo-600 hover:bg-indigo-700",
        light: "bg-indigo-600/35 hover:bg-indigo-700/35 text-white/60",
        outline: "border border-indigo-600 hover:border-indigo-700 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-600/10",
        ghost: "hover:bg-indigo-600",
        loader: "border-t-indigo-600"
    },
    violet: {
        base: "bg-violet-600",
        text: "text-violet-600",
        full: "bg-violet-600 hover:bg-violet-700",
        light: "bg-violet-600/35 hover:bg-violet-700/35 text-white/60",
        outline: "border border-violet-600 hover:border-violet-700 text-violet-600 hover:text-violet-700 hover:bg-violet-600/10",
        ghost: "hover:bg-violet-600",
        loader: "border-t-violet-600"
    },
    purple: {
        base: "bg-purple-600",
        text: "text-purple-600",
        full: "bg-purple-600 hover:bg-purple-700",
        light: "bg-purple-600/35 hover:bg-purple-700/35 text-white/60",
        outline: "border border-purple-600 hover:border-purple-700 text-purple-600 hover:text-purple-700 hover:bg-purple-600/10",
        ghost: "hover:bg-purple-600",
        loader: "border-t-purple-600"
    },
    pink: {
        base: "bg-pink-600",
        text: "text-pink-600",
        full: "bg-pink-600 hover:bg-pink-700",
        light: "bg-pink-600/35 hover:bg-pink-700/35 text-white/60",
        outline: "border border-pink-600 hover:border-pink-700 text-pink-600 hover:text-pink-700 hover:bg-pink-600/10",
        ghost: "hover:bg-pink-600",
        loader: "border-t-pink-600"
    },
    fuchsia: {
        base: "bg-fuchsia-600",
        text: "text-fuchsia-600",
        full: "bg-fuchsia-600 hover:bg-fuchsia-700",
        light: "bg-fuchsia-600/35 hover:bg-fuchsia-700/35 text-white/60",
        outline: "border border-fuchsia-600 hover:border-fuchsia-700 text-fuchsia-600 hover:text-fuchsia-700 hover:bg-fuchsia-600/10",
        ghost: "hover:bg-fuchsia-600",
        loader: "border-t-fuchsia-600"
    },
    gray: {
        base: "bg-gray-600",
        text: "text-gray-600",
        full: "bg-gray-600 hover:bg-gray-700",
        light: "bg-gray-600/35 hover:bg-gray-700/35 text-white/60",
        outline: "border border-gray-600 hover:border-gray-700 text-gray-600 hover:text-gray-700 hover:bg-gray-600/10",
        ghost: "hover:bg-gray-600",
        loader: "border-t-gray-600"
    },
    sub: {
        base: "bg-sub-background",
        text: "text-sub-background",
        full: "bg-sub-background hover:bg-sub-background-hover",
        light: "bg-sub-background hover:bg-sub-background-hover text-white/60",
        outline: "border border-sub-background hover:border-sub-background-hover text-sub-background hover:text-sub-background-hover hover:bg-sub-background/10",
        ghost: "hover:bg-sub-background",
        loader: "border-t-sub-background"
    },
    none: {
        base: "",
        text: "",
        full: "",
        light: "",
        outline: "",
        ghost: "",
        loader: ""
    },



    white: {
        base: "bg-white text-contrast-text",
        text: "text-white",
        full: "bg-white hover:bg-gray-100 text-contrast-text hover:text-contrast-text",
        light: "bg-white/35 hover:bg-white/35 text-gray-700",
        outline: "border border-white hover:border-gray-300 text-white hover:text-gray-300 hover:bg-white/10",
        ghost: "hover:bg-white hover:text-contrast-text",
        loader: "border-t-white"
    },
    black: {
        base: "bg-black",
        text: "text-black",
        full: "bg-black hover:bg-stone-950",
        light: "bg-black/35 hover:bg-black/35 text-gray-600",
        outline: "border border-black hover:border-gray-700 text-black hover:text-gray-700 hover:bg-black/10",
        ghost: "hover:bg-black",
        loader: "border-t-black"
    },


    primary: {
        base: "bg-primary-600",
        text: "text-primary-600",
        full: "bg-primary-600 hover:bg-primary-700",
        light: "bg-primary-600/35 hover:bg-primary-700/35 text-white/60",
        outline: "border border-primary-600 hover:border-primary-700 text-primary-600 hover:text-primary-700 hover:bg-primary-600/10",
        ghost: "hover:bg-primary-600",
        loader: "border-t-primary"
    },
    secondary: {
        base: "bg-secondary-600",
        text: "text-secondary-600",
        full: "bg-secondary-600 hover:bg-secondary-700",
        light: "bg-secondary-600/35 hover:bg-secondary-700/35 text-white/60",
        outline: "border border-secondary-600 hover:border-secondary-700 text-secondary-600 hover:text-secondary-700 hover:bg-secondary-600/10",
        ghost: "hover:bg-secondary-600",
        loader: "border-t-secondary"
    },
    accent: {
        base: "bg-accent-600",
        text: "text-accent-600",
        full: "bg-accent-600 hover:bg-accent-700",
        light: "bg-accent-600/35 hover:bg-accent-700/35 text-white/60",
        outline: "border border-accent-600 hover:border-accent-700 text-accent-600 hover:text-accent-700 hover:bg-accent-600/10",
        ghost: "hover:bg-accent-600",
        loader: "border-t-accent"
    },


    error: {
        base: "bg-red-600",
        text: "text-red-600",
        full: "bg-red-600 hover:bg-red-700",
        light: "bg-red-600/35 hover:bg-red-700/35 text-white/60",
        outline: "border border-red-600 hover:border-red-700 text-red-600 hover:text-red-700 hover:bg-red-600/10",
        ghost: "hover:bg-red-600",
        loader: "border-t-red-600"
    },
    warning: {
        base: "bg-amber-600",
        text: "text-amber-600",
        full: "bg-amber-600 hover:bg-amber-700",
        light: "bg-amber-600/35 hover:bg-amber-700/35 text-white/60",
        outline: "border border-amber-600 hover:border-amber-700 text-amber-600 hover:text-amber-700 hover:bg-amber-600/10",
        ghost: "hover:bg-amber-600",
        loader: "border-t-amber-600"
    },
    success: {
        base: "bg-emerald-600",
        text: "text-emerald-600",
        full: "bg-emerald-600 hover:bg-emerald-700",
        light: "bg-emerald-600/35 hover:bg-emerald-700/35 text-white/60",
        outline: "border border-emerald-600 hover:border-emerald-700 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-600/10",
        ghost: "hover:bg-emerald-600",
        loader: "border-t-emerald-600"
    },
    info: {
        base: "bg-sky-600",
        text: "text-sky-600",
        full: "bg-sky-600 hover:bg-sky-700",
        light: "bg-sky-600/35 hover:bg-sky-700/35 text-white/60",
        outline: "border border-sky-600 hover:border-sky-700 text-sky-600 hover:text-sky-700 hover:bg-sky-600/10",
        ghost: "hover:bg-sky-600",
        loader: "border-t-sky-600"
    }
}

export function generateColorStyle(color: ColorStyle, variant: ColorStyleType) {
    const styles = colorStyleParts[color];
    if (!styles) return "";
    return styles[variant] || "";
}