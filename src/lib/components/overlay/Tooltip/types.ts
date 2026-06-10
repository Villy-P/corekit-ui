import type { Snippet } from "svelte";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";
import type { TooltipPosition } from "../../../styles/posititon.ts";

export interface TooltipProps extends BaseComponentProps {
    text?: string;
    position?: TooltipPosition;
    delay?: number;
    interactive?: boolean;
    attatchedTo?: HTMLElement;
    content?: Snippet;
}