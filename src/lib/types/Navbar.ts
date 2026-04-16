import type { Component, Snippet } from "svelte";
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

export interface SideNavbarProps extends BaseComponentProps {
    items?: SideNavbarItem[];
};

export type NavbarSeparatorVariant = "vertical" | "horizontal" | "dynamic";
export const NavbarSeparatorClasses: Record<NavbarSeparatorVariant, string> = {
    "vertical": "w-0.5 h-full py-3 bg-sub-background-hover bg-clip-content",
    "horizontal": "h-0.5 w-full px-3 my-1 bg-sub-background-hover bg-clip-content",
    "dynamic": "ml-auto"
};

export interface NavbarSeparatorProps extends BaseComponentProps {
    variant?: NavbarSeparatorVariant;
}

export interface SideNavbarItem {
    href: string;
    label: string;
    icon: Component;
}

export interface NavbarDropdownProps extends BaseComponentProps {
    label?: string;
    element?: Snippet;
    classTop?: string;
    wrapperClass?: string;
    activeClass?: string;
    threshold?: number;
}