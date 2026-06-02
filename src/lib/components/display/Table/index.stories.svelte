<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Table from "./index.svelte";
    import TableHeader from "./TableHeader.svelte";
    import TableRow from "./TableRow.svelte";
    import TableHeadCell from "./TableHeadCell.svelte";
    import { TableBody } from "..";
    import TableCell from "./TableCell.svelte";
  import { Button } from "../../inputs";
  import { Tooltip } from "../../overlay";

	const { Story } = defineMeta({
		title: "Components/Display/Table",
		component: Table,
	});

    const userData = [
        { name: "John Doe", age: 30, email: "johndoe@email.com" },
        { name: "Jane Smith", age: 25, email: "janesmith@email.com" }
    ];
</script>

<Story name="Default">
    <TableHeader>
        <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Age</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell></TableHeadCell>
        </TableRow>
    </TableHeader>

    <TableBody>
        {#each userData as user}
            <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                    <Tooltip text="Edit User">
                        <Button size="sm">Edit</Button>
                    </Tooltip>
                </TableCell>
            </TableRow>
        {/each}
    </TableBody>
</Story>