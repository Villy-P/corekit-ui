import type { PositionStyle } from "$lib/styles/posititon.js";
import type { SizeStyle } from "$lib/styles/size.js";
import type { BaseComponentProps } from "./BaseComponent.ts";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps extends BaseComponentProps {
    message: string;
    duration?: number;
    position?: PositionStyle;
    type?: ToastType;
    size?: SizeStyle;
    radius?: SizeStyle;
    onclose?: () => void;
}