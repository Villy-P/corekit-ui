export interface FloatingSelectProps {
    children?: any;
    class?: string;
    label?: string;
    divClass?: string;
    optionClass?: string;
    value?: any;
    options: { value: any; label: string }[];
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  