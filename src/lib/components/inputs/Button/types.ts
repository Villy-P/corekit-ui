import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";
import type { ColorType } from "../../../styles/color.js";
import type { Size } from "../../../styles/size.js";
import type { BaseProps } from "../../../types/BaseComponent";

export type ButtonVariant = "full" | "light" | "outline" | "ghost";

interface SharedButtonProps extends BaseProps {
    pill?: boolean;
    icon?: boolean;
    square?: boolean;
    color?: ColorType;
    variant?: ButtonVariant;
    disabled?: boolean;
    size?: Size;
    radius?: Size;
    loading?: boolean;
}

interface AsButton extends Omit<HTMLAttributes<HTMLButtonElement>, keyof BaseProps | "color"> {
    href?: never;
    external?: never;
}

interface AsAnchor extends Omit<HTMLAnchorAttributes, keyof BaseProps | "color"> {
    href: string;
    external?: boolean;
}

export type ButtonProps = SharedButtonProps & (AsButton | AsAnchor);