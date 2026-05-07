import type { BaseComponentProps } from "$types/BaseComponent";

export interface BreadcrumbProps extends BaseComponentProps {

}

export interface BreadcrumbItemProps extends BaseComponentProps {
    href?: string;
}