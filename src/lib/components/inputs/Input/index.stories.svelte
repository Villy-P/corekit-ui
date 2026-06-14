<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Input from "./index.svelte";
	import { sizeStyles } from "../../../styles/size";
	import { baseInputArgTypes } from "$lib/styles/storybook";

	const argTypes = {
		...baseInputArgTypes,
		placeholder: {
			control: "text",
			description: "A string that provides a hint to the user of what can be entered in the input.",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
		min: {
			control: "text",
			description: "The minimum value allowed for the input. This is only applicable for certain types of inputs like number or date.",
			table: {
				type: { summary: "string" },
				category: "Validation",
			},
		},
		max: {
			control: "text",
			description: "The maximum value allowed for the input. This is only applicable for certain types of inputs like number or date.",
			table: {
				type: { summary: "string" },
				category: "Validation",
			},
		},
		step: {
			control: "text",
			description: "The step value for the input. This is only applicable for certain types of inputs like number or date.",
			table: {
				type: { summary: "string" },
				category: "Validation",
			},
		},
		onfocus: {
			action: "onfocus",
			description: "An event handler function that is called when the input receives focus.",
			table: {
				type: { summary: "(e?: FocusEvent) => void" },
				category: "Events",
			},
		},
		onblur: {
			action: "onblur",
			description: "An event handler function that is called when the input loses focus.",
			table: {
				type: { summary: "(e?: FocusEvent) => void" },
				category: "Events",
			},
		},
		requirements: {
			control: "object",
			description: "An array of strings representing the requirements for the input. These are displayed below the input to inform the user of the expected format or constraints for the input value. For example, for a password input, the requirements might include things like 'Must be at least 8 characters', 'Must contain a number', etc. Use `valid` prop to see if the input value meets these requirements. Requirements can either be a regular expression or a function that takes the input value and returns a boolean indicating whether the requirement is met.",
			table: {
				type: { summary: "InputRequirements[]" },
				category: "Content",
			},
		},
		valid: {
			control: "boolean",
			description: "Whether the current input value meets the specified requirements. This can be used to provide visual feedback to the user about the validity of their input.",
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
		},
	} as const;

	const { Story } = defineMeta({
		title: "Components/Inputs/Input",
		component: Input,
		argTypes
	});
</script>

<Story name="Default" args={{ label: "Input Label", placeholder: "Enter text here..." }}></Story>
