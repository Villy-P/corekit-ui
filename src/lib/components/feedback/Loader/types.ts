import type { Color } from "../../../styles/color";
import type { Size } from "../../../styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface LoaderProps extends BaseComponentProps {
    size?: Size;
    color?: Color;
}