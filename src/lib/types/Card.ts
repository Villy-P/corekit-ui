import type { HTMLAttributes } from "svelte/elements";
import type { SizeStyle } from "../styles/size.ts";
import type { BaseComponentProps } from "./BaseComponent.ts";

export type CardVariant = "bordered" | "elevated";

export const cardVariantStyles: Record<CardVariant, string> = {
    bordered: "border-[1px] border-sub-background-hover",
    elevated: "shadow-md",
};

export interface CardProps extends BaseComponentProps {
    href?: string;
    external?: boolean;
    variant?: CardVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
}