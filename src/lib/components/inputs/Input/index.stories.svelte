<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Input from "./index.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Input",
		component: Input,
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

<Story name="Default" args={{ label: "Input Label", placeholder: "Enter text here..." }}></Story>
