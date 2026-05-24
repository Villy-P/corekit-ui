<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Button from "../../inputs/Button/index.svelte";
    import Text from "../../typography/Text/index.svelte";
    import Card from "./index.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Display/Card",
		component: Card,
		argTypes: {
			variant: {
				control: "select",
				options: ["bordered", "elevated", "ghost", "flat"],
			},
			size: {
				control: "select",
				options: sizeStyles,
			},
			radius: {
				control: "select",
				options: sizeStyles,
			},
			href: { control: "text" },
			external: { control: "boolean" },
		},
	});
</script>

{#snippet header()}
	<img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="Card">
{/snippet}

{#snippet footer()}
	<Button href="https://example.com" external class="ml-auto mr-4" color="sub">Learn More</Button>
	<Button href="https://example.com" external>Get Started</Button>
{/snippet}

<Story name="Default" args={{ variant: "bordered", size: "md", footer, header }}>
    <Text tag="h2" class="text-2xl font-bold mb-4">Customizable Card</Text>
    <Text class="mb-4">This is a customizable card component. You can add any content here and style it as needed.</Text>
</Story>