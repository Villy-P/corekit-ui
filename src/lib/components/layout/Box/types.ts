import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface BoxProps extends BaseComponentProps {
    tag?: keyof HTMLElementTagNameMap;
    center?: boolean;
    fullscreen?: boolean;
};