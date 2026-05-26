import type { Action } from "svelte/action";

export function multiAction(node: HTMLElement, actions: [Action, any?][]) {
    const instances = actions.map(([action, params]) => action(node, params));

    return {
        destroy() {
            instances.forEach(isnt => isnt?.destroy?.());
        }
    }
}