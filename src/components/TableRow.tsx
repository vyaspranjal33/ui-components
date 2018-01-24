import React from 'react';
import cn from '../utilities/classnames';

export interface TableRowProps {
  bodyNode?: ElementWithClassList;
  children?: React.ReactNode;
}

interface ElementWithClassList extends Element {
  classList: DOMTokenList;
}

export class Row extends React.Component<TableRowProps> {
  public render() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
};

export default Row;