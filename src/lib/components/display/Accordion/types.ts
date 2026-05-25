import type { BaseComponentProps } from "../../../types/BaseComponent";

export interface AccordionItemProps extends BaseComponentProps {
    title: string;
    open?: boolean;
    disabled?: boolean;
    ontoggle?: (open: boolean) => void;
}