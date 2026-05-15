import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface CheckboxProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    checked?: boolean;
    id?: string;
};