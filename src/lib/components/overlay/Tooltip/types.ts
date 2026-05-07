import type { TooltipPosition } from "$lib/styles/posititon.js";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TooltipProps extends BaseComponentProps {
    text?: string;
    position?: TooltipPosition;
    delay?: number;
}