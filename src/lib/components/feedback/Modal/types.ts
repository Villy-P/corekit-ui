import type { PositionStyle } from "$lib/styles/posititon.js";
import type { CardProps } from "../../display/Card/types";

export interface ModalProps extends CardProps {
    open?: boolean;
    position?: PositionStyle;
}