import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
}

export class HeaderCell extends React.Component<TableHeaderCellProps> {
  public render() {

    return (
      <td className={cn(this.props.className)}>
        {this.props.children}
      </td>
    );
  }
}

export default HeaderCell;
