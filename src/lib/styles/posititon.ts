export type PositionStyle = "top" | "right" | "bottom" | "left" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

export const positionParts: Record<PositionStyle, string> = {
    "top": "top-4 left-1/2 -translate-x-1/2",
    "right": "top-1/2 right-4 transform -translate-y-1/2 flex-col",
    "bottom": "bottom-4 left-1/2 transform -translate-x-1/2 flex-col-reverse",
    "left": "top-1/2 left-4 transform -translate-y-1/2 flex-col",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "center": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
};