import React from 'react';
import cn from '../../utilities/classnames';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}

export class TableCell extends React.Component<TableCellProps> {
  public render() {

    return (
      <td className={cn(this.props.className)}>
        {this.props.children}
      </td>
    );
  }
}

export default TableCell;
