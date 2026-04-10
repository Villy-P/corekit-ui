import type { HTMLButtonAttributes } from "svelte/elements";
import type { ColorStyle, ColorStyleType } from "../styles/color.ts";
import type { SizeStyle } from "../styles/size.ts";
import type { BaseComponentProps } from "./BaseComponent.ts";

export interface ButtonProps extends BaseComponentProps {
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
}