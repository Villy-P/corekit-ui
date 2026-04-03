import type { ColorStyle, ColorStyleType } from "$lib/styles/color.ts";
import type { SizeStyle } from "$lib/styles/size.ts";

export interface ButtonProps {
    children?: any;
    class?: string;
    pill?: boolean;
    icon?: boolean;
    href?: string;
    color?: ColorStyle;
    variant?: ColorStyleType;
    disabled?: boolean;
    external?: boolean;
    size?: SizeStyle;
    rounded?: SizeStyle;
    [key: string]: any;
}