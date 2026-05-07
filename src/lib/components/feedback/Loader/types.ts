import type { ColorStyle } from "$styles/color";
import type { SizeStyle } from "$styles/size";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface LoaderProps extends BaseComponentProps {
    size?: SizeStyle;
    color?: ColorStyle;
}