import type { ColorStyle, ButtonColorStyleType } from "$styles/color.js";
import type { SizeStyle } from "$styles/size.js";
import type { BaseComponentProps } from "$types/BaseComponent";

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