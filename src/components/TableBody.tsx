import React from 'react';
import cn from '../utilities/classnames';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export class TableBody extends React.Component<TableBodyProps> {
  public render() {
    const classes = this.props.className ? this.props.className : ""

    return (
      <tbody className={classes}>
        {this.props.children}
      </tbody>
    );
  }
};

export default TableBody;