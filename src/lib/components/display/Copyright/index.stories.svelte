<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Copyright from "./index.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Copyright",
		component: Copyright,
	});
</script>

<Story name="Default" args={{ holder: "Example Inc." }}></Story>