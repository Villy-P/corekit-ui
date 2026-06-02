<script lang="ts">
    import { defaultTableClass, defaultTableHeaderClass, defaultTableCellClass, defaultTableBodyClass } from "../table";
    import type { DataGridProps } from "./types";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        element = $bindable(),
        tableHeaders = [],
        tableData = [],
        size = "md",
        radius = "md",
        ...restProps
    }: DataGridProps = $props();

    const combinedTableClass = $derived(twMerge(
        defaultTableClass,
        className
    ));

    const combinedTableHeaderClass = $derived(twMerge(defaultTableHeaderClass, defaultTableCellClass));
</script>

<div class="overflow-auto w-full" bind:this={element}>
    <table {...restProps} class={combinedTableClass}>
        <thead>
            <tr>
                {#each tableHeaders as header}
                    <th class={combinedTableHeaderClass}>{header.label}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each tableData as row}
                <tr class={defaultTableBodyClass}>
                    {#each tableHeaders as header}
                        <td class={defaultTableCellClass}>{row[header.key]}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>