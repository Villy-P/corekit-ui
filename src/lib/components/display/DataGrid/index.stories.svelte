<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import DataGrid from "./index.svelte";

	const { Story } = defineMeta({
		title: "Components/Display/DataGrid",
		component: DataGrid,
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