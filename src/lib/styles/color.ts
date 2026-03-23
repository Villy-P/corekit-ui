export const colorStyles = {
    red: "bg-red-500 hover:bg-red-600 focus:ring-red-300",
    yellow: "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300",
    lightgreen: "bg-green-500 hover:bg-green-600 focus:ring-green-300",
    blue: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300",
    pink: "bg-pink-500 hover:bg-pink-600 focus:ring-pink-300",
    purple: "bg-purple-500 hover:bg-purple-600 focus:ring-purple-300",
    gray: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-300",
};

export type ColorStyle = keyof typeof colorStyles;