import type { TooltipPosition } from "$lib/styles/posititon.js";
import type { BaseComponentProps } from "./BaseComponent.ts";

export interface TooltipComponent extends BaseComponentProps {
    text?: string;
    position?: TooltipPosition;
    delay?: number;
}