export const colorStyles = {
    red: "bg-red-500 hover:bg-red-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    lightgreen: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    pink: "bg-pink-500 hover:bg-pink-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    sub: "bg-sub-background hover:bg-sub-background-hover"
};

export type ColorStyle = keyof typeof colorStyles;