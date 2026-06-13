<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import ColorInput from "./index.svelte";
	import { sizeStyles } from "../../../styles/size";
	import { baseArgTypes } from "../../../styles/storybook";

	const argTypes = {
		...baseArgTypes,
		label: {
			control: "text",
			description: "The label to display above the color input.",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
		labelClass: {
			control: "text",
			description: "Additional CSS classes to apply to the label element.",
			table: {
				type: { summary: "string" },
				category: "Appearance",
			},
		},
		divClass: {
			control: "text",
			description: "Additional CSS classes to apply to the wrapper div element.",
			table: {
				type: { summary: "string" },
				category: "Appearance",
			},
		},
		outerDivClass: {
			control: "text",
			description: "Additional CSS classes to apply to the outer wrapper div element.",
			table: {
				type: { summary: "string" },
				category: "Appearance",
			},
		},
		value: {
			control: "color",
			description: "The current color value of the input. This can be binded to.",
			table: {
				type: { summary: "string" },
				category: "State",
			},
		},
		required: {
			control: "boolean",
			description: "Whether the input is required or not.",
			table: {
				type: { summary: "boolean" },
				category: "Validation",
			},
		},
		disabled: {
			control: "boolean",
			description: "Whether the input is disabled or not.",
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
		},
		variant: {
			control: "select",
			options: ["full", "compact", "input"],
			description: "The variant of the color input to display.",
			table: {
				type: { summary: '"full" | "compact" | "input"' },
				category: "Appearance",
			},
		},
		size: {
			control: "select",
			options: sizeStyles,
			description: "The size of the color input.",
			table: {
				type: { summary: "Size" },
				category: "Appearance",
			},
		},
		radius: {
			control: "select",
			options: sizeStyles,
			description: "The border radius of the color input.",
			table: {
				type: { summary: "Size" },
				category: "Appearance",
			},
		},
		id: {
			control: "text",
			description: "The id of the input element. This is used to associate the label with the input for accessibility. This is automatically set to a unique value if not provided.",
			table: {
				type: { summary: "string" },
				category: "Accessibility",
			},
		}
	} as const;

	const { Story } = defineMeta({
		title: "Components/Inputs/ColorInput",
		component: ColorInput,
		argTypes
	});
</script>

<Story name="Default" args={{ label: "Input Label" }}></Story>
