import React from 'react';
import cn from '../../utilities/classnames';
import { Table, TableCell, TableRow, TableHeader, TableBody, HeaderCell } from './Table';

export interface SortableTableProps {
  children?: React.ReactNode;
  className?: string;
  rowData?: Array<object>;
  rowRenderer?: React.SFC<any>;
  headerData?: Array<HeaderData>;
  headerRenderer?: React.SFC<any>;
}

interface HeaderData {
  name: string,
  dataKey: string,
  sort?: Function,
}

export interface SortableTableState {
  data?: Array<object>
}

export default class SortableTable extends React.Component<SortableTableProps, SortableTableState> {
  constructor(props: SortableTableProps) {
    super(props);

    this.state = {
      data: []
    }

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.sortData = this.sortData.bind(this);
  }
  
  public componentDidMount() {
    this.sortData(this.props.headerData[0].dataKey, false);
  }

  private performSort(rowData: Array<object>, headerData: Array<HeaderData>, sortBy: string) {
    const sortIndex = headerData.findIndex(ele => ele.dataKey === sortBy);
    let data = [] as Array<object>;
    data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
    return data;
  }

  public handleHeaderClick(dataKey: string, descending: boolean) {
    console.log(dataKey);
    this.sortData(dataKey, descending);
  }

  public sortData(sortBy: string, descending: boolean) {
    const data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
    if (descending) {
      this.setState({data: data.reverse()});
    } else {
      this.setState({data: data});
    }
  }

  public render() {
    const HeaderRenderer = this.props.headerRenderer;
    const RowRenderer = this.props.rowRenderer;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.props.headerData.map(ele => <HeaderRenderer {...ele} clickEvent={this.handleHeaderClick} />)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data.map(ele => <RowRenderer {...ele} />)}
        </TableBody>
      </Table>
    );
  }
}
