import React from 'react';
import cn from '../utilities/classnames';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}

export class HeaderCell extends React.Component<TableCellProps> {
  public render() {
    const classes = this.props.className ? this.props.className : '';

    return (
      <th className={classes}>
        {this.props.children}
      </th>
    );
  }
}

export default HeaderCell;
