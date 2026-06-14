import type { HTMLAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface FooterProps extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {}