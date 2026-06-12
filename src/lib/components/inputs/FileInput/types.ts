import type { Size } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface FileInputProps extends BaseComponentProps {
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