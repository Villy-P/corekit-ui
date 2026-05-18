<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Textarea from "./index.svelte";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Inputs/Textarea",
		component: Textarea,
		argTypes: {
			size: {
				control: "select",
				options: sizeStyles,
			},
			radius: {
				control: "select",
				options: sizeStyles,
			}
		},
	});
</script>

<Story name="Default" args={{ label: "Input Label", placeholder: "Enter text here..." }}></Story>
