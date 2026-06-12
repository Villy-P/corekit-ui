import type { Snippet } from "svelte";
import type { Size } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type CardVariant = "bordered" | "elevated" | "ghost" | "flat";

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
    size?: Size;
    radius?: Size;
    footer?: Snippet;
    header?: Snippet;
}