import React from 'react';
import cn from '../utilities/classnames';
import Row from './TableRow';
import Cell from './TableCell';
export { Cell, Row };


export interface TableProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
  classes?: string;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class Table extends React.Component<TableProps> {
  public static defaultProps: Partial<TableProps> = { bodyNode: document.body };

  public render() {
    return (
      <table className="table-wrap">
        {this.props.children}
      </table>
    );
  }
};

Table.defaultProps = {
  
};

export default Table;