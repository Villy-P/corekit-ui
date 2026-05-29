<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Select from "./index.svelte";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Inputs/Select",
		component: Select,
		argTypes: {
			size: {
				control: "select",
				options: sizeStyles,
			},
			radius: {
				control: "select",
				options: sizeStyles,
			},
            type: {
                control: "select",
                options: ["text", "password", "email", "number", "search", "tel", "url"],
            },
		},
	});
</script>

<Story name="Default" args={{ label: "Input Label", placeholder: "Select an Item", options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
    { label: "Option 6", value: "option6" },
]}}></Story>
