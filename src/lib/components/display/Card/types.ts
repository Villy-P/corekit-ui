import type { SizeStyle } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type CardVariant = "bordered" | "elevated";

export interface CardProps extends BaseComponentProps {
    href?: string;
    external?: boolean;
    variant?: CardVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
}