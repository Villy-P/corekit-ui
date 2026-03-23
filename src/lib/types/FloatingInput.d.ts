export interface FloatingInputProps {
    children?: any;
    class?: string;
    labelClass?: string;
    divClass?: string;
    value?: string;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    validInputRegex?: RegExp;
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  