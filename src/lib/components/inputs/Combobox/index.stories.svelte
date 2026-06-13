<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Combobox from "./index.svelte";
  import { baseInputArgTypes } from "../../../styles/storybook";

	const argTypes = {
		...baseInputArgTypes,
		options: {
			control: "object",
			description: "An array of strings representing the options available in the combobox.",
			table: {
				type: { summary: "string[]" },
				category: "Content",
			},
		},
		placeholder: {
			control: "text",
			description: "A string that provides a hint to the user of what can be entered in the combobox.",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
		onfocus: {
			action: "onfocus",
			description: "An event handler function that is called when the combobox receives focus.",
			table: {
				type: { summary: "(e?: FocusEvent) => void" },
				category: "Events",
			},
		},
		onblur: {
			action: "onblur",
			description: "An event handler function that is called when the combobox loses focus.",
			table: {
				type: { summary: "(e?: FocusEvent) => void" },
				category: "Events",
			},
		},
		onselectitem: {
			action: "onselectitem",
			description: "An event handler function that is called when an item is selected from the combobox.",
			table: {
				type: { summary: "(item: string) => void" },
				category: "Events",
			},
		},
		limit: {
			control: "number",
			description: "A number that limits the maximum number of options displayed in the dropdown.",
			table: {
				type: { summary: "number" },
				category: "Behavior",
			},
		},
	} as const;

	const { Story } = defineMeta({
		title: "Components/Inputs/Combobox",
		component: Combobox,
		argTypes
	});
</script>

<Story name="Default" args={{ label: "Combobox", placeholder: "Select an option...", options: [
    "USA",
    "Canada",
    "Mexico",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Australia",
    "Japan"
] }}></Story>
