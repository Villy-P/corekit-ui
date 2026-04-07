import type { Component } from "svelte";
import type { SizeStyle } from "../styles/size.ts";

export type InputVariant = "default" | "floating";

export interface FloatingInputProps {
    children?: any;
    class?: string;
    label?: string;
    labelClass?: string;
    divClass?: string;
    icon?: Component;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    variant?: InputVariant;
    placeholder?: string;
    onfocus?: (e?: FocusEvent) => void;
    onblur?: (e?: FocusEvent) => void;
    validInputRegex?: RegExp;
    size?: SizeStyle;
    radius?: SizeStyle;
    id?: `${string}-${string}-${string}-${string}-${string}`;
    [key: string]: any; 
};  