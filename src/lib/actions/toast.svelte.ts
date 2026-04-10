import { mount } from "svelte";
import Toaster from "../components/Toaster.svelte";
import type { ToastProps } from "../types/Toast.ts";

let count = 0;
let toasterMounted = false;

export const toastState = $state({
    items: [] as (ToastProps & { id: number })[]
});

export const toast = {
    add(props: ToastProps) {
        if (!toasterMounted && typeof document !== "undefined") {
            mount(Toaster, { target: document.body });
            toasterMounted = true;
        }

        const id = count++;
        toastState.items.push({ ...props, id });
        return id;
    },
    dismiss(id: number) {
        toastState.items = toastState.items.filter(t => t.id !== id);
    }
};