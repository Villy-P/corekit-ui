import type { Size } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export type ColorInputVariant = "full" | "compact" | "input";

export interface ColorInputProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    variant?: ColorInputVariant;
    size?: Size;
    radius?: Size;
    id?: string;
};  