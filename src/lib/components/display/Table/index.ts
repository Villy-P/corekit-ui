import TableComponent from './index.svelte';
import TableBody from './Body.svelte';
import TableCell from './Cell.svelte';
import TableHeadCell from './HeadCell.svelte';
import TableHeader from './Header.svelte';
import TableRow from './Row.svelte';

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