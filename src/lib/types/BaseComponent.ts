import type { Action } from "svelte/action";
import type { Size } from "../styles/size";
import type { Component } from "svelte";

// Start moving components over to BaseProps and deprecating BaseComponentProps in order to add stricter typing.
export interface BaseProps {
    /** * Swaps the button text structure for a spinning loading wheel asset.
     * @default false
     */
    children?: any;
    class?: string;
    element?: HTMLElement;
    use?: [Action, any?][];
    style?: string;
};

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
    size?: Size;
    radius?: Size;
    icon?: Component;
    wrapper?: HTMLElement;
    id?: string;
}