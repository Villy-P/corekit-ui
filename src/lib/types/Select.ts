import type { BaseComponentProps } from "./BaseComponent.ts";

export interface SelectProps extends BaseComponentProps {
    label?: string;
    divClass?: string;
    optionClass?: string;
    value?: any;
    options: { value: any; label: string }[];
    id?: `${string}-${string}-${string}-${string}-${string}`;
};  