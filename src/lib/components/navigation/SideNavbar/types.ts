import type { BaseComponentProps } from "../../../types/BaseComponent";
import type { Component } from "svelte";

export interface SideNavbarProps extends BaseComponentProps {
    items?: SideNavbarItem[];
    currentPath?: string;
    offset?: string;
};

export interface SideNavbarItem {
    href: string;
    label: string;
    icon: Component;
}
