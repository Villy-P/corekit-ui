import type { ColorStyle } from "../../../styles/color.js";
import type { SizeStyle } from "../../../styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type ButtonColorStyleType = "full" | "light" | "outline" | "ghost";

export interface ButtonProps extends BaseComponentProps {
    pill?: boolean;
    icon?: boolean;
    square?: boolean;
    href?: string;
    color?: ColorStyle;
    variant?: ButtonColorStyleType;
    disabled?: boolean;
    external?: boolean;
    size?: SizeStyle;
    radius?: SizeStyle;
    loading?: boolean;
}