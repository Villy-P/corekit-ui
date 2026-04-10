export type ColorStyle = 
    "rose" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "gray" | "sub" | "none" |
    "white" | "black" |
    "primary" | "secondary" | "accent" |
    "error" | "warning" | "success" | "info";
export type ColorStyleType = "base" | "text" | "full" | "light" | "outline" | "ghost";

export const colorStyleParts: Record<ColorStyle, Record<ColorStyleType, string>> = {
    rose: {
        base: "bg-rose-500",
        text: "text-rose-500",
        full: "bg-rose-500 hover:bg-rose-600",
        light: "bg-rose-500/35 hover:bg-rose-600/35 text-white/60",
        outline: "border border-rose-500 hover:border-rose-600 text-rose-500 hover:text-rose-600 hover:bg-rose-500/10",
        ghost: "hover:bg-rose-500"
    },
    red: {
        base: "bg-red-500",
        text: "text-red-500",
        full: "bg-red-500 hover:bg-red-600",
        light: "bg-red-500/35 hover:bg-red-600/35 text-white/60",
        outline: "border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 hover:bg-red-500/10",
        ghost: "hover:bg-red-500"
    },
    orange: {
        base: "bg-orange-500",
        text: "text-orange-500",
        full: "bg-orange-500 hover:bg-orange-600",
        light: "bg-orange-500/35 hover:bg-orange-600/35 text-white/60",
        outline: "border border-orange-500 hover:border-orange-600 text-orange-500 hover:text-orange-600 hover:bg-orange-500/10",
        ghost: "hover:bg-orange-500"
    },
    amber: {
        base: "bg-amber-500",
        text: "text-amber-500",
        full: "bg-amber-500 hover:bg-amber-600",
        light: "bg-amber-500/35 hover:bg-amber-600/35 text-white/60",
        outline: "border border-amber-500 hover:border-amber-600 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10",
        ghost: "hover:bg-amber-500"
    },
    yellow: {
        base: "bg-yellow-500",
        text: "text-yellow-500",
        full: "bg-yellow-500 hover:bg-yellow-600",
        light: "bg-yellow-500/35 hover:bg-yellow-600/35 text-white/60",
        outline: "border border-yellow-500 hover:border-yellow-600 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-500/10",
        ghost: "hover:bg-yellow-500"
    },
    lime: {
        base: "bg-lime-500",
        text: "text-lime-500",
        full: "bg-lime-500 hover:bg-lime-600",
        light: "bg-lime-500/35 hover:bg-lime-600/35 text-white/60",
        outline: "border border-lime-500 hover:border-lime-600 text-lime-500 hover:text-lime-600 hover:bg-lime-500/10",
        ghost: "hover:bg-lime-500"
    },
    green: {
        base: "bg-green-500",
        text: "text-green-500",
        full: "bg-green-500 hover:bg-green-600",
        light: "bg-green-500/35 hover:bg-green-600/35 text-white/60",
        outline: "border border-green-500 hover:border-green-600 text-green-500 hover:text-green-600 hover:bg-green-500/10",
        ghost: "hover:bg-green-500"
    },
    emerald: {
        base: "bg-emerald-500",
        text: "text-emerald-500",
        full: "bg-emerald-500 hover:bg-emerald-600",
        light: "bg-emerald-500/35 hover:bg-emerald-600/35 text-white/60",
        outline: "border border-emerald-500 hover:border-emerald-600 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10",
        ghost: "hover:bg-emerald-500"
    },
    teal: {
        base: "bg-teal-500",
        text: "text-teal-500",
        full: "bg-teal-500 hover:bg-teal-600",
        light: "bg-teal-500/35 hover:bg-teal-600/35 text-white/60",
        outline: "border border-teal-500 hover:border-teal-600 text-teal-500 hover:text-teal-600 hover:bg-teal-500/10",
        ghost: "hover:bg-teal-500"
    },
    cyan: {
        base: "bg-cyan-500",
        text: "text-cyan-500",
        full: "bg-cyan-500 hover:bg-cyan-600",
        light: "bg-cyan-500/35 hover:bg-cyan-600/35 text-white/60",
        outline: "border border-cyan-500 hover:border-cyan-600 text-cyan-500 hover:text-cyan-600 hover:bg-cyan-500/10",
        ghost: "hover:bg-cyan-500"
    },
    blue: {
        base: "bg-blue-500",
        text: "text-blue-500",
        full: "bg-blue-500 hover:bg-blue-600",
        light: "bg-blue-500/35 hover:bg-blue-600/35 text-white/60",
        outline: "border border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10",
        ghost: "hover:bg-blue-500"
    },
    indigo: {
        base: "bg-indigo-500",
        text: "text-indigo-500",
        full: "bg-indigo-500 hover:bg-indigo-600",
        light: "bg-indigo-500/35 hover:bg-indigo-600/35 text-white/60",
        outline: "border border-indigo-500 hover:border-indigo-600 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-500/10",
        ghost: "hover:bg-indigo-500"
    },
    violet: {
        base: "bg-violet-500",
        text: "text-violet-500",
        full: "bg-violet-500 hover:bg-violet-600",
        light: "bg-violet-500/35 hover:bg-violet-600/35 text-white/60",
        outline: "border border-violet-500 hover:border-violet-600 text-violet-500 hover:text-violet-600 hover:bg-violet-500/10",
        ghost: "hover:bg-violet-500"
    },
    purple: {
        base: "bg-purple-500",
        text: "text-purple-500",
        full: "bg-purple-500 hover:bg-purple-600",
        light: "bg-purple-500/35 hover:bg-purple-600/35 text-white/60",
        outline: "border border-purple-500 hover:border-purple-600 text-purple-500 hover:text-purple-600 hover:bg-purple-500/10",
        ghost: "hover:bg-purple-500"
    },
    pink: {
        base: "bg-pink-500",
        text: "text-pink-500",
        full: "bg-pink-500 hover:bg-pink-600",
        light: "bg-pink-500/35 hover:bg-pink-600/35 text-white/60",
        outline: "border border-pink-500 hover:border-pink-600 text-pink-500 hover:text-pink-600 hover:bg-pink-500/10",
        ghost: "hover:bg-pink-500"
    },
    fuchsia: {
        base: "bg-fuchsia-500",
        text: "text-fuchsia-500",
        full: "bg-fuchsia-500 hover:bg-fuchsia-600",
        light: "bg-fuchsia-500/35 hover:bg-fuchsia-600/35 text-white/60",
        outline: "border border-fuchsia-500 hover:border-fuchsia-600 text-fuchsia-500 hover:text-fuchsia-600 hover:bg-fuchsia-500/10",
        ghost: "hover:bg-fuchsia-500"
    },
    gray: {
        base: "bg-gray-500",
        text: "text-gray-500",
        full: "bg-gray-500 hover:bg-gray-600",
        light: "bg-gray-500/35 hover:bg-gray-600/35 text-white/60",
        outline: "border border-gray-500 hover:border-gray-600 text-gray-500 hover:text-gray-600 hover:bg-gray-500/10",
        ghost: "hover:bg-gray-500"
    },
    sub: {
        base: "bg-sub-background",
        text: "text-sub-background",
        full: "bg-sub-background hover:bg-sub-background-hover",
        light: "bg-sub-background hover:bg-sub-background-hover text-white/60",
        outline: "border border-sub-background hover:border-sub-background-hover text-sub-background hover:text-sub-background-hover hover:bg-sub-background/10",
        ghost: "hover:bg-sub-background"
    },
    none: {
        base: "",
        text: "",
        full: "",
        light: "",
        outline: "",
        ghost: ""
    },



    white: {
        base: "bg-white text-contrast-text",
        text: "text-white",
        full: "bg-white hover:bg-gray-100 text-contrast-text hover:text-contrast-text",
        light: "bg-white/35 hover:bg-white/35 text-gray-700",
        outline: "border border-white hover:border-gray-300 text-white hover:text-gray-300 hover:bg-white/10",
        ghost: "hover:bg-white hover:text-contrast-text"
    },
    black: {
        base: "bg-black",
        text: "text-black",
        full: "bg-black hover:bg-stone-950",
        light: "bg-black/35 hover:bg-black/35 text-gray-500",
        outline: "border border-black hover:border-gray-700 text-black hover:text-gray-700 hover:bg-black/10",
        ghost: "hover:bg-black"
    },


    primary: {
        base: "bg-primary",
        text: "text-primary",
        full: "bg-primary hover:bg-primary/90",
        light: "bg-primary/35 hover:bg-primary/35 text-white/60",
        outline: "border border-primary hover:border-primary/90 text-primary hover:text-primary/90 hover:bg-primary/10",
        ghost: "hover:bg-primary"
    },
    secondary: {
        base: "bg-secondary",
        text: "text-secondary",
        full: "bg-secondary hover:bg-secondary/90",
        light: "bg-secondary/35 hover:bg-secondary/35 text-white/60",
        outline: "border border-secondary hover:border-secondary/90 text-secondary hover:text-secondary/90 hover:bg-secondary/10",
        ghost: "hover:bg-secondary"
    },
    accent: {
        base: "bg-accent",
        text: "text-accent",
        full: "bg-accent hover:bg-accent/90",
        light: "bg-accent/35 hover:bg-accent/35 text-white/60",
        outline: "border border-accent hover:border-accent/90 text-accent hover:text-accent/90 hover:bg-accent/10",
        ghost: "hover:bg-accent"
    },


    error: {
        base: "bg-red-500",
        text: "text-red-500",
        full: "bg-red-500 hover:bg-red-600",
        light: "bg-red-500/35 hover:bg-red-600/35 text-white/60",
        outline: "border border-red-500 hover:border-red-600 text-red-500 hover:text-red-600 hover:bg-red-500/10",
        ghost: "hover:bg-red-500"
    },
    warning: {
        base: "bg-amber-500",
        text: "text-amber-500",
        full: "bg-amber-500 hover:bg-amber-600",
        light: "bg-amber-500/35 hover:bg-amber-600/35 text-white/60",
        outline: "border border-amber-500 hover:border-amber-600 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10",
        ghost: "hover:bg-amber-500"
    },
    success: {
        base: "bg-emerald-500",
        text: "text-emerald-500",
        full: "bg-emerald-500 hover:bg-emerald-600",
        light: "bg-emerald-500/35 hover:bg-emerald-600/35 text-white/60",
        outline: "border border-emerald-500 hover:border-emerald-600 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-500/10",
        ghost: "hover:bg-emerald-500"
    },
    info: {
        base: "bg-sky-500",
        text: "text-sky-500",
        full: "bg-sky-500 hover:bg-sky-600",
        light: "bg-sky-500/35 hover:bg-sky-600/35 text-white/60",
        outline: "border border-sky-500 hover:border-sky-600 text-sky-500 hover:text-sky-600 hover:bg-sky-500/10",
        ghost: "hover:bg-sky-500"
    }
}

export function generateColorStyle(color: ColorStyle, variant: ColorStyleType) {
    const styles = colorStyleParts[color];
    if (!styles) return "";
    return styles[variant] || "";
}