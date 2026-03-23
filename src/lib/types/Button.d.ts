import type { ColorStyle } from "$lib/styles/color.ts";

export interface ButtonProps {
    children?: any;
    class?: string;
    pill?: boolean;
    icon?: boolean;
    href?: string;
    color?: ColorStyle;
    size?: number | string;
    [key: string]: any;
}