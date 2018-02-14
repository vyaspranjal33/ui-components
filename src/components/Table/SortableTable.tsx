import React from 'react';
import cn from '../../utilities/classnames';
import { HeaderCell, Table, TableBody, TableCell, TableHeader, TableRow } from './Table';

// Trust me, it's more readable this way.
// tslint:disable: max-line-length
// tslint:disable: only-arrow-functions
// tslint:disable: ban-types

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
  sortBy?: string;
  ascending?: boolean;
}

export class SortableTable extends React.Component<SortableTableProps, SortableTableState> {
  constructor(props: SortableTableProps) {
    super(props);

    this.state = {
      ascending: undefined,
      data: [],
      sortBy: undefined,
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
      this.setState({data: data.reverse(), ascending: false, sortBy});
    } else {
      this.setState({data, ascending: true, sortBy});
    }
  }

  public render() {
    const ascendingState = this.state.ascending;
    const sortByKey = this.state.sortBy;

    const defaultHeaderRenderer = ({name, dataKey, onClick, sort, ascending, sortBy}: {name: any, dataKey: string, onClick: (dataKey: string, descending: boolean) => void, sort?: Function, ascending?: boolean, sortBy: string}) => (
      <HeaderCell sortKey={dataKey} onClick={onClick} ascending={ascendingState} sorted={dataKey === sortByKey}>
        {name}
      </HeaderCell>
    );

    const defaultRowRenderer = ({columns}: {columns: object}) => (
      <TableRow>
        {
          this.props.headerData.map((header: HeaderData) =>
            <TableCell key={'header-' + header.dataKey}>{columns[header.dataKey]}</TableCell>,
          )
        }
      </TableRow>

    );

    const HeaderRenderer = this.props.headerRenderer || defaultHeaderRenderer;
    const RowRenderer = this.props.rowRenderer || defaultRowRenderer;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            {this.props.headerData.map((ele, index) =>
              <HeaderRenderer
                {...ele}
                onClick={this.handleHeaderClick}
                sortBy={sortByKey}
                ascending={ascendingState}
                key={'header-' + ele.dataKey}
              />,
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.data.map((ele: object, index) => <RowRenderer key={'row-' + index} columns={ele}/>)}
        </TableBody>
      </Table>
    );
  }

  private performSort(rowData: object[], headerData: HeaderData[], sortBy: string) {
    const sortIndex = headerData.findIndex((ele) => ele.dataKey === sortBy);
    let data = [] as object[];
    if (typeof headerData[sortIndex].sort === 'function') {
      data = headerData[sortIndex].sort(rowData, headerData[sortIndex].dataKey);
    } else {
      data = this.defaultSort(rowData, headerData[sortIndex].dataKey);
    }
    return data;
  }

  private defaultSort = function(array: any[], dataKey: string) {
    return array.sort(function(a, b) {
      const x = a[dataKey]; const y = b[dataKey];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  };
}

export default SortableTable;
