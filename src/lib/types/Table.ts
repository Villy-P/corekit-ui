import type { SizeStyle } from "$lib/styles/size.js";

export interface TableHeaders {
    key: string;
    label: string;
};

export interface TableProps {
    children?: any;
    class?: string;
    tableHeaders?: TableHeaders[];
    tableData?: any[];
    size?: SizeStyle;
    radius?: SizeStyle;
    [key: string]: any; 
};