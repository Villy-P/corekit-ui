import type { SizeStyle } from "../styles/size.ts";

export interface FloatingInputProps {
    children?: any;
    class?: string;
    label?: string;
    labelClass?: string;
    divClass?: string;
    value?: string;
    isTextArea?: boolean;
    required?: boolean;
    disabled?: boolean;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    validInputRegex?: RegExp;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  