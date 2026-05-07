import type { SizeStyle } from "$lib/styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TableHeaders {
    key: string;
    label: string;
};

export interface TableProps extends BaseComponentProps {
    tableHeaders?: TableHeaders[];
    tableData?: any[];
    size?: SizeStyle;
    radius?: SizeStyle;
};