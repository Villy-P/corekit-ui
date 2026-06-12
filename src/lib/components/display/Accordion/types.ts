import type { HTMLAttributes } from "svelte/elements";
import type { BaseComponentProps, BaseProps } from "../../../types/BaseComponent";

export interface AccordionItemProps extends BaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps | "ontoggle"> {
    title: string;
    open?: boolean;
    disabled?: boolean;
    static?: boolean;
    ontoggle?: (open: boolean) => void;
}

export interface AccordionProps extends BaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps> {
    exclusive?: boolean;
}

export interface AccordionContext {
    exclusive: boolean;
    activeIds: Set<string>;
    setActive: (id: string) => void;
}