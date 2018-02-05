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
  }

  componentDidMount() {
    this.sortData(this.props.headerData[0].dataKey);
  }

  private performSort(rowData: Array<object>, headerData: Array<HeaderData>, sortBy: string) {
    const sortIndex = headerData.findIndex(function(el){return el.dataKey === sortBy});
    let data = [] as Array<object>;
    data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
    return data;
  }

  public sortData(sortBy: string) {
    this.setState({data: this.performSort(this.props.rowData, this.props.headerData, sortBy)});
  }

  public render() {
    const HeaderRenderer = this.props.headerRenderer;
    const RowRenderer = this.props.rowRenderer;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.props.headerData.map(ele => <HeaderRenderer {...ele} />)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data.map(ele => <RowRenderer {...ele} />)}
        </TableBody>
      </Table>
    );
  }
}
