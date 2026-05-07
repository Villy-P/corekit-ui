import type { Component } from "svelte";
import type { SizeStyle } from "../styles/size.ts";
import type { HTMLInputAttributes } from "svelte/elements";
import type { BaseComponentProps } from "./BaseComponent.ts";

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
    id?: `${string}-${string}-${string}-${string}-${string}`;
}

