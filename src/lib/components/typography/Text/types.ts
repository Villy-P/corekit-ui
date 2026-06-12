import type { Size } from "../../../styles/size.ts";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

type TextTagOptions = "p" | "div" | "span" | "label" | "strong" | "em" | "b" | "i" | "u" | "small" | "blockquote" | "pre" | "code" | "a" | "ul" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps extends BaseComponentProps {
    tag?: TextTagOptions;
    size?: Size;
};  