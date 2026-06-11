<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Loader from "./index.svelte";

	const { Story } = defineMeta({
		title: "Components/Feedback/Loader",
		component: Loader,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{  }}></Story>