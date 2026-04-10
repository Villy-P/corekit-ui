import type { BaseComponentProps } from "./BaseComponent.ts";

export interface NavbarProps extends BaseComponentProps {
    classTop?: string;
    threshold?: number;
};

export interface NavbarElementProps extends BaseComponentProps {
    classTop?: string;
    activeClass?: string;
    href?: string;
    threshold?: number;
}