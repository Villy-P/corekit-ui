import type { HTMLInputAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface CheckboxProps extends BaseProps, Omit<HTMLInputAttributes, keyof BaseProps> {
    label?: string;
    labelClass?: string;
    divClass?: string;
    checked?: boolean;
    id?: string;
};