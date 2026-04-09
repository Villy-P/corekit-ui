import type { PositionStyle } from "$lib/styles/posititon.js";
import type { CardProps } from "./Card.ts";

export interface ModalProps extends CardProps {
    open?: boolean;
    position?: PositionStyle;
}