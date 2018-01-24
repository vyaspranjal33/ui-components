import React from 'react';
import cn from '../utilities/classnames';

export interface TableCellProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class HeaderCell extends React.Component<TableCellProps> {
  public render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
};

export default HeaderCell;