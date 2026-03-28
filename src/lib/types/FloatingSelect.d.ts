export interface FloatingSelectProps {
    children?: any;
    class?: string;
    divClass?: string;
    optionClass?: string;
    value?: string;
    options: { value: string; label: string }[];
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  