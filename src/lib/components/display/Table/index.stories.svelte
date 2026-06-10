<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Table from "./index.ts";
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
    <Table.Header>
        <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
        {#each userData as user}
            <Table.Row>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.age}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                    <Tooltip text="Edit User">
                        <Button size="sm">Edit</Button>
                    </Tooltip>
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Story>