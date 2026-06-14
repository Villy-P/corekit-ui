import type { BaseProps } from "$lib/types/BaseComponent";
import type { HTMLAttributes } from "svelte/elements";

export interface BadgeProps extends BaseProps, Omit<HTMLAttributes<HTMLDivElement>, keyof BaseProps> {
    // Props go here
}