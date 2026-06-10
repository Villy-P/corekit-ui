<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Text from "../../typography/Text/index.svelte";
    import Accordion from "./index.ts";
	import AccordionItem from "./AccordionItem.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Accordion",
		component: Accordion,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{  }}>
    <Accordion.Item title="Accordion Item 1">
        <Text>This is the content of the first accordion item.</Text>
    </Accordion.Item>
    <Accordion.Item title="Accordion Item 2" static>
        <Text>This is the content of the second accordion item.</Text>
    </Accordion.Item>
    <Accordion.Item title="Accordion Item 3">
        <Text>This is the content of the third accordion item.</Text>
    </Accordion.Item>
</Story>