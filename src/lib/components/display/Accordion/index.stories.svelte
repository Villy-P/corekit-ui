<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Button from "../../inputs/Button/index.svelte";
    import Text from "../../typography/Text/index.svelte";
    import AccordionItem from "./AccordionItem.svelte";
	import { colorStyles, colorStyleTypes } from "$lib/styles/color.js";
    import { sizeStyles } from "$lib/styles/size.js";

	const { Story } = defineMeta({
		title: "Components/Display/Accordion",
		component: AccordionItem,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{ title: "Accordion Item" }}>
    <Text tag="h2" class="text-2xl font-bold mb-4">Customizable Accordion</Text>
    <Text>This is a customizable accordion component. You can add any content here and style it as needed.</Text>
</Story>