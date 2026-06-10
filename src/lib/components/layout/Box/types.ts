import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface BoxProps extends BaseComponentProps {
    tag?: string;
    center?: boolean;
    fullscreen?: boolean;
};