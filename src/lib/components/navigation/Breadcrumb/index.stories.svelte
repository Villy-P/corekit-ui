<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Breadcrumb from "./index.ts";

	const { Story } = defineMeta({
		title: "Components/Navigation/Breadcrumb",
		component: Breadcrumb,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md" }}>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/library">Library</Breadcrumb.Item>
    <Breadcrumb.Item>Data</Breadcrumb.Item>
</Story>
