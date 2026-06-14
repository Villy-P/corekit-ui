import type { HTMLInputAttributes } from "svelte/elements";
import type { Size } from "../../../styles/size";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface FileInputProps extends BaseProps, Omit<HTMLInputAttributes, keyof BaseProps | "size"> {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    files?: FileList;
    required?: boolean;
    disabled?: boolean;
    // variant?: InputVariant;
    size?: Size;
    radius?: Size;
    id?: string;
};  