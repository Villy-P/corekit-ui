import type { BaseInputProps } from "$types/Input";

export interface SelectProps extends BaseInputProps {
    options: { value: any; label: string }[];
};