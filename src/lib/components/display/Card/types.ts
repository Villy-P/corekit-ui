import type { SizeStyle } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type CardVariant = "bordered" | "elevated";

/**
 * <Corekit UI> A Card component
 * 
 * @prop `href` Defines the website the card will link to
 * @prop `external` Opens the website in a new tab. Only works if `href` is defined.
 */
export interface CardProps extends BaseComponentProps {
    href?: string;
    external?: boolean;
    variant?: CardVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
}