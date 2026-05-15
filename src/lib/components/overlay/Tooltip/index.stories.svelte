<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Tooltip from "./index.svelte";
    import Button from "../../inputs/Button/index.svelte";
    import { Text } from "../../typography";

	const { Story } = defineMeta({
		title: "Components/Overlay/Tooltip",
		component: Tooltip
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md", text: "This is a tooltip", position: "top" }}>
    <Button>Hover me</Button>
</Story>

<Story name="Attached to Element" args={{ color: "primary", size: "md", text: "This is a tooltip", position: "top", attachedTo: document }}>
    <Text tag="h1">Tooltip attached to document</Text>
	<Text>This is a tooltip with the <Text tag="code">attachedTo</Text> prop.</Text>
</Story>
