<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import DataGrid from "./index.svelte";
  import { baseArgTypes } from "../../../styles/storybook";

    const argTypes = {
        ...baseArgTypes,
        tableHeaders: {
            control: "object",
            description: "An array of objects representing the headers of the data grid. Each object should have a 'key' and 'label' property.",
            table: {
                type: { summary: "DataGridHeaders[]" },
                category: "Content",
            },
        },
        tableData: {
            control: "object",
            description: "An array of objects representing the data to be displayed in the grid. Each object should have properties corresponding to the 'key' values defined in the tableHeaders.",
            table: {
                type: { summary: "any[]" },
                category: "Content",
            },
        },
    } as const;

	const { Story } = defineMeta({
		title: "Components/Display/DataGrid",
		component: DataGrid,
		argTypes,
		parameters: {
			controls: {
				include: Object.keys(argTypes),
			},
		},
	});
</script>

<Story name="Default" args={{ tableHeaders:[
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "email", label: "Email" },
], tableData: [
    { name: "John Doe", age: 30, email: "john.doe@example.com" },
    { name: "Jane Smith", age: 25, email: "jane.smith@example.com" }
] }}></Story>