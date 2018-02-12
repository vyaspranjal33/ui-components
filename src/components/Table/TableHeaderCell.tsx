import React from 'react';
import cn from '../../utilities/classnames';

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
  sortKey?: string;
  // onClick must be a generic function.
  // tslint:disable-next-line: ban-types
  onClick?: Function;
}

export interface TableHeaderCellState {
  ascending?: boolean;
  sorted: boolean;
}

export class HeaderCell extends React.Component<TableHeaderCellProps, TableHeaderCellState> {
  constructor(props: TableHeaderCellProps) {
    super(props);

    this.state = {
      ascending: undefined,
      sorted: false,
    };
  }

  public handleClick = () => {
    if (this.props.sortKey) {
      if (this.state.ascending === false) {
        this.setState({ ascending: true, sorted: true });
        this.props.onClick(this.props.sortKey, false);
      } else {
        this.setState({ ascending: false, sorted: true });
        this.props.onClick(this.props.sortKey, true);
      }
    }
  }

  public render() {
    return (
      <th
        className={
          cn(this.props.className,
            { sort: !this.props.sortKey === undefined },
            { 'sort-asc': this.state.sorted && this.state.ascending === true },
            { 'sort-desc': this.state.sorted && this.state.ascending === false})
          }
        onClick={this.handleClick}
      >
        {this.props.children}
      </th>
    );
  }
}

export default HeaderCell;
