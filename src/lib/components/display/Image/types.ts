import type { HTMLImgAttributes } from "svelte/elements";
import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface ImageProps extends Omit<BaseComponentProps & HTMLImgAttributes, 'children'> {
    hideIfBroken?: boolean;
    fallbackSrc?: string;
}