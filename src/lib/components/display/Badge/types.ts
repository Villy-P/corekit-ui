import type { Color, ColorType } from "$lib/styles/color";
import type { Size } from "$lib/styles/size";
import type { BaseProps } from "$lib/types/BaseComponent";
import type { HTMLAttributes } from "svelte/elements";

export type BadgeVariant = "default" | "outline" | "light" | "status";

export interface BadgeProps extends BaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps | "color"> {
    color?: ColorType;
    variant?: BadgeVariant;
    size?: Size;
    radius?: Size;
    pill?: boolean;
}