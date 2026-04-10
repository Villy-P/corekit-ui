import type { ColorStyle } from "../styles/color.ts";
import type { SizeStyle } from "../styles/size.ts";
import type { BaseComponentProps } from "./BaseComponent.ts";

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
    color?: ColorStyle;
    size?: SizeStyle;
    radius?: SizeStyle;
};