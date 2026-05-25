<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Text from "../../typography/Text/index.svelte";
    import Tree from "./index.svelte";
	import TreeNode from "./TreeNode.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Tree",
		component: Tree,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{  }}>
    <TreeNode label="Node 1">
        <Text>This is the content of the first tree node.</Text>
        <TreeNode label="Child Node 1">
            <Text>This is the content of the first child node.</Text>
        </TreeNode>
    </TreeNode>
    <TreeNode label="Node 2">
        <Text>This is the content of the second tree node.</Text>
    </TreeNode>
    <TreeNode label="Node 3">
        <Text>This is the content of the third tree node.</Text>
    </TreeNode>
</Story>