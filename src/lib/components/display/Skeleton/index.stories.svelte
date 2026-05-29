<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Skeleton from "./index.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Skeleton",
		component: Skeleton,
	});
</script>

<Story name="Default"></Story>