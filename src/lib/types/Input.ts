import type { Component } from "svelte";
import type { SizeStyle } from "../styles/size.ts";
import type { HTMLInputAttributes } from "svelte/elements";
import type { BaseComponentProps } from "./BaseComponent.ts";

export type InputVariant = "default" | "floating";

export interface InputRequirements {
    label: string;
    requirements: RegExp | ((value: any) => boolean);
};

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
    id?: `${string}-${string}-${string}-${string}-${string}`;
}

export interface InputProps extends BaseInputProps {
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    requirements?: InputRequirements[];
    valid?: boolean;
};  

export interface SelectProps extends BaseInputProps {
    options: { value: any; label: string }[];
};  

export interface ComboboxProps extends BaseInputProps {
    options?: { value: any; label: string }[];
    placeholder?: string;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
}

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