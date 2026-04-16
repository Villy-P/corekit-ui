import type { Component } from "svelte";
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

export interface SideNavbarItem {
    href: string;
    label: string;
    icon: Component;
}

export interface NavbarDropdownProps extends BaseComponentProps {
    label: string;
    element?: Component;
    classTop?: string;
    activeClass?: string;
    threshold?: number;
}