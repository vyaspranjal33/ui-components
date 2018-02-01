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

export class Table extends React.Component<TableProps> {
  public render() {

    return (
      <table className={cn('table-wrap', this.props.className)}>
        {this.props.children}
      </table>
    );
  }
}

export default Table;
