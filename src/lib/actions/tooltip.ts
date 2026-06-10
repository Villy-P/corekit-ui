import { mount, unmount } from "svelte";
import TooltipComponent from "../components/overlay/Tooltip/index.svelte";
import type { TooltipProps } from "../components/overlay/Tooltip/types.ts";

type TooltipActionOptions = string | undefined | (Omit<TooltipProps, 'children' | 'attachedTo'> & {
    contentHtml?: string;
});

export function tooltip(node: HTMLElement, options?: TooltipActionOptions) {
    let tooltipInstance: any = null;
    let container: HTMLDivElement | null = null;

    function buildProps(opts: TooltipActionOptions) {
        if (!opts) return { attachedTo: node, text: "" };
        
        if (typeof opts === "string") 
            return { text: opts, attachedTo: node };

        const { contentHtml, content, ...rest } = opts;
        const finalizedProps: Record<string, any> = { ...rest, attachedTo: node };

        if (content)
            finalizedProps.content = content;

        else if (contentHtml) {
            finalizedProps.content = (anchor: Node) => {
                const el = document.createElement("div");
                el.innerHTML = contentHtml;
                
                const parent = anchor.parentNode;
                
                if (parent)
                    parent.insertBefore(el, anchor);

                return {
                    destroy: () => el.remove()
                };
            };
        }

        return finalizedProps;
    }

    function openTooltip() {
        if (tooltipInstance) return;

        container = document.createElement("div");
        document.body.appendChild(container);

        tooltipInstance = mount(TooltipComponent, {
            target: container,
            props: buildProps(options)
        });
    }

    function closeTooltip() {
        if (tooltipInstance) {
            unmount(tooltipInstance);
            tooltipInstance = null;
        }
        if (container) {
            container.remove();
            container = null;
        }
    }

    node.addEventListener("mouseenter", openTooltip);
    node.addEventListener("mouseleave", closeTooltip);

    return {
        update(newOptions: TooltipActionOptions) {
            options = newOptions;
            if (tooltipInstance)
                Object.assign(tooltipInstance, buildProps(newOptions));
        },
        destroy() {
            closeTooltip();
            node.removeEventListener("mouseenter", openTooltip);
            node.removeEventListener("mouseleave", closeTooltip);
        }
    };
}