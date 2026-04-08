import type { ColorStyle, ColorStyleType } from "../styles/color.ts";
import type { SizeStyle } from "../styles/size.ts";

export interface ButtonProps {
    children?: any;
    class?: string;
    pill?: boolean;
    icon?: boolean;
    square?: boolean;
    href?: string;
    color?: ColorStyle;
    variant?: ColorStyleType;
    disabled?: boolean;
    external?: boolean;
    size?: SizeStyle;
    radius?: SizeStyle;
    [key: string]: any;
}