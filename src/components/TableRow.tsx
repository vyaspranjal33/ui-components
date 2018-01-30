import React from 'react';
import cn from '../utilities/classnames';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export class Row extends React.Component<TableRowProps> {
  public render() {
    const classes = this.props.className ? this.props.className : '';

    return (
      <tr className={classes}>
        {this.props.children}
      </tr>
    );
  }
}

export default Row;
