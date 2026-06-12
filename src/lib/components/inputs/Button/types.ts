import type { Color, ColorType } from "../../../styles/color.js";
import type { Size } from "../../../styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type ButtonVariant = "full" | "light" | "outline" | "ghost";

export interface ButtonProps extends BaseComponentProps {
    pill?: boolean;
    icon?: boolean;
    square?: boolean;
    href?: string;
    color?: ColorType;
    variant?: ButtonVariant;
    disabled?: boolean;
    external?: boolean;
    size?: Size;
    radius?: Size;
    loading?: boolean;
}