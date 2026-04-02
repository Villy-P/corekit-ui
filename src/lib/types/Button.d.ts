import type { ColorStyle } from "$lib/styles/color.ts";

export type ButtonType = "full" | "light" | "outline" | "ghost";

export interface ButtonProps {
    children?: any;
    class?: string;
    pill?: boolean;
    icon?: boolean;
    href?: string;
    color?: ColorStyle;
    type?: ButtonType;
    size?: number | string;
    [key: string]: any;
}