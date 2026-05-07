import type { SizeStyle } from "$styles/size";
import type { Component } from "svelte";

export interface BaseComponentProps {
    children?: any;
    class?: string;
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
    id?: `${string}-${string}-${string}-${string}-${string}`;
}