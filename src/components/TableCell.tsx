import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
}

export class HeaderCell extends React.Component<TableHeaderCellProps> {
  public render() {
    const classes = this.props.className ? this.props.className : '';

    return (
      <td className={classes}>
        {this.props.children}
      </td>
    );
  }
}

export default HeaderCell;
