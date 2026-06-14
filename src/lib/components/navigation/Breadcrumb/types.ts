import type { HTMLAttributes, HTMLLiAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface BreadcrumbProps extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {

}

export interface BreadcrumbItemProps extends BaseProps, Omit<HTMLLiAttributes, keyof BaseProps> {
    href?: string;
}