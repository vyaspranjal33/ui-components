import React from 'react';
import cn from '../utilities/classnames';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export class TableBody extends React.Component<TableBodyProps> {
  public render() {

    return (
      <tbody className={cn(this.props.className)}>
        {this.props.children}
      </tbody>
    );
  }
}

export default TableBody;
