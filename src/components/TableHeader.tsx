import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export class TableHeader extends React.Component<TableHeaderProps> {
  public render() {
    const classes = this.props.className ? this.props.className : ""
    
    return (
      <thead className={classes}>
        {this.props.children}
      </thead>
    );
  }
};

export default TableHeader;