import React from 'react';
import cn from '../../utilities/classnames';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}

export class HeaderCell extends React.Component<TableCellProps> {
  public render() {

    return (
      <th className={cn(this.props.className)}>
        {this.props.children}
      </th>
    );
  }
}

export default HeaderCell;
