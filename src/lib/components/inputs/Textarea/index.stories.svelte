<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Textarea from "./index.svelte";
    import { sizeStyles } from "$lib/styles/size.js";

	const argTypes = {
		placeholder: {
			control: "text",
			description: "A string that provides a hint to the user of what can be entered in the textarea.",
			table: {
				type: { summary: "string" },
				category: "Content",
			},
		},
	} as const;

	const { Story } = defineMeta({
		title: "Components/Inputs/Textarea",
		component: Textarea,
		argTypes,
		parameters: {
			controls: {
				include: Object.keys(argTypes),
			},
			docs: {
				description: {
					component: "A textarea component that allows users to input multiple lines of text.",
				},
			},
		},
	});
</script>

<Story name="Default" args={{ label: "Input Label", placeholder: "Enter text here..." }}></Story>
