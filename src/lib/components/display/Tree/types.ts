import type { BaseComponentProps } from "../../../types/BaseComponent";
import type { Snippet } from "svelte";

export interface TreeProps extends BaseComponentProps {
    children?: Snippet;
}

export interface TreeNodeProps extends BaseComponentProps {
    label: string;
    children?: Snippet;
    open?: boolean;
    disabled?: boolean;
    depth?: number;
}

export interface TreeContext {
    depth: number;
}