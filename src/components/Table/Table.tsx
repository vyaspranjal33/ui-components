import React from 'react';
import cn from '../../utilities/classnames';
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
