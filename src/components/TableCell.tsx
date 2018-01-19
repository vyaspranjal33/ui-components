import React from 'react';
import cn from '../utilities/classnames';

export interface TableCellProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class Cell extends React.Component<TableCellProps> {
  public static defaultProps: Partial<TableCellProps> = { bodyNode: document.body };

  public render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
};

Cell.defaultProps = {
  
};

export default Cell;