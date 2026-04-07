export type CardVariant = "bordered" | "elevated";

export const cardVariantStyles: Record<CardVariant, string> = {
    bordered: "border-[1px] border-sub-background-hover",
    elevated: "shadow-xl",
};

export interface CardProps {
    children?: any;
    class?: string;
    href?: string;
    external?: boolean;
    variant?: CardVariant;
    [key: string]: any;
}