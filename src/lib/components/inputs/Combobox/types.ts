import type { BaseInputProps } from "../../../types/BaseComponent";

export interface ComboboxProps extends BaseInputProps {
    options?: string[];
    placeholder?: string;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    limit?: number;
}