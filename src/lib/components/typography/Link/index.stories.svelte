<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Link from "./index.svelte";

	const { Story } = defineMeta({
		title: "Components/Typography/Link",
		component: Link,
		argTypes: {
			
        }
	});
</script>

<Story name="Default" args={{ href: "https://example.com" }}>
    The quick brown fox jumps over the lazy dog.
</Story>