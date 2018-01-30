import React from 'react';
import cn from '../utilities/classnames';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

export class Row extends React.Component<TableRowProps> {
  public render() {

    return (
      <tr className={cn(this.props.className)}>
        {this.props.children}
      </tr>
    );
  }
}

export default Row;
