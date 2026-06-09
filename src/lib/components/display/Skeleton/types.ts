import type { BaseComponentProps } from "../../../types/BaseComponent";

export type SkeletonVariant = "default" | "text" | "image" | "video" | "card";

export interface SkeletonProps extends BaseComponentProps {
    variant?: SkeletonVariant;
    count?: number;
}

export interface SkeletonGroupProps extends BaseComponentProps {
    variant?: SkeletonVariant;
    count?: number;
}