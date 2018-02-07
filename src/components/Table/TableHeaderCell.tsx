import React from 'react';
import cn from '../../utilities/classnames';

export interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
  sortKey?: string;
  // clickEvent must be a generic function.
  // tslint:disable-next-line: ban-types
  clickEvent?: Function;
}

export interface TableHeaderCellState {
  sorted: string | boolean;
}

export class HeaderCell extends React.Component<TableHeaderCellProps, TableHeaderCellState> {
  constructor(props: TableHeaderCellProps) {
    super(props);

    this.state = {
      sorted: false,
    };
  }

  public handleClick = () => {
    if (this.props.sortKey) {
      if (this.state.sorted === 'asc') {
        this.setState({ sorted: 'desc' });
        this.props.clickEvent(this.props.sortKey, true);
      } else {
        this.setState({ sorted: 'asc' });
        this.props.clickEvent(this.props.sortKey, false);
      }
    }
  }

  public render() {
    return (
      <th
        className={
          cn(this.props.className,
            { sort: !this.props.sortKey === undefined },
            { 'sort-asc': this.state.sorted === 'asc' },
            { 'sort-desc': this.state.sorted === 'desc'})
          }
        onClick={this.handleClick}
      >
        {this.props.children}
      </th>
    );
  }
}

export default HeaderCell;
