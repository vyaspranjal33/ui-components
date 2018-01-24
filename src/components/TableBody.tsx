import React from 'react';
import cn from '../utilities/classnames';

export interface TableBodyProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class TableBody extends React.Component<TableBodyProps> {
  public render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
};

export default TableBody;