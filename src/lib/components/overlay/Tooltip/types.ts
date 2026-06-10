import type { TooltipPosition } from "$lib/styles/posititon.js";
import type { Snippet } from "svelte";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TooltipProps extends BaseComponentProps {
    text?: string;
    position?: TooltipPosition;
    delay?: number;
    interactive?: boolean;
    attatchedTo?: HTMLElement;
    content?: Snippet;
}