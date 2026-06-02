import type { SizeStyle } from "../../../styles/size.js";
import type { BaseComponentProps } from "../../../types/BaseComponent.ts";

export interface TableProps extends BaseComponentProps {
    size?: SizeStyle;
    radius?: SizeStyle;
};

export interface TableHeaderProps extends BaseComponentProps {}