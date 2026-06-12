import type { Size } from "../../../styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TableProps extends BaseComponentProps {
    size?: Size;
    radius?: Size;
};

export interface TableHeaderProps extends BaseComponentProps {}
export interface TableHeadCellProps extends BaseComponentProps {}
export interface TableCellProps extends BaseComponentProps {}
export interface TableBodyProps extends BaseComponentProps {}
export interface TableRowProps extends BaseComponentProps {}