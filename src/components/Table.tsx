import React from 'react';
import cn from '../utilities/classnames';
import TableHeader from './TableHeader';
import HeaderCell from './TableHeaderCell';
import TableBody from './TableBody';
import Row from './TableRow';
import Cell from './TableCell';
export { Cell, Row, TableHeader, TableBody, HeaderCell };


export interface TableProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
  classes?: string;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class Table extends React.Component<TableProps> {
  public render() {
    return (
      <table className="table-wrap">
        {this.props.children}
      </table>
    );
  }
};

export default Table;