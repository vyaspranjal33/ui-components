import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class TableHeader extends React.Component<TableHeaderProps> {
  public render() {
    return (
      <thead>
        {this.props.children}
      </thead>
    );
  }
};

export default TableHeader;