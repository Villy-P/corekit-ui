import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface AccordionItemProps extends BaseComponentProps {
    title: string;
    open?: boolean;
    disabled?: boolean;
    ontoggle?: (open: boolean) => void;
}

export interface AccordionProps extends BaseComponentProps {
    exclusive?: boolean;
}

export interface AccordionContext {
    exclusive: boolean;
    activeIds: Set<string>;
    setActive: (id: string) => void;
}