import type { ColorStyle } from "$lib/styles/color.ts";

export type ButtonType = "full" | "light" | "outline" | "ghost";

export interface ButtonProps {
    children?: any;
    class?: string;
    pill?: boolean;
    icon?: boolean;
    href?: string;
    color?: ColorStyle;
    variant?: ButtonType;
    disabled?: boolean;
    external?: boolean;
    size?: SizeStyle;
    [key: string]: any;
}