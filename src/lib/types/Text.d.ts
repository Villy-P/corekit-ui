type TextTagOptions = "p" | "div" | "span" | "label" | "strong" | "em" | "b" | "i" | "u" | "small" | "blockquote" | "pre" | "code" | "a" | "li" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextProps {
    children?: any;
    class?: string;
    tag?: TextTagOptions;
    shrink?: number;
    size?: SizeStyle;
    [key: string]: any; 
};  