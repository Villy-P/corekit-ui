import type { BaseComponentProps } from "./BaseComponent.ts";

export interface CheckboxProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    checked?: boolean;
    id?: string;
};