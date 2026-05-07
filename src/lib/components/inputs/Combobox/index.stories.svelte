<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Combobox from "./index.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Inputs/Combobox",
		component: Combobox,
		argTypes: {
			size: {
				control: "select",
				options: sizeStyles,
			},
			radius: {
				control: "select",
				options: sizeStyles,
			},
		},
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
