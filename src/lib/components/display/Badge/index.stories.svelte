<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Badge from "./index.svelte";
	import { baseArgTypes } from "$lib/styles/storybook";

	const argTypes = {
		...baseArgTypes,
        // Add your component's props here with appropriate controls and descriptions
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
    <!-- Add your component's default story here -->
</Story>