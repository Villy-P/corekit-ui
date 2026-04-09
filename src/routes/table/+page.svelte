<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Text from "$lib/components/Text.svelte";
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";
    import Table from "$lib/components/Table.svelte";

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
        ["Alice", "Smith", "alice@example.com", "2023"],
        ["Bob", "Johnson", "bob@example.com", "2024"],
        ["Charlie", "Williams", "charlie@example.com", "2025"],
        ["David", "Brown", "david@example.com", "2023"],
        ["Eve", "Jones", "eve@example.com", "2024"]
    ];
</script>

<div class="w-full h-screen flex pt-20">
    <div class="w-3/4 flex-center">
        <Table {tableHeaders} {tableData}/>
    </div>

    <div class="w-1/4 p-4 flex flex-col gap-2">

    </div>
</div>