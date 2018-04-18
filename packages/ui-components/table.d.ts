/// <reference types="react" />
import React from 'react';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import HeaderCell from './TableHeaderCell';
import TableRow from './TableRow';
export { TableCell, TableRow, TableHeader, TableBody, HeaderCell };
export interface TableProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const Table: React.SFC<TableProps>;
export default Table;
