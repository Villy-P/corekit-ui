import type { Size } from "../../../styles/size.ts";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TextProps extends BaseComponentProps {
    href?: string;
    external?: boolean;
    size?: Size;
};  