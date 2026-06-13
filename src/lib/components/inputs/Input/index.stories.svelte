<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Input from "./index.svelte";
	import { sizeStyles } from "../../../styles/size";

	const { Story } = defineMeta({
		title: "Components/Inputs/Input",
		component: Input,
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
