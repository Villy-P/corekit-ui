<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$components/inputs/Input/index.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Text from "$components/display/Text/index.svelte";
    import Button from "$lib/components/inputs/Button/index.svelte";
    import Select from "$components/inputs/Select/index.svelte";
    import Table from "$components/display/Table/index.svelte";

    import { colorStyleParts, type ColorStyle } from "$lib/styles/color.js";
    import type { SizeStyleTheme } from "$lib/styles/size.js";

    const sizeOptions = [
        { value: "xs", label: "Extra Small" },
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
        { value: "xl", label: "Extra Large" },
        { value: "2xl", label: "2X Large" },
        { value: "3xl", label: "3X Large" },
        { value: "4xl", label: "4X Large" },
        { value: "5xl", label: "5X Large" },
        { value: "6xl", label: "6X Large" },
        { value: "full", label: "Full" },
        { value: "none", label: "None" }
    ];

    let tableHeaders = [
        { key: "firstname", label: "First Name" },
        { key: "lastname", label: "Last Name" },
        { key: "email", label: "Email Address" },
        { key: "graduatingClass", label: "Graduating Class" }
    ];

    let tableData = [
        { firstname: "Alice", lastname: "Smith", email: "alice@example.com", graduatingClass: "2023" },
        { firstname: "Bob", lastname: "Johnson", email: "bob@example.com", graduatingClass: "2024" },
        { firstname: "Charlie", lastname: "Williams", email: "charlie@example.com", graduatingClass: "2025" },
        { firstname: "David", lastname: "Brown", email: "david@example.com", graduatingClass: "2023" },
        { firstname: "Eve", lastname: "Jones", email: "eve@example.com", graduatingClass: "2024" }
    ];
</script>

<div class="w-full h-screen flex pt-20 pl-12">
    <div class="w-3/4 flex-center px-10">
        <Table {tableHeaders} {tableData}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">

    </div>
</div>