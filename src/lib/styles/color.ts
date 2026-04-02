export const colorStyles = {
    red: "bg-red-500 hover:bg-red-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    lightgreen: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    sub: "bg-sub-background hover:bg-sub-background-hover",
    none: ""
};

export const lightColorStyles = {
    red: "bg-red-500/35 hover:bg-red-600/35 text-white/60",
    yellow: "bg-yellow-500/35 hover:bg-yellow-600/35 text-white/60",
    lightgreen: "bg-green-500/35 hover:bg-green-600/35 text-white/60",
    blue: "bg-blue-500/35 hover:bg-blue-600/35 text-white/60",
    pink: "bg-pink-500/35 hover:bg-pink-600/35 text-white/60",
    purple: "bg-purple-500/35 hover:bg-purple-600/35 text-white/60",
    gray: "bg-gray-500/35 hover:bg-gray-600/35 text-white/60",
    sub: "bg-sub-background hover:bg-sub-background-hover text-white/60",
    none: ""
};

export type ColorStyle = keyof typeof colorStyles;