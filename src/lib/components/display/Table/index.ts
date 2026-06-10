import TableComponent from './index.svelte';
import TableBody from './TableBody.svelte';
import TableCell from './TableCell.svelte';
import TableHeadCell from './TableHeadCell.svelte';
import TableHeader from './TableHeader.svelte';
import TableRow from './TableRow.svelte';

const Table = TableComponent as typeof TableComponent & {
    Body: typeof TableBody;
    Cell: typeof TableCell;
    HeadCell: typeof TableHeadCell;
    Header: typeof TableHeader;
    Row: typeof TableRow;
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.HeadCell = TableHeadCell;
Table.Header = TableHeader;
Table.Row = TableRow;

export default Table;