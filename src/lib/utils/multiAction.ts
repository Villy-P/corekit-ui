import type { Action } from "svelte/action";

export function multiAction(node: HTMLElement, initialActions: [Action, any?][]) {
    let instances: any[] = [];

    function mountActions(actionsList: [Action, any?][]) {
        if (!actionsList || actionsList.length === 0) return [];
        return actionsList.map(([action, params]) => action(node, params));
    }

    function destroyInstances() {
        instances.forEach(inst => inst?.destroy?.());
        instances = [];
    }

    instances = mountActions(initialActions);

    return {
        update(newActions: [Action, any?][]) {
            destroyInstances();
            instances = mountActions(newActions);
        },

        destroy() {
            destroyInstances();
        }
    };
}