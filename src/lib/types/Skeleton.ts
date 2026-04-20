import type { BaseComponentProps } from "./BaseComponent.ts";

export type SkeletonVariant = "default" | "text" | "image" | "video" | "card";

export interface SkeletonProps extends BaseComponentProps {
    variant?: SkeletonVariant;
    count?: number;
}