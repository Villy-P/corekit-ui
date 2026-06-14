<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Badge from "./index.svelte";
	import { baseArgTypes } from "$lib/styles/storybook";
	import { sizeStyles } from "$lib/styles/size";

	const argTypes = {
		...baseArgTypes,
        color: {
			control: "object",
			description: "The color of the badge. Can be a string for solid colors or an object for gradients.",
			table: {
				type: { summary: "ColorType" },
				category: "Appearance",
			},
		},
		variant: {
			control: "select",
			options: ["default", "outline", "light", "status"],
			description: "The variant of the badge, which determines its style.",
			table: {
				type: { summary: "BadgeVariant" },
				category: "Appearance",
			},
		},
		size: {
			control: "select",
			options: sizeStyles,
			description: "The size of the badge.",
			table: {
				type: { summary: "Size" },
				category: "Appearance",
			},
		},
		radius: {
			control: "select",
			options: sizeStyles,
			description: "The border radius of the badge.",
			table: {
				type: { summary: "Radius" },
				category: "Appearance",
			},
		},
		pill: {
			control: "boolean",
			description: "Whether the badge should have a pill shape (fully rounded).",
			table: {
				type: { summary: "boolean" },
				category: "Appearance",
			},
		},
	} as const;

	const { Story } = defineMeta({
		title: "Components/Display/Badge",
		component: Badge,
		argTypes,

		parameters: {
            controls: {
                include: Object.keys(argTypes),
            },
			docs: {
				description: {
                    // Change this description to explain what the component is and how to use it
					component: ""
				}
			}
        },
	});
</script>

<Story name="Default">
    Badge
</Story>

<Story name="Gradient" args={{ color: { from: "cyan", to: "blue" } }}>
	Gradient Badge
</Story>
