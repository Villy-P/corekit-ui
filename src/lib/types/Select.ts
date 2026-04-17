import type { SizeStyle } from "$lib/styles/size.js";
import type { BaseComponentProps } from "./BaseComponent.ts";
import type { InputVariant } from "./Input.ts";

export interface SelectProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    options: { value: any; label: string }[];
    value?: any;
    required?: boolean;
    disabled?: boolean;
    variant?: InputVariant;
    valid?: boolean;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
};  