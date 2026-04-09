import type { Component } from "svelte";
import type { SizeStyle } from "../styles/size.ts";
import type { HTMLInputAttributes } from "svelte/elements";

export type InputVariant = "default" | "floating";

export interface InputProps extends Omit<HTMLInputAttributes, 'size'> {
    children?: any;
    class?: string;
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
    validInputRegex?: RegExp;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  