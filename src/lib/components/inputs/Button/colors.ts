import { colorStyleParts, type Color, type Gradient } from "../../../styles/color";
import type { ButtonVariant } from "./types";

export function getButtonColors(color: Color, variant: ButtonVariant) {
    const colorParts = colorStyleParts[color];
    switch (variant) {
        case "full":
            return `${colorParts.base} ${colorParts.hover}`;
        case "light":
            return `${colorParts.muted} ${colorParts.mutedHover} text-white/60`;
        case "outline":
            return `border ${colorParts.border} ${colorParts.borderHover} ${colorParts.text} ${colorParts.textHover} ${colorParts.subtleHover}`;
        case "ghost":
            return `${colorParts.baseHover}`;
        default:
            return "";
    }
}
