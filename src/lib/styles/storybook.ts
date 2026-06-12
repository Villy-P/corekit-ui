import type { ArgTypes } from "@storybook/svelte";

export const baseArgTypes: ArgTypes = {
    children: {
        control: false,
        description: "The content within the component.",
        table: {
            type: { summary: "Snippet" },
            category: "Base Attributes",
        },
    },
    class: {
        control: "text",
        description:
            "Additional CSS classes to apply to the component. These take precedence over default classes and can be used to customize the appearance.",
        table: {
            type: { summary: "string" },
            category: "Base Attributes",
        },
    },
    element: {
        control: false,
        description:
            "A bindable prop that can be used to access the component's root HTML element for direct manipulation or to apply inline styles.",
        table: { type: { summary: "HTMLElement" }, category: "Base Attributes" },
    },
    use: {
        control: false,
        description:
            "A list of `use` actions to apply to the component, allowing for dynamic theming and behavior enhancements.",
        table: {
            type: { summary: "[Action, any?][]" },
            category: "Base Attributes",
        },
    },
    style: {
        control: "text",
        description:
            "Custom CSS styles to apply to the component, allowing for quick visual adjustments without needing to define new classes.",
        table: { type: { summary: "string" }, category: "Base Attributes" },
    },
};
