export interface FloatingInputProps {
    children?: any;
    class?: string;
    labelClass?: string;
    divClass?: string;
    value?: string;
    onfocus?: () => void;
    onblur?: () => void;
    validInputRegex?: RegExp;
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  