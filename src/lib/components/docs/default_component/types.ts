import type { BaseProps } from "$lib/types/BaseComponent";
import type { HTMLAttributes } from "svelte/elements";

export interface _Props extends BaseProps, Omit<HTMLAttributes<HTMLElement>, keyof BaseProps> {
    // Props go here
}