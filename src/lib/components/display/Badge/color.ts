import { colorStyleParts, type Color, type Gradient } from "../../../styles/color";
import type { BadgeVariant } from "./types";

export function getBadgeColors(color: Color, variant: BadgeVariant) {
    const colorParts = colorStyleParts[color];
    switch (variant) {
        case "default":
        case "status":
            return `${colorParts.base}`;
        case "light":
            return `${colorParts.muted} text-white/60`;
        case "outline":
            return `border ${colorParts.border} ${colorParts.text}`;
        default:
            return "";
    }
}
