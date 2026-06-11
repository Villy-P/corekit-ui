<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Text from "../../typography/Text/index.svelte";
    import Tree from "./index.ts";

	const { Story } = defineMeta({
		title: "Components/Display/Tree",
		component: Tree,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{  }}>
    <Tree.Node label="Node 1">
        <Text>This is the content of the first tree node.</Text>
        <Tree.Node label="Child Node 1">
            <Text>This is the content of the first child node.</Text>
        </Tree.Node>
    </Tree.Node>
    <Tree.Node label="Node 2">
        <Text>This is the content of the second tree node.</Text>
        <Tree.Node label="Child Node 2">
            <Text>This is the content of the second child node.</Text>
            <Tree.Node label="Grandchild Node 1">
                <Text>This is the content of the first grandchild node.</Text>
            </Tree.Node>
        </Tree.Node>
    </Tree.Node>
    <Tree.Node label="Node 3">
        <Text>This is the content of the third tree node.</Text>
    </Tree.Node>
</Story>