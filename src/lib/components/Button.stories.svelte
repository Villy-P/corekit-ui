<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Button from "./Button.svelte";
	import { colorStyles } from "$lib/styles/color.js";

	const { Story } = defineMeta({
		title: "Components/Button",
		component: Button,
		argTypes: {
			color: {
				control: "select",
				options: colorStyles,
			},
			variant: {
				control: "select",
				options: ["full", "outline", "ghost"],
			},
			size: {
				control: "select",
				options: ["sm", "md", "lg"],
			},
			radius: {
				control: "select",
				options: ["sm", "md", "lg", "full"],
			},
			disabled: { control: "boolean" },
			loading: { control: "boolean" },
			pill: { control: "boolean" },
			icon: { control: "boolean" },
			square: { control: "boolean" },
			href: { control: "text" },
			external: { control: "boolean" },
		},
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md" }}>Click me</Story>

<Story name="Disabled" args={{ color: "primary", disabled: true }}>
	Disabled
</Story>

<Story name="Loading" args={{ color: "primary", loading: true }}>Loading</Story>

<Story name="Pill" args={{ color: "primary", pill: true }}>Pill Button</Story>

<Story
  name="As Link"
  args={{ color: "primary", href: "https://example.com", external: true }}
>
	Go somewhere
</Story>
