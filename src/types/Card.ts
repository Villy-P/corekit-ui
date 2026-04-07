import type { SizeStyle } from "../styles/size.ts";

export type CardVariant = "bordered" | "elevated";

export const cardVariantStyles: Record<CardVariant, string> = {
    bordered: "border-[1px] border-sub-background-hover",
    elevated: "shadow-md",
};

export interface CardProps {
    children?: any;
    class?: string;
    href?: string;
    external?: boolean;
    variant?: CardVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
    [key: string]: any;
}