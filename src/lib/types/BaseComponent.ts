import type { Action } from "svelte/action";
import type { SizeStyle } from "../styles/size";
import type { Component } from "svelte";

export interface BaseComponentProps {
    children?: any;
    class?: string;
    element?: HTMLElement;
    use?: [Action, any?][];
    [key: string]: any;
};

export type InputVariant = "default" | "floating";

export interface BaseInputProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    variant?: InputVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
    icon?: Component;
    wrapper?: HTMLElement;
    id?: string;
}