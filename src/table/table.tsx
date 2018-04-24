import React from 'react';
import cn from '../utilities/classnames';
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

export const Table: React.SFC<TableProps> = ({
  children,
  className,
}) => {
  return (
    <table className={cn('table-wrap', className)}>
      {children}
    </table>
  );
};

export default Table;
