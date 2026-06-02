<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Table from "./index.svelte";
  import TableHeader from "./TableHeader.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Table",
		component: Table,
	});
</script>

<Story name="Default">
    <TableHeader>
        
    </TableHeader>
</Story>