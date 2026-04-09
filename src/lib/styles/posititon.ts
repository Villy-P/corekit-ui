export type PositionStyle = "top" | "right" | "bottom" | "left" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

export const positionParts: Record<PositionStyle, string> = {
    "top": "flex items-start justify-center",
    "right": "flex items-center justify-end",
    "bottom": "flex items-end justify-center",
    "left": "flex items-center justify-start",
    "top-left": "flex items-start justify-start",
    "top-right": "flex items-start justify-end",
    "bottom-left": "flex items-end justify-start",
    "bottom-right": "flex items-end justify-end",
    "center": "flex-center"
};