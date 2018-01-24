import React from 'react';
import cn from '../utilities/classnames';
import TableHeader from './TableHeader';
import HeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import Row from './TableRow';
import Cell from './TableCell';
export { Cell, Row, TableHeader, TableBody, HeaderCell };


export interface TableProps {
  children?: React.ReactNode;
  className?: string;
}

export class Table extends React.Component<TableProps> {
  public render() {
    const classes = this.props.className ? this.props.className + " table-wrap" : "table-wrap"

    return (
      <table className={classes}>
        {this.props.children}
      </table>
    );
  }
};

export default Table;


