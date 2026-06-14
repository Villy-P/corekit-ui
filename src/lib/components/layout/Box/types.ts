import type { HTMLAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface BoxProps extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {
    tag?: keyof HTMLElementTagNameMap;
    center?: boolean;
    fullscreen?: boolean;
};