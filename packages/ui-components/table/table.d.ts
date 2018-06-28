import React from 'react';
import TableBody from './table-body';
import TableCell from './table-cell';
import TableHeader from './table-header';
import HeaderCell from './table-header-cell';
import TableRow from './table-row';
export { TableCell, TableRow, TableHeader, TableBody, HeaderCell };
export interface TableProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const Table: React.SFC<TableProps>;
export default Table;
