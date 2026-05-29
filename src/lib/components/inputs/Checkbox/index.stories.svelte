<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Checkbox from "./index.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Inputs/Checkbox",
		component: Checkbox,
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

<Story name="Default" args={{ label: "Input Label" }}></Story>
