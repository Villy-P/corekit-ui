import type { HTMLInputAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";
import type { ColorType } from "$lib/styles/color";

export interface CheckboxProps extends BaseProps, Omit<HTMLInputAttributes, keyof BaseProps | "color"> {
    color?: ColorType;
    indeterminate?: boolean;
    label?: string;
    labelClass?: string;
    divClass?: string;
    checked?: boolean;
    id?: string;
};