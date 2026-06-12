import type { Color } from "../../../styles/color.ts";
import type { Size } from "../../../styles/size.ts";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

interface AnimateProps {
    from: number;
    to: number;
    duration: number;
    onend?: () => void;
}

export interface ProgressProps extends BaseComponentProps {
    divClass?: string;
    progress?: number;
    animate?: AnimateProps
    color?: Color;
    size?: Size;
    radius?: Size;
};