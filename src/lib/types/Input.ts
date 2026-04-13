import type { Component } from "svelte";
import type { SizeStyle } from "../styles/size.ts";
import type { HTMLInputAttributes } from "svelte/elements";
import type { BaseComponentProps } from "./BaseComponent.ts";

export type InputVariant = "default" | "floating";

export interface InputRequirements {
    label: string;
    requirements: RegExp | ((value: any) => boolean);
};

export interface InputProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    icon?: Component;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    variant?: InputVariant;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    requirements?: InputRequirements[];
    valid?: boolean;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
};  

export interface FileInputProps extends BaseComponentProps {
    label?: string;
    labelClass?: string;
    divClass?: string;
    outerDivClass?: string;
    files?: FileList;
    required?: boolean;
    disabled?: boolean;
    // variant?: InputVariant;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
};  