import type { Size } from "../../../styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface DataGridHeaders {
    key: string;
    label: string;
};

export interface DataGridProps extends BaseComponentProps {
    tableHeaders?: DataGridHeaders[];
    tableData?: any[];
    size?: Size;
    radius?: Size;
};