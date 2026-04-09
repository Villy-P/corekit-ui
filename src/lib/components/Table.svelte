<script lang="ts">
    import type { TableProps } from "../types/Table.ts";
    import { twMerge } from "tailwind-merge";

    let { 
        children = undefined, 
        class: className = "",
        tableHeaders = [],
        tableData = [],
        size = "md",
        radius = "md",
        ...restProps
    }: TableProps = $props();

    const defaultTableClass = "w-full border-collapse text-main-text border border-form-border border-l-0";
    const defaultTableHeaderClass = "text-left border-b border-b-1 border-b-form-border bg-sub-background font-medium";
    const defaultTableCellClass = "p-2 text-sm border-l border-l-[1px] border-l-form-border";
    const defaultTableBodyClass = "even:bg-sub-background odd:bg-form-background";

    const combinedTableClass = $derived(twMerge(
        defaultTableClass,
        className
    ));

    const combinedTableHeaderClass = $derived(twMerge(defaultTableHeaderClass, defaultTableCellClass));
</script>

<div class="overflow-auto w-full">
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
                    {#each row as cell}
                        <td class={defaultTableCellClass}>{cell}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>