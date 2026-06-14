import type { Snippet } from "svelte";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent.ts";
import type { Color } from "../../../styles/color.ts";
import type { HTMLAttributes } from "svelte/elements";
import type { ButtonProps } from "$lib/components/inputs/index";

export interface NavbarProps extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {
    scrollThreshold?: number;
    variant?: "default" | "hero";
};

export type NavbarElementProps = ButtonProps & {
    activeClass?: string;
    active?: boolean;
}

export type NavbarSeparatorVariant = "vertical" | "horizontal" | "dynamic";
export const NavbarSeparatorClasses: Record<NavbarSeparatorVariant, string> = {
    "vertical": "w-0.5 h-full py-3 bg-sub-background-hover bg-clip-content",
    "horizontal": "h-0.5 w-full my-1 bg-sub-background-hover bg-clip-content",
    "dynamic": "ml-auto"
};

export interface NavbarSeparatorProps extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {
    variant?: NavbarSeparatorVariant;
}

export interface NavbarDropdownProps extends NavbarElementProps {
    label?: string;
    navelement?: Snippet;
    classTop?: string;
    wrapperClass?: string;
    activeClass?: string;
    threshold?: number;
    showArrow?: boolean;
}