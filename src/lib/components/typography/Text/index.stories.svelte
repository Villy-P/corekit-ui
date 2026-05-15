<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Text from "../../typography/Text/index.svelte";

	const { Story } = defineMeta({
		title: "Components/Typography/Text",
		component: Text,
		argTypes: {
			
        }
	});
</script>

<Story name="Default" args={{ tag: "p" }}>
    The quick brown fox jumps over the lazy dog.
</Story>