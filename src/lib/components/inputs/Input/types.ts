import type { BaseInputProps } from "$types/BaseComponent";

export interface InputRequirements {
    label: string;
    requirements: RegExp | ((value: any) => boolean);
};

export interface InputProps extends BaseInputProps {
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    requirements?: InputRequirements[];
    valid?: boolean;
};  
