<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import Breadcrumb from "./index.svelte";
    import BreadcrumbItem from "./BreadcrumbItem.svelte";

	const { Story } = defineMeta({
		title: "Components/Navigation/Breadcrumb",
		component: Breadcrumb,
		argTypes: {

		},
	});
</script>

<Story name="Default" args={{ color: "primary", size: "md" }}>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/library">Library</BreadcrumbItem>
    <BreadcrumbItem>Data</BreadcrumbItem>
</Story>
