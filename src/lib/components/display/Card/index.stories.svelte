<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Button from "../../inputs/Button/index.svelte";
    import Text from "../../typography/Text/index.svelte";
    import Card from "./index.svelte";
	import { sizeStyles } from "../../../styles/size";
	import { baseArgTypes } from "../../../styles/storybook";

	const argTypes = {
		...baseArgTypes,
		variant: {
			control: "select",
			options: ["bordered", "elevated", "ghost", "flat"],
			description: "The variant of the card which determines its style.",
			table: {
				type: { summary: "CardVariant" },
				category: "Appearance",
			},
		},
		size: {
			control: "select",
			options: sizeStyles,
			description: "The size of the card, which affects its padding and font size.",
			table: {
				type: { summary: "Size" },
				category: "Appearance",
			},
		},
		radius: {
			control: "select",
			options: sizeStyles,
			description: "The radius of the card's corners.",
			table: {
				type: { summary: "Size" },
				category: "Appearance",
			},
		},
		href: { 
			control: "text",
			description: "The URL to link to when the card is clicked. If provided, the card will be rendered as an anchor element.",
			table: {
				type: { summary: "string" },
				category: "Behavior",
			},
		},
		external: { 
			control: "boolean",
			description: "Whether the link should open in a new tab.",
			table: {
				type: { summary: "boolean" },
				category: "Behavior",
			},
			if: { arg: "href" }
		},
		footer: {
			control: false,
			description: "A Svelte snippet to render in the card's footer slot.",
			table: {
				type: { summary: "Snippet" },
				category: "Slots",
			},
		},
		header: {
			control: false,
			description: "A Svelte snippet to render in the card's header slot.",
			table: {
				type: { summary: "Snippet" },
				category: "Slots",
			},
		},
	} as const;

	const { Story } = defineMeta({
		title: "Components/Display/Card",
		component: Card,
		argTypes,

		parameters: {
			controls: {
				include: Object.keys(argTypes),
			},
			docs: {
				description: {
					component: "The Card component is a versatile container that can be used to display content in a structured and visually appealing way. It supports various styles and sizes, as well as header and footer slots for additional customization."
				}
			}
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
    <Text tag="h2" class="mb-2">Customizable Card</Text>
    <Text class="mb-4">This is a customizable card component. You can add any content here and style it as needed.</Text>
</Story>