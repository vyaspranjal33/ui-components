import React from 'react';
import cn from '../utilities/classnames';

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
  sortKey?: string;
  // onClick must be a generic function.
  // tslint:disable-next-line: ban-types
  onClick?: Function;
  ascending?: boolean;
  sorted?: boolean;
}

export class HeaderCell extends React.Component<TableHeaderCellProps> {
  constructor(props: TableHeaderCellProps) {
    super(props);
  }

  public handleClick = () => {
    if (this.props.sortKey) {
      if (this.props.ascending === false) {
        this.props.onClick(this.props.sortKey, false);
      } else {
        this.props.onClick(this.props.sortKey, true);
      }
    }
  }

  public render() {
    return (
      <th
        className={
          cn(this.props.className,
            { sort: !(this.props.sortKey === undefined) },
            { 'sort-asc': this.props.sorted && this.props.ascending === true },
            { 'sort-desc': this.props.sorted && this.props.ascending === false})
          }
        onClick={this.handleClick}
      >
        {this.props.children}
      </th>
    );
  }
}

export default HeaderCell;
