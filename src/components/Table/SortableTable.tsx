import React from 'react';
import cn from '../../utilities/classnames';
import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from './Table';

export interface SortableTableProps {
  children?: React.ReactNode;
  className?: string;
  rowData?: object[];
  rowRenderer?: React.SFC<any>;
  headerData?: HeaderData[];
  headerRenderer?: React.SFC<any>;
}

interface HeaderData {
  name: string;
  dataKey: string;
  sort?: (rowData: object[], dataKey: string) => object[];
}

export interface SortableTableState {
  data?: object[];
}

export class SortableTable extends React.Component<SortableTableProps, SortableTableState> {
  constructor(props: SortableTableProps) {
    super(props);

    this.state = {
      data: [],
    };

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.sortData = this.sortData.bind(this);
  }

  public componentDidMount() {
    this.sortData(this.props.headerData[0].dataKey, false);
  }

  public handleHeaderClick(dataKey: string, descending: boolean) {
    this.sortData(dataKey, descending);
  }

  public sortData(sortBy: string, descending: boolean) {
    const data = this.performSort(this.props.rowData, this.props.headerData, sortBy);
    if (descending) {
      this.setState({data: data.reverse()});
    } else {
      this.setState({data});
    }
  }

  public render() {
    const HeaderRenderer = this.props.headerRenderer;
    const RowRenderer = this.props.rowRenderer;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.props.headerData.map((ele) =>
              <HeaderRenderer
                {...ele}
                key={ele.dataKey}
                onClick={this.handleHeaderClick}
              />,
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data.map((ele) => <RowRenderer {...ele} key={this.state.data.indexOf(ele)} />)}
        </TableBody>
      </Table>
    );
  }

  private performSort(rowData: object[], headerData: HeaderData[], sortBy: string) {
    const sortIndex = headerData.findIndex((ele) => ele.dataKey === sortBy);
    let data = [] as object[];
    data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
    return data;
  }
}

export default SortableTable;
