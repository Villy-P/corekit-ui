<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Table from "./index.svelte";
  import TableHeader from "./TableHeader.svelte";
  import TableRow from "./TableRow.svelte";
  import TableHeadCell from "./TableHeadCell.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/Table",
		component: Table,
	});
</script>

<Story name="Default">
    <TableHeader>
        <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
        </TableRow>
    </TableHeader>
</Story>