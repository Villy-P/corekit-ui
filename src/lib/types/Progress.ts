import type { ColorStyle } from "../styles/color.ts";
import type { SizeStyle } from "../styles/size.ts";

interface AnimateProps {
    from: number;
    to: number;
    duration: number;
    onend?: () => void;
}

export interface ProgressProps {
    children?: any;
    class?: string;
    divClass?: string;
    progress?: number;
    animate?: AnimateProps
    color?: ColorStyle;
    size?: SizeStyle;
    radius?: SizeStyle;
    [key: string]: any; 
};