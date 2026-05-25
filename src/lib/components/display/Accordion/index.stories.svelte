<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Text from "../../typography/Text/index.svelte";
    import Accordion from "./index.svelte";
	import AccordionItem from "./AccordionItem.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Accordion",
		component: Accordion,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{  }}>
    <AccordionItem title="Accordion Item 1">
        <Text>This is the content of the first accordion item.</Text>
    </AccordionItem>
    <AccordionItem title="Accordion Item 2" static>
        <Text>This is the content of the second accordion item.</Text>
    </AccordionItem>
    <AccordionItem title="Accordion Item 3">
        <Text>This is the content of the third accordion item.</Text>
    </AccordionItem>
</Story>